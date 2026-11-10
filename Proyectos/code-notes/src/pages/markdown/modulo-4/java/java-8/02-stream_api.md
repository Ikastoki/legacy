---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Streams"
block: "Java 8"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Streams</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Streams](#streams)
- [Creación de Streams](#creación-de-streams)
- [Operaciones Intermedias](#operaciones-intermedias)
- [Operaciones Terminales](#operaciones-terminales)
- [Operaciones Lazy](#operaciones-lazy)
- [Paralelismo](#paralelismo)
- [Filter](#filter)
  - [Sintaxis](#sintaxis)
  - [Ejemplo Básico](#ejemplo-básico)
  - [Predicados](#predicados)
  - [Encadenamiento de Operaciones](#encadenamiento-de-operaciones)

</div>
</div>

## Streams

El API de Streams en Java 8 es una de las características más potentes e importantes que se introdujeron en esta versión. Proporciona una forma declarativa y funcional de operar en conjuntos de datos, permitiendo realizar operaciones de filtrado, mapeo, reducción y más de manera eficiente.

## Creación de Streams

Los Streams en Java se pueden crear a partir de colecciones, arreglos, generadores, y otros orígenes de datos.

```java
// Creación de un Stream a partir de una colección
List<String> lista = Arrays.asList("a", "b", "c");
Stream<String> streamDeLista = lista.stream();

// Creación de un Stream a partir de un arreglo
String[] arreglo = {"d", "e", "f"};
Stream<String> streamDeArreglo = Arrays.stream(arreglo);

// Creación de un Stream de valores individuales
Stream<Integer> streamDeValores = Stream.of(1, 2, 3);

// Creación de un Stream mediante un generador
Stream<Integer> streamDeGenerador = Stream.iterate(0, n -> n + 2).limit(5);
```

## Operaciones Intermedias

Las operaciones intermedias se pueden encadenar en un Stream para transformar, filtrar o manipular los elementos del Stream.

```java
// Filtrado de elementos que cumplen con un predicado
Stream<String> resultadoFiltrado = streamDeLista.filter(s -> s.startsWith("a"));

// Mapeo de elementos a un nuevo tipo
Stream<Integer> resultadoMapeado = streamDeLista.map(String::length);

// Ordenamiento de elementos
Stream<String> resultadoOrdenado = streamDeLista.sorted();
```

## Operaciones Terminales

Las operaciones terminales son aquellas que producen un resultado final o efectúan un efecto secundario, y marcan el final de la cadena de operaciones en un Stream

```java
// Recolección de elementos en una colección
List<String> resultadoColeccion = streamDeLista.collect(Collectors.toList());

// Conteo de elementos
long cantidadElementos = streamDeLista.count();

// Reducción de elementos a un solo valor
Optional<String> resultadoReduccion = streamDeLista.reduce((s1, s2) -> s1 + s2);

// Iteración y procesamiento de elementos
streamDeLista.forEach(System.out::println);
```

## Operaciones Lazy

Las operaciones en un Stream son evaluadas de forma perezosa (lazy), lo que significa que no se ejecutan hasta que se necesita el resultado final. Esto permite optimizaciones de rendimiento al evitar el procesamiento innecesario de elementos en el Stream.

## Paralelismo

Los Streams en Java 8 pueden aprovechar el paralelismo de manera transparente mediante el método parallel() o mediante la operación parallelStream(). Esto permite realizar operaciones en paralelo en conjuntos de datos grandes, aprovechando múltiples núcleos de procesamiento.

## Filter

En Java 8, el método filter() se utiliza en los streams para filtrar elementos según un predicado dado. Esto significa que puedes usar el método filter() para seleccionar elementos específicos de un stream que cumplan ciertas condiciones.

### Sintaxis

El método filter() se invoca en un stream y toma como argumento un predicado, que es una expresión lambda que especifica la condición que deben cumplir los elementos del stream.

```java
Stream<T> filter(Predicate<? super T> predicate)
```

### Ejemplo Básico

Supongamos que tienes un stream de números y quieres filtrar solo los números pares.

```java
List<Integer> numeros = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
List<Integer> numerosPares = numeros.stream()
                                   .filter(n -> n % 2 == 0)
                                   .collect(Collectors.toList());
System.out.println(numerosPares); // Imprime: [2, 4, 6, 8, 10]
```

### Predicados

El argumento del método filter() es un objeto de tipo Predicate, que representa un predicado, es decir, una condición que devuelve true o false.

```java
// Expresión lambda para filtrar números mayores que 5
numeros.stream().filter(n -> n > 5);

// Referencia a un método para filtrar cadenas que comiencen con "a"
cadenas.stream().filter(s -> s.startsWith("a"));
```

### Encadenamiento de Operaciones

Los métodos de los streams, incluido filter(), se pueden encadenar para realizar múltiples operaciones en un solo stream. Esto permite escribir código conciso y expresivo.

```java
List<String> cadenas = Arrays.asList("apple", "banana", "orange", "avocado");
List<String> resultado = cadenas.stream()
                                .filter(s -> s.startsWith("a"))
                                .map(String::toUpperCase)
                                .collect(Collectors.toList());
System.out.println(resultado); // Imprime: [APPLE, AVOCADO]
```
