#!/bin/sh
# Compiles every entry point and theme, then imports the package the way the README tells users to.
set -e
cd "$(dirname "$0")/.."

for f in src/breakouts.scss src/core.scss src/base.scss src/reset.scss src/utilities.scss src/theme/_*.scss; do
    sass --no-source-map "$f" > /dev/null
done

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
mkdir "$tmp/node_modules"
ln -s "$PWD" "$tmp/node_modules/breakouts"

check() {
    printf '%s\n' "$1" > "$tmp/t.scss"
    if ! sass --no-source-map --load-path="$tmp/node_modules" "$tmp/t.scss" | grep -q -- "$2"; then
        echo "FAIL: $1 (expected $2)" >&2
        exit 1
    fi
}

check "@use 'breakouts' with (\$color-primary: red);" '--color-primary: red'
check "@use 'breakouts/src/theme/chupa-pop'; @use 'breakouts' as *;" '--color-primary: #ecb838'
check "@use 'breakouts/src/core'; @use 'breakouts/src/utilities';" '\.breakouts'

echo "ok"
