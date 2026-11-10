---
layout: ../../../../layouts/modulo-1/BBDD.astro
title: "Relacionales"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Bases de datos relacionales</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Bases de datos relacionales](#bases-de-datos-relacionales)
- [Características](#características)
  - [Tablas](#tablas)
  - [Claves](#claves)
  - [Integridad de Datos](#integridad-de-datos)
  - [Normalización](#normalización)
  - [Lenguaje de Consulta](#lenguaje-de-consulta)
- [Ventajas](#ventajas)
- [Desventajas](#desventajas)

</div>
</div>

## Bases de datos relacionales

Las bases de datos relacionales son sistemas de gestión de bases de datos (DBMS) que almacenan y **organizan datos en estructuras llamadas tablas**. Estas tablas se relacionan entre sí mediante claves y están basadas en el modelo relacional propuesto por E.F. Codd en 1970. Las bases de datos relacionales son ampliamente utilizadas debido a su capacidad para manejar grandes volúmenes de datos y sus capacidades de consulta avanzada a través de SQL (Structured Query Language).

## Características

### Tablas

Los datos se almacenan en tablas, que consisten en filas y columnas.

- **Filas (Tuplas):** Cada fila representa un registro único.
- **Columnas (Atributos):** Cada columna representa un campo de datos específico dentro de la tabla.

### Claves

- **Clave Primaria (Primary Key):** Un campo o conjunto de campos que identifican de manera única cada fila en una tabla.
- **Clave Foránea (Foreign Key):** Un campo en una tabla que crea una relación con la clave primaria de otra tabla.

### Integridad de Datos

- **Integridad de Entidad:** Cada tabla debe tener una clave primaria única.
- **Integridad Referencial:** Las claves foráneas deben corresponder a claves primarias existentes en las tablas relacionadas.

### Normalización

- **Proceso:** Dividir los datos en tablas adicionales para reducir la redundancia y mejorar la integridad de los datos.
- **Niveles de Normalización:** Existen varios niveles, conocidos como formas normales, que definen el grado de normalización.

### Lenguaje de Consulta

- **SQL:** Un lenguaje estándar para consultar y manipular bases de datos relacionales.
- **Operaciones:** Incluyen selección (SELECT), inserción (INSERT), actualización (UPDATE) y eliminación (DELETE).

## Ventajas

- **Consistencia de Datos:** La integridad referencial y las transacciones aseguran que los datos sean consistentes y precisos.
- **Facilidad de Consulta:** SQL permite realizar consultas complejas y obtener información detallada de los datos.
- **Escalabilidad:** Las bases de datos relacionales pueden manejar grandes volúmenes de datos y usuarios concurrentes.
- **Seguridad: **Las bases de datos relacionales ofrecen controles de acceso robustos y mecanismos de autenticación.

## Desventajas

- **Complejidad:** La administración y el diseño de bases de datos relacionales pueden ser complejos, especialmente con datos muy relacionados.
- **Rendimiento:** Las consultas complejas pueden ser lentas si no se optimizan adecuadamente, y pueden requerir índices y optimizaciones específicas.
- **Escalabilidad Horizontal:** Puede ser difícil escalar horizontalmente (distribuir en múltiples servidores) comparado con algunos sistemas NoSQL.
