---
layout: ../../../../layouts/modulo-4/SQL.astro
title: "Introducción"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Introducción</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [SQL](#sql)
- [RDBMS beneficios y limitaciones](#rdbms-beneficios-y-limitaciones)
  - [Beneficios](#beneficios)
  - [Limitaciones](#limitaciones)
- [Tipos de bases de datos](#tipos-de-bases-de-datos)
  - [Bases de Datos Relacionales (SQL)](#bases-de-datos-relacionales-sql)
  - [Bases de Datos No Relacionales (NoSQL)](#bases-de-datos-no-relacionales-nosql)
  - [Bases de Datos en Memoria](#bases-de-datos-en-memoria)
  - [Bases de Datos Temporales](#bases-de-datos-temporales)
  - [Bases de Datos Espaciales](#bases-de-datos-espaciales)
  - [Bases de Datos Multimodelo](#bases-de-datos-multimodelo)
  - [Bases de Datos de Grafos](#bases-de-datos-de-grafos)
- [SQL vs NoSQL](#sql-vs-nosql)
  - [SQL](#sql-1)
  - [NoSQL](#nosql)

</div>
</div>

## SQL

SQL (Structured Query Language) es un lenguaje de programación utilizado para comunicarse con bases de datos relacionales. Permite realizar diversas operaciones como la creación y modificación de bases de datos, la inserción, actualización y eliminación de datos, así como consultas para recuperar información específica de la base de datos. Es un estándar ampliamente utilizado en el manejo de datos en sistemas de gestión de bases de datos relacionales(RDBMS), como MySQL, PostgreSQL, SQL Server, Oracle, entre otros.

## RDBMS beneficios y limitaciones

### Beneficios

- **Datos estructurados:** RDBMS permite el almacenamiento de datos de una manera estructurada, utilizando filas y columnas en tablas. Esto hace que sea fácil manipular los datos utilizando SQL (Structured Consulta Language), asegurando un uso eficiente y flexible.

- **ACID Properties:** ACID significa atómico, consistencia, aislamiento y durabilidad. Estas propiedades garantizan una manipulación de datos confiable y segura en un RDBMS, por lo que es adecuado para aplicaciones críticas para misiones.

- **Normalización:** RDBMS soporta la normalización de los datos, un proceso que organiza los datos de una manera que reduce la redundancia de los datos y mejora la integridad de los datos.

- **Escalabilidad:** Los RDBMS generalmente proporcionan buenas opciones de escalabilidad, permitiendo la adición de más recursos de almacenamiento o computación a medida que los datos y la carga de trabajo crecen.

- **Integridad de datos:** RDBMS proporciona mecanismos como restricciones, claves primarias y claves extranjeras para hacer cumplir la integridad y la coherencia de los datos, asegurando que los datos sean precisos y confiables.

- **Seguridad:** Los RDBMS ofrecen varias características de seguridad, como autenticación de usuarios, control de acceso y cifrado de datos para proteger datos sensibles.

### Limitaciones

- **Complejidad:** Configurar y administrar un RDBMS puede ser complejo, especialmente para aplicaciones grandes. Requiere conocimientos técnicos y habilidades para gestionar, sintonizar y optimizar la base de datos.

- **Costo:** Los RDBMS pueden ser caros, tanto en términos de derechos de licencia como de los recursos de computación y almacenamiento que requieren.

- **Esquema fijo:** RDBMS sigue un esquema rígido para la organización de datos, lo que significa que cualquier cambio en el esquema puede llevar tiempo y ser complicado.

- **Manejo de datos no estructurados:** Los RDBMS no son adecuados para manejar datos no estructurados como archivos multimedia, publicaciones en redes sociales y datos de sensores, ya que su estructura relacional está optimizada para datos estructurados.

- **Escalabilidad horizontal:** Los RDBMS no son tan fácilmente escalables horizontalmente como las bases de datos NoSQL. Escalar horizontalmente, que implica añadir más máquinas al sistema, puede ser difícil en términos de costo y complejidad.

## Tipos de bases de datos

### Bases de Datos Relacionales (SQL)

Las bases de datos relacionales utilizan un modelo de datos tabular donde la información se organiza en tablas con filas y columnas.

### Bases de Datos No Relacionales (NoSQL)

Las bases de datos NoSQL (Not Only SQL) incluyen una variedad de modelos de datos que no siguen el enfoque tabular de las bases de datos relacionales

### Bases de Datos en Memoria

Estas bases de datos almacenan datos en la memoria principal del sistema en lugar de en un disco. Esto permite un acceso extremadamente rápido a los datos, lo que las hace ideales para aplicaciones que requieren baja latencia, como sistemas de caché y aplicaciones de tiempo real.

### Bases de Datos Temporales

Estas bases de datos están diseñadas específicamente para almacenar y gestionar datos temporales, como series temporales y datos de eventos. Son útiles en aplicaciones donde se necesita analizar o procesar datos en función del tiempo, como en el monitoreo de sistemas, el análisis financiero y la análitica de negocios.

### Bases de Datos Espaciales

Estas bases de datos están optimizadas para almacenar y consultar datos espaciales, como mapas y coordenadas geográficas. Son utilizadas en aplicaciones de geolocalización, sistemas de información geográfica (GIS), planificación urbana, entre otros.

### Bases de Datos Multimodelo

Estas bases de datos permiten almacenar y gestionar datos utilizando múltiples modelos de datos dentro de una sola base de datos. Por ejemplo, pueden admitir modelos de datos relacionales, de documentos, de gráficos, entre otros. Esto proporciona flexibilidad para adaptarse a diferentes tipos de datos y casos de uso en una sola plataforma.

### Bases de Datos de Grafos

Estas bases de datos están diseñadas específicamente para modelar y consultar datos en forma de grafos, donde los nodos representan entidades y las relaciones entre nodos representan conexiones. Son útiles en aplicaciones como redes sociales, análisis de redes, recomendaciones y rutas de navegación.

## SQL vs NoSQL

### SQL

Las bases de datos relacionales utilizan un modelo de datos tabular donde la información se organiza en tablas con filas y columnas. Estas son algunas características clave:

- **Estructura tabular:** Los datos se almacenan en tablas relacionadas entre sí mediante claves primarias y claves externas.
- **SQL:** El lenguaje estándar para interactuar con bases de datos relacionales es SQL (Structured Query Language), que permite realizar consultas complejas y manipulaciones de datos.
- **Integridad de los datos:** Los RDBMS (Sistemas de Gestión de Bases de Datos Relacionales) garantizan la integridad de los datos mediante restricciones de integridad referencial y reglas de validación.
- **Transacciones ACID:** Los RDBMS cumplen con las propiedades ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad) para garantizar la fiabilidad de las transacciones.

### NoSQL

Las bases de datos NoSQL (Not Only SQL) incluyen una variedad de modelos de datos que no siguen el enfoque tabular de las bases de datos relacionales. Algunos tipos comunes de bases de datos NoSQL son:

- **Documentales:** Almacenan datos en documentos flexibles, como JSON o BSON, que pueden tener estructuras variadas.
- Clave-Valor: Almacenan datos como pares clave-valor, donde cada valor está asociado con una clave única.
- **Columnares:** Almacenan datos en columnas en lugar de filas, lo que permite una recuperación eficiente de conjuntos de datos específicos.
- **Grafos:** Modelan datos como grafos, donde los nodos representan entidades y las relaciones entre nodos representan conexiones.
- **Orientadas a Columnas:** Almacenan datos en columnas en lugar de filas, lo que puede ser eficiente para ciertos tipos de consultas.
