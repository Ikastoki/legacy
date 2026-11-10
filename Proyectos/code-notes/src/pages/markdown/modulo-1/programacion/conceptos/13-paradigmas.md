---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Paradigmas"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Introducción a los paradigmas de programación</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Paradigmas de programación](#paradigmas-de-programación)
- [Paradigma procedural](#paradigma-procedural)
- [Paradigma orientado a objetos](#paradigma-orientado-a-objetos)
- [Paradigma funcional](#paradigma-funcional)
- [Paradigma lógico](#paradigma-lógico)
- [Paradigma de programación reactiva](#paradigma-de-programación-reactiva)
- [Lenguajes diseñados](#lenguajes-diseñados)
  - [JavaScript](#javascript)
  - [Java](#java)

</div>
</div>

## Paradigmas de programación

Los paradigmas de programación son enfoques o estilos para resolver problemas y estructurar programas mediante un conjunto de principios y conceptos. Cada paradigma tiene su propia filosofía y reglas que influyen en cómo se escribe y organiza el código.

Cada paradigma de programación ofrece una perspectiva única y herramientas específicas para abordar problemas. Comprender estos paradigmas permite a los programadores elegir el enfoque más adecuado para sus proyectos y mejorar la calidad y eficiencia de su código. Explorar y aprender diferentes paradigmas también enriquece la capacidad de un programador para adaptarse a diversas situaciones y desafíos en el mundo de la programación.

## Paradigma procedural

El paradigma procedural, o imperativo, se basa en la idea de dar a la computadora una secuencia de instrucciones para realizar una tarea. Los programas se estructuran en procedimientos o funciones que contienen estas instrucciones.

- Uso de variables y estructuras de control (if, for, while).

- Organización del código en funciones o procedimientos.

- **Ejemplos de lenguajes:** C, Pascal, Python (parcialmente).

## Paradigma orientado a objetos

El paradigma orientado a objetos (OOP) se centra en la creación de "objetos", que son instancias de "clases". Las clases definen las propiedades y comportamientos de los objetos.

- **Encapsulación:** Los datos y métodos relacionados se agrupan en objetos.

- **Herencia:** Las clases pueden heredar propiedades y métodos de otras clases.

- **Polimorfismo:** Las funciones pueden comportarse de manera diferente según el objeto que las invoca.

- **Ejemplos de lenguajes:** Java, C++, Python (parcialmente), Ruby.

## Paradigma funcional

El paradigma funcional se basa en la utilización de funciones matemáticas puras. En este paradigma, las funciones no tienen efectos secundarios y siempre producen el mismo resultado para los mismos argumentos.

- **Inmutabilidad:** Las variables no cambian una vez asignadas.

- **Funciones de primera clase:** Las funciones se tratan como valores y se pueden pasar como argumentos.

- **Ejemplos de lenguajes:** Haskell, Lisp, Erlang, Scala (parcialmente).

## Paradigma lógico

El paradigma lógico se basa en la utilización de lógica formal para declarar relaciones y reglas que describen un problema. Los programas en este paradigma consisten en hechos y reglas, y el motor de inferencia del lenguaje se encarga de encontrar soluciones basadas en estas declaraciones.

- **Declarativo:** Se centra en el "qué" en lugar del "cómo" resolver un problema.

- Basado en reglas y hechos.

- **Ejemplos de lenguajes:** Prolog, Datalog.

## Paradigma de programación reactiva

El paradigma de programación reactiva se centra en la propagación de cambios y la programación asíncrona. Se utiliza principalmente en el desarrollo de interfaces de usuario y aplicaciones en tiempo real.

- Basado en flujos de datos y propagación de cambios.

- Asíncrono y orientado a eventos.

- **Ejemplos de lenguajes y bibliotecas:** RxJS (JavaScript), Reactor (Java), Akka (Scala).

## Lenguajes diseñados

Muchos lenguajes de programación están diseñados con un paradigma principal en mente, aunque algunos son más flexibles y pueden soportar múltiples paradigmas.

> ✍️ Nota
>
> Si bien muchos lenguajes de programación están diseñados con un paradigma específico en mente, la evolución de los lenguajes y las necesidades de los desarrolladores han llevado a la inclusión de características que soportan múltiples paradigmas. Esto permite una mayor flexibilidad y la posibilidad de utilizar el mejor enfoque para resolver un problema particular.

### JavaScript

JavaScript es principalmente un lenguaje de programación orientado a objetos basado en **prototipos**, pero también soporta programación funcional y procedural.

### Java

Java es un lenguaje de programación orientado a objetos puro que sigue el paradigma de programación orientado a objetos (OOP) de manera estricta.

Java también puede soportar programación funcional en una medida limitada, especialmente con la introducción de expresiones lambda y la API de Streams en Java 8.

</div>
