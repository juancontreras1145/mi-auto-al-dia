# Comandos Termux - instalar UI Compacta v1.9.3

```bash
cd ~/mi-auto-al-dia

mkdir -p ~/mi-auto-redesign-temp
unzip -o ~/storage/downloads/mi-auto-al-dia-ui-compact-v1.9.3.zip -d ~/mi-auto-redesign-temp

cp -a ~/mi-auto-redesign-temp/. ~/mi-auto-al-dia/
rm -rf ~/mi-auto-redesign-temp

rm -f mi-auto-keystore-base64.txt
git rm --cached mi-auto-keystore-base64.txt 2>/dev/null || true

git status
git add .
git commit -m "Mejorar mantenciones calendario y auto sin fondo"
git tag v1.9.3
git push origin master
git push origin v1.9.3
```
