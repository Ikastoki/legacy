---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Desbordamiento "
block: "Maquetación básica"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Desbordamiento </h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Desbordamiento](#desbordamiento)
- [La propiedad overflow](#la-propiedad-overflow)
- [Ejes específicos: overflow-x y overflow-y](#ejes-específicos-overflow-x-y-overflow-y)
- [Texto que desborda: text-overflow](#texto-que-desborda-text-overflow)

</div>
</div>

## Desbordamiento

El desbordamiento (`overflow`) ocurre cuando el contenido de un elemento excede los límites de su contenedor. En CSS, podemos controlar este comportamiento para evitar diseños rotos o mejorar la experiencia de usuario.

## La propiedad overflow

Define cómo se gestiona el contenido que desborda un elemento con dimensiones fijas (`width`/`height`).

Valores Principales:

- `visible` (Por defecto) El contenido sobresale sin restricciones.
- `hidden` Oculta el contenido que desborda.
- `scroll` Añade barras de desplazamiento (aunque no haya desbordamiento).
- `auto` Muestra barras solo si es necesario.

## Ejes específicos: overflow-x y overflow-y

Controla el desbordamiento en un solo eje:

```css
.contenedor {
  overflow-x: hidden; /* Oculta el desbordamiento horizontal */
  overflow-y: scroll; /* Añade scroll vertical */
}
```

## Texto que desborda: text-overflow

Útil para truncar texto largo en un contenedor estrecho.

Requisitos:

- El contenedor debe tener `overflow`: `hidden`.

- Usar `white-space: nowrap` para evitar saltos de línea.

```css
.recorte {
  white-space: nowrap; /* Evita saltos de línea */
  overflow: hidden; /* Oculta el texto que sobresale */
  text-overflow: ellipsis; /* Añade "..." al final */
}
```

</div>
