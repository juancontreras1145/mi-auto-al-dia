#!/usr/bin/env bash
set -euo pipefail

# Requiere git-filter-repo instalado:
#   python3 -m pip install --user git-filter-repo
# Este script reescribe historial. Haz backup/clon limpio antes de usarlo.

git rm -f --ignore-unmatch mi-auto-keystore-base64.txt || true
git commit -m "Remove leaked signing keystore" || true

git filter-repo \
  --path mi-auto-keystore-base64.txt \
  --invert-paths \
  --force

echo "Historial local limpiado. Ahora fuerza push con cuidado:"
echo "  git push --force-with-lease origin master"
echo "  git push --force-with-lease --tags origin"
echo "La keystore anterior debe considerarse comprometida y debes rotarla en GitHub Secrets."
