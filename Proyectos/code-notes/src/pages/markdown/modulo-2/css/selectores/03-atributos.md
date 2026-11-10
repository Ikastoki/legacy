---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Selector de atributo"
block: "Selectores"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Selector de atributo</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Selector de atributo](#selector-de-atributo)

</div>
</div>

## Selector de atributo

El selector de atributo permite seleccionar elementos en función de su atributo o el valor del atributo.

Sintaxis:

`selector[atributo="valor"]{propiedad: valor}`

**Caracteres para ser mas específicos:**

Sintaxis:

`selector[atributo**carácter**="valor"]{propiedad: valor}`

- (\*) --> Todos los elementos que contengan ese valor.
- (^) --> Todos los elementos que empiezan por ese valor.
- ($) --> Todos los elementos que terminan por ese valor.
- (~) --> Buscar un valor sin importar si esta separado por espacios.
- (i o I) --> Para evitar distinguir valores en mayúsculas o minúsculas. Agregar antes del corchete de cierre.
- (s o S) --> Para distinguir valores en mayúsculas o minúsculas. Agregar antes del corchete de cierre.

Ejemplos:

```html
<!-- Enlaces -->
<a href="informacion.html">Información</a>
<a href="blog.html">Blog</a>
<a href="contactos.php">Contactos</a>
```

```css
/* CSS */

/* Cambiar el color(rojo) a todos los enlaces que tengan el atributo. */
a[href] {
  color: red;
}
/* Cambiar el color(azul) a todos los enlaces que contengan el valor `href="blog.html"`. */
a[href="blog.html"] {
  color: blue;
}
/* Cambiar el color(verde) a todos los enlaces que terminen con .php */
a[href$=".php"] {
  color: green;
}
```

</div>
