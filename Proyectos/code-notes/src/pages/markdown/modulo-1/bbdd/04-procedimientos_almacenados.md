---
layout: ../../../../layouts/modulo-1/BBDD.astro
title: "Procedimientos almacenados"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Procedimientos almacenados</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Procedimientos almacenados](#procedimientos-almacenados)
- [Características de los Procedimientos Almacenados](#características-de-los-procedimientos-almacenados)
- [Ejemplos de Uso de Procedimientos Almacenados](#ejemplos-de-uso-de-procedimientos-almacenados)
- [Lenguajes de Programación de Procedimientos Almacenados](#lenguajes-de-programación-de-procedimientos-almacenados)
- [Creación y Ejecución de Procedimientos Almacenados](#creación-y-ejecución-de-procedimientos-almacenados)

</div>
</div>

## Procedimientos almacenados

Los procedimientos almacenados son un tipo de rutina o subprograma que se almacena en una base de datos y se puede llamar y ejecutar desde diferentes partes de una aplicación o desde la propia base de datos. Están escritos en un lenguaje de programación específico para la base de datos, como SQL en el caso de la mayoría de los sistemas de gestión de bases de datos relacionales (RDBMS).

## Características de los Procedimientos Almacenados

**Reutilización de Código:** Los procedimientos almacenados permiten encapsular lógica de negocio compleja en una única unidad de código que puede ser reutilizada y llamada desde diferentes partes de una aplicación o desde otras rutinas almacenadas.

**Mejor Rendimiento:** Al ejecutarse en el servidor de la base de datos, los procedimientos almacenados pueden proporcionar un mejor rendimiento que enviar consultas SQL individuales desde la aplicación cliente, ya que reducen la cantidad de tráfico de red y minimizan el tiempo de ejecución de la consulta.

**Seguridad:** Los procedimientos almacenados pueden utilizarse para controlar el acceso a los datos al limitar las operaciones que se pueden realizar en la base de datos y al definir permisos específicos para ejecutar el procedimiento.

**Transacciones y Atomicidad:** Los procedimientos almacenados pueden formar parte de una transacción SQL más grande, lo que garantiza que un conjunto de operaciones se ejecute de forma atómica y coherente.

**Modularidad:** Los procedimientos almacenados facilitan la modularidad y la organización del código al separar la lógica de negocio de la aplicación del acceso a la base de datos.

## Ejemplos de Uso de Procedimientos Almacenados

**Gestión de Datos:** Crear, leer, actualizar y eliminar (CRUD) registros en una tabla.

**Cálculos y Transformaciones:** Realizar cálculos complejos o transformaciones de datos en la base de datos.

**Validación de Datos:** Validar datos ingresados antes de insertarlos o actualizarlos en la base de datos.

**Generación de Informes:** Ejecutar consultas complejas y generar informes basados en los resultados.

## Lenguajes de Programación de Procedimientos Almacenados

El lenguaje utilizado para escribir procedimientos almacenados varía según el sistema de gestión de bases de datos. Algunos ejemplos son:

- **SQL:** La mayoría de los sistemas de bases de datos relacionales (como MySQL, PostgreSQL, SQL Server, Oracle) utilizan SQL como lenguaje principal para escribir procedimientos almacenados.

- **PL/SQL:** Es un lenguaje de programación procedimental específico de Oracle Database.

- **T-SQL:** Es un conjunto de extensiones al SQL estándar utilizado en Microsoft SQL Server.

- **PL/pgSQL:** Es un lenguaje de programación procedural utilizado en PostgreSQL.

## Creación y Ejecución de Procedimientos Almacenados

Los procedimientos almacenados se crean y se almacenan en la base de datos utilizando una sintaxis específica del sistema de gestión de bases de datos. Una vez creados, pueden ser llamados y ejecutados desde la aplicación cliente utilizando consultas SQL.
