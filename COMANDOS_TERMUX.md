# Comandos Termux - Mi Auto al Dia v1.9.1 Compact UI

## 1. Copiar el ZIP redisenado dentro del repo local

Ajusta el nombre del ZIP si lo descargaste con otro nombre.

```bash
cd ~/mi-auto-al-dia

mkdir -p ~/mi-auto-redesign-temp
unzip -o ~/storage/downloads/mi-auto-al-dia-ui-compact-v1.9.1.zip -d ~/mi-auto-redesign-temp

cp -a ~/mi-auto-redesign-temp/. ~/mi-auto-al-dia/
rm -rf ~/mi-auto-redesign-temp
```

## 2. Confirmar version

```bash
grep -n "versionName" app/build.gradle
grep -n "versionCode" app/build.gradle
grep -n "APP_VERSION" app/src/main/assets/index.html
```

Debe mostrar:

```text
versionCode 11
versionName "1.9.1"
APP_VERSION='1.9.1'
```

## 3. Confirmar que no exista keystore en el repo

```bash
find . -iname '*keystore*' -o -iname '*base64*'
```

Si aparece un archivo de keystore/base64, no lo subas.

## 4. Subir cambios y crear release

```bash
git status
git add .
git commit -m "Compactar interfaz y mejorar calendario"
git tag v1.9.1
git push origin master
git push origin v1.9.1
```

## 5. Si el tag ya existe

```bash
git tag -d v1.9.1
git push origin :refs/tags/v1.9.1
git tag v1.9.1
git push origin v1.9.1
```
