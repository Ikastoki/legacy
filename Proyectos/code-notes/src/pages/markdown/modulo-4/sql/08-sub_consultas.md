---
layout: ../../../../layouts/modulo-4/SQL.astro
title: "Sub-Consultas"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Sub-Consultas</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Sub-Consultas](#sub-consultas)
  - [Subconsultas correlaciones](#subconsultas-correlaciones)
  - [Subconsultas no correlacionadas(subconsultas anidadas)](#subconsultas-no-correlacionadassubconsultas-anidadas)
- [Estructura y Propósito](#estructura-y-propósito)
  - [Subconsultas de fila (Row Subqueries)](#subconsultas-de-fila-row-subqueries)
  - [Subconsultas de columna (Column Subqueries)](#subconsultas-de-columna-column-subqueries)
  - [Subconsultas de tabla (Table Subqueries)](#subconsultas-de-tabla-table-subqueries)
  - [Subconsultas escalares (Scalar Subqueries)](#subconsultas-escalares-scalar-subqueries)

</div>
</div>

## Sub-Consultas

Las subconsultas (subqueries) en SQL son consultas anidadas dentro de otras consultas. Se utilizan para realizar operaciones más complejas o para filtrar datos de una manera más específica. Básicamente, una subconsulta es una consulta que se incluye dentro de otra consulta principal.

### Subconsultas correlaciones

Estas son subconsultas que dependen de los resultados de la consulta externa. La subconsulta se ejecuta repetidamente, una vez por cada fila devuelta por la consulta principal. Los resultados de la subconsulta se filtran o se utilizan de alguna manera en la consulta principal.

```sql
SELECT column1, column2
FROM table1
WHERE column1 = (SELECT column1 FROM table2 WHERE condition);
```

### Subconsultas no correlacionadas(subconsultas anidadas)

Estas son subconsultas que se pueden ejecutar de forma independiente de la consulta externa y devuelven un conjunto de resultados que luego se utilizan en la consulta principal.

```sql
SELECT column1, column2
FROM table1
WHERE column1 IN (SELECT column1 FROM table2 WHERE condition);
```

## Estructura y Propósito

Las subconsultas pueden devolver diferentes tipos de resultados dependiendo de su estructura y propósito.

### Subconsultas de fila (Row Subqueries)

Devuelven múltiples filas de datos. Se utilizan generalmente en cláusulas WHERE con operadores IN, ANY o ALL.

```sql
SELECT column1
FROM table1
WHERE column1 IN (SELECT column1 FROM table2 WHERE condition);
```

### Subconsultas de columna (Column Subqueries)

Devuelven una sola columna de datos. Se utilizan en la lista de selección o en cualquier lugar donde se necesite una única columna.

```sql
SELECT (SELECT column1 FROM table2 WHERE condition) AS column_alias
FROM table1;
```

### Subconsultas de tabla (Table Subqueries)

Devuelven una tabla completa. Se utilizan en la cláusula FROM o en cualquier lugar donde se necesite una tabla completa.

```sql
SELECT *
FROM (SELECT column1, column2 FROM table2 WHERE condition) AS subquery_alias;
```

### Subconsultas escalares (Scalar Subqueries)

Devuelven un solo valor o una fila de un solo valor. Se pueden utilizar en cualquier lugar donde se pueda usar una expresión escalar, como en la lista de selección, en la cláusula WHERE, etc.

```sql
SELECT column1, (SELECT MAX(column2) FROM table2) AS max_value
FROM table1;
```
