---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Scroll"
block: "Animaciones y Filtros"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Scroll</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Scroll](#scroll)
  - [Parámetros:](#parámetros)
- [Scroll-snap](#scroll-snap)

</div>
</div>

## Scroll

La función CSS scroll() se puede utilizar con `animation-timeline` para indicar un elemento desplazable y un eje de barra de desplazamiento que proporcionará una línea de tiempo de progreso de desplazamiento anónimo para animar el elemento actual. La línea de tiempo del progreso del desplazamiento avanza desplazando el control de desplazamiento entre arriba y abajo o izquierda y derecha. La posición en el rango de desplazamiento se convierte en un porcentaje de progreso: 0% al principio y 100% al final.

### Parámetros:

- **nearest:** El ancestro más cercano del elemento actual que tiene barras de desplazamiento en cualquiera de los ejes(Por defecto).
- **root:** El elemento raíz del documento
- **self:** El elemento actual.

```html
<!-- HTML -->
<div id="progress"></div>

<main>
  <h1>Haz Scroll</h1>
  <h2>Encabezado</h2>

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ratione
    accusamus, eligendi suscipit itaque, commodi illum numquam eveniet nostrum
    ea est! Eius architecto ipsa quis similique? Omnis nam qui a?
  </p>

  <h2>Encabezado</h2>

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ratione
    accusamus, eligendi suscipit itaque, commodi illum numquam eveniet nostrum
    ea est! Eius architecto ipsa quis similique? Omnis nam qui a?
  </p>

  <h2>Encabezado</h2>

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ratione
    accusamus, eligendi suscipit itaque, commodi illum numquam eveniet nostrum
    ea est! Eius architecto ipsa quis similique? Omnis nam qui a?
  </p>

  <h2>Encabezado</h2>

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ratione
    accusamus, eligendi suscipit itaque, commodi illum numquam eveniet nostrum
    ea est! Eius architecto ipsa quis similique? Omnis nam qui a?
  </p>

  <h2>Encabezado</h2>

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ratione
    accusamus, eligendi suscipit itaque, commodi illum numquam eveniet nostrum
    ea est! Eius architecto ipsa quis similique? Omnis nam qui a?
  </p>
</main>
```

```css
/* CSS */
main {
  padding: 32px;
}

/* Barra Scroll */
#progress {
  width: 0%;
  height: 1em;
  background-color: red;
  position: fixed;
  top: 0;

  animation: barra-progreso auto linear;
  animation-timeline: scroll(root block);
}

@keyframes barra-progreso {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
```

## Scroll-snap

Scroll-Snap se utiliza para controlar el comportamiento del desplazamiento en contenedores con desplazamiento (scroll containers). Permite que el contenido dentro de un contenedor se "ajuste" o "enganche" a ciertos puntos durante el desplazamiento, haciendo que la experiencia de desplazamiento sea más fluida y controlada.

Hay dos propiedades relacionadas con scroll-snap:

- **scroll-snap-type:** Esta propiedad se utiliza para definir el comportamiento de enganche del desplazamiento.

  Puede tener dos valores principales:

  - scroll-snap-type: `none`; No se aplica ningún enganche al desplazamiento.
  - scroll-snap-type: [x-axis] [y-axis]; Especifica si el enganche debe aplicarse en el eje X, el eje Y o en ambos ejes. Los valores posibles son `none`, `mandatory` y `proximity`.

- **scroll-snap-align:** Esta propiedad se utiliza para especificar cómo se debe alinear el elemento objetivo de la secuencia de enganche dentro del contenedor de desplazamiento.

  Puede tener los siguientes valores:

  - scroll-snap-align: `none`; No se aplica ningún ajuste de enganche.
  - scroll-snap-align: [``start`` | ``end`` | ``center``]; Especifica el punto de alineación del elemento objetivo en relación con el contenedor de desplazamiento.

**Ejemplo**

```html
<!-- HTML -->
<div class="scroll-container">
  <div class="section">Section 1</div>
  <div class="section">Section 2</div>
  <div class="section">Section 3</div>
  <div class="section">Section 4</div>
  <div class="section">Section 5</div>
</div>
```

```css
/* CSS */
.scroll-container {
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.section {
  height: 300px;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  scroll-snap-align: start;
}
```
