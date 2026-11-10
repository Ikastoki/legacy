---
title: "El sistema de archivos"
description: ""
layout: ../../../../../layouts/MarkdownLayout.astro
---

<div class="glosario">

- [El sistema de archivos](#el-sistema-de-archivos)
  - [Propósito y funciones del sistema de archivos](#propósito-y-funciones-del-sistema-de-archivos)
  - [Traducción de estructura lógica a bloques físicos](#traducción-de-estructura-lógica-a-bloques-físicos)

</div>

# El sistema de archivos

Un sistema de archivos constituye la capa de abstracción que transforma un dispositivo de almacenamiento bruto, compuesto por una secuencia lineal de bloques direccionables, en una estructura jerárquica y semántica donde la información se organiza como archivos y directorios. Sin esta capa, los sistemas operativos deberían gestionar manualmente la ubicación física de cada byte, calcular offsets de bloques libres y reconstruir relaciones de pertenencia tras cada reinicio. El filesystem resuelve este problema mediante estructuras de metadatos que registran la asignación de espacio, los atributos de acceso y la topología del árbol de directorios, permitiendo que aplicaciones interactúen con rutas lógicas sin conocer la geometría del disco subyacente. Esta separación entre representación lógica y almacenamiento físico posibilita operaciones complejas como redimensionamiento dinámico, instantáneas coherentes y recuperación ante fallos, estableciendo los cimientos sobre los que se ejecuta toda persistencia de datos moderna.

## Propósito y funciones del sistema de archivos

El propósito fundamental del filesystem radica en virtualizar el almacenamiento en bloques mediante un espacio de nombres estructurado que garantiza localización, integridad y control de acceso. Esta virtualización se materializa mediante un conjunto de funciones operativas que operan en conjunto. La gestión del espacio de nombres asigna identificadores únicos a archivos y directorios, manteniendo relaciones de pertenencia y herencia que definen la estructura jerárquica. La asignación y desasignación de bloques traduce solicitudes de creación o extensión de archivos en operaciones de reserva en mapas de bits o tablas de asignación, optimizando la distribución física para minimizar fragmentación y maximizar velocidad de lectura secuencial. El registro de metadatos almacena atributos administrativos como timestamps, permisos, propietario y tamaño, separando esta información del contenido para permitir consultas eficientes sin leer bloques de datos. La garantía de consistencia implementa mecanismos como journaling o copy-on-write que aseguran que las estructuras críticas permanezcan en estado válido incluso ante interrupciones de energía o fallos del kernel, evitando corrupción del índice que dejaría el dispositivo inaccesible.

> La eficiencia de un filesystem se evalúa por su capacidad para mantener coherencia entre operaciones concurrentes sin sacrificar throughput. Transacciones atómicas y actualizaciones diferidas reducen la sobrecarga de sincronización, pero requieren algoritmos de recuperación robustos para reconstruir estado pendiente tras fallos inesperados.

## Traducción de estructura lógica a bloques físicos

El mapeo entre la representación lógica de un archivo y su distribución física en el dispositivo sigue un proceso estructurado que depende de la arquitectura del filesystem. Cuando un proceso solicita la creación de un archivo, el kernel invoca al subsistema de almacenamiento para reservar una entrada de metadatos y asignar bloques de datos libres. En sistemas basados en inodos, cada archivo se asocia a una estructura de metadatos independiente que contiene punteros a los bloques físicos donde reside su contenido. Los punteros directos referencian bloques iniciales para acceso rápido, mientras que punteros indirectos simples, dobles y triples permiten escalar a archivos de gran tamaño mediante tablas intermedias que mapean direcciones adicionales. Los filesystems modernos reemplazan esta jerarquía de punteros por extents, rangos contiguos de bloques descritos por tuplas de inicio y longitud, reduciendo la sobrecarga de metadatos y mejorando la localidad espacial para operaciones secuenciales.

La resolución de una ruta lógica implica traversal desde el directorio raíz hasta el nodo objetivo. Cada entrada de directorio almacena un par nombre-identificador que el kernel utiliza para cargar la estructura de metadatos correspondiente. Una vez localizada, el filesystem traduce la posición lógica del byte solicitado en un offset dentro de un bloque físico, calculando el índice de bloque mediante división entera por el tamaño de bloque y aplicando el mapeo específico del sistema. Esta traducción ocurre en memoria mediante cachés de página que mantienen estructuras de metadatos y bloques recientemente accedidos, evitando lecturas redundantes al dispositivo. La fragmentación surge cuando la asignación de bloques no puede mantener contigüidad física debido a creación y eliminación concurrente de archivos, obligando al filesystem a distribuir un archivo en múltiples regiones dispersas que incrementan la latencia por seeks mecánicos o sobrecarga de gestión de extents.


> La coherencia entre caché de memoria y disco se garantiza mediante operaciones de sincronización explícita o políticas de escritura diferida. Datos marcados como dirty pages permanecen en RAM hasta que el kernel los descarga periódicamente o ante eventos de cierre, equilibrando rendimiento con riesgo de pérdida ante fallos abruptos.

El proceso de mapeo también gestiona la desasignación cuando un archivo se elimina. El filesystem marca la entrada de metadatos como libre, devuelve los bloques asociados al mapa de disponibilidad y actualiza contadores de espacio utilizado, pero no sobrescribe inmediatamente el contenido físico. Esta conducta permite recuperación forense de datos eliminados hasta que nuevas escrituras ocupen los bloques liberados, demostrando que la eliminación lógica no equivale a borrado físico. La optimización continua de estos mecanismos, mediante allocators anticipatorios, defragmentación online o compactación de extents, mantiene la relación predecible entre operaciones lógicas y acceso físico a lo largo de la vida útil del almacenamiento.

<div class="pagination">
  <a href="/markdown/infraestructura/bases/gestion/fundamentos" class="prev">Anterior</a>
  <a href="/markdown/infraestructura/bases/gestion/archivos" class="next">Siguiente</a>
</div>
