---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Clase de Array"
block: "Arrays"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Clase de Array</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Clase de Array](#clase-de-array)
- [Métodos](#métodos)
  - [toString()](#tostring)
  - [sort()](#sort)
  - [equals()](#equals)
  - [binarySearch()](#binarysearch)
  - [fill()](#fill)
- [Reflexión(reflection)](#reflexiónreflection)

</div>
</div>

## Clase de Array

En Java, la clase java.util.Arrays proporciona varios métodos estáticos para trabajar con arrays. Estos métodos permiten realizar diversas operaciones, como ordenar, buscar, comparar y manipular arrays de diferentes tipos de datos.

## Métodos

### toString()

Convierte un array en una cadena de caracteres.

```java
int[] numeros = {1, 2, 3, 4, 5};
String cadenaNumeros = Arrays.toString(numeros);
System.out.println(cadenaNumeros); // Imprime "[1, 2, 3, 4, 5]"
```

### sort()

Ordena los elementos de un array en orden ascendente.

```java
int[] numeros = {5, 2, 7, 1, 4};
Arrays.sort(numeros);
System.out.println(Arrays.toString(numeros)); // Imprime "[1, 2, 4, 5, 7]"
```

### equals()

Compara dos arrays para verificar si son iguales.

```java
int[] array1 = {1, 2, 3};
int[] array2 = {1, 2, 3};
boolean sonIguales = Arrays.equals(array1, array2);
// Imprime "¿Los arrays son iguales?: true"
System.out.println("¿Los arrays son iguales?: " + sonIguales);
```

### binarySearch()

Realiza una búsqueda binaria en un array ordenado para encontrar un elemento específico.

```java
int[] numeros = {1, 2, 3, 4, 5};
int indice = Arrays.binarySearch(numeros, 3);
System.out.println("El índice de 3 es: " + indice); // Imprime "El índice de 3 es: 2"
```

### fill()

Rellena todos los elementos de un array con un valor específico.

```java
int[] numeros = new int[5];
Arrays.fill(numeros, 0); // Rellena todos los elementos con el valor 0
System.out.println(Arrays.toString(numeros)); // Imprime "[0, 0, 0, 0, 0]"
```

## Reflexión(reflection)

La reflexión (reflection) es una característica que permite a un programa inspeccionar y modificar su propia estructura interna en tiempo de ejecución. La clase java.lang.reflect.Array es parte de esta API de reflexión y proporciona métodos estáticos para trabajar con arrays en tiempo de ejecución.

La clase Array ofrece métodos para crear nuevos arrays, obtener y modificar elementos de arrays, así como para obtener información sobre los tipos de arrays.

Algunos de los métodos más comunes de la clase Array incluyen:

- **newInstance(Class<?> componentType, int length):** Este método crea un nuevo array del tipo especificado (componentType) con la longitud dada (length).

- **get(Object array, int index):** Este método devuelve el elemento en la posición especificada (index) del array dado (array).

- **set(Object array, int index, Object value):** Este método establece el valor del elemento en la posición especificada (index) del array dado (array) al valor proporcionado (value).

- **getLength(Object array):** Este método devuelve la longitud del array dado (array).

- **getComponentType(Object array):** Este método devuelve el tipo de componente del array dado (array).

> ✍️ Nota
>
> La reflexión puede ser útil en situaciones en las que necesitas trabajar con arrays de forma dinámica en tiempo de ejecución, como al manipular datos genéricos o al trabajar con código que no conoce de antemano los tipos de datos con los que está trabajando. Sin embargo, la reflexión también puede hacer que el código sea más difícil de entender y mantener, por lo que debe usarse con precaución.
