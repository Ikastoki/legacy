---
layout: ../../../../../layouts/modulo-2/HTML.astro
title: "Link"
block: "Cabecera"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Link</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Etiqueta Link](#etiqueta-link)
  - [Los principales usos de la etiqueta link](#los-principales-usos-de-la-etiqueta-link)
  - [Principales atributos](#principales-atributos)
- [Conectar hojas de estilo CSS](#conectar-hojas-de-estilo-css)
- [Establecer íconos(favicons)](#establecer-íconosfavicons)
- [Precargar recursos](#precargar-recursos)
- [Vincular fuentes](#vincular-fuentes)
- [Tipos de recursos](#tipos-de-recursos)

</div>
</div>

## Etiqueta Link

La etiqueta `<link>` se utiliza principalmente para vincular recursos externos a un documento HTML.

### Los principales usos de la etiqueta link

- Conectar hojas de estilo CSS
- Establecer íconos(en la pestaña de navegación)
- Precargar recursos
- Vincular fuentes

### Principales atributos

- `href`: Este atributo especifica la URL del recurso enlazado.
- `hreflang`: Este atributo indica el idioma del recurso enlazado.
- `rel`: Este atributo indica la relación del documento enlazado con el actual.
- `type`: Este atributo es usado para definir el tipo de contenido al que se enlaza. El valor del atributo debe ser un tipo MIME, como text/html, text/css.
- `media`: Este atributo especifica el tipo de medio al que aplica el recurso enlazado. Su valor debe ser un media query.
- `sizes`: Este atributo define los tamaños de los íconos para medios visuales contenidos en el recurso. Solo si el atributo rel contiene el tipo de enlace icon.
- `crossorigin`: Este atributo enumerado indica si se debe usar CORS( Intercambio de recursos de origen cruzado) cuando se solicite una imagen relacionada.
- `integrity`: Es una característica de seguridad que permite a los navegadores verificar que los recursos que obtienen (por ejemplo, de un CDN) se entregan sin manipulación inesperada.

> ✍️ Nota
>
> ¿Porque el CSS usa `rel` y el JavaScript `src`?
>
> - **JavaScript:** El navegador necesita "**ejecutar**" el código del archivo, por lo que usa `src` para cargar el archivo como una fuente de ejecución.
> - **CSS:** El navegador aplica los estilos al documento, y `rel="stylesheet"` indica que el archivo contiene reglas de estilo en lugar de código ejecutable.

## Conectar hojas de estilo CSS

El uso más extendido de `<link>` es para hacer una relación con un documento CSS.
De esta forma le indicamos al HTML que estilos CSS debe aplicar al documento.

```html
<!-- HTML -->
<link rel="stylesheet" type="text/css" href="estilos.css" />

<!-- Hojas de estilo específicas para diferentes tamaños de pantalla o dispositivos. -->
<link
  rel="stylesheet"
  type="text/css"
  href="estilos.css"
  media="screen and (min-width: 768px)"
/>
```

## Establecer íconos(favicons)

El favicon es un icono que se muestra en la pestaña del navegador y en la lista de marcadores.

```html
<!-- HTML -->
<link rel="icon" type="image/x-icon" href="favicon.ico" />
```

## Precargar recursos

Las etiquetas HTML de precarga(resource hints) permiten dar información al navegador sobre los recursos que tienen mayor o menor prioridad de carga.

Contenido que puede ser precargado: `audio, document, embed, fetch, font, image, object, script, style, track, worker, video`.

Ejemplos:

```html
<!-- HTML -->

<!-- Precargar una imagen -->
<link rel="preload" href="imagen-destacada.jpg" as="image" />
<!-- Preconectar a un dominio CDN -->
<link rel="preconnect" href="https://cdn.example.com" />

<!-- Realizar la resolución anticipada del DNS -->
<link rel="dns-prefetch" href="https://cdn.example.com" />

<!-- Cargar recursos futuros en segundo plano -->
<link rel="prefetch" href="imagen-futura.jpg" />
```

## Vincular fuentes

Esto permite que el contenido se muestre en una fuente específica.

```html
<!-- HTML -->
<link
  rel="stylesheet"
  type="text/css"
  href="https://fonts.googleapis.com/css?family=Open+Sans"
/>
```

## Tipos de recursos

En ocasione es necesario utilizar el atributo `as` para indicar el tipo de recurso al que se refiere el enlace. Esto ayuda a los navegadores a optimizar la carga de recursos al saber qué tipo de archivo esperar.

```html
<!-- HTML -->

<!-- Hoja de estilo CSS -->
<link rel="stylesheet" type="text/css" href="estilos.css" as="style" />
<!-- Fuente web (Woff2) -->
<link rel="preload" as="font" type="font/woff2" href="fuente.woff2" />
<!-- Script JavaScript -->
<link rel="modulepreload" as="script" href="script.js" />
<!-- Imagen -->
<link rel="preload" as="image" href="imagen.jpg" />
<!-- Hoja de estilo con atributo onload para aplicarla de manera asincrónica -->
<link
  rel="stylesheet"
  type="text/css"
  href="estilos.css"
  as="style"
  onload="this.rel='stylesheet'"
/>
```

</div>
