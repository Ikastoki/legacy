---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Flexbox y Grid"
block: "Diseño adaptativo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Flexbox y Grid</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Flexbox y Grid en Diseño Adaptativo](#flexbox-y-grid-en-diseño-adaptativo)
- [Flexbox para Componentes Unidimensionales](#flexbox-para-componentes-unidimensionales)
- [Grid para Layouts Bidimensionales](#grid-para-layouts-bidimensionales)


</div>
</div>

## Flexbox y Grid en Diseño Adaptativo

Tanto Flexbox como Grid se diseñaron para solucionar los problemas de maquetación que existían antes, especialmente en lo que respecta a la adaptación a diferentes tamaños de pantalla.

## Flexbox para Componentes Unidimensionales

Flexbox es ideal para alinear y distribuir elementos en una sola dimensión (ya sea en filas o en columnas). Por eso, es perfecto para el diseño de componentes.

- Reorganización en diferentes pantallas: Con la propiedad flex-direction, puedes cambiar la dirección de los elementos. Por ejemplo, en un menú de navegación, los ítems pueden estar en una row (fila) en el escritorio y pasar a una column (columna) en el móvil.

- Ajuste automático (flex-wrap): La propiedad flex-wrap permite que los ítems se ajusten a la siguiente línea si no caben en una sola. Esto es clave para crear galerías o listados de tarjetas que se reordenan automáticamente según el espacio disponible.

- Espaciado y alineación: Propiedades como justify-content y align-items facilitan la alineación de los elementos, ya sea que necesites que estén centrados, en los extremos o distribuidos de forma uniforme. Esto es especialmente útil para diseñar barras de navegación o encabezados de forma responsiva.

## Grid para Layouts Bidimensionales

CSS Grid está pensado para organizar elementos en dos dimensiones (filas y columnas) a la vez, lo que lo convierte en la mejor opción para la estructura principal de la página.

- Layouts fluidos (fr): La unidad fr (fractional unit) de Grid te permite crear columnas que se adaptan al espacio disponible. Puedes definir un grid-template-columns: 1fr 3fr 1fr; para que la columna central sea siempre tres veces más ancha que las laterales, sin importar el tamaño de la pantalla.

- Cambio de diseño con Media Queries: Grid brilla cuando se combina con media queries. Puedes redefinir completamente el layout de la página para un breakpoint diferente.

  - Ejemplo: En el escritorio, puedes tener una grilla de tres columnas para la cabecera, el contenido y la barra lateral. Para el móvil, con una media query puedes cambiar a una grilla de una sola columna y reordenar el contenido.

- Contenido que se ajusta: Con grid-auto-flow y las palabras clave auto-fit o auto-fill, puedes crear grillas que añaden o eliminan columnas de forma automática, manteniendo un tamaño mínimo para los ítems. Esto es ideal para galerías de imágenes o listados de productos.
