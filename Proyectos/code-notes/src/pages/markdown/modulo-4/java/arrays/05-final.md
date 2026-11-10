---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Final Array"
block: "Arrays"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Final Array</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Final Array](#final-array)
  - [Final Array Reference (Referencia final de array)](#final-array-reference-referencia-final-de-array)
  - [Final Array Elements (Elementos finales del array)](#final-array-elements-elementos-finales-del-array)
  - [Final Array (Array final)](#final-array-array-final)

</div>
</div>

## Final Array

La palabra clave final se puede utilizar con variables, métodos y clases para denotar que no se pueden modificar después de su inicialización. Cuando se aplica a un array, final indica que la referencia al array no cambiará después de la inicialización, lo que significa que no se puede asignar otro array a esa referencia.

### Final Array Reference (Referencia final de array)

```java
final int[] numeros = {1, 2, 3};
```

En este caso, la referencia números es final, lo que significa que no se puede asignar otro array a números. Sin embargo, los elementos del array números aún pueden ser modificados.

### Final Array Elements (Elementos finales del array)

```java
final int[] numeros = {1, 2, 3};
numeros[0] = 5; // Esto es válido, se puede modificar el contenido del array
```

En este caso, la referencia al array números es final, pero los elementos del array aún pueden ser modificados.

### Final Array (Array final)

```java
final int[] numeros = {1, 2, 3};
// Esto no es válido, no se puede asignar un nuevo array a la referencia final
// numeros = new int[]{4, 5, 6};
```

En este caso, tanto la referencia al array como los elementos del array son finales, lo que significa que no se puede asignar otro array a la referencia numeros ni modificar los elementos del array.
