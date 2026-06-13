# Subir Mi Auto al Dia v1.9.5

```bash
cd ~/mi-auto-al-dia

mkdir -p ~/mi-auto-redesign-temp
unzip -o ~/storage/downloads/mi-auto-al-dia-ui-compact-v1.9.5.zip -d ~/mi-auto-redesign-temp

cp -a ~/mi-auto-redesign-temp/. ~/mi-auto-al-dia/
rm -rf ~/mi-auto-redesign-temp

rm -f mi-auto-keystore-base64.txt
git rm --cached mi-auto-keystore-base64.txt 2>/dev/null || true

# Verificacion obligatoria antes del commit
grep -n "versionCode 15" app/build.gradle
grep -n "versionName \"1.9.5\"" app/build.gradle
grep -n "APP_VERSION='1.9.5'" app/src/main/assets/index.html
grep -n "front_shocks\|rear_shocks\|Suspensión" app/src/main/assets/index.html

git status
git add .
git commit -m "Forzar version 1.9.5 y corregir mantenciones"

git tag v1.9.5
git push origin master
git push origin v1.9.5
```
