---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Texto"
block: "Tipografía"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Texto</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Texto](#texto)
- [Alineación del texto: text-align](#alineación-del-texto-text-align)
- [Decoración de texto: text-decoration](#decoración-de-texto-text-decoration)
- [Transformación de texto: text-transform](#transformación-de-texto-text-transform)
- [Sangría del texto: text-indent](#sangría-del-texto-text-indent)
- [Sombra de texto: text-shadow](#sombra-de-texto-text-shadow)
- [Control de espacios en blanco: white-space](#control-de-espacios-en-blanco-white-space)
- [Ajuste de palabras: word-break](#ajuste-de-palabras-word-break)
- [Espaciado entre palabras: word-spacing](#espaciado-entre-palabras-word-spacing)
- [Espaciado entre letras: letter-spacing](#espaciado-entre-letras-letter-spacing)

</div>
</div>

## Texto

El texto es uno de los elementos más importantes en cualquier interfaz web. CSS ofrece una amplia gama de propiedades para controlar su alineación, decoración, espaciado y legibilidad.

## Alineación del texto: text-align

Controla la alineación horizontal del texto dentro de su contenedor.

Valores comunes:

- `left` (por defecto en la mayoría de idiomas).

- `right` (alineado a la derecha).

- `center` (centrado).

- `justify` (justificado, distribuye el texto uniformemente).

```css
p {
  text-align: center; /* Centra el texto */
}
```

## Decoración de texto: text-decoration

Añade efectos como subrayado, tachado o línea superior.

Valores principales:

- `none` (elimina decoraciones, útil para enlaces).

- `underline` (subrayado).

- `overline` (línea superior).

- `line-through` (tachado).

- `dotted`, `wavy`, etc. (estilos de línea).

```css
.enlace {
  text-decoration: underline wavy blue; /* Subrayado ondulado azul */
}
```

## Transformación de texto: text-transform

Modifica las mayúsculas/minúsculas del texto sin cambiar el contenido original.

Valores útiles:

- `uppercase` (TODO EN MAYÚSCULAS).

- `lowercase` (todo en minúsculas).

- `capitalize` (Primera Letra En Mayúscula).

## Sangría del texto: text-indent

Añade una sangría en la primera línea de un párrafo (similar a un libro impreso).

```css
p {
  text-indent: 2em; /* Sangría de 2 veces el tamaño de la fuente */
}
```

## Sombra de texto: text-shadow

Agrega sombras al texto para efectos visuales.

```css
selector {
  text-shadow: [desplazamientoX] [desplazamientoY] [desenfoque] [color];
}

.titulo-destacado {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra difuminada */
}
```

## Control de espacios en blanco: white-space

Define cómo se manejan los espacios, saltos de línea y tabulaciones.

Valores clave:

- `normal` (colapsa espacios múltiples).

- `nowrap` (evita saltos de línea).

- `pre` (conserva espacios y saltos, como `<pre>`).

```css
.codigo {
  white-space: pre; /* Mantiene formato original */
}
```

## Ajuste de palabras: word-break

Controla cómo se rompen las palabras cuando no caben en su contenedor.

Valores útiles:

- `normal` (rompe en espacios o guiones).

- `break-all` (fuerza el corte en cualquier carácter).

- `keep-all` (evita rupturas en ideogramas como el chino).

```css
.url-larga {
  word-break: break-all; /* Rompe palabras largas */
}
```

## Espaciado entre palabras: word-spacing

Ajusta el espacio horizontal entre palabras.

```css
p {
  word-spacing: 0.5em; /* Aumenta el espacio entre palabras */
}
```

## Espaciado entre letras: letter-spacing

Modifica el espacio entre caracteres (kerning).

Casos comunes:

- **Mayúsculas:** Aumentar el espacio para mejor legibilidad.

- **Logotipos:** Ajuste fino para estética.

```css
.titulo-elegante {
  letter-spacing: 2px; /* Espaciado amplio */
}
```

> ✍️ Nota
>
> - Usa text-shadow con moderación para evitar reducir legibilidad.
> - Combina letter-spacing y text-transform para títulos impactantes.
> - Evita text-align: justify en móviles (puede crear "ríos" de espacios).

</div>
