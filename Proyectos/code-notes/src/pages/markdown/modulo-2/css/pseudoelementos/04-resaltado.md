---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Resaltado"
block: "Pseudoelementos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudoelementos de resaltado</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pseudoelementos de resaltado](#pseudoelementos-de-resaltado)
  - [::placeholder](#placeholder)
  - [::selection](#selection)

</div>
</div>

## Pseudoelementos de resaltado

### ::placeholder

Se utiliza para aplicar estilos al texto de marcador de posición en un campo de entrada `<input>` o área de texto `<textarea>`. El texto de marcador de posición es el texto que se muestra dentro del campo antes de que el usuario ingrese cualquier valor.

```html
<!-- HTML -->
<label for="username">Nombre de usuario:</label>
<input
  type="text"
  id="username"
  name="username"
  placeholder="Ingrese su usuario"
/>
```

```css
/* CSS */
input::placeholder {
  color: red;
  font-style: italic;
}
```

---

### ::selection

El pseudoelemento ::selection se utiliza en CSS para aplicar estilos al texto seleccionado por el usuario en una página web.

```html
<!-- HTML -->
<p>
  Texto del párrafo.Texto del párrafo.Texto del párrafo.Texto del párrafo. Texto
  del párrafo.Texto del párrafo.Texto del párrafo.Texto del párrafo.
</p>
```

```css
/* CSS */
p::selection {
  background-color: yellow;
}
```

</div>
