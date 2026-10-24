// Breakouts demo page: live measurements and the page's few controls. Everything reads without it.

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

/** Writes each band's live width into its label. */
function measureBands() {
    const bands = document.querySelectorAll('.band')
    const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
            const size = entry.target.querySelector('[data-measure]')
            size.textContent = `${Math.round(entry.borderBoxSize[0].inlineSize)} px`
        }
    })
    bands.forEach((band) => observer.observe(band))
}

/** Copies the text of the element a [data-copy] button points to. */
function copyButtons() {
    for (const button of document.querySelectorAll('[data-copy]')) {
        button.addEventListener('click', async () => {
            const text = document.querySelector(button.dataset.copy).textContent
            try {
                await navigator.clipboard.writeText(text)
                button.textContent = 'Copied'
            } catch {
                button.textContent = 'Select and copy'
            }
            setTimeout(() => { button.textContent = 'Copy' }, 1800)
        })
    }
}

/** The live trial: a class picker for the article's figure and a width for the article page. */
function tryIt() {
    const select = document.getElementById('try-class')
    const range = document.getElementById('try-width')
    const output = document.getElementById('try-width-out')
    const frame = document.getElementById('try-frame')
    const page = document.getElementById('try-page')
    const readout = document.getElementById('try-readout')
    const presets = document.querySelectorAll('[data-width]')
    if (!select || !page) return

    const target = () => page.contentDocument?.getElementById('target')

    function render() {
        const width = Number(range.value)
        const scale = Math.min(1, frame.clientWidth / width)
        page.style.width = `${width}px`
        page.style.height = `${Math.ceil(frame.clientHeight / scale)}px`
        page.style.transform = `scale(${scale})`
        output.textContent = `${width} px`
        presets.forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.width) === width)))

        const figure = target()
        if (!figure) return
        figure.className = select.value
        const figureWidth = Math.round(figure.getBoundingClientRect().width)
        readout.innerHTML = `The highlighted picture is <code>.${select.value}</code>: ${figureWidth} px of a ${width} px page.`
    }

    // Scrolls the article only: scrollIntoView would move this page too.
    function scrollToTarget() {
        const figure = target()
        if (!figure) return
        const view = page.contentWindow
        view.scrollTo({ top: figure.offsetTop - (view.innerHeight - figure.offsetHeight) / 2 })
    }

    // On a narrow screen a laptop-wide page would be scaled past reading: start at a phone's width.
    if (frame.clientWidth < 600) range.value = 375

    select.addEventListener('change', () => { render(); scrollToTarget() })
    range.addEventListener('input', render)
    presets.forEach((b) => b.addEventListener('click', () => { range.value = b.dataset.width; render(); scrollToTarget() }))
    page.addEventListener('load', () => { render(); scrollToTarget() })
    new ResizeObserver(render).observe(frame)
    if (page.contentDocument?.readyState === 'complete') render()
}

/** The pinned story: how far the reader has scrolled through it picks the figure's class and text. */
function story() {
    const track = document.querySelector('.story')
    const figure = document.getElementById('story-figure')
    const caption = document.getElementById('story-caption')
    const texts = [...document.querySelectorAll('.story__text')]
    if (!track || !figure || !texts.length) return

    const names = { content: 'the reading column', popout: 'one step out', feature: 'two steps out', full: 'edge to edge' }
    let current = null

    function describe() {
        caption.innerHTML = `<code>.${current}</code>, ${names[current]}: ${Math.round(figure.getBoundingClientRect().width)} px wide here`
    }

    function show(index) {
        const name = texts[index].dataset.class
        if (name === current) return
        const first = current === null
        current = name
        const apply = () => {
            figure.className = `story__figure ${name}`
            texts.forEach((t, i) => t.classList.toggle('is-active', i === index))
            describe()
        }
        if (!first && document.startViewTransition && !reduceMotion) document.startViewTransition(apply)
        else apply()
    }

    // Progress runs from the stage pinning (0) to the end of the spacers (1), in equal parts per step.
    function update() {
        const box = track.getBoundingClientRect()
        const travel = Math.max(1, box.height - innerHeight * 0.75)
        const progress = Math.min(0.999, Math.max(0, -box.top / travel))
        show(Math.floor(progress * texts.length))
    }

    let queued = false
    addEventListener('scroll', () => {
        if (queued) return
        queued = true
        requestAnimationFrame(() => { queued = false; update() })
    }, { passive: true })
    addEventListener('resize', () => { update(); describe() })
    update()
}

