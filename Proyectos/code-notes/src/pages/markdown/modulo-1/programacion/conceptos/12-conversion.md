---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Conversión"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Conversión</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Proceso de conversión](#proceso-de-conversión)
- [Compilación](#compilación)
  - [Pasos del proceso de compilación](#pasos-del-proceso-de-compilación)
  - [Ejecución del código compilado](#ejecución-del-código-compilado)
- [Interpretación](#interpretación)
  - [Características de la interpretación](#características-de-la-interpretación)
- [Elección entre interpretación y compilación](#elección-entre-interpretación-y-compilación)

</div>
</div>

## Proceso de conversión

El proceso de conversión del lenguaje, también conocido como compilación o interpretación, se refiere a la transformación del código fuente escrito en un lenguaje de programación a un formato ejecutable que la computadora puede entender y ejecutar. Este proceso varía dependiendo del tipo de lenguaje de programación y del enfoque utilizado para ejecutar el programa.

> ✍️ Nota
>
> Ejemplos de lenguajes de programación que se compilan antes de la ejecución: C, C#, Java.

## Compilación

La compilación es el proceso de traducción del código fuente de un programa, escrito en un lenguaje de programación de alto nivel, a un código ejecutable en un lenguaje de bajo nivel que la computadora puede entender directamente. Este proceso se realiza utilizando un programa llamado "compilador".

### Pasos del proceso de compilación

1. **Análisis léxico:** El compilador escanea el código fuente y divide las secuencias de caracteres en componentes léxicos, como palabras clave, identificadores, operadores y literales.

2. **Análisis sintáctico:** El compilador analiza la estructura gramatical del código fuente para identificar la sintaxis correcta del lenguaje de programación. Esto implica la construcción de un árbol de sintaxis abstracta que representa la estructura del programa.

3. **Generación de código intermedio:** Basado en la estructura del árbol de sintaxis abstracta, el compilador genera un código intermedio que representa el programa en una forma más simple y abstracta. Este código intermedio puede ser en forma de código ensamblador, código objeto o bytecode, dependiendo del diseño del compilador y del lenguaje de programación.

4. **Optimización de código:** Opcionalmente, el compilador puede realizar optimizaciones en el código intermedio para mejorar el rendimiento y la eficiencia del programa. Estas optimizaciones pueden incluir la eliminación de código redundante, la reorganización de instrucciones y la reducción del uso de recursos.

5. **Generación de código ejecutable:** Finalmente, el compilador traduce el código intermedio optimizado en código ejecutable para la plataforma de destino. Esto puede implicar la generación de un archivo ejecutable directamente o la producción de código objeto que luego se enlazará con otras partes del programa para formar un ejecutable completo.

### Ejecución del código compilado

Una vez que se ha generado el código ejecutable, este puede ser ejecutado directamente por la computadora. El código compilado es independiente del compilador y puede ejecutarse sin necesidad de volver a compilar el programa cada vez que se ejecuta. Esto proporciona eficiencia y rendimiento, ya que el código ha sido traducido completamente a un formato que la computadora puede entender y ejecutar directamente.

## Interpretación

La interpretación, o ejecución de programas interpretados, es un enfoque alternativo al proceso de compilación para ejecutar programas escritos en lenguajes de programación. En lugar de traducir todo el código fuente a un formato ejecutable antes de la ejecución, como se hace en el proceso de compilación, un programa especial llamado "intérprete" lee y ejecuta el código fuente línea por línea en tiempo real.

> ✍️ Nota
>
> Ejemplos de lenguajes interpretados: JavaScript, Python, PHP.

### Características de la interpretación

- **Ejecución en tiempo real:** El intérprete lee y ejecuta el código fuente línea por línea en tiempo real, sin necesidad de generar un archivo ejecutable independiente.

- **No hay fase de compilación previa:** No se requiere una fase de compilación previa, ya que el código fuente se ejecuta directamente por el intérprete.

- **Flexibilidad y portabilidad:** Debido a que el código fuente se ejecuta directamente, los programas interpretados suelen ser más portátiles y pueden ejecutarse en cualquier plataforma que tenga un intérprete disponible.

- **Menor eficiencia:** La interpretación puede ser menos eficiente en términos de tiempo de ejecución en comparación con la compilación, ya que el código se traduce y ejecuta línea por línea en tiempo real.

## Elección entre interpretación y compilación

La elección entre interpretación y compilación depende de los requisitos y preferencias del proyecto, así como de las necesidades de rendimiento y portabilidad del programa. Algunos lenguajes, como Java, utilizan una combinación de ambos enfoques, compilando el código a bytecode que luego se interpreta o se compila justo a tiempo (JIT).

</div>
