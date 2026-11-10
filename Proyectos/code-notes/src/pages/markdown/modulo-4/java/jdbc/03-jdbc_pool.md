---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Pool de Conexiones"
block: "JDBC"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pool de Conexiones</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [JDBC con Pool de Conexiones](#jdbc-con-pool-de-conexiones)
- [Ejemplo](#ejemplo)

</div>
</div>

## JDBC con Pool de Conexiones

Un JDBC Connection Pool (o pool de conexiones JDBC) es una técnica para mejorar el rendimiento y la escalabilidad de las aplicaciones que acceden a una base de datos utilizando JDBC. En lugar de abrir y cerrar una conexión a la base de datos cada vez que se necesita realizar una operación, se utilizan conexiones preexistentes que se mantienen en un "pool" (grupo) de conexiones disponibles.

## Ejemplo

1. Primero, necesitas incluir las dependencias de Commons DBCP y el controlador JDBC de MySQL en tu proyecto. Puedes hacerlo agregando estas líneas a tu archivo pom.xml si estás usando Maven

```xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-dbcp2</artifactId>
    <version>2.9.0</version>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.28</version>
</dependency>
```

2. Luego, puedes configurar y utilizar el pool de conexiones en tu aplicación.

```java
import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;
import org.apache.commons.dbcp2.BasicDataSource;

public class ConnectionPoolExample {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/mydatabase";
    private static final String DB_USER = "username";
    private static final String DB_PASSWORD = "password";

    private static DataSource dataSource;

    public static void main(String[] args) {
        // Configurar el pool de conexiones
        setupDataSource();

        // Utilizar el pool de conexiones
        try (Connection connection = dataSource.getConnection()) {
            // Realizar operaciones con la conexión
            // Por ejemplo, ejecutar consultas, insertar datos, etc.
            // Aquí puedes utilizar la conexión como lo harías normalmente con JDBC
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void setupDataSource() {
        BasicDataSource ds = new BasicDataSource();
        ds.setDriverClassName("com.mysql.cj.jdbc.Driver");
        ds.setUrl(DB_URL);
        ds.setUsername(DB_USER);
        ds.setPassword(DB_PASSWORD);

        // Configurar el tamaño máximo del pool de conexiones
        ds.setMaxTotal(10);

        // Configurar otras propiedades del pool de conexiones si es necesario

        dataSource = ds;
    }
}
```

En este ejemplo:

- Se configura un DataSource utilizando BasicDataSource de Commons DBCP.
- Se establecen la URL de la base de datos, el nombre de usuario y la contraseña.
- Se configura el tamaño máximo del pool de conexiones con setMaxTotal().
- Se obtiene una conexión del pool utilizando getConnection().
- Se realiza alguna operación con la conexión obtenida.
- La conexión se libera automáticamente una vez que se completa la operación utilizando un bloque try-with-resources.

> ✍️ Nota
>
> Utilizar un pool de conexiones JDBC puede mejorar el rendimiento y la escalabilidad de tu aplicación al evitar el sobrecosto de abrir y cerrar conexiones a la base de datos repetidamente.
