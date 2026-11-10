---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "StringJoiner"
block: "Java 8"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">StringJoiner</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [StringJoiner](#stringjoiner)
- [Creación de un StringJoiner](#creación-de-un-stringjoiner)
- [Agregando Elementos](#agregando-elementos)
- [Obteniendo la Cadena Resultante](#obteniendo-la-cadena-resultante)
- [Manejo de Casos Especiales](#manejo-de-casos-especiales)
- [Usando en Streams](#usando-en-streams)

</div>
</div>

## StringJoiner

StringJoiner es una clase introducida en Java 8 que se utiliza para construir cadenas concatenando elementos separados por un delimitador. Es especialmente útil cuando necesitas construir una cadena a partir de una colección de elementos, como una lista o un array.

## Creación de un StringJoiner

Puedes crear una instancia de StringJoiner especificando el delimitador que se utilizará para separar los elementos. Opcionalmente, puedes especificar un prefijo y un sufijo que se agregarán al principio y al final de la cadena resultante.

```java
StringJoiner joiner = new StringJoiner(", ", "[", "]");
```

## Agregando Elementos

Puedes agregar elementos al StringJoiner utilizando el método add(). Esto concatena los elementos con el delimitador especificado.

```java
joiner.add("apple");
joiner.add("banana");
joiner.add("orange");
```

## Obteniendo la Cadena Resultante

Una vez que hayas agregado todos los elementos necesarios, puedes obtener la cadena resultante llamando al método toString() del StringJoiner. Esto devolverá una cadena que contiene todos los elementos concatenados con el delimitador.

```java
String resultado = joiner.toString();
System.out.println(resultado); // Imprime: [apple, banana, orange]
```

## Manejo de Casos Especiales

StringJoiner también proporciona métodos para manejar casos especiales, como cuando no hay elementos para unir. Puedes especificar un valor predeterminado a devolver en estos casos utilizando el método setEmptyValue().

```java
StringJoiner joiner = new StringJoiner(", ");
joiner.setEmptyValue("Sin elementos");
```

## Usando en Streams

StringJoiner se puede utilizar en combinación con streams para construir cadenas a partir de colecciones de elementos.

```java
List<String> frutas = Arrays.asList("apple", "banana", "orange");
StringJoiner joiner = new StringJoiner(", ");
frutas.forEach(joiner::add);
String resultado = joiner.toString();
```
