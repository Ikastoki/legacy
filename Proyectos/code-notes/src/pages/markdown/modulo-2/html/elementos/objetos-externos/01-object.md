---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Object"
block: "Objetos externos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Object</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Object](#object)

</div>
</div>

## Object

La etiqueta `<object>` se utiliza para incrustar objetos en una página web, permitiendo la inclusión de varios tipos de contenido, como imágenes, audio, video, applets de Java, y otros objetos incrustables. La función principal de `<object>` es proporcionar un contenedor genérico para contenido externo que puede ser renderizado por el navegador.

```html
<!-- HTML -->

<!-- Incrustar un archivo PDF -->
<object data="archivo.pdf" type="application/pdf" width="400" height="300">
  <p>
    El contenido PDF no se puede mostrar. Puedes
    <a href="archivo.pdf">descargarlo aquí</a>.
  </p>
</object>
```

> ✍️ Nota
>
> Mirar ejemplo visual de la demo en [MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element/object)

</div>
