---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Pseudocódigo"
block: "Lógica"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudocódigo</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué es la Lógica de programación?](#qué-es-la-lógica-de-programación)
- [Conceptos clave en pseudocódigo](#conceptos-clave-en-pseudocódigo)
  - [Secuencia](#secuencia)
  - [Variables y operadores](#variables-y-operadores)
  - [Condicionales (toma de decisiones)](#condicionales-toma-de-decisiones)
  - [Bucles (repetición)](#bucles-repetición)
  - [Funciones (subrutinas)](#funciones-subrutinas)
- [Cómo practicar lógica con pseudocódigo](#cómo-practicar-lógica-con-pseudocódigo)
- [Ejemplo: sumar dos números](#ejemplo-sumar-dos-números)

</div>
</div>

## ¿Qué es la Lógica de programación?

La lógica de programación es la forma de pensar ordenada y estructurada para resolver problemas mediante instrucciones que una computadora pueda ejecutar. No depende de un lenguaje específico, sino de cómo organizamos las ideas antes de escribir código.

Imagina que le explicas a un niño cómo hacer un sándwich:

1. Toma dos rebanadas de pan.

2. Pon jamón en una rebanada.

3. Agrega queso.

4. Une las rebanadas.

Si un paso está mal ordenado (ej. unir el pan antes de poner los ingredientes), el resultado será incorrecto. Así funciona la lógica en programación: el orden y la claridad son esenciales.

> ✍️ Nota
>
> El pseudocódigo es universal. Una vez dominado, aprender cualquier lenguaje de programación será más fácil.

## Conceptos clave en pseudocódigo

El pseudocódigo es una forma de escribir algoritmos en lenguaje natural (casi como español), sin preocuparse por la sintaxis de un lenguaje real. Usa palabras clave intuitivas como `SI`, `MIENTRAS`, `PARA`, etc.

### Secuencia

Instrucciones que se ejecutan en orden.

```bash
INICIO
    Mostrar "Bienvenido al sistema"
    Pedir nombre_usuario
    Mostrar "Hola, ", nombre_usuario
FIN
```

### Variables y operadores

Variables: "cajas" para guardar datos.

```bash
INICIO
    precio = 100
    descuento = 20
    total = precio - descuento
    Mostrar "Total a pagar: ", total
FIN
```

Operadores comunes:

- `+` (suma), `-` (resta), `*` (multiplicación), `/` (división).
- `==` (igual), `!=` (diferente), `>` (mayor que).

### Condicionales (toma de decisiones)

SI (IF) / SINO (ELSE)

```bash
INICIO
    SI edad >= 18 ENTONCES
        Mostrar "Eres mayor de edad"
    SINO
        Mostrar "Eres menor de edad"
    FIN_SI
FIN
```

SELECCIONAR (SWITCH)

```bash
INICIO
    SELECCIONAR opcion HACER
        CASO 1:
            Mostrar "Opción 1 seleccionada"
        CASO 2:
            Mostrar "Opción 2 seleccionada"
        DEFECTO:
            Mostrar "Opción inválida"
    FIN_SELECCIONAR
FIN
```

### Bucles (repetición)

MIENTRAS (WHILE)

```bash
INICIO
    contador = 0
    MIENTRAS contador < 5 HACER
        Mostrar "Iteración ", contador
        contador = contador + 1
    FIN_MIENTRAS
FIN
```

PARA (FOR)

```bash
INICIO
    PARA i DESDE 1 HASTA 3 HACER
        Mostrar "Número: ", i
    FIN_PARA
FIN
```

### Funciones (subrutinas)

Bloques de código reutilizables.

```bash
FUNCION saludar(nombre)
    Mostrar "¡Hola, ", nombre, "!"
FIN_FUNCION

INICIO
    saludar("Ana")
    saludar("Luis")
FIN
```

## Cómo practicar lógica con pseudocódigo

1. Plantea problemas cotidianos (ej. "sumar dos números").

1. Desglosa el problema en pasos (algoritmo).

1. Conviértelo en pseudocódigo (usa las estructuras aprendidas).

1. Pruébalo mentalmente (ejecuta paso a paso en tu cabeza).

## Ejemplo: sumar dos números

```bash
INICIO
    // Paso 1: Pedir datos
    Mostrar "Ingrese el primer número:"
    Leer num1
    Mostrar "Ingrese el segundo número:"
    Leer num2

    // Paso 2: Calcular
    resultado = num1 + num2

    // Paso 3: Mostrar resultado
    Mostrar "La suma es: ", resultado
FIN
```

</div>
