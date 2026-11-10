---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Multidimensional"
block: "Arrays"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Multidimensional</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Multidimensional](#multidimensional)
  - [Declaraciones](#declaraciones)
  - [Inicialización](#inicialización)
  - [Acceso a los Elementos](#acceso-a-los-elementos)

</div>
</div>

## Multidimensional

Un array multidimensional en Java es un array que contiene otros arrays como sus elementos. Puedes pensar en un array multidimensional como una tabla, donde cada "celda" de la tabla contiene un valor. Los arrays multidimensionales se utilizan comúnmente para representar estructuras de datos bidimensionales o tridimensionales, como matrices o cubos.

### Declaraciones

```java
tipoDato[][] nombreArray;

int[][] matriz;
```

### Inicialización

```java
int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// Con tamaño
int[][] matriz = new int[3][3];
```

### Acceso a los Elementos

```java
int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// Accediendo al elemento en la segunda fila y la tercera columna
int elemento = matriz[1][2]; // elemento == 6

// Bucle for
int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

// Iterando sobre todos los elementos de la matriz
for (int i = 0; i < matriz.length; i++) {
    for (int j = 0; j < matriz[i].length; j++) {
        System.out.println("Elemento en la fila " + i + " y columna " + j + ": " + matriz[i][j]);
    }
}

// Bucle while
int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

int fila = 0;
while (fila < matriz.length) {
    int columna = 0;
    while (columna < matriz[fila].length) {
        System.out.println("Elemento en la fila " + fila + " y columna " + columna + ": " + matriz[fila][columna]);
        columna++; // Incrementa el índice de la columna
    }
    fila++; // Incrementa el índice de la fila
}
```
