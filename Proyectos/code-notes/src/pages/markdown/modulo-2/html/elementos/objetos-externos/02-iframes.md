---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Iframe"
block: "Objetos externos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Iframe</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Iframe](#iframe)
- [Precauciones](#precauciones)

</div>
</div>

## Iframe

La etiqueta `<iframe>` (Inline Frame) se utiliza para incrustar contenido externo dentro de una página web. Esta etiqueta permite mostrar otro documento HTML, una página web completa, o incluso contenido de otros dominios. Los iframes son útiles para incrustar mapas, videos de YouTube, contenido de redes sociales, widgets y otros elementos externos.

```html
<!-- Insertar un video de YouTube -->

<!-- Pasos:
    1. Ir a un video de YouTube
    2. Pulsar en los 3 puntes del video que quieras incrustar
    3.Compartir
    4.Insertar
    5.Copiar el código del Iframe.
    6.Pegar el código en tu página.

 -->

<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/yg7gZCZ_ODk"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

## Precauciones

Para evitar que tu página web sea incrustada o utilizada dentro de un `<iframe>`, puedes utilizar la política de seguridad del encabezado **X-Frame-Options**. Este encabezado HTTP ayuda a prevenir ataques de clickjacking al indicar a los navegadores si permitir o no que una página sea mostrada dentro de un marco (`<iframe>`).

- **X-Frame-Options: DENY** no puede ser mostrada.
- **X-Frame-Options: SAMEORIGIN** solo si la solicitud proviene de la misma origen (dominio) que la página.
- **X-Frame-Options: ALLOW-FROM https://ejemplo.com** solo si la solicitud proviene de la URI especificada.

</div>
