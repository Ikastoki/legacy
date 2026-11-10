---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Estructura"
block: "Pseudoclases"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudoclases de estructura</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pseudoclases de estructura](#pseudoclases-de-estructura)
  - [:empty](#empty)
  - [:has()](#has)
  - [:not](#not)
  - [:is](#is)
  - [:where](#where)

</div>
</div>

## Pseudoclases de estructura

### :empty

Se utiliza para seleccionar y estilizar elementos que no contienen ningún contenido o hijos, incluyendo espacio en blanco o comentarios.

```html
<!-- HTML -->
<div>Este div tiene contenido</div>
<div></div>
```

```css
/* CSS */
div {
  border: 1px solid #000;
  margin: 10px;
  padding: 10px;
}

div:empty {
  background-color: #e6e6e6;
  border: 1px dashed #999;
}
```

---

### :has()

Selecciona elementos que contienen otros elementos que coinciden con el selector pasado en sus argumentos. A menudo se le conoce como "el selector principal" debido a su capacidad para seleccionar un elemento principal en función de los elementos secundarios que contiene y aplicar estilos al padre.

**Cambiar el fondo solo si contiene un h3**

```html
<!-- HTML -->
<section>
  <h2>Encabezado</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
</section>

<section>
  <h2>Encabezado</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  <h3>Encabezado 3</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
</section>
```

```css
/* CSS */
section:has(h3) {
  background-color: teal;
}
```

---

### :not

Se utiliza para seleccionar elementos que no cumplen con ciertos criterios. Permite excluir elementos específicos de la selección.

**Excluir párrafos**

```html
<!-- HTML -->
<p>Este es un párrafo normal.</p>
<p class="excluido">Este párrafo está excluido.</p>

<div class="contenedor">
  <p>Otro párrafo dentro de .contenedor.</p>
  <p class="excluido">Este párrafo dentro de .contenedor está excluido.</p>
</div>
```

```css
/* CSS */
p:not(.excluido) {
  color: #3498db;
  font-weight: bold;
}

.contenedor p {
  background-color: #ecf0f1;
}
```

---

### :is

Se utiliza para agrupar selectores y simplificar la escritura de reglas CSS. Permite especificar varios selectores dentro de una sola regla, lo que puede hacer que las hojas de estilo sean más concisas.

**Estilar solo p y ol**

```html
<!-- HTML -->
<div class="container">
  <p>Este es un párrafo.</p>
  <ul>
    <li>Elemento de lista 1</li>
    <li>Elemento de lista 2</li>
  </ul>
  <ol>
    <li>Elemento numerado 1</li>
    <li>Elemento numerado 2</li>
  </ol>
</div>
```

```css
/* CSS */
.container :is(p, ol) {
  color: #333;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
```

---

### :where

Se utiliza para como un contenedor para agrupar múltiples selectores sin afectar la especificidad de la regla. Es especialmente útil cuando se desea aplicar estilos a varios selectores sin aumentar la especificidad de la regla, lo que puede facilitar la escritura y el mantenimiento del código CSS.

```html
<!-- HTML -->
<section>
  <p>Contenido de la sección.</p>
</section>

<article>
  <p>Contenido del artículo.</p>
</article>

<div>
  <p>Contenido del div.</p>
</div>
```

```css
/* CSS */
:where(section, article, div) {
  margin: 10px;
  padding: 5px;
  border: 1px solid #3498db;
}
```

---

</div>
