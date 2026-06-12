# Mi Auto al Día - UI Compacta v1.9.3

Versión enfocada en corregir la exposición visual de Mantenciones y Calendario sin cambiar la identidad dark premium.

## Cambios principales

- Vehículo principal sin barra luminosa atravesando la imagen.
- Nueva imagen `vehicle_default_cut.png` con fondo transparente para evitar el recuadro blanco.
- Pantalla Mantenciones reorganizada por sistemas del vehículo:
  - Requieren atención.
  - Sistemas del vehículo.
  - Lista técnica solo cuando se filtra por estado o se abre una categoría.
- Pantalla Calendario reorganizada como agenda/timeline:
  - Calendario compacto.
  - Próximo evento destacado.
  - Tira de próximos días.
  - Timeline de eventos.
  - Documentos resumidos en chips y modal.
- Versión Android actualizada a `1.9.3`.

## Versionado

```gradle
versionCode 13
versionName "1.9.3"
```

## Ajustes incorporados en v1.9.3

- Auto de la cabecera integrado sin caja/sombra pesada para evitar aspecto de juguete.
- Ítem de neumáticos corregido: ahora es chequeo de presión/inflado, no vencimiento a 15.000 km.
- Botón de chequeo rápido ✅ agregado a mantenciones para marcar revisado aceite, neumáticos, luces y otros controles simples.
- Detalle de cada ítem dividido en páginas reales: Resumen, Detalles e Historial.
- Acción "Registrar mantención" dejada visible con barra fija al fondo del modal.
- Tarjetas de sistemas simplificadas: se eliminaron las barras ambiguas y se reemplazaron por chips de estado más claros.
- Botón menú superior izquierdo ahora lleva a Más/Ajustes.
