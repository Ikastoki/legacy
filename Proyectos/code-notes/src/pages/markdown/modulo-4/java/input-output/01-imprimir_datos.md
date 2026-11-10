---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Imprimir Datos"
block: "Input/Output"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Imprimir Datos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Imprimir Datos](#imprimir-datos)
  - [System.out](#systemout)
  - [PrintWriter](#printwriter)
  - [System.err](#systemerr)
  - [Logger](#logger)

</div>
</div>

## Imprimir Datos

### System.out

- **System.out.print():** Este método se utiliza para imprimir datos en la consola sin agregar una nueva línea al final. Puedes utilizarlo para imprimir valores de diferentes tipos, como cadenas, enteros, flotantes, caracteres, booleanos, etc.

- **System.out.println():** Similar a System.out.print(), pero agrega una nueva línea al final después de imprimir los datos. Esto hace que la próxima salida en la consola se imprima en una nueva línea.

- **System.out.printf():** Este método permite imprimir datos en la consola con formato utilizando especificadores de formato. Es útil cuando necesitas controlar el formato de salida, como imprimir números con un cierto número de decimales.

- **System.out.format():** es esencialmente lo mismo que System.out.printf(), pero se proporciona como una alternativa para mayor claridad y consistencia en el código.

**Ejemplos**

```java
System.out.println("Hola, mundo!");
System.out.print("¡Hola, ");
System.out.println("mundo!");

int num = 10;
double pi = 3.14159;
System.out.printf("El valor de num es %d y el valor de pi es %.2f", num, pi);
```

### PrintWriter

La clase PrintWriter se utiliza para imprimir datos en archivos u otros tipos de salidas. Puedes crear un objeto PrintWriter para un archivo específico y luego utilizar métodos como print() o println() para escribir datos en el archivo.

**Ejemplo:**

```java
PrintWriter writer = new PrintWriter("archivo.txt");
writer.println("Este es un ejemplo de texto en un archivo.");
writer.close();
```

### System.err

La clase System también tiene un campo err que representa la salida estándar de error. Puedes usar System.err.println() para imprimir mensajes de error en la consola de error estándar.

```java
System.err.println("Error: No se pudo abrir el archivo.");
```

### Logger

Java proporciona la API de registro (java.util.logging) para imprimir mensajes de registro. Puedes crear un objeto Logger y utilizar métodos como info(), warning(), severe(), entre otros, para imprimir mensajes de registro con diferentes niveles de severidad.

```java
Logger logger = Logger.getLogger("MiLogger");
logger.info("Este es un mensaje de registro de información.");
```