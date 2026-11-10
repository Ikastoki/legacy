---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Variables"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Variables</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué son las variables?](#qué-son-las-variables)
- [Definición y asignación](#definición-y-asignación)
- [Tipos de datos](#tipos-de-datos)
- [Ámbito (scope)](#ámbito-scope)
- [Mutabilidad](#mutabilidad)
  - [Objetos mutables](#objetos-mutables)
  - [Objetos inmutables](#objetos-inmutables)
- [Nomenclatura](#nomenclatura)
- [Constantes](#constantes)
  - [Definición y uso](#definición-y-uso)

</div>
</div>

## ¿Qué son las variables?

Las variables son fundamentales en programación y se pueden entender como "contenedores" que almacenan datos que pueden cambiar durante la ejecución de un programa.

> Inciso
>
> Imagina que las variables son cajas etiquetadas. La etiqueta es el nombre de la variable, y el contenido de la caja es el valor almacenado. Puedes cambiar el contenido de la caja (el valor de la variable), pero la etiqueta (nombre de la variable) te permite siempre saber qué caja estás mirando.

## Definición y asignación

- Una variable es una referencia a un espacio de memoria donde se almacena un valor.
- Se les da un nombre simbólico (identificador) para poder referirse a ellas fácilmente.
- La asignación de una variable implica darle un valor inicial. Por ejemplo, en pseudocódigo, x = 5 asigna el valor 5 a la variable x.

## Tipos de datos

- Las variables pueden almacenar diferentes tipos de datos, como enteros, flotantes (números decimales), caracteres, cadenas de texto, booleanos (verdadero o falso), entre otros.
- En algunos lenguajes de programación, debes declarar el tipo de dato de una variable antes de usarla. En otros, el tipo se determina automáticamente cuando se asigna un valor.

## Ámbito (scope)

El ámbito de una variable determina dónde puede ser accedida dentro del código.

Puede ser:

- **local:** definida dentro de una función o bloque y accesible solo ahí.
- **global:** definida fuera de todas las funciones y accesible en cualquier parte del programa.

## Mutabilidad

La mutabilidad se refiere a la capacidad de un objeto para cambiar su estado o contenido después de haber sido creado. Dependiendo del lenguaje de programación, algunos tipos de datos son mutables, mientras que otros son inmutables.

### Objetos mutables

- Los objetos mutables pueden cambiar después de haber sido creados.
- Modificar un objeto mutable no crea un nuevo objeto; en cambio, el objeto existente se actualiza.

### Objetos inmutables

- Los objetos inmutables no pueden cambiar una vez creados.
- Si se necesita un valor diferente, se crea un nuevo objeto en lugar de modificar el existente.

## Nomenclatura

Los nombres de las variables suelen seguir ciertas convenciones para ser legibles y comprensibles. Por ejemplo, usar camelCase o snake_case para los nombres, evitando el uso de caracteres especiales y comenzando con letras (no números).

## Constantes

Las constantes son una forma especial de variables cuyo valor no cambia durante la ejecución del programa. Se utilizan para definir valores fijos que tienen significado y utilidad a lo largo del programa.

### Definición y uso

- Una constante se define y se le asigna un valor que **no cambiará**.
- Son útiles para mejorar la legibilidad y el mantenimiento del código, ya que proporcionan un único punto de definición para valores que se usan en múltiples lugares.
- En muchos lenguajes, las constantes se indican con una convención de nombres en mayúsculas (por ejemplo, PI, MAX_USERS).
</div>
