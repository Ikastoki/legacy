---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Figure"
block: "Imágenes"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Figure</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Figure](#figure)
- [Propósito y beneficios](#propósito-y-beneficios)
- [¿Es obligatorio figcaption?](#es-obligatorio-figcaption)

</div>
</div>

## Figure

La etiqueta `<figure>` en HTML es un contenedor semántico que se utiliza para agrupar contenido relacionado, como imágenes, diagramas, gráficos, videos, etc., junto con una descripción asociada, generalmente utilizando la etiqueta `<figcaption>`. Esta estructura es útil para mejorar la accesibilidad y la organización del contenido en una página web.

- **`<figure>`:** Este es el contenedor que agrupa el contenido visual (imagen, gráfico, etc.) y su descripción.
- **`<figcaption>`:** Esta etiqueta se utiliza para proporcionar una descripción del contenido dentro del **`<figure>`**. Puede colocarse antes o después del contenido (por lo general, se coloca después).

```html
<figure>
  <img src="imagen.jpg" alt="Descripción de la imagen" />
  <figcaption>Esta es una imagen de ejemplo.</figcaption>
</figure>
```

> ✍️ Nota
>
> Al asociar una imagen o un gráfico con su contexto descriptivo, mejora la accesibilidad y la comprensión del contenido.

## Propósito y beneficios

**Organización semántica:** La etiqueta `<figure>` mejora la estructura semántica del HTML, permitiendo identificar de manera clara los elementos visuales y sus descripciones. Esto es útil tanto para desarrolladores como para los motores de búsqueda y tecnologías de asistencia (como lectores de pantalla).

**Mejora la accesibilidad:** Al usar `<figure>` y `<figcaption>`, las imágenes o contenidos visuales quedan acompañados de una descripción, lo que es beneficioso para usuarios con discapacidad visual, ya que el texto en el `<figcaption>` puede ser leído por los lectores de pantalla.

**Uso con medios diversos:** Aunque comúnmente se usa para imágenes, también puedes utilizar `<figure>` para otros contenidos multimedia, como videos, audios, gráficos, diagramas, entre otros.

## ¿Es obligatorio figcaption?

No es obligatorio usar la etiqueta `<figcaption>`. Si no necesitas una descripción para el contenido dentro de `<figure>`, puedes omitir la etiqueta `<figcaption>`. Sin embargo, es una buena práctica incluirla cuando sea necesario para mejorar la comprensión del contenido, especialmente cuando la imagen o el gráfico no son autodescriptivos.

</div>
