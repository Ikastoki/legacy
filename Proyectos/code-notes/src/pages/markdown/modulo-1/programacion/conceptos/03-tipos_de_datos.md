---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Tipos de datos"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Tipos de datos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Tipos de datos](#tipos-de-datos)
- [Datos primitivos](#datos-primitivos)
- [Datos compuestos](#datos-compuestos)
- [Datos abstractos](#datos-abstractos)
- [Datos especiales](#datos-especiales)
- [Datos personalizados](#datos-personalizados)

</div>
</div>

## Tipos de datos

Los tipos de datos determinan qué tipo de valores pueden almacenar las variables y qué operaciones se pueden realizar sobre esos valores.

## Datos primitivos

- **Enteros (Integers):** Almacenan números enteros sin parte decimal.
- **Flotantes (Floating-point):** Almacenan números reales con parte decimal.
- **Carácter (Character):** Almacenan un solo carácter.
- **Cadena de Texto (String):** Almacenan una secuencia de caracteres.
- **Booleano (Boolean):** Almacenan valores de verdad (true o false) (1 o 0).

## Datos compuestos

- **Arreglos (Arrays):** Almacenan una colección de elementos del mismo tipo, accesibles por un índice.
- **Listas (Lists):** Similares a los arreglos, pero pueden variar en tamaño y en algunos lenguajes pueden contener diferentes tipos de datos.
- **Tuplas (Tuples):** Almacenan una colección ordenada de elementos que pueden ser de diferentes tipos. **Son inmutables**.
- **Conjuntos (Sets):** Almacenan una colección de elementos únicos, sin un orden específico.
- **Diccionarios (Dictionaries) / Mapas (Maps):** Almacenan pares clave-valor, donde cada clave es única.

## Datos abstractos

- **Clases y Objetos:** Definen estructuras de datos más complejas que pueden contener múltiples tipos de datos y métodos para operar sobre esos datos.
- **Enumeraciones (Enums):** Definen un conjunto de constantes con nombre, representando un tipo de datos.

## Datos especiales

- **Nulos (Null):** Representan la ausencia de valor.
- **Funciones:** Se pueden tratar como datos en algunos lenguajes (funciones de primera clase), permitiendo su asignación a variables y su paso como argumentos.

## Datos personalizados

En muchos lenguajes de programación, puedes definir tus propios tipos de datos para representar estructuras más complejas que se ajusten a las necesidades específicas de tu aplicación.

- **Estructuras (Structs):** Similares a las clases, pero generalmente más simples y sin métodos.
- **Tipos de unión:** Permiten almacenar diferentes tipos de datos en el mismo espacio de memoria, pero solo uno a la vez.

> Importante
>
> Cada lenguaje de programación tiene su propia manera de manejar los tipos de datos. Algunos lenguajes son fuertemente tipados (requieren que definas el tipo de dato explícitamente), mientras que otros son débilmente tipados (determinan el tipo de dato en tiempo de ejecución).

</div>
