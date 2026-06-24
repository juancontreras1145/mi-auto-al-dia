#!/usr/bin/env bash
set -euo pipefail

fail=0

check_path() {
  local pattern="$1"
  if find . -path './.git' -prune -o -iname "$pattern" -print | grep -q .; then
    echo "Archivo sensible encontrado con patron: $pattern"
    find . -path './.git' -prune -o -iname "$pattern" -print
    fail=1
  fi
}

check_path '*.jks'
check_path '*.keystore'
check_path '*.p12'
check_path '*.pem'
check_path '*keystore*base64*.txt'
check_path '*release*base64*.txt'
check_path 'mi-auto-keystore-base64.txt'

if git ls-files | grep -Ei '(^|/)([^/]*keystore[^/]*base64[^/]*\.txt|mi-auto-keystore-base64\.txt|.*\.(jks|keystore|p12|pem))$' >/dev/null; then
  echo "Git tiene versionados archivos que parecen secretos de firma."
  git ls-files | grep -Ei '(^|/)([^/]*keystore[^/]*base64[^/]*\.txt|mi-auto-keystore-base64\.txt|.*\.(jks|keystore|p12|pem))$'
  fail=1
fi

if [ "$fail" -ne 0 ]; then
  echo "Fallo de seguridad: elimina esos archivos y rota la firma si ya estuvieron en Git."
  exit 1
fi

echo "OK: no se detectaron keystores/base64 de firma versionados."
