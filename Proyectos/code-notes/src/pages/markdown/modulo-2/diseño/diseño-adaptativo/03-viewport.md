---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Viewport"
block: "Diseño adaptativo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Viewport</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué es el Viewport?](#qué-es-el-viewport)
- [La Meta Etiqueta del Viewport](#la-meta-etiqueta-del-viewport)
- [Unidades relacionadas con el Viewport](#unidades-relacionadas-con-el-viewport)


</div>
</div>

## ¿Qué es el Viewport?

El viewport es el área visible de la página web en la ventana del navegador. En otras palabras, es el espacio en el que el usuario ve el contenido.

En las computadoras de escritorio, el viewport simplemente se refiere al tamaño de la ventana del navegador. Sin embargo, en los dispositivos móviles, las cosas se complican:

El **viewport original** es más grande que la pantalla física del dispositivo. Por ejemplo, la pantalla de un móvil puede tener un ancho de 375px, pero el navegador crea un viewport de 980px por defecto para poder renderizar sitios web antiguos. Esto hace que el sitio se vea pequeño y el usuario tenga que hacer zoom.

El **viewport responsivo** es lo que queremos. Es un viewport que tiene un tamaño igual al de la pantalla del dispositivo.

## La Meta Etiqueta del Viewport

Para indicarle al navegador que tu sitio web es responsivo y que debe usar un viewport que se ajuste al tamaño de la pantalla, necesitas agregar la siguiente etiqueta en la sección `<head>` de tu documento HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Vamos a desglosar qué hace cada parte:

- `width=device-width`: Le dice al navegador que el ancho del viewport debe ser igual al ancho de la pantalla del dispositivo en píxeles CSS.

- `initial-scale=1.0`: Establece el nivel de zoom inicial en 1.0, lo que significa que no se aplica ningún zoom cuando la página se carga. Esto asegura que la página se vea correctamente en su tamaño real.

Sin esta etiqueta, los dispositivos móviles renderizarán tu sitio como si fuera de escritorio, lo cual arruina la experiencia de usuario.

## Unidades relacionadas con el Viewport

Como vimos en el tema de unidades, el viewport es la referencia para las unidades `vw`, `vh`, `vmin` y `vmax`.

- `1vw`: Es el 1% del ancho del viewport.

- `1vh`: Es el 1% de la altura del viewport.

Estas unidades son muy útiles para crear elementos que escalen en proporción al tamaño de la pantalla, como un título que siempre ocupe el 50% del ancho de la pantalla (`font-size: 5vw;`).
