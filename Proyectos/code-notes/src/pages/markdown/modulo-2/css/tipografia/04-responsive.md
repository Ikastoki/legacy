---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Texto adaptativo"
block: "Tipografía"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Texto adaptativo</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Texto adaptativo](#texto-adaptativo)
- [Tipografía fluida](#tipografía-fluida)
- [La función clamp()](#la-función-clamp)
- [Logical properties](#logical-properties)
- [Ejemplo de un flujo de trabajo](#ejemplo-de-un-flujo-de-trabajo)

</div>
</div>

## Texto adaptativo

En el diseño web moderno, la tipografía debe adaptarse no solo al tamaño de la pantalla, sino también a la distancia de lectura, la resolución y las preferencias del usuario.

## Tipografía fluida

La tipografía fluida ajusta su tamaño suavemente entre dos breakpoints, evitando saltos bruscos.

Se implementa con:

- `vw` (viewport width): Unidades relativas al ancho de pantalla.

- Fórmulas de escalado: Cálculos con `calc()`.

```css
h1 {
  font-size: calc(
    16px + 1.5vw
  ); /* Tamaño mínimo de 16px + porcentaje del viewport */
}
```

## La función clamp()

Sintaxis

```css
/* clamp(MIN, VALOR_PREFERENCIAL, MAX) */

p {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  /* Nunca menor a 1rem, ideal 2.5vw, nunca mayor a 1.5rem */
}
```

## Logical properties

Las Logical Properties son una forma más flexible de definir estilos que se adaptan a diferentes escrituras y direcciones de texto. En lugar de usar propiedades físicas como `margin-left` o m`argin-right`, las propiedades lógicas permiten escribir código más accesible y adaptable a idiomas que se leen de derecha a izquierda (como árabe) o de arriba a abajo (como chino).

`margin-inline-start` es una de estas propiedades lógicas y establece el margen al comienzo del eje en línea de un elemento, según la dirección del texto.

Por ejemplo:

- En idiomas de izquierda a derecha (como español o inglés), `margin-inline-start` equivale a `margin-left`.

- En idiomas de derecha a izquierda (como árabe o hebreo), equivale a `margin-right`.

```css
.box {
  margin-inline-start: 20px;
  padding: 10px;
  background-color: lightblue;
  width: 200px;
}
```

## Ejemplo de un flujo de trabajo

```css
:root {
  --min-font: 16px;
  --max-font: 22px;
  --min-screen: 320px;
  --max-screen: 1600px;
}

body {
  font-size: clamp(
    var(--min-font),
    calc(var(--min-font) + (100vw - var(--min-screen)) *
    (var(--max-font) - var(--min-font)) /
    (var(--max-screen) - var(--min-screen)),
    var(--max-font)
  );
}
```

> ✍️ Nota
>
> El ejemplo es un sistema avanzado que combina `clamp()`, `calc()` y variables CSS para crear una tipografía fluida con interpolación lineal, garantizando que el tamaño del texto se escale proporcionalmente entre un viewport mínimo y máximo.
> <br> <br>
> La **interpolación lineal** es un método matemático que se usa para estimar valores dentro de un intervalo entre dos puntos conocidos. Se basa en la suposición de que el cambio entre esos dos puntos sigue una línea recta.

</div>
