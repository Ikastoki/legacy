---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Tipografía"
block: "Diseño adaptativo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Tipografía</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Tipografía en el Diseño Adaptativo](#tipografía-en-el-diseño-adaptativo)
- [Unidades Relativas para un Tamaño Flexible](#unidades-relativas-para-un-tamaño-flexible)
- [Media Queries para un Control Fino](#media-queries-para-un-control-fino)
- [Ajuste de la Legibilidad en Diferentes Pantallas](#ajuste-de-la-legibilidad-en-diferentes-pantallas)


</div>
</div>

## Tipografía en el Diseño Adaptativo

La tipografía responsiva es el proceso de hacer que el texto de un sitio web sea legible y visualmente atractivo en cualquier tamaño de pantalla. No se trata solo de cambiar el font-size, sino de ajustar múltiples propiedades para garantizar una buena experiencia de lectura.

## Unidades Relativas para un Tamaño Flexible

Usar unidades relativas es la base para una tipografía adaptable.

- `rem` (Recomendado): Es la unidad más utilizada para el tamaño de fuente. Como 1rem es igual al font-size del elemento raíz (`<html>`), puedes cambiar el tamaño de fuente globalmente y todo el texto se escalará de manera proporcional.

- `vw` (viewport width): Es ideal para títulos o encabezados que deben escalar de forma fluida con el tamaño de la pantalla. Por ejemplo, font-size: 5vw; hará que el título ocupe siempre el 5% del ancho de la pantalla, sin importar si es un móvil o un monitor 4K.

Tip: Puedes combinar `vw` y `rem` para evitar que el texto se vuelva ilegible en pantallas muy pequeñas o muy grandes. Por ejemplo: `font-size: clamp(2rem, 5vw, 4rem);`.

## Media Queries para un Control Fino

Las media queries te permiten cambiar el tamaño de la tipografía y otras propiedades en breakpoints específicos. Esto es crucial para ajustar la lectura en diferentes dispositivos.

```css
/* Estilos por defecto para móviles */
body {
  font-size: 16px;
  line-height: 1.6;
}

h1 {
  font-size: 2.5rem;
}

/* Para pantallas de tablets */
@media (min-width: 768px) {
  body {
    font-size: 18px; /* Aumentamos el tamaño de fuente base */
  }

  h1 {
    font-size: 3.5rem;
  }
}

/* Para pantallas de escritorio */
@media (min-width: 1200px) {
  body {
    font-size: 20px;
  }

  h1 {
    font-size: 4rem;
  }
}
```

## Ajuste de la Legibilidad en Diferentes Pantallas

Además del tamaño, hay otras propiedades que debes ajustar para mejorar la legibilidad:

- `line-height` (Interlineado): El espacio entre líneas de texto. En pantallas pequeñas, un line-height más ajustado puede funcionar, pero en pantallas grandes, un valor de 1.5 o 1.6 mejora mucho la lectura.

- `letter-spacing` (Espaciado entre letras): En pantallas más grandes, a veces un ligero aumento en el espaciado entre letras puede mejorar la estética, pero en pantallas pequeñas es mejor mantenerlo al mínimo.

- Longitud de línea: Una línea de texto idealmente debe tener entre 45 y 75 caracteres. En pantallas muy anchas, un texto que se estira al 100% del ancho del contenedor puede ser difícil de leer. Puedes usar max-width en un párrafo para evitar que las líneas sean demasiado largas.

- Combinación de fuentes: Limitar la combinación de fuentes a un máximo de dos. Una **sans-serif** para el cuerpo del texto y una **serif** o de exhibición para los títulos suele ser una práctica común y efectiva.
