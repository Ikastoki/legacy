---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Ubicación"
block: "Pseudoclases"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudoclases de ubicación</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pseudoclases de ubicación](#pseudoclases-de-ubicación)
  - [:first-child](#first-child)
  - [:last-child](#last-child)
  - [:nth-child, :nth-last-child y :nth-last-of-type](#nth-child-nth-last-child-y-nth-last-of-type)
  - [:first-of-type y :last-of-type](#first-of-type-y-last-of-type)
  - [:only-child y :only-of-type](#only-child-y-only-of-type)
  - [:nth-last-of-type](#nth-last-of-type)

</div>
</div>

## Pseudoclases de ubicación

### :first-child

Selecciona el primer hijo de un elemento padre, independientemente de su tipo. Puede aplicarse a cualquier tipo de elemento.

```html
<!-- HTML -->
<div>
  <p>Este es el primer párrafo.</p>
  <p>Este es el segundo párrafo.</p>
</div>
<div>
  <span>Este es el primer span.</span>
  <p>Este es otro párrafo.</p>
</div>
```

```css
/* CSS */
div:first-child {
  color: blue;
}
```

---

### :last-child

Selecciona el último hijo de un elemento contenedor, independientemente de su tipo. Puede aplicarse a cualquier tipo de elemento.

```html
<!-- HTML -->
<div>
  <p>Este es el primer párrafo.</p>
  <p>Este es el segundo párrafo.</p>
</div>
<div>
  <p>Este es otro párrafo.</p>
  <span>Este no es un párrafo.</span>
</div>
```

```css
/* CSS */
div:last-child {
  border-bottom: 2px solid #3498db;
}
```

---

### :nth-child, :nth-last-child y :nth-last-of-type

Se utilizan para seleccionar elementos en función de su posición en relación con sus elementos secundarios o en relación con el tipo específico de sus elementos secundarios.

```html
<!-- HTML -->
<p>Este es el primer párrafo.</p>
<p>Este es el segundo párrafo (será estilizado).</p>
<p>Este es el tercer párrafo.</p>

<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3 (será estilizado)</li>
  <li>Elemento 4</li>
</ul>

<div class="contenedor">
  <p>Primer párrafo dentro de .contenedor.</p>
  <p>Segundo párrafo dentro de .contenedor.</p>
  <p>Tercer párrafo dentro de .contenedor (será estilizado).</p>
</div>
```

```css
/* CSS */
/* Estilo para cada segundo párrafo */
p:nth-child(2n) {
  color: #3498db;
}

/* Estilo para el tercer elemento desde el final */
li:nth-last-child(3) {
  background-color: #ecf0f1;
}

/* Estilo para el último párrafo dentro de un contenedor */
.contenedor p:nth-last-of-type(1) {
  font-weight: bold;
}
```

---

### :first-of-type y :last-of-type

Las pseudoclases :first-of-type y :last-of-type se utilizan para seleccionar elementos en función de su posición dentro de su tipo de elemento.

```html
<div>
  <p>Primer párrafo</p>
  <p>Segundo párrafo</p>
  <span>Un span</span>
  <p>Tercer párrafo</p>
</div>
```

```css
p:first-of-type {
  color: red; /* El primer párrafo será rojo */
}

p:last-of-type {
  color: blue; /* El último párrafo será azul */
}
```

---

### :only-child y :only-of-type

Se utilizan para seleccionar elementos que son hijos únicos de su elemento contenedor o son el único elemento de su tipo entre sus elementos hermanos, respectivamente.

- :only-child: Selecciona elementos que son el único hijo de su elemento contenedor.
- only-of-type: Selecciona elementos que son el único elemento de su tipo entre sus elementos hermanos.

```html
<!-- HTML -->
<div class="contenedor">
  <p>Este es el único párrafo dentro de .contenedor (será estilizado).</p>
</div>

<div class="contenedor">
  <p>Este es el primer párrafo.</p>
  <p>Este es el segundo párrafo.</p>
</div>
```

```css
/* CSS */
.contenedor p:only-child {
  color: #3498db;
}

/* Estilo para el único párrafo de su tipo dentro de un contenedor */
.contenedor p:only-of-type {
  font-weight: bold;
}
```

---

### :nth-last-of-type

La pseudoclase :nth-last-of-type se utiliza para seleccionar uno o más elementos en función de su posición entre los hermanos del mismo tipo, contados desde el final.

```html
<div>
  <p>Primer párrafo</p>
  <p>Segundo párrafo</p>
  <span>Un span</span>
  <p>Tercer párrafo</p>
  <p>Cuarto párrafo</p>
</div>
```

```css
p:nth-last-of-type(2) {
  color: green; /* El segundo párrafo desde el final será verde */
}

p:nth-last-of-type(even) {
  background-color: lightgray; /* Los párrafos pares desde el final tendrán fondo gris claro */
}
```

</div>
