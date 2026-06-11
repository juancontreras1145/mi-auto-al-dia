# Mi Auto al Dia v1.1

Cambios principales:

- Fondo general negro, no azul.
- Inicio mas compacto.
- Pantalla Partes mas compacta.
- Mapa ampliado con zoom 1x, 1.5x y 2x.
- Modo Editar/agregar: tocar la imagen para crear un punto nuevo.
- Arrastrar puntos existentes para ubicarlos manualmente.
- Tocar un punto en modo edicion para cambiar nombre y categoria.
- Cambiar imagen del auto desde Ajustes.
- La imagen elegida queda guardada dentro del respaldo JSON.
- Compatible con respaldos v1.0.

Version:

- versionName: 1.1
- versionCode: 2

Para publicar:

```bash
cd ~/mi-auto-al-dia
unzip -o ~/storage/downloads/mi-auto-al-dia-v1.1-mapa-manual-negro.zip -d ~/mi-auto-al-dia-v1.1-temp
cp -a ~/mi-auto-al-dia-v1.1-temp/. ~/mi-auto-al-dia/
rm -rf ~/mi-auto-al-dia-v1.1-temp

git status
git add .
git commit -m "Agregar mapa manual y tema negro"
git push

git tag v1.1
git push origin v1.1
```

Si el tag ya existe:

```bash
git tag -d v1.1
git push origin :refs/tags/v1.1
git tag v1.1
git push origin v1.1
```
