---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Tipos de retorno"
block: "Métodos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Tipos de retorno</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Tipos de retorno](#tipos-de-retorno)
  - [Tipo primitivo](#tipo-primitivo)
  - [Tipo de objeto](#tipo-de-objeto)
  - [Tipo void](#tipo-void)
  - [Tipo array](#tipo-array)
  - [Tipo interface](#tipo-interface)

</div>
</div>

## Tipos de retorno

Los métodos pueden tener diferentes tipos de retorno, lo que determina el tipo de valor que devuelven cuando se ejecutan.

### Tipo primitivo

Un método puede devolver un valor de un tipo primitivo, como int, double, boolean, char, etc.

```java
public int sumar(int a, int b) {
    return a + b;
}
```

### Tipo de objeto

Un método también puede devolver un objeto de cualquier clase. Esto puede ser un objeto de una clase predefinida en Java, como String, o un objeto de una clase definida por el usuario.

```java
public String obtenerSaludo() {
    return "¡Hola, mundo!";
}
```

### Tipo void

Si un método no devuelve ningún valor, su tipo de retorno se especifica como void.

```java
public void saludar() {
    System.out.println("¡Hola, mundo!");
}
```

### Tipo array

Un método también puede devolver un array de cualquier tipo de datos.

```java
public int[] obtenerArray() {
    int[] array = {1, 2, 3, 4, 5};
    return array;
}
```

### Tipo interface

Tipo de interfaz: Un método puede devolver un objeto que implementa una interfaz.

```java
public Comparable getMax(Comparable a, Comparable b) {
    return (a.compareTo(b) > 0) ? a : b;
}
```
