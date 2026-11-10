---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Unidades adaptativas"
block: "Diseño adaptativo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Unidades adaptativas</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Unidades adaptativas en CSS](#unidades-adaptativas-en-css)
- [Unidades Relativas al viewport](#unidades-relativas-al-viewport)
- [Unidades Relativas a la Fuente](#unidades-relativas-a-la-fuente)
- [Otras Unidades Adaptativas](#otras-unidades-adaptativas)

</div>
</div>

## Unidades adaptativas en CSS

Las unidades adaptativas, o relativas, son fundamentales en el diseño web moderno. A diferencia de las unidades fijas como los píxeles (px), que tienen un tamaño constante, las unidades relativas se escalan en función de un contexto, como el tamaño de la pantalla, el tamaño de la fuente de un elemento padre o la altura de la ventana del navegador.

## Unidades Relativas al viewport

Estas unidades son ideales para diseños fluidos, ya que su tamaño depende del tamaño de la ventana del navegador (viewport).

- `vw` (viewport width): Representa el 1% del ancho de la ventana del navegador. Por ejemplo, si la ventana tiene 1000px de ancho, 10vw será igual a 100px.

- `vh` (viewport height): Representa el 1% de la altura de la ventana del navegador.

- `vmin` (viewport minimum): Es el 1% del lado más pequeño de la ventana (ya sea el ancho o la altura).

- `vmax` (viewport maximum): Es el 1% del lado más grande de la ventana.

Uso práctico: Son perfectas para elementos que deben escalar con la pantalla, como tamaños de fuente en títulos o anchos de contenedores que quieres que se ajusten a la pantalla.

## Unidades Relativas a la Fuente

Estas unidades se basan en el tamaño de la fuente. Son excelentes para mantener la coherencia y la accesibilidad, ya que si el usuario cambia el tamaño de su fuente base, todos los elementos se ajustarán.

- `em`: Relativa al tamaño de la fuente del elemento padre. Por ejemplo, si el padre tiene un font-size de 16px, 1em será 16px. Si el hijo tiene un font-size de 2em, será 32px. Su valor puede ser impredecible si no se tiene un control estricto de la jerarquía.

- `rem` (root em): Relativa al tamaño de la fuente del elemento raíz (`<html>`). Este es su punto fuerte, ya que su valor es consistente en toda la página. 1rem siempre será igual al tamaño de fuente base, sin importar la anidación de elementos.

Uso práctico: `rem` es la opción más recomendada para tamaños de fuente, espaciados y márgenes. `em` se usa a menudo para espaciados internos que deben escalar con la fuente del propio elemento, como el padding de un botón.

## Otras Unidades Adaptativas

- `%` (porcentajes): Relativos al tamaño del contenedor padre. Son útiles para anchos de columna en layouts, pero no son tan versátiles para otros elementos como las unidades viewport.

- `fr` (fracción): Una unidad flexible de CSS Grid que representa una parte del espacio libre disponible.

> ✍️ Nota
> 
> Para lograr un diseño responsivo eficaz, la mejor práctica es combinar estas unidades. Por ejemplo, usar rem para el tamaño del texto y vh o vw para los elementos que deben tener una altura o un ancho específico en relación con la pantalla.
