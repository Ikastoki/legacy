---
layout: ../../../../layouts/modulo-4/SQL.astro
title: "Restricciones de datos"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Restricciones de datos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Restricciones de datos](#restricciones-de-datos)
- [Restricciones de clave primaria (Primary Key Constraints)](#restricciones-de-clave-primaria-primary-key-constraints)
- [Restricciones de clave foránea (Foreign Key Constraints)](#restricciones-de-clave-foránea-foreign-key-constraints)
- [Restricciones de unicidad (Unique Constraints)](#restricciones-de-unicidad-unique-constraints)
- [Restricciones de verificación (Check Constraints)](#restricciones-de-verificación-check-constraints)
- [NOT NULL](#not-null)

</div>
</div>

## Restricciones de datos

Los "data constraints" (restricciones de datos) son reglas aplicadas a los datos en una base de datos para garantizar su integridad y consistencia. Estas restricciones pueden ser definidas durante el diseño de la base de datos y se aplican a nivel de columna o tabla.

## Restricciones de clave primaria (Primary Key Constraints)

Estas restricciones garantizan que cada fila en una tabla tenga un valor único en la columna designada como clave primaria. No se pueden permitir valores duplicados y, además, no se permite que la clave primaria tenga valores nulos.

```sql
-- Crear Tabla con clave primaria
CREATE TABLE Employees (
    ID INT PRIMARY KEY,
    NAME TEXT,
    AGE INT,
    ADDRESS CHAR(50)
);

-- Añadir clave primaria a una tabla existente
ALTER TABLE Employees
ADD PRIMARY KEY (ID);

-- Clave primaria compuesta
CREATE TABLE Customers (
    CustomerID INT,
    StoreID INT,
    CONSTRAINT pk_CustomerID_StoreID PRIMARY KEY (CustomerID,StoreID)
);
```

## Restricciones de clave foránea (Foreign Key Constraints)

Estas restricciones aseguran la integridad referencial entre dos tablas. Garantizan que los valores en una columna (la clave foránea) coincidan con los valores en la columna de otra tabla (la clave primaria) o que sean nulos si se permite.

```sql
ALTER TABLE Orders
ADD FOREIGN KEY (customer_id)
REFERENCES Customers (customer_id);
```

## Restricciones de unicidad (Unique Constraints)

Estas restricciones aseguran que los valores en una columna, o combinaciones de columnas, sean únicos en toda la tabla. A diferencia de la clave primaria, las restricciones de unicidad permiten valores nulos, pero solo se permite un valor nulo en la columna si la restricción de unicidad se aplica a una sola columna.

```sql
CREATE TABLE Employees (
    ID int NOT NULL,
    Name varchar (255) NOT NULL,
    Email varchar (255) UNIQUE
);

-- Añadir una constrain única a una tabla existente
ALTER TABLE table_name
ADD UNIQUE (column1, column2, ...);

-- Eliminar una constrain única
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;
```

## Restricciones de verificación (Check Constraints)

Estas restricciones permiten definir reglas específicas que los valores en una columna deben cumplir. Por ejemplo, puedes usar una restricción de verificación para garantizar que los valores en una columna numérica estén dentro de un rango específico o que cumplan ciertas condiciones lógicas.

```sql
-- Única columna
CREATE TABLE Employees (
    ID int NOT NULL,
    Age int,
    Salary int CHECK (Salary>0),
);

-- Multiple columna
CREATE TABLE Employees (
    ID int NOT NULL,
    Age int,
    Salary int,
    CONSTRAINT CHK_Person CHECK (Age>=18 AND Salary>=0)
);

-- Con ALTER TABLE
ALTER TABLE Employees
ADD CONSTRAINT CHK_EmployeeAge CHECK (Age >= 21 AND Age <= 60);
```

## NOT NULL

Esta restricción asegura que una columna no acepte valores nulos, es decir, cada fila debe contener un valor en esa columna y no puede ser nulo.

Al definir una columna con la restricción NOT NULL, estás indicando que esa columna no puede tener valores nulos. Por ejemplo, al definir una columna "nombre" en una tabla de empleados como NOT NULL, garantizas que cada empleado tenga un nombre registrado en esa columna.

```sql
CREATE TABLE Employees (
    ID int NOT NULL,
    Name varchar(255) NOT NULL,
    Age int,
    Address varchar(255)
);

-- Tabla existente
ALTER TABLE Employees
MODIFY Address varchar(255) NOT NULL;
```
