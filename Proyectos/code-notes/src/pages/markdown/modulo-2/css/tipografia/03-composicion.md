---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Composición "
block: "Tipografía"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Composición </h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Composición](#composición)
- [Altura de línea: line-height](#altura-de-línea-line-height)
- [Justificación avanzada: text-justify](#justificación-avanzada-text-justify)
- [Dirección del texto: direction](#dirección-del-texto-direction)
- [Modo de escritura: writing-mode](#modo-de-escritura-writing-mode)

</div>
</div>

## Composición

La composición tipográfica es esencial para crear textos legibles y visualmente atractivos.

## Altura de línea: line-height

Controla el espacio vertical entre líneas de texto, mejorando la legibilidad.

Valores comunes:

- Sin unidad (ej. `1.5`): Relativo al tamaño de la fuente actual.

- Unidades fijas (ej. `24px` o `1.5em`): Valor absoluto o relativo.

```css
p {
  line-height: 1.6; /* Espaciado óptimo para lectura */
}
```

> ✍️ Nota
>
> Usar valores entre 1.4 y 1.8 para párrafos largos.
>
> Evitar unidades fijas (px) si el diseño debe ser responsive.

## Justificación avanzada: text-justify

Ajusta el espaciado interno del texto cuando se usa text-align: justify.

Valores útiles:

- `auto`: El navegador decide (por defecto).

- `inter-word`: Ajusta espacios entre palabras.

- `inter-character`: Ajusta espacios entre caracteres (útil para idiomas CJK).

```css
.libro {
  text-align: justify;
  text-justify: inter-word;
}
```

## Dirección del texto: direction

Define la dirección del flujo del texto (izquierda a derecha o derecha a izquierda).

Valores:

- `ltr` (left-to-right): Predeterminado en idiomas occidentales.

- `rtl` (right-to-left): Para árabe, hebreo, etc.

```css
.arabic {
  direction: rtl;
  text-align: right; /* Alineación coherente */
}
```

## Modo de escritura: writing-mode

Cambia la orientación del texto (horizontal o vertical).

Valores principales:

- horizontal-tb (predeterminado: texto horizontal, top-to-bottom).

- vertical-rl: Texto vertical, right-to-left (como en japonés tradicional).

- Texto vertical, left-to-right.

```css
.titulo-vertical {
  writing-mode: vertical-rl;
  letter-spacing: 0.5em; /* Mejora legibilidad */
}
```

</div>
