---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Despegable"
block: "Interactivas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Despegable</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Details](#details)
- [Menu](#menu)

</div>
</div>

## Details

Crea un elemento desplegable que muestra información adicional cuando el usuario hace clic en él.

- **`<details>`** Crea un elemento desplegable. Etiqueta contenedora.
  - **`<details open>`** Visible por defecto.
- **`<summary>`** Título del desplegable. Aparece siempre, se encuentre desplegado o no.

```html
<!-- Ejemplo <details>-->
<details>
    <summary>Click</summary>
    <p>Texto aleatorio.</p>
</details>
```

## Menu

Esta etiqueta define un menú de comandos o acciones que el usuario puede ejecutar.

> ✍️ Nota
>
> No confundir con la etiqueta `<nav>`, `<menu>`en este momento no es compatible con la mayoría de navegadores.

```html
<!-- Ejemplo <details>-->
<menu type="toolbar">
  <command label="Guardar" onclick="save()">
  <command label="Imprimir" onclick="print()">
  <command label="Compartir" onclick="share()">
</menu>
```

</div>
