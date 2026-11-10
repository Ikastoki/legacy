---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Modelo de caja"
block: "Maquetación básica"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Modelo de caja (Repaso)</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué es el modelo de caja?](#qué-es-el-modelo-de-caja)
- [Propiedades clave](#propiedades-clave)
  - [Dimensiones del contenido](#dimensiones-del-contenido)
  - [Espaciado interno: padding](#espaciado-interno-padding)
  - [Bordes: border](#bordes-border)
  - [Espaciado externo: margin](#espaciado-externo-margin)
- [Tipos de caja (display)](#tipos-de-caja-display)
- [El Problema del box-sizing](#el-problema-del-box-sizing)
- [Colapso de márgenes](#colapso-de-márgenes)

</div>
</div>

## ¿Qué es el modelo de caja?

Cada elemento HTML se representa como una caja rectangular compuesta por cuatro capas:

- **Contenido (content):** El área donde se muestra el texto, imágenes, etc.

- **Relleno (padding):** Espacio interno entre el contenido y el borde.

- **Borde (border):** Línea que enmarca el padding y el contenido.

- **Margen (margin):** Espacio externo que separa la caja de otros elementos

> ✍️ Nota
>
> Esto es un repaso del box-model, no esta "repetido".

## Propiedades clave

### Dimensiones del contenido

- `width` / `height`: Definen el tamaño del contenido (no incluyen padding/border/margin).

```css
div {
  width: 300px; /* Ancho del contenido */
  height: 200px; /* Alto del contenido */
}
```

### Espaciado interno: padding

Añade espacio dentro de la caja, entre el contenido y el borde.

```css
div {
  padding: 20px; /* Uniforme */
  padding: 10px 20px; /* Vertical | Horizontal */
  padding: 5px 10px 15px; /* Superior | Horizontal | Inferior */
  padding: 5px 10px 15px 20px; /* Superior | Derecho | Inferior | Izquierdo */
}
```

### Bordes: border

Estilo, grosor y color del borde.

```css
div {
  border: 2px solid #ff0000; /* grosor | estilo | color */
  border-radius: 8px; /* Bordes redondeados */
}
```

### Espaciado externo: margin

Controla el espacio fuera de la caja, entre elementos.

```css
div {
  margin: 0 auto; /* Centrado horizontal (con width definido) */
  margin-top: 10px;
}
```

## Tipos de caja (display)

El comportamiento de una caja depende de su propiedad `display`:

- `block` Ocupa todo el ancho disponible, saltos de línea.
- `inline` Fluye con el texto, ignora `width`/`height`.
- `inline-block` Mezcla características: tamaño personalizable pero en línea.

```css
.inline-box {
  display: inline-block;
  width: 100px;
}
```

## El Problema del box-sizing

Por defecto (`box-sizing: content-box`), el width y height solo afectan al contenido, por lo que el tamaño total de la caja se calcula como:

➡️ Ancho total = `width + padding + border + margin`

Solución: `box-sizing: border-box`

Incluye el padding y el borde dentro del `width`/`height`:

```css
* {
  box-sizing: border-box; /* ¡Mejor práctica! */
}

div {
  width: 300px; /* Ahora incluye padding y border */
  padding: 20px;
  border: 5px solid black;
  /* Ancho total = 300px (content + padding + border) + margin */
}
```

## Colapso de márgenes

Un comportamiento peculiar de CSS:

Cuando dos elementos verticales tienen márgenes, el margen resultante **no es la suma**, sino **el mayor de los dos**:

```css
.div1 {
  margin-bottom: 30px;
}
.div2 {
  margin-top: 20px;
}
/* Espacio real entre div1 y div2: 30px (no 50px) */
```

</div>
