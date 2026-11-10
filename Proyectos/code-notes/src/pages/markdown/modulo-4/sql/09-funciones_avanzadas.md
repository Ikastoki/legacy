---
layout: ../../../../layouts/modulo-4/SQL.astro
title: "Funciones Avanzadas"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Funciones Avanzadas</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Funciones Avanzadas](#funciones-avanzadas)
  - [Funciones de Ventana (Window Functions)](#funciones-de-ventana-window-functions)
  - [Funciones Escalares (Scalar Functions)](#funciones-escalares-scalar-functions)
  - [Funciones de Fecha (Date Functions)](#funciones-de-fecha-date-functions)
  - [Funciones Numéricas (Numeric Functions)](#funciones-numéricas-numeric-functions)
  - [Funciones de Cadena (String Functions)](#funciones-de-cadena-string-functions)
  - [CASE (Condicionales)](#case-condicionales)
  - [NullIF (Condicionales)](#nullif-condicionales)
  - [COALESCE (Condicionales)](#coalesce-condicionales)
  - [Procedimientos Almacenados (Stored Procedures)](#procedimientos-almacenados-stored-procedures)

</div>
</div>

## Funciones Avanzadas

Estas operan en un conjunto de valores para devolver un único valor escalar. Algunos ejemplos son:

- AVG(): Calcula el promedio de los valores especificados.
- SUM(): Calcula la suma de todos los valores en el conjunto.
- MAX(): Devuelve el valor máximo.
- MIN(): Devuelve el valor mínimo.
- COUNT(): Cuenta el número total de valores en el conjunto.

```sql
SELECT date, city, AVG(amount) AS avg_transaction_amount_for_city
FROM transactions
GROUP BY date, city;
```

### Funciones de Ventana (Window Functions)

Estas operan en un conjunto de filas llamado “ventana” y devuelven un valor para cada fila en la consulta subyacente.

La ventana se define mediante la cláusula OVER().

Ejemplos de funciones de ventana incluyen:

- ROW_NUMBER(): Asigna un número de fila a cada fila dentro de la ventana.
- RANK(): Asigna un rango a cada fila basado en un orden específico.
- SUM(), AVG(), COUNT(), etc., también se pueden usar como funciones de ventana.

```sql
SELECT date, city, amount,
       SUM(amount) OVER (PARTITION BY city ORDER BY date) AS cumulative_sum
FROM transactions;
```

### Funciones Escalares (Scalar Functions)

Estas operan en un solo valor y devuelven un resultado.

Ejemplos comunes de funciones escalares incluyen:

- UPPER(): Convierte una cadena de texto a mayúsculas.
- LOWER(): Convierte una cadena de texto a minúsculas.
- SUBSTRING(): Extrae una parte de una cadena de texto.
- LEN(): Devuelve la longitud de una cadena de texto.

```sql
SELECT employee_id, UPPER(first_name) AS upper_case_name
FROM employees;
```

### Funciones de Fecha (Date Functions)

Estas operan en valores de fecha y hora.

Ejemplos incluyen DATEADD(), DATEDIFF(), GETDATE(), etc.

```sql
SELECT GETDATE() AS current_date;
```

### Funciones Numéricas (Numeric Functions)

Estas operan en valores numéricos.
Ejemplos incluyen ABS(), CEILING(), FLOOR(), etc.

```sql
SELECT product_name, ABS(price) AS absolute_price
FROM products;
```

### Funciones de Cadena (String Functions)

Estas operan en valores de texto.
Ejemplos incluyen CONCAT(), SUBSTRING(), LEN(), etc.

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customers;
```

### CASE (Condicionales)

La función CASE es una expresión condicional que nos permite realizar evaluaciones y tomar decisiones en función de condiciones específicas.
Puede utilizarse para transformar datos o generar valores calculados en función de condiciones lógicas.

```sql
SELECT
    employee_id,
    first_name,
    last_name,
    CASE
        WHEN salary >= 50000 THEN 'Alto'
        WHEN salary >= 30000 THEN 'Medio'
        ELSE 'Bajo'
    END AS salary_category
FROM employees;
```

### NullIF (Condicionales)

La función NullIF compara dos expresiones y devuelve NULL si son iguales. Si no son iguales, devuelve la primera expresión.
Útil para evitar divisiones por cero o manejar valores nulos.

```sql
SELECT
    numerator,
    denominator,
    numerator / NullIF(denominator, 0) AS result
FROM your_table;
```

### COALESCE (Condicionales)

La función COALESCE devuelve el primer argumento no nulo de una lista.
Útil para manejar y reemplazar valores nulos.

```sql
SELECT
    product_name,
    COALESCE(supplier_name, 'Desconocido') AS supplier
FROM products;
```

### Procedimientos Almacenados (Stored Procedures)

Son bloques de código SQL que se almacenan en la base de datos y se pueden llamar desde otras consultas o aplicaciones.

Ayudan a modularizar la lógica de negocio y mejorar la seguridad.

```sql
CREATE PROCEDURE sp_InsertEmployee
    @employee_id INT,
    @first_name NVARCHAR(50),
    @last_name NVARCHAR(50)
AS
BEGIN
    INSERT INTO employees (employee_id, first_name, last_name)
    VALUES (@employee_id, @first_name, @last_name);
END;

-- Luego, podemos llamar al procedimiento almacenado para insertar un nuevo empleado
EXEC sp_InsertEmployee 101, 'John', 'Doe';
```
