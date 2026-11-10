---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Imágenes y Videos"
block: "Diseño adaptativo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Imágenes y Videos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Imágenes y Videos en Diseño Adaptativo](#imágenes-y-videos-en-diseño-adaptativo)
- [Imágenes Flexibles](#imágenes-flexibles)
- [Imágenes Responsivas (srcset y sizes)](#imágenes-responsivas-srcset-y-sizes)
- [Videos Adaptativos](#videos-adaptativos)


</div>
</div>

## Imágenes y Videos en Diseño Adaptativo

Uno de los mayores desafíos del diseño responsivo es cómo mostrar elementos multimedia de forma eficiente. Si una imagen de alta resolución se carga en un móvil, se desperdicia ancho de banda y la página tarda más en cargar. Por eso, necesitamos que estos elementos sean flexibles.

## Imágenes Flexibles

Para que una imagen se adapte a su contenedor, la solución más simple es utilizar CSS.

- `max-width: 100%`: Esta es la propiedad más importante. Asegura que la imagen nunca se estire más allá del ancho de su contenedor.

- `height: auto`: Mantiene la proporción original de la imagen. Si el ancho cambia, la altura se ajustará automáticamente, evitando que la imagen se vea distorsionada.

```css
img {
  max-width: 100%;
  height: auto;
  display: block; /* Para evitar problemas de espaciado con otros elementos */
}
```

## Imágenes Responsivas (srcset y sizes)

Para optimizar el rendimiento, los navegadores no solo deben escalar la imagen, sino también cargar la versión más apropiada para el dispositivo. Para esto, usamos el atributo srcset en la etiqueta `<img>`.

- `srcset`: Permite definir una lista de imágenes candidatas y la condición para usarlas. El navegador elige cuál cargar según el viewport del usuario.

- `w`: Indica el ancho real de cada imagen en píxeles.

- `src`: Es el fallback (la imagen por defecto) si el navegador no soporta srcset.

- `sizes`: Proporciona información adicional al navegador sobre el tamaño de la imagen en diferentes breakpoints. Se usa junto con srcset.

```html
<img
  srcset="
    imagen-pequena.jpg  500w,
    imagen-mediana.jpg  800w,
    imagen-grande.jpg  1200w
  "
  sizes="(max-width: 600px) 480px,
            (max-width: 900px) 800px,
            1200px"
  src="imagen-mediana.jpg"
  alt="Descripción"
/>
```

En este ejemplo, le estamos diciendo al navegador:

- Si la pantalla es de 600px o menos, la imagen ocupará 480px de ancho.
- Si está entre 600px y 900px, ocupará 800px.
- Si es más grande, ocupará 1200px.

Con esta información, el navegador puede elegir de forma inteligente qué imagen cargar, mejorando la velocidad de la página.

## Videos Adaptativos

Para que los videos incrustados sean responsivos, se suele usar un div contenedor que mantiene la proporción.

```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/..."></iframe>
</div>
```

```css
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* Esto crea una proporción de 16:9 */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

- `padding-bottom`: 56.25%: Este valor es el resultado de (9 / 16) \* 100. Crea un contenedor con la proporción 16:9.

- `position: relative` y `position: absolute`: Permiten que el iframe se posicione sobre el div y ocupe todo su espacio, manteniendo la proporción
