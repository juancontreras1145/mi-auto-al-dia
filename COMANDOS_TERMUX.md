# Comandos Termux - Mi Auto al Dia

## 1. Copiar el proyecto a Termux

```bash
cd ~
rm -rf mi-auto-al-dia
unzip -o ~/storage/downloads/mi-auto-al-dia-v1.0-proyecto.zip -d ~/mi-auto-al-dia
cd ~/mi-auto-al-dia
```

## 2. Revisar version

```bash
grep -n "versionName" app/build.gradle
grep -n "versionCode" app/build.gradle
grep -n "APP_VERSION" app/src/main/assets/index.html
```

## 3. Crear repo con GitHub CLI

```bash
pkg update -y
pkg install git gh unzip -y

gh auth login
cd ~/mi-auto-al-dia

git init
git add .
git commit -m "Crear app Mi Auto al Dia"
gh repo create mi-auto-al-dia --public --source=. --remote=origin --push
```

## 4. Crear tag para APK release

```bash
cd ~/mi-auto-al-dia
git tag v1.0
git push origin v1.0
```

## 5. Si el tag ya existe

```bash
git tag -d v1.0
git push origin :refs/tags/v1.0
git tag v1.0
git push origin v1.0
```
