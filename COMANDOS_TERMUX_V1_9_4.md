# Subir Mi Auto al Día V1.9.4

```bash
cd ~/mi-auto-al-dia

mkdir -p ~/mi-auto-redesign-temp
unzip -o ~/storage/downloads/mi-auto-al-dia-ui-compact-v1.9.4.zip -d ~/mi-auto-redesign-temp

cp -a ~/mi-auto-redesign-temp/. ~/mi-auto-al-dia/
rm -rf ~/mi-auto-redesign-temp

rm -f mi-auto-keystore-base64.txt
git rm --cached mi-auto-keystore-base64.txt 2>/dev/null || true

git status
git add .
git commit -m "Corregir mantenciones y agregar suspension"

git tag v1.9.4
git push origin master
git push origin v1.9.4
```
