---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Tipado"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Tipado de los lenguajes</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Tipado de los lenguajes](#tipado-de-los-lenguajes)
- [Tipado estático](#tipado-estático)
- [Tipado dinámico](#tipado-dinámico)
- [Lenguajes fuertemente tipado](#lenguajes-fuertemente-tipado)
  - [Característica](#característica)
- [Lenguajes débilmente tipado](#lenguajes-débilmente-tipado)
  - [Características](#características)

</div>
</div>

## Tipado de los lenguajes

Los lenguajes de programación se pueden clasificar según su sistema de tipado, que determina cómo se manejan los tipos de datos en el código.

## Tipado estático

En los lenguajes con tipado estático, los tipos de datos de las variables se comprueban en tiempo de compilación, es decir, antes de que se ejecute el programa. Esto significa que se deben declarar explícitamente los tipos de datos de las variables y que no se permiten conversiones implícitas entre tipos de datos diferentes.

Proporciona mayor seguridad y detección de errores en tiempo de compilación, lo que puede ayudar a evitar errores de tipo durante la ejecución del programa. Sin embargo, puede requerir más código debido a las declaraciones de tipos explícitas.

> ✍️ Nota
>
> Algunos lenguajes de tipado estático son Java, C, C#, Rust.

## Tipado dinámico

En los lenguajes con tipado dinámico, los tipos de datos de las variables se comprueban en tiempo de ejecución, es decir, mientras se ejecuta el programa. Esto significa que no es necesario declarar explícitamente los tipos de datos de las variables y que las conversiones entre tipos de datos pueden ocurrir de manera implícita.

Ofrece mayor flexibilidad y facilidad de uso, ya que no es necesario preocuparse por las declaraciones de tipos y las conversiones de tipos se manejan automáticamente. Sin embargo, puede aumentar el riesgo de errores de tipo durante la ejecución del programa.

> ✍️ Nota
>
> Algunos lenguajes de tipado estático son JavaScript, PHP, Python.

## Lenguajes fuertemente tipado

Un lenguaje de programación se considera fuertemente tipado cuando el tipo de datos de una variable se verifica de manera estricta y precisa durante la compilación o la ejecución del programa. Esto significa que, en un lenguaje fuertemente tipado, no se permiten conversiones automáticas o implícitas entre diferentes tipos de datos, y cualquier operación que implique tipos de datos incompatibles generará un error.

### Característica

- **Verificación de tipo rigurosa:** Se realizan comprobaciones estrictas para garantizar que los tipos de datos se utilicen de manera coherente y segura en el código.
- **No hay conversión implícita:** Las conversiones automáticas entre tipos de datos no están permitidas, lo que significa que se deben realizar explícitamente si es necesario cambiar entre tipos.
- **Seguridad y coherencia:** La rigurosa verificación de tipos contribuye a la seguridad y la coherencia del código, ayudando a prevenir errores y comportamientos inesperados.

## Lenguajes débilmente tipado

El opuesto de un lenguaje de programación fuertemente tipado es un lenguaje de programación débilmente tipado o dinámicamente tipado. En estos lenguajes, las conversiones entre diferentes tipos de datos pueden ocurrir de manera implícita, y la verificación de tipos puede ser menos rigurosa o puede ocurrir en tiempo de ejecución en lugar de en tiempo de compilación.

### Características

- **Conversiones implícitas:** Las conversiones entre diferentes tipos de datos pueden ocurrir automáticamente sin necesidad de una conversión explícita por parte del programador.

- **Verificación de tipo flexible:** La verificación de tipos puede ser menos rigurosa y puede ocurrir en tiempo de ejecución en lugar de en tiempo de compilación.

- **Menos restricciones:** Los lenguajes débilmente tipados pueden permitir un mayor grado de flexibilidad en el manejo de tipos de datos, pero esto también puede aumentar el riesgo de errores de programación.

</div>
