# Agent skills

Registry of the agent skills this project uses. Skills are **never committed**: they are
installed locally into `.claude/skills/`, which is git-ignored, and this file is the only
record of which skills the project expects, where they come from and how to install them.

## Registry

| Skill | Source | Use it for |
| --- | --- | --- |
| `ponytail` | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Any code change to `src/`: the smallest change that fully solves the task |
| `ponytail-review` | same repo | Review a change or branch before merging |
| `ponytail-audit` | same repo | Whole-repo audit report, changes nothing |
| `ponytail-debt` | same repo | List deferred `shortcut:` comments |
| `ponytail-gain`, `ponytail-help` | same repo | Reference only |
| `impeccable` | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | UI/UX, accessibility, contrast and colour-token work on `docs/` and the themes |
| `design-taste-frontend` | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Art direction when redesigning `docs/` as a page |
| `graphify` | PyPI [`graphifyy`](https://pypi.org/project/graphifyy/) | Knowledge graph of the repo; answer codebase questions with `graphify query` |

## Install

From the project root. The `skills` CLI copies each skill into `.claude/skills/<name>/` and
writes `skills-lock.json` (git-ignored).

```bash
npx skills add DietrichGebert/ponytail -a claude-code --copy -y \
  --skill ponytail ponytail-review ponytail-audit ponytail-debt ponytail-gain ponytail-help
npx skills add pbakaus/impeccable -a claude-code --copy -y --skill impeccable
npx skills add Leonxlnx/taste-skill -a claude-code --copy -y --skill design-taste-frontend

# graphify: CLI plus a copy of its skill. Do not use `graphify install --project`:
# it edits CLAUDE.md, adds hooks to .claude/settings.json and leaves out the skill's references.
uv tool install graphifyy
graphify install --platform claude
cp -R ~/.claude/skills/graphify .claude/skills/
```

Restart the Claude Code session afterwards so the skills are loaded. Check with
`ls .claude/skills`: the list must match the registry.

Before installing a new source, read its `SKILL.md` and the scripts it runs: skills run with
the agent's permissions.

## Update

```bash
npx skills update -p -y                                         # skills from GitHub
uv tool upgrade graphifyy && graphify install --platform claude \
  && rm -rf .claude/skills/graphify && cp -R ~/.claude/skills/graphify .claude/skills/
```

## Add or remove a skill

- **Add:** add a row to the registry and its line to *Install*, run it, and add to
  `.gitignore` any path the skill writes into the project. If it changes how agents work here,
  add a line to the `## Skills` section of `AGENTS.md`.
- **Remove:** `npx skills remove <name> -p -y` (or delete `.claude/skills/<name>/`), then
  remove its row, its install line, its `.gitignore` entries and any mention in `AGENTS.md`.

## Picking a skill

- Change to the library (`src/`, build, `package.json`): `ponytail`, then `ponytail-review`.
- Change to the demo page or the visual defaults: `impeccable`; add `design-taste-frontend`
  only for a redesign of the page as a whole.
- Question about how the code fits together: `graphify` (query the existing graph first).
- Health check of the whole repo: rebuild the graph with `graphify`, then `ponytail-audit`.

Design skills never decide the layout API in `src/base/_layout.scss`; that is decided on
correctness and simplicity.

## Runtime requirements and outputs

| Skill | Needs | Writes into the project (git-ignored) |
| --- | --- | --- |
| `graphify` | `graphify` CLI (`uv`) | `graphify-out/`; exclusions in `.graphifyignore` (committed) |
| `design-taste-frontend` | Node 22+, local Chrome/Edge/Chromium; network for images | `.taste-skill/` |
| `impeccable` | Node | `.impeccable/` |

## Precedence

A skill with the same name in `~/.claude/skills/` (personal) wins over the project copy on that
machine. When a skill behaves differently from what this file says, compare the two copies.
