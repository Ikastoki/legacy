---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Media Queries"
block: "Diseño adaptativo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Media Queries</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué son las Media Queries?](#qué-son-las-media-queries)
- [Condiciones más comunes](#condiciones-más-comunes)
- [Puntos de Ruptura (Breakpoints)](#puntos-de-ruptura-breakpoints)
- [Medidas estándar:](#medidas-estándar)
- [Media Features](#media-features)
  - [Ancho de la pantalla (width)](#ancho-de-la-pantalla-width)
  - [Orientación (orientation)](#orientación-orientation)
  - [Resolución de pantalla (resolution)](#resolución-de-pantalla-resolution)
  - [Relación de aspecto (aspect-ratio)](#relación-de-aspecto-aspect-ratio)
  - [Dispositivo táctil (pointer:coarse)](#dispositivo-táctil-pointercoarse)


</div>
</div>

## ¿Qué son las Media Queries?

Las Media Queries son una característica de CSS que te permite aplicar estilos solo cuando se cumplen ciertas condiciones. La condición más común es el tamaño de la ventana del navegador (viewport), lo que te permite cambiar el diseño de tu página para diferentes dispositivos, como móviles, tablets y computadoras de escritorio.

Las Media Queries consisten en una regla @media que contiene una o más condiciones. Si las condiciones se cumplen, los estilos dentro de la regla se aplicarán.

## Condiciones más comunes

Las condiciones que se utilizan con más frecuencia se basan en el ancho de la pantalla:

- `min-width`: Aplica los estilos cuando el ancho de la pantalla es mayor o igual al valor especificado. Es la base del enfoque Mobile-First.

- `max-width`: Aplica los estilos cuando el ancho de la pantalla es menor o igual al valor especificado.

## Puntos de Ruptura (Breakpoints)

Los puntos de ruptura son los valores que eliges para las Media Queries (600px, 992px, etc.). No hay una regla estricta para definir los breakpoints; lo ideal es que se basen en el diseño de tu página y en el punto en el que el layout deja de verse bien.

Evita usar breakpoints basados en dispositivos específicos (como "iPhone 6"). Es mejor usar breakpoints que se adapten a tu contenido, ya que hay miles de dispositivos con diferentes tamaños de pantalla.

`min-width` vs. `max-width`: Con `min-width` (enfoque Mobile-First), los estilos se añaden en cada breakpoint. Con `max-width`, los estilos se sobrescriben en cada breakpoint. El enfoque `min-width` es más limpio y fácil de mantener.

## Medidas estándar:

Medidas orientativas, utiliza las medidas en función a tus necesidades. Las menciono pero lo ideal es que se ajusten al diseño concreto.

- Pequeño: min-width: 460px
- Mediano: min-width: 768px
- Largo: min-width: 768px
- Largo-Plus: min-width: 1280px

> ✍️ Nota
>
> NO usar valores estándar de tamaños para las media queries.
> La media query debe depender del DISEÑO, NO del tamaño de ningún DISPOSITIVO.

Ejemplo: Cambiar el color en cada punto de ruptura

```html
<!-- HTML -->
<div class="wrapper">
  <h1>Texto Prueba</h1>
</div>
```

```css
/* CSS */

.wrapper {
  width: 500px;
  height: 250px;
  margin: 200px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
}

/* Mobile */

@media (min-width: 460px) {
  h1 {
    color: teal;
  }
}

/* Tablet */

@media (min-width: 768px) {
  h1 {
    color: tomato;
  }
}

/* Desktop */

@media (min-width: 992px) {
  h1 {
    color: turquoise;
  }
}

/* Landscape */

@media (min-width: 1280px) {
  h1 {
    color: thistle;
  }
}
```

![Cambiar color en cada punto de ruptura](./img/mediaQuery.gif)

## Media Features

Las CSS Media Features (características de medios CSS) son una parte fundamental de las media queries en CSS. Permiten a los desarrolladores web aplicar estilos específicos a sus páginas según características específicas de los dispositivos o de la visualización.

### Ancho de la pantalla (width)

Permite aplicar estilos dependiendo del ancho de la ventana del navegador o del dispositivo.

```css
@media screen and (max-width: 768px) {
  /* Estilos aplicados cuando el ancho de la pantalla es igual o menor a 768px */
}
```

### Orientación (orientation)

Permite aplicar estilos basados en la orientación del dispositivo (horizontal o vertical).

```css
@media screen and (orientation: landscape) {
  /* Estilos aplicados cuando el dispositivo está en orientación horizontal */
}
```

### Resolución de pantalla (resolution)

Permite aplicar estilos basados en la densidad de píxeles de la pantalla.

```css
@media screen and (orientation: landscape) {
  /* Estilos aplicados cuando el dispositivo está en orientación horizontal */
}
```

### Relación de aspecto (aspect-ratio)

Permite aplicar estilos basados en la relación entre el ancho y la altura de la pantalla.

```css
@media screen and (aspect-ratio: 16/9) {
  /* Estilos aplicados cuando la relación de aspecto de la pantalla es de 16:9 */
}
```

### Dispositivo táctil (pointer:coarse)

Permite aplicar estilos específicos para dispositivos con entrada táctil.

```css
@media (pointer: coarse) {
  /* Estilos aplicados cuando el dispositivo tiene entrada táctil */
}
```
