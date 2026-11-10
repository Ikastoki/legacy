---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Carga de imágenes"
block: "Imágenes"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Carga de imágenes</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Carga de imágenes](#carga-de-imágenes)
- [¿Qué es el lazylLoading?](#qué-es-el-lazylloading)
- [Cargar una imagen(loading)](#cargar-una-imagenloading)

</div>
</div>

## Carga de imágenes

El atributo loading en HTML es una excelente herramienta para controlar el carga diferida (lazy loading) de las imágenes, lo que puede mejorar el rendimiento de las páginas web, especialmente aquellas con muchas imágenes.

## ¿Qué es el lazylLoading?

El lazy loading (carga diferida) es una técnica que retrasa la carga de recursos, como imágenes, hasta que son realmente necesarios. En lugar de cargar todas las imágenes de una página web tan pronto como se accede a ella, las imágenes se cargan solo cuando están a punto de entrar en el área visible del navegador, lo que mejora el tiempo de carga de la página inicial y reduce el uso de ancho de banda.

## Cargar una imagen(loading)

Mediant el uso del atributo `loading` se puede controlar el momento en el que se carga una imagen. El atributo loading es especialmente útil para optimizar el rendimiento de páginas web con muchas imágenes, ya que permite cargar recursos de manera más eficiente, reduciendo la carga inicial de la página.

- **auto (por defecto):** Este es el valor predeterminado si no se especifica otro. Indica que el navegador debe decidir cuándo cargar el recurso según su propio criterio.

- **eager:** Indica que el recurso debe cargarse de inmediato, sin diferir la carga. Es útil cuando el recurso es crucial para el contenido visible inmediatamente.

- **lazy:** Indica que el recurso debe cargarse de manera diferida, es decir, solo cuando sea necesario. Esto puede ayudar a mejorar el rendimiento de la página, especialmente en imágenes que están fuera de la vista inicial del usuario.

Ejemplo:

```html
<img src="imagen.jpg" alt="Descripción de la imagen" />
<img src="imagen.jpg" alt="Descripción de la imagen" loading="lazy" />
<img src="imagen.jpg" alt="Descripción de la imagen" loading="eager" />
```

> ⚠️ Advertencia
>
> Evitar usar este atributo(lazy) con las imágenes que estén situadas en la parte superior de la web ya que esas imágenes serán visibles nada mas cargar la pagina.
>
> Tener en cuenta otros factores como, el servidor, los diferentes navegadores y el tipo de imagen.

</div>
