---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Salida Formateada"
block: "Input/Output"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Salida Formateada</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Salida Formateada](#salida-formateada)

</div>
</div>

## Salida Formateada

En Java, la salida formateada se refiere a la presentación de datos en un formato específico y estructurado utilizando métodos como System.out.printf() y String.format(). Estos métodos permiten controlar la apariencia de los datos que se imprimen en la consola o se almacenan en cadenas de texto, lo que facilita la visualización y comprensión de la información.

En Java, la salida formateada se refiere a la presentación de datos en un formato específico y estructurado utilizando métodos como System.out.printf() y String.format(). Estos métodos permiten controlar la apariencia de los datos que se imprimen en la consola o se almacenan en cadenas de texto, lo que facilita la visualización y comprensión de la información.

La salida formateada se realiza utilizando especificadores de formato en las cadenas de formato. Estos especificadores indican cómo se deben formatear los diferentes tipos de datos, como cadenas, enteros, números de punto flotante, fechas, etc. Algunos de los especificadores de formato comunes incluyen:

- `%s` para cadenas.
- `%d` para enteros.
- `%f` para números de punto flotante.
- `%n` para nueva línea.
- `%t` para formatos de fecha y hora.

**Ejemplo**

```java
int edad = 30;
double altura = 1.75;
String nombre = "Juan";

System.out.printf("Nombre: %s, Edad: %d, Altura: %.2f metros%n", nombre, edad, altura);
```
