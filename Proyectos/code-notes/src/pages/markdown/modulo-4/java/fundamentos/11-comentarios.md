---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Comentarios"
block: "Fundamentos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Comentarios</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Comentarios una sola línea](#comentarios-una-sola-línea)
- [Comentarios multilínea](#comentarios-multilínea)
- [Comentarios documentación(JavaDoc)](#comentarios-documentaciónjavadoc)

</div>
</div>

## Comentarios una sola línea

Estos comentarios son ideales para agregar explicaciones breves o aclaraciones sobre una línea de código. Se crean precediendo la línea de comentario con //.

```java
// Este es un comentario de una sola línea
int x = 5; // Esto asigna el valor 5 a la variable x
```

## Comentarios multilínea

Estos comentarios te permiten agregar explicaciones más detalladas que abarcan varias líneas. Se encierran entre /_ y _/.

```java
/*
 * Este es un comentario de varias líneas.
 * Puede extenderse a través de varias líneas.
 * Es útil para explicaciones más detalladas.
 */

```

## Comentarios documentación(JavaDoc)

JavaDoc es una herramienta que genera documentación a partir de comentarios escritos en el código fuente de Java. Esta documentación se genera en formato HTML y proporciona información sobre clases, interfaces, métodos y campos.

Para documentar tu código usando JavaDoc, simplemente añades comentarios especiales encima de tus clases, métodos, campos, etc. Estos comentarios deben comenzar con /\*_ y terminar con _/, y pueden contener etiquetas especiales precedidas por el símbolo @.

**Ejemplo**

```java
/**
 * Este método suma dos números enteros.
 *
 * @param a El primer número a sumar.
 * @param b El segundo número a sumar.
 * @return La suma de los dos números.
 */
public int sumar(int a, int b) {
    return a + b;
}
```

Después de haber escrito estos comentarios de JavaDoc, puedes usar la herramienta javadoc de la JDK para generar la documentación HTML. Simplemente ejecutas el comando javadoc seguido de los archivos fuente que contienen los comentarios de JavaDoc.

La documentación generada proporciona una referencia útil para aquellos que utilizan tu código, ya que pueden ver fácilmente cómo usar tus clases, métodos y otros elementos. Además, muchos IDEs como Eclipse o IntelliJ IDEA pueden mostrar esta documentación directamente en el editor mientras escribes código, lo que facilita el desarrollo.
