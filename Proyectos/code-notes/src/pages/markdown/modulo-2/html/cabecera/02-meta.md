---
layout: ../../../../../layouts/modulo-2/HTML.astro
title: "Meta"
block: "Cabecera"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Meta</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Etiqueta meta](#etiqueta-meta)
- [Atributos para meta](#atributos-para-meta)
  - [Específicos del elemento](#específicos-del-elemento)
- [Rastreo e indexación](#rastreo-e-indexación)
- [Personalizar tema del navegador](#personalizar-tema-del-navegador)
- [Compartir información(redes sociales)](#compartir-informaciónredes-sociales)
  - [Open Graph(Facebook-Meta)](#open-graphfacebook-meta)
  - [Twitter Cards](#twitter-cards)

</div>
</div>

## Etiqueta meta

La etiqueta `<meta>` se utiliza para proporcionar metadatos o información adicional sobre el documento HTML.

Los metadatos son **“datos que hablan acerca de los datos”**, describen el contenido de los archivos o la información que estos traen en su interior.

Los metadatos son importantes para la optimización de motores de búsqueda (SEO), la descripción adecuada de una página web y para brindar información sobre el documento a los navegadores web y otros servicios en línea.

## Atributos para meta

La etiqueta meta puede contener 3 tipos diferentes de atributos: globales, específicos del elemento y de controlador de eventos.

> ✍️ Nota
>
> Estos atributos se utilizan principalmente para proporcionar información sobre la página web a los motores de búsqueda y navegadores.

### Específicos del elemento

- **name:** Especifica el nombre del metadato.
- **content:** Especifica el valor del metadato.
- **http-equiv:** Se utiliza para los encabezados de mensajes de respuesta http.
- **scheme:** Especifica un esquema para interpretar el valor de la propiedad.
- **charset:** Especifica la codificación de caracteres del documento.
  - utf-8: codificación para la mayoría de textos e idiomas.

<br>

```html
<!-- Ejemplos -->
<head>
  <!-- Permite establecer como se va a comportar el responsive en nuestra página. Viewport se asegura que el ancho de la pagina sea el mismo que el del dispositivo. -->
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="Pagina sobre HTML" />
  <meta name="keywords" content="html, etiquetas" />
  <meta name="author" content="Admin" />
  <meta name="application-name" content="Aprende HTML" />
  <meta name="revised" content="Aprende HTML, 9/9/2099" />
  <meta name="generator" content="VSCode" />
  <!-- Se actualiza cada 5segundos y redirecciona a google -->
  <meta http-equiv="refresh" content="5; url = http://www.google.com" />
  <meta name="id.libro" content="978-3-44-148710-0" scheme="ISBN" />
</head>
```

## Rastreo e indexación

Para "controlar" el rastreo y la indexación de los motores de búsqueda se puede utilizar
`robots`. Sus valores predeterminados son: `index, follow`.

```html
<!-- HTML -->
<meta name="robots" content="noindex, nofollow" />
```

**Posibles valores:**

- **Noindex**: impide que la página se indexe. Esto significa que la página no aparecerá en los resultados de búsqueda.
- **Nofollow**: impide que Googlebot siga enlaces de esta página.
- **Nosnippet**: impide que un fragmento se muestre en los resultados de búsquedas.
- **Noodp**: impide que un fragmento se muestre en los resultados de búsqueda.
- **Noarchive**: impide que Google muestra el enlace “En cache” de una página.
- **Unavaiable_after:[date]**: le permite especificar una hora y fecha exactas en que desea detener el rastreo y la indexación de la página.
- **Noimageindex**: permite especificar que no desea que la página aparezca como la página de referencia de una imagen que se muestra en los resultados de la búsqueda de Google.

## Personalizar tema del navegador

Mediante el uso del atributo `name="theme-color"` se puede establecer un color a la barra de direcciones.

```html
<!-- HTML -->
<meta name="theme-color" content="#B2C8BA" />
```

## Compartir información(redes sociales)

### Open Graph(Facebook-Meta)

Open Graph(Facebook-Meta) es un conjunto de protocolos que permite a las páginas web definir metadatos enriquecidos, específicamente para compartir contenido en plataformas de redes sociales como Facebook, Twitter. Estos metadatos permiten que los enlaces compartidos muestren una vista previa enriquecida del contenido, lo que incluye imágenes, título, descripción y otros elementos visuales, en lugar de simplemente mostrar el enlace o una descripción genérica.

Ejemplo etiquetas más comunes:

```html
<!-- HTML -->

<!-- og:title: Define el título del contenido que se compartirá. -->
<meta property="og:title" content="Título del Artículo" />
<!-- og:type: Especifica el tipo de contenido (por ejemplo, "website", "article", "video"). -->
<meta property="og:type" content="article" />
<!-- og:image: Indica la URL de una imagen en miniatura que se mostrará junto al enlace compartido. -->
<meta property="og:image" content="https://www.ejemplo.com/imagen.jpg" />
<!-- og:description: Proporciona una breve descripción del contenido. -->
<meta property="og:description" content="Descripción del artículo" />
<!-- og:url: Define la URL del contenido que se está compartiendo. -->
<meta property="og:url" content="https://www.ejemplo.com/articulo" />
<!-- og:site_name: Especifica el nombre del sitio web. -->
<meta property="og:site_name" content="Ejemplo.com" />
<!-- og:locale: Indica el idioma y la ubicación de la página. -->
<meta property="og:locale" content="es_ES" />
```

### Twitter Cards

El propósito de las Twitter cards es similar al de Open Graph: mejorar la apariencia y la información que se muestra cuando se comparten enlaces en plataformas de redes sociales.
Este conjunto de etiquetas a diferencia de Open Graph solo se utilizan para Twitter.

Cards más comunes:

- **Summary Card:** El tipo "Summary Card" es el más básico y muestra un título, una descripción y una imagen destacada en el tweet. Es adecuado para resúmenes de artículos y contenido general.

  ```html
  <!-- HTML -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Título del tweet" />
  <meta name="twitter:description" content="Descripción del tweet" />
  <meta name="twitter:image" content="URL de la imagen" />
  ```

- **Summary Card with Large Image:** Este tipo de tarjeta es similar al "Summary Card", pero con una imagen más grande y destacada.

  ```html
  <!-- HTML -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Título del Artículo" />
  <meta name="twitter:description" content="Descripción breve del artículo." />
  <meta name="twitter:image" content="URL de la imagen destacada" />
  ```

- **App Card:** Diseñado para promocionar aplicaciones móviles, muestra una imagen de la aplicación, un nombre de la aplicación y un enlace para descargarla.

  ```html
  <!-- HTML -->
  <meta name="twitter:card" content="app" />
  <meta
    name="twitter:app:id:iphone"
    content="ID de la aplicación para iPhone"
  />
  <meta
    name="twitter:app:name:iphone"
    content="Nombre de la aplicación para iPhone"
  />
  <meta
    name="twitter:app:url:iphone"
    content="URL de la aplicación para iPhone"
  />
  <meta
    name="twitter:app:id:googleplay"
    content="ID de la aplicación para Android"
  />
  <meta
    name="twitter:app:name:googleplay"
    content="Nombre de la aplicación para Android"
  />
  <meta
    name="twitter:app:url:googleplay"
    content="URL de la aplicación para Android"
  />
  ```

- **Player Card:** Utilizado para compartir contenido multimedia, como videos y audio, con un reproductor incorporado en el tweet.

  ```html
  <!-- HTML -->
  <meta name="twitter:card" content="player" />
  <meta name="twitter:site" content="@nombreusuario" />
  <meta name="twitter:title" content="Título del Video" />
  <meta name="twitter:description" content="Descripción del video" />
  <meta name="twitter:image" content="URL de la imagen en miniatura" />
  <meta name="twitter:player" content="URL del reproductor de video" />
  <meta name="twitter:player:width" content="ancho del reproductor" />
  <meta name="twitter:player:height" content="alto del reproductor" />
  ```

- **Product Card:** Diseñado para mostrar productos con detalles como precio, disponibilidad y una imagen del producto.

  ```html
  <!-- HTML -->
  <meta name="twitter:card" content="product" />
  <meta name="twitter:site" content="@nombreusuario" />
  <meta name="twitter:title" content="Nombre del Producto" />
  <meta name="twitter:description" content="Descripción del Producto" />
  <meta name="twitter:image" content="URL de la imagen del Producto" />
  <meta name="twitter:data1" content="$Precio" />
  <meta name="twitter:label1" content="Precio" />
  <meta name="twitter:data2" content="Disponible en tienda en línea" />
  <meta name="twitter:label2" content="Disponibilidad" />
  ```

> ✍️ Nota
>
> Estos metadatos(Open Graph o Twitter Card) mejoran la apariencia y la usabilidad de los enlaces compartidos y ofrecen un control a la hora de presentar tu contenido.

</div>
