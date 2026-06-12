#!/usr/bin/env bash
set -e
# Limpieza segura para la app Mi Auto al Dia.
# Borra archivos temporales locales si existen, sin tocar el codigo principal.
rm -rf .gradle build app/build
rm -f app/*release*.jks app/auto-release.jks
find . -name '.DS_Store' -delete
printf 'Limpieza lista.\n'
