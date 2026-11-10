---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Mix"
block: "Interactivas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Mix</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Contenido editable](#contenido-editable)
- [Meter](#meter)

</div>
</div>

## Contenido editable

Al utilizar el atributo **contenteditable** sobre una etiqueta HTML le damos la capacidad al usuario de editar el contenido de texto.

```html
<h1 contenteditable>Título editable</h1>
<div contenteditable>
  <p>Texto editable</p>
</div>
```

## Meter

La etiqueta `<meter>` en HTML se utiliza para representar valores en un rango conocido o medidas de métricas. Se utiliza para mostrar barras de progreso, indicadores de nivel, entre otros.

```html
<!-- HTML -->
<meter value="70" min="0" max="100">70%</meter>

</div>
```
