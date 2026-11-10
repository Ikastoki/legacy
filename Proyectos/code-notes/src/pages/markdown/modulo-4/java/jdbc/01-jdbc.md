---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "JDBC"
block: "JDBC"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">JDBC</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [JDBC](#jdbc)
- [Conexión a la Base de Datos](#conexión-a-la-base-de-datos)
- [Envío de Consultas SQL](#envío-de-consultas-sql)
- [Procesamiento de Resultados](#procesamiento-de-resultados)
- [Gestión de Transacciones](#gestión-de-transacciones)
- [Tratamiento de Excepciones](#tratamiento-de-excepciones)
- [Compatibilidad con Diferentes Bases de Datos](#compatibilidad-con-diferentes-bases-de-datos)
- [Funcionamiento Básico](#funcionamiento-básico)

</div>
</div>

## JDBC

JDBC (Java Database Connectivity) es una API estándar de Java que proporciona una interfaz para que las aplicaciones Java se conecten y accedan a bases de datos relacionales. JDBC permite a los desarrolladores escribir código en Java para enviar consultas SQL a la base de datos, recuperar datos de la base de datos y manipular la información almacenada en ella.

## Conexión a la Base de Datos

JDBC proporciona clases y métodos para establecer conexiones con bases de datos. Los desarrolladores pueden especificar la URL de conexión de la base de datos, el nombre de usuario y la contraseña para conectarse a la base de datos.

## Envío de Consultas SQL

Una vez que se establece una conexión, las aplicaciones pueden enviar consultas SQL a la base de datos utilizando JDBC. Las consultas pueden ser de varios tipos, como consultas de selección (SELECT), inserciones (INSERT), actualizaciones (UPDATE) o eliminaciones (DELETE).

## Procesamiento de Resultados

JDBC proporciona una interfaz para procesar los resultados devueltos por las consultas SQL. Los resultados se devuelven en forma de conjuntos de resultados (ResultSet), que contienen filas de datos que cumplen con la consulta.

## Gestión de Transacciones

JDBC admite la gestión de transacciones para garantizar la integridad y la consistencia de los datos. Las transacciones se pueden iniciar, confirmar o deshacer utilizando JDBC.

## Tratamiento de Excepciones

JDBC proporciona manejo de excepciones para detectar y manejar errores que pueden ocurrir durante la ejecución de consultas SQL o la interacción con la base de datos.

## Compatibilidad con Diferentes Bases de Datos

JDBC es compatible con una amplia gama de bases de datos relacionales, incluidas MySQL, PostgreSQL, Oracle, SQL Server y muchas otras. Esto permite a los desarrolladores escribir código de aplicación que sea independiente del proveedor de base de datos subyacente.

## Funcionamiento Básico

**Conexión a la Base de Datos:**

Conexión a la Base de Datos:
El primer paso para usar JDBC es establecer una conexión con la base de datos. Esto se realiza utilizando la clase Connection. Para establecer una conexión, necesitas proporcionar la URL de conexión de la base de datos, el nombre de usuario y la contraseña.

```java
String url = "jdbc:mysql://localhost:3306/mi_base_de_datos";
String usuario = "usuario";
String contraseña = "contraseña";
Connection conexion = DriverManager.getConnection(url, usuario, contraseña);
```

**Envío de Consultas SQL:**

Una vez que tienes una conexión establecida, puedes enviar consultas SQL a la base de datos utilizando la clase Statement o PreparedStatement. Las consultas SQL pueden ser de selección (SELECT), inserción (INSERT), actualización (UPDATE) o eliminación (DELETE).

```java
Statement statement = conexion.createStatement();
ResultSet resultado = statement.executeQuery("SELECT * FROM mi_tabla");
```

**Procesamiento de Resultados:**

Después de enviar una consulta, puedes procesar los resultados devueltos utilizando la clase ResultSet. Puedes iterar sobre el conjunto de resultados y acceder a los datos de cada fila utilizando los métodos next() y los métodos de acceso getXXX(), donde XXX es el tipo de dato de la columna.

```java
while (resultado.next()) {
    int id = resultado.getInt("id");
    String nombre = resultado.getString("nombre");
    System.out.println("ID: " + id + ", Nombre: " + nombre);
}
```

**Cierre de Recursos:**

Es importante cerrar adecuadamente los recursos JDBC después de su uso para liberar los recursos de la base de datos y evitar posibles fugas de memoria. Esto se realiza cerrando la conexión, el statement y el conjunto de resultados en un bloque finally o utilizando la estructura try-with-resources.

```java
try (Connection conexion = DriverManager.getConnection(url, usuario, contraseña);
     Statement statement = conexion.createStatement();
     ResultSet resultado = statement.executeQuery("SELECT * FROM mi_tabla")) {
    // Procesar resultados aquí
} catch (SQLException e) {
    e.printStackTrace();
}
```
