# Mantiene los metodos expuestos al JavaScript de la WebView.
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# MainActivity.AndroidBridge se invoca desde JavaScript por nombre.
-keep class com.miautoaldia.app.MainActivity$AndroidBridge { *; }
