---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Video"
block: "Audio y Video"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Video</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Videos](#videos)
- [Formatos de video compatibles](#formatos-de-video-compatibles)
- [Atributos más usados](#atributos-más-usados)

</div>
</div>

## Videos

La etiqueta `<video>` en HTML se utiliza para incrustar contenido de video en una página web. Al igual que con la etiqueta `<audio>`, el uso de la etiqueta `<video>` permite a los desarrolladores agregar videos directamente en sus páginas sin depender de complementos como Flash.

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <source src="video.ogv" type="video/ogg" />
  Tu navegador no soporta la etiqueta de video.
</video>
```

## Formatos de video compatibles

Para garantizar la máxima compatibilidad con todos los navegadores, es una buena práctica proporcionar el video en diferentes formatos. Los formatos más comunes son:

- **MP4 (video/mp4):** Es uno de los formatos más populares y ampliamente soportados.
- **WebM (video/webm):** Un formato abierto desarrollado por Google, compatible con la mayoría de los navegadores modernos.
- **OGG (video/ogg):** Un formato abierto que también es compatible con muchos navegadores.

## Atributos más usados

- **src:** Especifica la ruta del video.
- **controls:** Visualizar panel de controles.
- **poster:** Insertar una imagen de portada.
- **autoplay:** Se reproduce de manera automática.
- **loop:** Se reproduce en bucle.
- **muted:** Aparece en modo silencio.
- **preload:** Inicia la descarga y almacenamiento en el buffer del vídeo.

</div>
