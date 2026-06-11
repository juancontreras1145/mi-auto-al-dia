# Mi Auto al Dia

App Android offline para controlar mantenciones de un auto.

Arquitectura:

- Android WebView local.
- Interfaz principal en `app/src/main/assets/index.html`.
- Datos guardados en `localStorage`.
- Exportacion e importacion JSON.
- Exportacion CSV.
- Puente nativo `AndroidBridge` para guardar archivos, compartir JSON, WhatsApp y actualizaciones.
- GitHub Actions para generar APK firmado por tag.

## Funciones iniciales

- Ficha del vehiculo.
- Kilometraje actual.
- Mapa visual del auto con puntos de estado.
- Estados: verde al dia, amarillo proximo, rojo critico, gris sin dato.
- Registro de mantenciones por fecha, kilometraje, costo, taller y notas.
- Historial buscable.
- Reglas por kilometraje y meses para cada parte.
- Mover puntos manualmente sobre la imagen del auto.
- Respaldo JSON y CSV.

## Version inicial

- versionName: 1.0
- versionCode: 1
- package: `com.miautoaldia.app`

## Crear repo desde Termux

```bash
cd ~
unzip -o ~/storage/downloads/mi-auto-al-dia-v1.0-proyecto.zip -d ~/mi-auto-al-dia
cd ~/mi-auto-al-dia

git init
git add .
git commit -m "Crear app Mi Auto al Dia"
```

Con GitHub CLI:

```bash
gh auth login
gh repo create mi-auto-al-dia --public --source=. --remote=origin --push
```

Si creas el repo manualmente en GitHub:

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mi-auto-al-dia.git
git push -u origin main
```

## Crear release

```bash
git tag v1.0
git push origin v1.0
```

## Firma para GitHub Actions

El workflow necesita estos secrets en el repo:

- `AUTO_KEYSTORE_BASE64`
- `AUTO_KEYSTORE_PASSWORD`
- `AUTO_KEY_ALIAS`

Genera una firma local y no la subas al repositorio:

```bash
cd ~/mi-auto-al-dia
keytool -genkeypair -v \
  -keystore auto-release.jks \
  -alias auto \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000

base64 -w 0 auto-release.jks > auto-release-base64.txt
```

Luego copia el contenido de `auto-release-base64.txt` al secret `AUTO_KEYSTORE_BASE64`.
Usa la misma clave que ingresaste para `AUTO_KEYSTORE_PASSWORD`.
Usa `auto` para `AUTO_KEY_ALIAS` si dejaste ese alias.

No subas `auto-release.jks` ni `auto-release-base64.txt`.
