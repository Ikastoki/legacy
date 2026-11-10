---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Rendimiento"
block: "Diseño adaptativo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Rendimiento</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Rendimiento en Diseño Adaptativo](#rendimiento-en-diseño-adaptativo)
- [will-change](#will-change)
- [contain](#contain)
- [Otras Técnicas de Rendimiento](#otras-técnicas-de-rendimiento)

</div>
</div>

## Rendimiento en Diseño Adaptativo

El objetivo es reducir la cantidad de trabajo que el navegador tiene que hacer para renderizar y actualizar la página, lo que se traduce en animaciones más fluidas y tiempos de carga más rápidos.

## will-change

La propiedad `will-change` es una herramienta de optimización que informa al navegador sobre los cambios que se esperan en un elemento. Al avisar al navegador con anticipación, este puede realizar optimizaciones de renderizado antes de que ocurra la animación.

¿Cómo funciona?

En lugar de que el navegador reaccione en tiempo real a una animación, will-change le dice "oye, este elemento va a cambiar su `transform` o su `opacity` en breve, así que prepárate". El navegador puede entonces mover el elemento a una nueva capa de renderizado en la GPU (unidad de procesamiento gráfico), lo que hace que las animaciones sean mucho más fluidas.

Uso práctico:

Aplica `will-change` en los elementos que se van a animar o a los que se les va a aplicar una transición. Por ejemplo, en un efecto hover.

```css
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.1);
  will-change: transform; /* Informamos al navegador que el "transform" cambiará */
}
```

> ✍️ Nota
>
> Usa `will-change` con moderación y solo en los elementos que realmente se van a animar. Si lo aplicas a demasiados elementos, puede consumir mucha memoria y perjudicar el rendimiento. Lo ideal es aplicarlo en el estado (`:hover`, `:focus`) o con JavaScript justo antes de la animación.

## contain

La propiedad contain es una herramienta más avanzada que permite a los desarrolladores aislar un elemento y su contenido del resto de la página. Esto le dice al navegador que no es necesario recalcular el diseño o el estilo de toda la página si solo cambia el contenido de ese elemento.

¿Cómo funciona?

Al declarar contain en un elemento, le dices al navegador que los cambios dentro de ese elemento no tienen efectos externos. Esto permite que el navegador optimice el renderizado y el diseño solo para esa parte de la página.

Uso práctico:

Es útil en componentes que cambian a menudo, como un feed de noticias que se actualiza en tiempo real o un carrusel.

```css
.carrusel-items {
  contain: layout; /* Se aísla el cálculo del layout de los ítems */
}
```

Valores más comunes:

- `layout`: Aísla el cálculo del layout.

- `paint`: Aísla el renderizado y evita que el contenido de un elemento se desborde o afecte a otros.

- `size`: Aísla el tamaño del elemento, informando al navegador que su tamaño no cambiará.

- `content`: Es un atajo para layout y paint.

## Otras Técnicas de Rendimiento

- Optimizar imágenes: Como vimos, usar los atributos `srcset` y `sizes` en la etiqueta `<img>` es fundamental. Además, usar formatos de imagen modernos como **WebP** o **AVIF** puede reducir drásticamente el tamaño del archivo.

- Cargar recursos condicionalmente: Con media queries, puedes evitar cargar CSS o JavaScript que solo se necesita para tamaños de pantalla grandes.

- Lazy Loading: Retrasa la carga de imágenes, videos y otros recursos hasta que el usuario se desplaza a la parte de la página donde son visibles. Esto se puede hacer con el atributo `loading="lazy"` en la etiqueta `<img>`.
