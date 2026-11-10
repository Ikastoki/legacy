---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Tipográficos"
block: "Pseudoelementos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudoelementos tipográficos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pseudoelementos tipográficos](#pseudoelementos-tipográficos)
  - [::first-letter y ::first-line](#first-letter-y-first-line)
  - [::marker](#marker)

</div>
</div>

## Pseudoelementos tipográficos

### ::first-letter y ::first-line

Los pseudoelementos ::first-letter y ::first-line en CSS se utilizan para seleccionar y aplicar estilos a la primera letra o la primera línea de un elemento, respectivamente.

```html
<!-- HTML -->
<p>
  Texto del párrafo.Texto del párrafo.Texto del párrafo.Texto del párrafo. Texto
  del párrafo.Texto del párrafo.Texto del párrafo.Texto del párrafo.
</p>
```

```css
/* CSS */
p {
  width: 200px;
}

p::first-letter {
  font-size: 1.5em;
  color: #3366cc;
}

p::first-line {
  font-weight: bold;
  color: #ff6600;
}
```

---

### ::marker

El pseudoelemento ::marker en CSS se utiliza para seleccionar y estilizar el marcador (o bullet point) de un elemento de lista, como `<li>` en HTML. Puedes aplicar estilos específicos al marcador sin afectar el contenido del elemento de la lista.

```html
<!-- HTML -->
<ol>
  <li>Lorem ipsum dolor sit amet.</li>
  <li>Corporis aliquam excepturi neque deleniti.</li>
  <li>Incidunt eos repellendus vitae deserunt!</li>
</ol>

<ul>
  <li>Lorem ipsum dolor sit amet.</li>
  <li>Laborum molestias consequuntur soluta ab.</li>
  <li>Et veniam suscipit quod qui.</li>
</ul>
```

```css
/* CSS */
ol li::marker {
  color: red;
  font-weight: bold;
}

ul li::marker {
  font-size: 150%;
  color: lightgreen;
}

body {
  line-height: 1.4;
  font-family: system-ui;
}
```

---

</div>
