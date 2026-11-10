---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Ejercicios"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Ejercicios</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Ejercicio 1: calcular el área de un rectángulo](#ejercicio-1-calcular-el-área-de-un-rectángulo)
  - [Planteamiento](#planteamiento)
  - [Pseudocódigo](#pseudocódigo)
  - [Diagrama de flujo](#diagrama-de-flujo)
- [Ejercicio 2: verifica si un número es primo](#ejercicio-2-verifica-si-un-número-es-primo)
  - [Planteamiento](#planteamiento-1)
  - [Pseudocódigo](#pseudocódigo-1)
  - [Diagrama de flujo](#diagrama-de-flujo-1)
- [Ejercicio 3: juego de adivinar el número](#ejercicio-3-juego-de-adivinar-el-número)
  - [Planteamiento](#planteamiento-2)
  - [Pseudocódigo](#pseudocódigo-2)
  - [Diagrama de flujo](#diagrama-de-flujo-2)

</div>
</div>

## Ejercicio 1: calcular el área de un rectángulo

### Planteamiento

Crear un programa que pida al usuario el ancho y alto de un rectángulo, calcule su área **(ancho × alto)** y muestre el resultado.

### Pseudocódigo

```bash
INICIO
    Mostrar "Ingrese el ancho del rectángulo:"
    Leer ancho
    Mostrar "Ingrese el alto del rectángulo:"
    Leer alto
    area = ancho * alto
    Mostrar "El área del rectángulo es:", area
FIN
```

### Diagrama de flujo

```bash
  [Inicio]
     ↓
[Leer ancho]
     ↓
[Leer alto]
     ↓
[area = ancho * alto]
     ↓
[Mostrar area]
     ↓
  [Fin]
```

## Ejercicio 2: verifica si un número es primo

### Planteamiento

Crear un programa que pida al usuario el ancho y alto de un rectángulo, calcule su área **(ancho × alto)** y muestre el resultado.

### Pseudocódigo

```bash
INICIO
    Mostrar "Ingrese un número:"
    Leer numero
    es_primo = VERDADERO

    SI numero <= 1 ENTONCES
        es_primo = FALSO
    SINO
        PARA i DESDE 2 HASTA numero/2 HACER
            SI numero MOD i == 0 ENTONCES
                es_primo = FALSO
                DETENER
            FIN_SI
        FIN_PARA
    FIN_SI

    SI es_primo ENTONCES
        Mostrar "Es primo"
    SINO
        Mostrar "No es primo"
    FIN_SI
FIN
```

### Diagrama de flujo

```bash
  [Inicio]
     ↓
[Leer numero]
     ↓
[es_primo = VERDADERO]
     ↓
  [¿numero <= 1?] → Sí → [es_primo = FALSO] → [Mostrar "No es primo"] → [Fin]
     ↓
    No
     ↓
[PARA i = 2 HASTA numero/2]
     ↓
  [¿numero MOD i == 0?] → Sí → [es_primo = FALSO] → [Mostrar "No es primo"] → [Fin]
     ↓
    No
     ↓
[¿i > numero/2?] → Sí → [Mostrar "Es primo"] → [Fin]
     ↑
     |___[i = i + 1]
```

## Ejercicio 3: juego de adivinar el número

### Planteamiento

Crear un juego donde:

- La computadora genere un número aleatorio entre 1 y 100.

- El usuario intente adivinarlo en máximo 5 intentos.

- En cada intento, el programa diga si el número es mayor o menor.

- Si acierta, mostrar "¡Ganaste!". Si no, mostrar "Perdiste. El número era X".

### Pseudocódigo

```bash
INICIO
    numero_secreto = ALEATORIO(1, 100)
    intentos = 5
    adivinado = FALSO

    MIENTRAS intentos > 0 Y adivinado == FALSO HACER
        Mostrar "Intentos restantes:", intentos
        Mostrar "Adivina el número (1-100):"
        Leer intento_usuario

        SI intento_usuario == numero_secreto ENTONCES
            adivinado = VERDADERO
        SINO
            SI intento_usuario < numero_secreto ENTONCES
                Mostrar "El número es MAYOR"
            SINO
                Mostrar "El número es MENOR"
            FIN_SI
            intentos = intentos - 1
        FIN_SI
    FIN_MIENTRAS

    SI adivinado ENTONCES
        Mostrar "¡Ganaste! El número era", numero_secreto
    SINO
        Mostrar "Perdiste. El número era", numero_secreto
    FIN_SI
FIN
```

### Diagrama de flujo

```bash
  [Inicio]
     ↓
[numero_secreto = Aleatorio(1,100)]
     ↓
[intentos = 5, adivinado = FALSO]
     ↓
  [¿intentos > 0 Y adivinado == FALSO?] → No → [Mostrar "Perdiste..."] → [Fin]
     ↓
    Sí
     ↓
[Mostrar "Intentos restantes:", intentos]
     ↓
[Leer intento_usuario]
     ↓
  [¿intento_usuario == numero_secreto?] → Sí → [adivinado = VERDADERO] → [Mostrar "¡Ganaste!"] → [Fin]
     ↓
    No
     ↓
  [¿intento_usuario < numero_secreto?] → Sí → [Mostrar "Es MAYOR"]
     ↓
    No
     ↓
[Mostrar "Es MENOR"]
     ↓
[intentos = intentos - 1]
     ↑________|
```

</div>
