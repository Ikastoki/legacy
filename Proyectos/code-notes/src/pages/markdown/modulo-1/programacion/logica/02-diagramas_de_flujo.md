---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Diagrama de flujo"
block: "Lógica"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Diagrama de flujo</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué es un Diagrama de Flujo?](#qué-es-un-diagrama-de-flujo)
  - [Símbolos básicos](#símbolos-básicos)
- [Reglas para crear diagramas de flujo](#reglas-para-crear-diagramas-de-flujo)
- [Herramientas](#herramientas)
- [Ejemplo: sumar dos números](#ejemplo-sumar-dos-números)
- [Ejemplo: contador del 1 al 4](#ejemplo-contador-del-1-al-4)

</div>
</div>

## ¿Qué es un Diagrama de Flujo?

<div class="only-mobile-warning">📵 Esta tabla solo está disponible en versión escritorio.</div>

Un diagrama de flujo es una representación gráfica de un algoritmo o proceso. Utiliza símbolos estándar para mostrar los pasos, decisiones y flujo de un programa de manera visual. Es una herramienta esencial en programación porque:

- Facilita la comprensión de procesos complejos.
- Ayuda a detectar errores antes de escribir código.
- Es universal (no depende de un lenguaje de programación).

### Símbolos básicos

| Símbolo         | Nombre         | Uso                                                                 |
| --------------- | -------------- | ------------------------------------------------------------------- |
| Ovalo o píldora | Terminal       | Indica el inicio o fin del proceso.                                 |
| Rectángulo      | Proceso        | Representa una acción o cálculo (ej. suma = a + b).                 |
| Paralelogramo   | Entrada/Salida | Indica lectura de datos (Leer edad) o mostrar resultados (Mostrar). |
| Diamante        | Decisión       | Pregunta sí/no (ej. ¿Es edad >= 18?). Tiene dos salidas (Sí/No).    |
| Circulo         | Conector       | Une flujos en diferentes partes del diagrama.                       |
| Flechas         | Flechas        | Muestran la dirección del flujo.                                    |

> ✍️ Nota
>
> Los símbolos visuales pueden variar ligeramente según el estándar usado.

## Reglas para crear diagramas de flujo

1. Empieza y termina con un óvalo (símbolo de inicio/fin).

1. Usa rectángulos para procesos y rombos para decisiones.

1. Las flechas deben apuntar siempre hacia adelante (nunca retroceder, a menos que sea un bucle).

1. Mantén una estructura clara y ordenada (evita cruzar líneas).

## Herramientas

Herramientas para Crear Diagramas de Flujo

- Dibujo manual (papel y lápiz).

- Software:

  - Draw.io (gratuito y online).

  - Lucidchart.

  - Microsoft Visio.

## Ejemplo: sumar dos números

```bash
  [Inicio]
     ↓
[Leer num1, num2]
     ↓
[resultado = num1 + num2]
     ↓
[Mostrar resultado]
     ↓
  [Fin]
```

## Ejemplo: contador del 1 al 4

```bash
  [Inicio]
     ↓
[contador = 1]
     ↓
  [¿contador <= 5?] → Sí → [Mostrar contador] → [contador = contador + 1]
     ↓                                         ↑________|
    No
     ↓
  [Fin]
```

</div>
