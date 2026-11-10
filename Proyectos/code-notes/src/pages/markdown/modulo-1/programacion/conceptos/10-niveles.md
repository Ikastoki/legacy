---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Niveles"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Niveles de los lenguajes</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Niveles de los lenguajes](#niveles-de-los-lenguajes)
- [Lenguaje maquina](#lenguaje-maquina)
  - [Características](#características)
- [Lenguaje ensamblador](#lenguaje-ensamblador)
  - [Características](#características-1)
- [Bajo nivel](#bajo-nivel)
- [Medio nivel](#medio-nivel)
- [Alto nivel](#alto-nivel)
  - [Características](#características-2)
- [Niveles de los lenguajes](#niveles-de-los-lenguajes-1)
- [Lenguaje maquina](#lenguaje-maquina-1)
  - [Características](#características-3)
- [Lenguaje ensamblador](#lenguaje-ensamblador-1)
  - [Características](#características-4)
- [Bajo nivel](#bajo-nivel-1)
- [Medio nivel](#medio-nivel-1)
- [Alto nivel](#alto-nivel-1)
  - [Características](#características-5)

</div>
</div>

## Niveles de los lenguajes

Los lenguajes de programación se pueden clasificar en diferentes niveles según su proximidad al hardware de la computadora y el nivel de abstracción que ofrecen.

## Lenguaje maquina

El lenguaje máquina es el conjunto de instrucciones básicas que una computadora puede entender directamente. Estas instrucciones están compuestas por códigos binarios que representan operaciones elementales que la CPU (Unidad Central de Procesamiento) puede ejecutar. Cada tipo de CPU tiene su propio conjunto de instrucciones específicas de lenguaje máquina.

### Características

- **Código Binario:** Las instrucciones en lenguaje máquina están codificadas en forma de ceros y unos, que representan operaciones elementales como sumas, restas, movimientos de datos, y operaciones lógicas y de comparación.
- **Instrucciones Básicas:** Las instrucciones de lenguaje máquina son simples y básicas, como mover datos entre registros, realizar operaciones aritméticas simples, comparar valores, y transferir el control del programa.
- **Direcciones de Memoria:** Las instrucciones de lenguaje máquina a menudo hacen referencia a direcciones de memoria específicas donde se encuentran los datos o las instrucciones a procesar.
- **Dependencia del Hardware:** El lenguaje máquina es específico de la arquitectura de hardware de la CPU. Cada tipo de CPU tiene su propio conjunto de instrucciones de lenguaje máquina.

## Lenguaje ensamblador

El lenguaje ensamblador, también conocido como Assembly, es un lenguaje de bajo nivel que proporciona una representación simbólica de las instrucciones del lenguaje máquina de una computadora. Estas instrucciones están estrechamente relacionadas con las operaciones básicas que puede realizar la CPU (Unidad Central de Procesamiento) de una computadora. A diferencia del lenguaje máquina, el ensamblador utiliza mnemónicos o símbolos legibles por humanos para representar las instrucciones, lo que facilita la escritura y comprensión del código.

### Características

- **Representación Simbólica:** Utiliza mnemónicos y símbolos para representar las instrucciones de lenguaje máquina, lo que facilita la escritura y comprensión del código en comparación con el código binario del lenguaje máquina.
- **Instrucciones Básicas:** Las instrucciones en ensamblador son similares a las instrucciones de lenguaje máquina y están diseñadas para realizar operaciones básicas como mover datos, realizar operaciones aritméticas y lógicas, y controlar el flujo del programa.
- **Direcciones de Memoria:** El ensamblador permite hacer referencia a direcciones de memoria específicas y manipular datos almacenados en la memoria de la computadora.
- **Dependencia del Hardware:** Al igual que el lenguaje máquina, el ensamblador es específico de la arquitectura de hardware de la CPU. Cada tipo de CPU tiene su propio conjunto de instrucciones de ensamblador.

## Bajo nivel

Se refiere a un nivel de abstracción que está más cerca del hardware de la computadora y se caracteriza por proporcionar un control más directo sobre los recursos del sistema. Los lenguajes y conceptos de programación de bajo nivel son aquellos que operan a este nivel de abstracción, interactuando directamente con el hardware de la computadora y realizando operaciones básicas a nivel de máquina.

> ✍️ Nota
>
> El lenguaje ensamblador y el lenguaje maquina están dentro de este nivel.

## Medio nivel

El lenguaje C es a menudo clasificado como un lenguaje de programación de "medio nivel". Esto se debe a que combina características tanto de lenguajes de alto nivel como de bajo nivel, ofreciendo un equilibrio entre la productividad del programador y el control sobre el hardware de la computadora.

## Alto nivel

Los lenguajes de alto nivel están diseñados para ser fáciles de leer y escribir por los humanos. Estos lenguajes abstraen muchos de los detalles técnicos de la máquina, permitiendo a los programadores centrarse en la lógica y la funcionalidad del programa en lugar de en la gestión del hardware

### Características

- **Abstracción:** Los lenguajes de alto nivel ocultan los detalles de bajo nivel del hardware de la computadora y proporcionan constructos de programación que permiten a los programadores trabajar con conceptos más abstractos y orientados al problema.
- **Sintaxis Legible:** La sintaxis de los lenguajes de alto nivel es más cercana al lenguaje humano y utiliza palabras clave y estructuras que son fáciles de entender y recordar, lo que facilita la lectura y escritura del código.
- **Portabilidad:** Los programas escritos en lenguajes de alto nivel son más portables, lo que significa que pueden ejecutarse en diferentes plataformas y sistemas operativos con pocos o ningún cambio en el código fuente.
- **Facilidad de Mantenimiento:** Los lenguajes de alto nivel suelen ofrecer características que facilitan la modularidad, la reutilización de código y la depuración, lo que hace que sea más fácil mantener y actualizar programas a lo largo del tiempo.

> ✍️ Nota
>
> Algunos lenguajes de alto nivel son: Java, Python, JavaScript...

## Niveles de los lenguajes

Los lenguajes de programación se pueden clasificar en diferentes niveles según su proximidad al hardware de la computadora y el nivel de abstracción que ofrecen.

## Lenguaje maquina

El lenguaje máquina es el conjunto de instrucciones básicas que una computadora puede entender directamente. Estas instrucciones están compuestas por códigos binarios que representan operaciones elementales que la CPU (Unidad Central de Procesamiento) puede ejecutar. Cada tipo de CPU tiene su propio conjunto de instrucciones específicas de lenguaje máquina.

### Características

- **Código Binario:** Las instrucciones en lenguaje máquina están codificadas en forma de ceros y unos, que representan operaciones elementales como sumas, restas, movimientos de datos, y operaciones lógicas y de comparación.
- **Instrucciones Básicas:** Las instrucciones de lenguaje máquina son simples y básicas, como mover datos entre registros, realizar operaciones aritméticas simples, comparar valores, y transferir el control del programa.
- **Direcciones de Memoria:** Las instrucciones de lenguaje máquina a menudo hacen referencia a direcciones de memoria específicas donde se encuentran los datos o las instrucciones a procesar.
- **Dependencia del Hardware:** El lenguaje máquina es específico de la arquitectura de hardware de la CPU. Cada tipo de CPU tiene su propio conjunto de instrucciones de lenguaje máquina.

## Lenguaje ensamblador

El lenguaje ensamblador, también conocido como Assembly, es un lenguaje de bajo nivel que proporciona una representación simbólica de las instrucciones del lenguaje máquina de una computadora. Estas instrucciones están estrechamente relacionadas con las operaciones básicas que puede realizar la CPU (Unidad Central de Procesamiento) de una computadora. A diferencia del lenguaje máquina, el ensamblador utiliza mnemónicos o símbolos legibles por humanos para representar las instrucciones, lo que facilita la escritura y comprensión del código.

### Características

- **Representación Simbólica:** Utiliza mnemónicos y símbolos para representar las instrucciones de lenguaje máquina, lo que facilita la escritura y comprensión del código en comparación con el código binario del lenguaje máquina.
- **Instrucciones Básicas:** Las instrucciones en ensamblador son similares a las instrucciones de lenguaje máquina y están diseñadas para realizar operaciones básicas como mover datos, realizar operaciones aritméticas y lógicas, y controlar el flujo del programa.
- **Direcciones de Memoria:** El ensamblador permite hacer referencia a direcciones de memoria específicas y manipular datos almacenados en la memoria de la computadora.
- **Dependencia del Hardware:** Al igual que el lenguaje máquina, el ensamblador es específico de la arquitectura de hardware de la CPU. Cada tipo de CPU tiene su propio conjunto de instrucciones de ensamblador.

## Bajo nivel

Se refiere a un nivel de abstracción que está más cerca del hardware de la computadora y se caracteriza por proporcionar un control más directo sobre los recursos del sistema. Los lenguajes y conceptos de programación de bajo nivel son aquellos que operan a este nivel de abstracción, interactuando directamente con el hardware de la computadora y realizando operaciones básicas a nivel de máquina.

> ✍️ Nota
>
> El lenguaje ensamblador y el lenguaje maquina están dentro de este nivel.

## Medio nivel

El lenguaje C es a menudo clasificado como un lenguaje de programación de "medio nivel". Esto se debe a que combina características tanto de lenguajes de alto nivel como de bajo nivel, ofreciendo un equilibrio entre la productividad del programador y el control sobre el hardware de la computadora.

## Alto nivel

Los lenguajes de alto nivel están diseñados para ser fáciles de leer y escribir por los humanos. Estos lenguajes abstraen muchos de los detalles técnicos de la máquina, permitiendo a los programadores centrarse en la lógica y la funcionalidad del programa en lugar de en la gestión del hardware

### Características

- **Abstracción:** Los lenguajes de alto nivel ocultan los detalles de bajo nivel del hardware de la computadora y proporcionan constructos de programación que permiten a los programadores trabajar con conceptos más abstractos y orientados al problema.
- **Sintaxis Legible:** La sintaxis de los lenguajes de alto nivel es más cercana al lenguaje humano y utiliza palabras clave y estructuras que son fáciles de entender y recordar, lo que facilita la lectura y escritura del código.
- **Portabilidad:** Los programas escritos en lenguajes de alto nivel son más portables, lo que significa que pueden ejecutarse en diferentes plataformas y sistemas operativos con pocos o ningún cambio en el código fuente.
- **Facilidad de Mantenimiento:** Los lenguajes de alto nivel suelen ofrecer características que facilitan la modularidad, la reutilización de código y la depuración, lo que hace que sea más fácil mantener y actualizar programas a lo largo del tiempo.

> ✍️ Nota
>
> Algunos lenguajes de alto nivel son: Java, Python, JavaScript...

</div>
