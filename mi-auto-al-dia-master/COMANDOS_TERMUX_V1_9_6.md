# Subir Mi Auto al Día v1.9.6

```bash
cd ~/mi-auto-al-dia

mkdir -p ~/mi-auto-redesign-temp
unzip -o ~/storage/downloads/mi-auto-al-dia-ui-compact-v1.9.6.zip -d ~/mi-auto-redesign-temp

cp -a ~/mi-auto-redesign-temp/. ~/mi-auto-al-dia/
rm -rf ~/mi-auto-redesign-temp

rm -f mi-auto-keystore-base64.txt
git rm --cached mi-auto-keystore-base64.txt 2>/dev/null || true

grep -n "versionCode 16" app/build.gradle
grep -n "versionName \"1.9.6\"" app/build.gradle
grep -n "APP_VERSION=\'1.9.6\'" app/src/main/assets/index.html
grep -n "openRecordEditor\|saveEditedRecord\|deleteRecord" app/src/main/assets/index.html

git status
git add .
git commit -m "Permitir editar registros guardados"

git tag v1.9.6
git push origin master
git push origin v1.9.6
```
