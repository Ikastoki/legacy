---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Arrays"
block: "Arrays"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Arrays</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Arrays](#arrays)
  - [Declaración de Arrays](#declaración-de-arrays)
  - [Inicialización de Array](#inicialización-de-array)
  - [Acceso a los Elementos del Array](#acceso-a-los-elementos-del-array)
- [Varios tipos](#varios-tipos)

</div>
</div>

## Arrays

Un array es una estructura de datos que contiene un conjunto ordenado de elementos del mismo tipo. Los arrays proporcionan una forma conveniente de almacenar y acceder a múltiples valores de datos utilizando un solo nombre de variable.

### Declaración de Arrays

```java
tipoDato[] nombreArray;

// Otra forma
tipoDato nombreArray[];

// Array tipo entero
int[] numeros;
```

### Inicialización de Array

```java
int[] numeros = {1, 2, 3, 4, 5};

// Inicializar con un tamaño
int[] numeros = new int[5];

// Inicialización con valores por defecto
int[] numeros = new int[]{1, 2, 3, 4, 5};
```

### Acceso a los Elementos del Array

Los elementos de un array se pueden acceder utilizando su índice (posición). El índice comienza desde cero y va hasta el tamaño del array menos uno.

```java
int[] numeros = {1, 2, 3, 4, 5};
int primerNumero = numeros[0]; // Accediendo al primer elemento
int segundoNumero = numeros[1]; // Accediendo al segundo elemento

// Usando un bucle for
int[] numeros = {1, 2, 3, 4, 5};

// Usando un bucle for para acceder a los elementos del array
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Elemento en la posición " + i + ": " + numeros[i]);
}

//
int[] numeros = {1, 2, 3, 4, 5};

// Usando un bucle for-each
for (int numero : numeros) {
    System.out.println("Elemento: " + numero);
}

// Usando un bucle while
int[] numeros = {1, 2, 3, 4, 5};
int indice = 0;

// Usando un bucle while para acceder a los elementos del array
while (indice < numeros.length) {
    System.out.println("Elemento en la posición " + indice + ": " + numeros[indice]);
    indice++; // Incrementa el índice para avanzar al siguiente elemento
}

```

## Varios tipos

En Java, no puedes crear un array que contenga varios tipos de datos diferentes. Los arrays en Java son estructuras de datos homogéneas, lo que significa que todos los elementos del array deben ser del mismo tipo de datos.

Por ejemplo, si creas un array de enteros (int[]), todos los elementos del array deben ser enteros. Si creas un array de cadenas (String[]), todos los elementos del array deben ser cadenas.

Si necesitas almacenar diferentes tipos de datos en una estructura de datos, podrías considerar usar colecciones de Java como ArrayList o List. Estas colecciones pueden contener elementos de diferentes tipos y proporcionan flexibilidad en la manipulación de datos.
