---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Control de flujo"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Control de flujo</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Control de flujo](#control-de-flujo)
- [Importancia del control de flujo](#importancia-del-control-de-flujo)
- [Buenas prácticas](#buenas-prácticas)
- [Condicionales](#condicionales)
  - [Tipos de condicionales](#tipos-de-condicionales)
- [Bucles](#bucles)
  - [Tipos de bucles (básicos)](#tipos-de-bucles-básicos)
- [Excepciones](#excepciones)
  - [try](#try)
  - [catch](#catch)
  - [finally](#finally)
  - [Tipos de excepciones(básicas)](#tipos-de-excepcionesbásicas)
- [Saltos](#saltos)
  - [Instrucciones (más comunes)](#instrucciones-más-comunes)
    - [break](#break)
    - [continue](#continue)
    - [return](#return)
    - [throw](#throw)
    - [Etiquetas (labels)](#etiquetas-labels)

</div>
</div>

## Control de flujo

El control de flujo en programación se refiere a las estructuras que permiten modificar el orden de ejecución de las instrucciones en un programa. Estas estructuras permiten tomar decisiones, repetir acciones y ejecutar código dependiendo de ciertas condiciones.

## Importancia del control de flujo

El control de flujo es esencial en la programación porque permite que los programas tomen decisiones, repitan tareas, manejen errores y controlen el flujo de ejecución de manera eficiente. Esto ayuda a escribir código más claro, conciso y lógico, y permite que los programas se adapten dinámicamente a diferentes situaciones.

## Buenas prácticas

Al utilizar estructuras de control de flujo, es importante seguir algunas buenas prácticas para escribir código legible y mantenible:

- Utilizar nombres descriptivos para las variables y etiquetas de control.
- Mantener la indentación y el formato consistentes para mejorar la legibilidad.
- Evitar anidar demasiadas estructuras de control, lo que puede hacer que el código sea difícil de entender.
- Comentar el código para explicar la lógica detrás de las decisiones y las iteraciones

## Condicionales

Los condicionales permiten tomar decisiones en un programa según el valor de una expresión booleana (que puede ser verdadera o falsa). Dependiendo de si la condición es verdadera o falsa, se ejecuta uno de los bloques de código asociados.

### Tipos de condicionales

- **if:** Es la estructura básica de un condicional. Se utiliza para ejecutar un bloque de código si una condición es verdadera.

- **else:** Se utiliza junto con if para ejecutar un bloque de código alternativo si la condición del if es falsa.

- **else if:** Permite encadenar múltiples condiciones después de un if para comprobar casos adicionales.

- **switch:** Es una estructura alternativa a múltiples else if que permite evaluar una expresión y ejecutar un bloque de código correspondiente según el valor de la expresión.

## Bucles

Los bucles son utilizados para automatizar tareas repetitivas en un programa, evitando la necesidad de escribir el mismo código varias veces. Permiten ejecutar un bloque de código múltiples veces hasta que una condición específica se cumpla o hasta que se alcance un límite predefinido.

### Tipos de bucles (básicos)

- **for:** Este bucle se utiliza para iterar sobre una secuencia de elementos (como una lista, una tupla o un rango de números) y ejecutar un bloque de código para cada elemento.

- **while:** Este bucle se ejecuta mientras una condición dada sea verdadera. Se evalúa la condición antes de ejecutar el bloque de código, por lo que es posible que el bloque nunca se ejecute si la condición es falsa desde el principio.

- **do-while:** Similar al bucle while, pero con la diferencia de que se ejecuta al menos una vez antes de evaluar la condición. Esto garantiza que el bloque de código se ejecute al menos una vez, independientemente de la condición inicial.

## Excepciones

Las excepciones son objetos que representan situaciones anómalas que ocurren durante la ejecución de un programa. Pueden ser causadas por diversos motivos, como errores de sintaxis, errores de lógica, condiciones imprevistas o problemas con recursos externos.

El manejo de excepciones es el proceso de anticipar y gestionar las excepciones que pueden ocurrir durante la ejecución de un programa. Esto se hace mediante el uso de bloques try, catch y finally (en algunos lenguajes), que permiten detectar y manejar excepciones de manera adecuada.

### try

El bloque try se utiliza para envolver el código que podría lanzar una excepción. Si se produce una excepción dentro de este bloque, la ejecución se detiene y se pasa al bloque catch correspondiente. Si no se produce ninguna excepción, el código dentro del bloque try se ejecuta normalmente.

### catch

El bloque catch se utiliza para capturar y manejar las excepciones que se producen dentro del bloque try. Si se lanza una excepción dentro del bloque try, el control se transfiere al bloque catch, donde se pueden manejar o procesar las excepciones de manera adecuada. El bloque catch debe especificar el tipo de excepción que se espera capturar.

### finally

El bloque finally es opcional y se utiliza para especificar un bloque de código que se ejecutará siempre, ya sea que se lance o no una excepción dentro del bloque try. Se utiliza comúnmente para realizar acciones de limpieza, como cerrar archivos o liberar recursos, independientemente de si se produjo una excepción o no.

### Tipos de excepciones(básicas)

**Excepciones de Sintaxis:** Ocurren cuando el código no sigue la sintaxis correcta del lenguaje de programación y no puede ser interpretado correctamente.

**Excepciones de Tiempo de Ejecución:** Ocurren durante la ejecución del programa debido a condiciones imprevistas, como la división por cero, el acceso a índices fuera de rango o la manipulación de datos inválidos.

**Excepciones de Lógica:** Ocurren cuando hay errores en la lógica del programa que hacen que no funcione como se espera, como condiciones contradictorias o comportamientos no deseados.

**Excepciones de Entrada/Salida (E/S):** Ocurren cuando hay problemas al leer o escribir datos desde o hacia archivos, dispositivos u otros recursos externos.

## Saltos

El flujo de salto se refiere a la capacidad de cambiar el flujo normal de ejecución de un programa mediante la transferencia del control a una ubicación diferente dentro del código. Esto se puede lograr utilizando instrucciones de salto que permiten al programador especificar explícitamente dónde debe continuar la ejecución del programa.

### Instrucciones (más comunes)

#### break

La instrucción break se utiliza principalmente en bucles (for, while, do-while, switch) para salir prematuramente del bucle. Cuando se encuentra break, la ejecución del bucle se detiene y el control se transfiere a la siguiente instrucción después del bucle.

#### continue

La instrucción continue se utiliza en bucles (for, while, do-while) para omitir el resto del cuerpo del bucle en una iteración específica y continuar con la siguiente iteración. Cuando se encuentra continue, la ejecución del bucle salta a la siguiente iteración sin ejecutar el resto del código en el bloque del bucle actual.

#### return

La instrucción return se utiliza para finalizar la ejecución de una función y devolver un valor opcional al punto de llamada. Cuando se encuentra return, la ejecución de la función se detiene y el valor especificado (o **undefined** si no se proporciona ningún valor) se devuelve al código que invocó la función.

#### throw

La instrucción throw se utiliza para lanzar (o generar) una excepción explícitamente. Esto se hace cuando ocurre una situación excepcional que el código no puede manejar directamente. Cuando se encuentra throw, la ejecución del código actual se detiene y se busca un bloque catch que pueda manejar la excepción lanzada.

#### Etiquetas (labels)

Las etiquetas se utilizan para marcar un punto específico en el código al que se puede hacer referencia desde instrucciones de salto como break y continue. Las etiquetas se definen utilizando un identificador seguido de dos puntos (:), y se colocan antes de la instrucción a la que se desea hacer referencia.

</div>
