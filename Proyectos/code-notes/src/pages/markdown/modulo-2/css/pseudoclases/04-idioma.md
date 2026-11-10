---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Idioma"
block: "Pseudoclases"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudoclases de idioma</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pseudoclases de idioma](#pseudoclases-de-idioma)
  - [:dir()](#dir)
  - [:lang](#lang)

</div>
</div>

## Pseudoclases de idioma

### :dir()

Se utiliza para seleccionar elementos según la direccionalidad del texto.

**Cambiar fondo dependiendo de la dirección del texto**

```html
<!-- HTML -->
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora
  sequi aliquid rerum nemo consequatur! Atque quos ut, corporis sapiente
  consequuntur illum consequatur culpa iusto impedit! Earum accusantium quaerat
  enim.
</p>

<p dir="rtl">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora
  sequi aliquid rerum nemo consequatur! Atque quos ut, corporis sapiente
  consequuntur illum consequatur culpa iusto impedit! Earum accusantium quaerat
  enim.
</p>
```

```css
/* CSS */
p {
  width: 250px;
}

p:dir(ltr) {
  background-color: red;
}

p:dir(rtl) {
  background-color: blue;
}
```

---

### :lang

Se utiliza para seleccionar y estilizar elementos que tienen un atributo lang específico.

```html
<!-- HTML -->
<p lang="es">Este párrafo está en español.</p>
<p lang="en">This paragraph is in English.</p>
```

```css
/* CSS */
p:lang(es) {
  color: #3498db; /* Cambia el color del texto para español */
}

/* Estilo para los elementos con lang="en" */
p:lang(en) {
  color: #e74c3c; /* Cambia el color del texto para inglés */
}
```

---

</div>
