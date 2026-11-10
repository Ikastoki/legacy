---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Sombras"
block: "Colores"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Sombras</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Sombras](#sombras)
- [Sombras de caja](#sombras-de-caja)
  - [Propiedad box-shadow](#propiedad-box-shadow)
- [Sombras de texto](#sombras-de-texto)

</div>
</div>

## Sombras

Las sombras en CSS son una forma de agregar profundidad y realismo a los elementos de una página web. Hay dos tipos principales de sombras que se pueden aplicar en CSS: sombras de caja y sombras de texto.

## Sombras de caja

Las sombras de caja se aplican alrededor del borde de un elemento y se pueden personalizar en términos de color, tamaño y difuminado.

### Propiedad box-shadow

La propiedad box-shadow se utiliza para agregar sombras a los elementos HTML. Puedes especificar varios valores separados por comas para crear sombras múltiples en un mismo elemento. Aquí hay una descripción detallada de los valores que puedes usar:

- **offsetX:** Define el desplazamiento horizontal de la sombra. Un valor positivo desplaza la sombra hacia la derecha y un valor negativo hacia la izquierda.
- **offsetY:** Define el desplazamiento vertical de la sombra. Un valor positivo desplaza la sombra hacia abajo y un valor negativo hacia arriba.
- **blurRadius:** Define el radio de desenfoque de la sombra. Cuanto mayor sea el valor, más suave será el borde de la sombra.
- **spreadRadius:** Opcional. Define la extensión de la sombra. Un valor positivo aumenta el tamaño de la sombra y un valor negativo la reduce.
- **color:** Define el color de la sombra. Puede especificarse utilizando nombres de color, códigos hexadecimales, RGB, RGBA o HSLA.

```css
/* Sombras de caja */
.box-shadow {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); /* offsetX, offsetY, blurRadius, spreadRadius, color */
}
```

## Sombras de texto

Las sombras de texto se aplican detrás del texto de un elemento y también se pueden personalizar en términos de color, tamaño y difuminado.

```css
/* Sombras de texto */
.text-shadow {
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5); /* offsetX, offsetY, blurRadius, color */
}
```

</div>
