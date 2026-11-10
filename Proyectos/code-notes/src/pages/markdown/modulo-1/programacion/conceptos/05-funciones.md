---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Funciones"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Funciones</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Funciones](#funciones)
- [Parámetros vs argumentos](#parámetros-vs-argumentos)
  - [Parámetros](#parámetros)
  - [Argumentos](#argumentos)
- [Ventajas de usar funciones](#ventajas-de-usar-funciones)
- [Tipos de funciones](#tipos-de-funciones)
  - [Según su propósito](#según-su-propósito)
  - [Según los parámetros y valores de retorno](#según-los-parámetros-y-valores-de-retorno)
  - [Según su comportamiento](#según-su-comportamiento)
  - [Según el ámbito de declaración](#según-el-ámbito-de-declaración)
  - [Según la asincronía](#según-la-asincronía)
- [Valor y referencia](#valor-y-referencia)
  - [Por valor (o pasaje por valor)](#por-valor-o-pasaje-por-valor)
  - [Por referencia (o pasaje por referencia)](#por-referencia-o-pasaje-por-referencia)
- [Recursividad](#recursividad)
  - [Características](#características)
  - [Consideraciones](#consideraciones)
  - [Casos de uso comunes](#casos-de-uso-comunes)
- [Funciones flecha o lambda](#funciones-flecha-o-lambda)
- [Scope](#scope)
  - [Alcance de this](#alcance-de-this)
    - [Funciones tradicionales](#funciones-tradicionales)
    - [Funciones flecha](#funciones-flecha)
  - [Alcance de arguments](#alcance-de-arguments)
    - [Funciones tradicionales](#funciones-tradicionales-1)
    - [Funciones flecha](#funciones-flecha-1)
  - [Alcance de super](#alcance-de-super)
    - [Funciones tradicionales](#funciones-tradicionales-2)
    - [Funciones flecha](#funciones-flecha-2)

</div>
</div>

## Funciones

Las funciones son bloques de código reutilizables que realizan una tarea específica y pueden ser invocadas desde diferentes partes de un programa. Las funciones permiten modularizar el código, mejorando su legibilidad, mantenimiento y reutilización.

**Características:**

- **Definición:** Una función es una porción de código que puede ser llamada por su nombre para ejecutar la tarea que encapsula. Puede aceptar entradas (parámetros) y puede devolver una salida (valor de retorno).
- **Parámetros:** Las funciones pueden recibir datos de entrada llamados parámetros o argumentos. Los parámetros permiten que las funciones operen con diferentes datos sin necesidad de duplicar el código.
- **Valor de Retorno:** Las funciones pueden devolver un valor después de realizar su tarea. Este valor puede ser de cualquier tipo de datos y puede ser utilizado por la parte del programa que llamó a la función.
- **Encapsulación:** Las funciones encapsulan un comportamiento específico, permitiendo que el resto del programa se enfoque en la lógica principal sin preocuparse por los detalles de implementación de la función.

## Parámetros vs argumentos

La diferencia entre parámetros y argumentos es una distinción importante en la programación y se refiere a dos conceptos relacionados pero distintos en el contexto de funciones.

### Parámetros

Los parámetros son las variables listadas en la definición de una función. Son las "plantillas" o "placeholders" que se utilizan para recibir valores cuando la función es llamada. Los parámetros definen qué información espera la función **como entrada**.

### Argumentos

Los argumentos son los valores reales que se pasan a una función cuando se llama. Son los datos que se utilizan para rellenar los parámetros definidos en la función.

## Ventajas de usar funciones

**Reutilización de Código**

Una vez definida, una función puede ser llamada múltiples veces en diferentes partes del programa, evitando la duplicación de código.

**Modularidad**

Las funciones permiten dividir un programa grande en partes más pequeñas y manejables. Cada función puede ser desarrollada y probada de forma independiente.

**Legibilidad**

Las funciones con nombres descriptivos mejoran la legibilidad del código, haciendo más claro qué hace cada parte del programa.

## Tipos de funciones

### Según su propósito

- **Funciones Predefinidas (o Incorporadas):** Estas funciones vienen incluidas con el lenguaje de programación y proporcionan funcionalidad comúnmente utilizada.
- **Funciones Definidas por el Usuario:** Son funciones creadas por los programadores para realizar tareas específicas en sus programas.

### Según los parámetros y valores de retorno

- **Funciones sin Parámetros ni Valor de Retorno:** Estas funciones no aceptan ningún parámetro y no devuelven ningún valor.
- **Funciones con Parámetros pero sin Valor de Retorno:** Estas funciones aceptan parámetros pero no devuelven ningún valor.
- **Funciones sin Parámetros pero con Valor de Retorno:** Estas funciones no aceptan parámetros pero devuelven un valor.
- **Funciones con Parámetros y Valor de Retorno:** Estas funciones aceptan parámetros y también devuelven un valor.

### Según su comportamiento

- **Funciones Puras:** Son funciones que no tienen efectos secundarios y siempre producen el mismo resultado para los mismos argumentos.
- **Funciones Impuras:** Son funciones que pueden tener efectos secundarios o depender de factores externos a sus parámetros.

### Según el ámbito de declaración

- **Funciones Globales:** Son funciones que se definen en el nivel más alto del código y pueden ser llamadas desde cualquier parte del programa.
- **Funciones Locales:** Son funciones que se definen dentro de otra función y solo pueden ser llamadas desde dentro de esa función.

### Según la asincronía

- **Funciones Sincrónicas:** Son funciones que se ejecutan de manera secuencial, una después de la otra.
- **Funciones Asincrónicas:** Son funciones que pueden ejecutarse de manera concurrente o paralela, permitiendo que otras tareas se ejecuten mientras se espera su finalización.

## Valor y referencia

Las funciones pueden manejar los datos de dos maneras diferentes: por valor y por referencia. Estos términos se refieren a cómo se pasan los datos a las funciones y cómo se manejan dentro de ellas.

### Por valor (o pasaje por valor)

Cuando se pasa un argumento por valor a una función, se crea una copia independiente del valor y la función opera sobre esta copia. Cualquier modificación realizada dentro de la función no afecta a la variable original fuera de la función.

- Los cambios realizados dentro de la función no afectan la variable original.
- Los tipos de datos primitivos (como enteros, flotantes, booleanos) se pasan por valor.

### Por referencia (o pasaje por referencia)

Cuando se pasa un argumento por referencia a una función, se pasa una referencia o dirección de memoria de la variable original. La función opera directamente sobre la variable original, por lo que cualquier modificación realizada dentro de la función afecta a la variable original fuera de la función.

- Los cambios realizados dentro de la función afectan a la variable original.
- Los tipos de datos compuestos (como listas, diccionarios, objetos) se pasan por referencia.

## Recursividad

La recursividad es un concepto en programación en el que una función se llama a sí misma para resolver un problema más pequeño del mismo tipo. Es una técnica poderosa que se utiliza para resolver problemas que pueden dividirse en subproblemas más simples

### Características

- **Llamada a sí misma:** Una función recursiva se llama a sí misma dentro de su propia definición.
- **Caso Base:** Para evitar que la función se llame infinitamente, debe haber un caso base que detenga la recursión.
- **División en Subproblemas:** El problema principal se divide en subproblemas más pequeños que se resuelven recursivamente.

### Consideraciones

- **Eficiencia:** Aunque la recursión puede ser elegante, en algunos casos puede ser menos eficiente que las soluciones iterativas debido a la sobrecarga asociada con la llamada de funciones repetidas.
- **Profundidad de la Pila:** Demasiadas llamadas recursivas pueden desbordar la pila de llamadas (stack overflow), lo que puede conducir a un fallo del programa.
- **Legibilidad:** La recursión puede hacer que el código sea más compacto y elegante, pero a veces puede ser menos intuitivo para los programadores que no están familiarizados con el concepto.

### Casos de uso comunes

- Problemas matemáticos como factorial, suma de números, cálculo de Fibonacci, etc.
- Recorrido de estructuras de datos recursivas como árboles y grafos.
- Algoritmos de búsqueda y ordenación como búsqueda binaria y quicksort.

## Funciones flecha o lambda

Las funciones flecha, también conocidas como funciones flecha en JavaScript, y las funciones lambda en otros lenguajes de programación, son funciones anónimas que pueden definirse de forma concisa y expresiva. Estas funciones son útiles cuando se necesita una función simple que se utilizará en un lugar específico, como en el mapeo de una lista o en el filtrado de elementos.

## Scope

El alcance (scope) de las funciones flecha en JavaScript es diferente al de las funciones tradicionales.

> Nota
>
> En las funciones lambda, también conocidas como funciones flecha en JavaScript, el alcance (scope) es similar al de las funciones flecha. Es decir, las funciones lambda capturan el alcance léxico circundante en el momento de su definición. El "léxico circundante" se refiere al contexto o al conjunto de variables y valores que están disponibles en el ámbito donde se define una función.

### Alcance de this

#### Funciones tradicionales

En las funciones tradicionales, el valor de this está determinado por la forma en que se llama a la función. Puede cambiar según el contexto de ejecución, como cuando se llama desde un objeto (objeto.metodo()) o cuando se usa call() o apply() para establecer explícitamente el valor de this.

#### Funciones flecha

Las funciones flecha capturan el valor de this del ámbito circundante en el momento en que se definen. Esto significa que el valor de this dentro de una función flecha siempre será el mismo, independientemente de cómo se llame la función.

---

### Alcance de arguments

#### Funciones tradicionales

Las funciones tradicionales tienen un objeto especial llamado arguments, que contiene todos los argumentos pasados a la función.

#### Funciones flecha

Las funciones flecha no tienen su propio objeto arguments. En su lugar, pueden acceder a los argumentos de la función padre utilizando el objeto arguments de la función padre.

---

### Alcance de super

#### Funciones tradicionales

En las clases de JavaScript, el operador super se usa para llamar a métodos del padre.

#### Funciones flecha

Las funciones flecha no tienen su propio super. En su lugar, buscan el método super en el ámbito circundante.

---

</div>