/** The 1919 clip plays only when motion is welcome; otherwise its poster stays. */
function clip() {
    const video = document.getElementById('clip')
    if (!video || reduceMotion) return
    new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
    }).observe(video)
}

/** The class index: type to filter, arrows or pointer to select. */
function classIndex() {
    const input = document.getElementById('cmd-q')
    const list = document.getElementById('cmd-list')
    const empty = document.getElementById('cmd-empty')
    if (!input || !list) return
    const items = [...list.children]
    items.forEach((item, i) => { item.id = `cmd-${i}` })

    function visible() { return items.filter((item) => !item.hidden) }

    function select(item) {
        items.forEach((i) => i.setAttribute('aria-selected', String(i === item)))
        if (item) input.setAttribute('aria-activedescendant', item.id)
        else input.removeAttribute('aria-activedescendant')
    }

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase().replace(/^\./, '')
        for (const item of items) {
            const haystack = `${item.querySelector('.cmd__name').textContent} ${item.dataset.keys}`.toLowerCase()
            item.hidden = query !== '' && !haystack.includes(query)
        }
        const shown = visible()
        empty.hidden = shown.length > 0
        select(shown[0])
    })

    input.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
        event.preventDefault()
        const shown = visible()
        const index = shown.findIndex((i) => i.getAttribute('aria-selected') === 'true')
        const next = shown[(index + (event.key === 'ArrowDown' ? 1 : -1) + shown.length) % shown.length]
        select(next)
        next?.scrollIntoView({ block: 'nearest' })
    })

    items.forEach((item) => {
        item.addEventListener('click', () => select(item))
        item.addEventListener('mouseenter', () => { if (matchMedia('(hover: hover)').matches) select(item) })
    })
    select(items[1])
}

/** Reference tabs: without script every panel shows, one after the other. */
function tabs() {
    const tablist = document.querySelector('.ref__tabs')
    if (!tablist) return
    const tabs = [...tablist.querySelectorAll('[role="tab"]')]
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')))
    tablist.hidden = false

    function activate(tab, focus) {
        tabs.forEach((t, i) => {
            const on = t === tab
            t.setAttribute('aria-selected', String(on))
            t.tabIndex = on ? 0 : -1
            panels[i].hidden = !on
        })
        if (focus) tab.focus()
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => activate(tab))
        tab.addEventListener('keydown', (event) => {
            const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key]
            if (!step) return
            event.preventDefault()
            activate(tabs[(i + step + tabs.length) % tabs.length], true)
        })
    })
    activate(tabs[0])
}

/** The colour-mode sample: .light or .dark on one element. */
function modeDemo() {
    const sample = document.getElementById('mode-sample')
    for (const button of document.querySelectorAll('[data-mode]')) {
        button.addEventListener('click', () => {
            sample.classList.remove('light', 'dark')
            sample.classList.add(button.dataset.mode)
            document.querySelectorAll('[data-mode]').forEach((b) => b.setAttribute('aria-pressed', String(b === button)))
        })
    }
}

/** Entrances: each section's parts rise in once, in order. */
function entrances() {
    if (reduceMotion) return
    const groups = document.querySelectorAll('.hero, .how, .variants, .classes, .install, .reference, .foot')
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
        }
    }, { rootMargin: '0px 0px -10% 0px' })
    for (const group of groups) {
        const parts = [...group.children].filter((el) => !el.classList.contains('story'))
        parts.forEach((part, i) => {
            part.classList.add('reveal')
            part.style.setProperty('--delay', `${Math.min(i, 6) * 75}ms`)
            observer.observe(part)
        })
    }
}

measureBands()
copyButtons()
tryIt()
story()
clip()
classIndex()
tabs()
modeDemo()
entrances()
