# Mi Auto al Dia v1.8 - Plan de mantenimiento Fiat Punto gasolina

Esta version incorpora mantenciones basadas en el Manual de Empleo y Cuidado Fiat Punto, plan gasolina.

## Fuente usada

- Manual Fiat Punto, capitulo Mantenimiento y cuidados.
- Plan de mantenimiento programado para versiones de gasolina.
- Controles periodicos cada 1000 km y control de aceite cada 3000 km.
- Reemplazos: aceite/filtro, bujias, filtro de aire, filtro habitaculo, liquido de frenos y correas.

## Cambios principales

- Version app: 1.8.
- VersionCode Android: 9.
- Se agregaron 37 items base de mantenimiento/documentos.
- Se actualizaron intervalos existentes para que coincidan mejor con el plan Fiat Punto gasolina.
- Se agregaron categorias: Motor, Frenos, Ruedas, Fluidos, Servicio, Transmision, Luces, Exterior y Otros.
- Cada item ahora muestra su intervalo y una nota corta del manual.
- La migracion actualiza items existentes y agrega los nuevos sin borrar historial.
- El kilometraje de una mantencion puede quedar vacio; ya no se fuerza a 0.
- Se permite editar intervalo por km y meses desde la opcion Editar parte.
- Se elimino el archivo mi-auto-keystore-base64.txt del proyecto y se reforzo .gitignore.

## Criterios de intervalos

- Revision Fiat programada: 15.000 km / 1 año.
- Aceite y filtro de aceite: 30.000 km o 1 año en uso urbano/bajo kilometraje anual.
- Bujias: 30.000 km / 2 años.
- Filtro de aire: 30.000 km / 2 años; nota de 15.000 km para zonas polvorientas.
- Filtro habitaculo: recomendado cada 15.000 km / 1 año, obligatorio cada 30.000 km / 2 años.
- Liquido de frenos: 30.000 km / 2 años.
- Correa distribucion y accesorios: configuracion conservadora 60.000 km / 4 años por uso exigente; nota indica maximo normal 120.000 km / 6 años.
- Frenos/neumaticos/luces: control cada 15.000 km / 1 año.
- Controles periodicos: nivel refrigerante, nivel liquido frenos, lavacristales cada 1.000 km; aceite cada 3.000 km.

## Nota

La app esta configurada para Fiat Punto gasolina. Los items exclusivos Diesel, GLP o Natural Power no fueron activados como mantenciones principales para no llenar la app con controles que no corresponden al auto actual. Si el vehiculo tuviera GLP, Natural Power, Diesel o Dualogic, se pueden activar/usar los controles correspondientes desde los items agregados o editarlos.
