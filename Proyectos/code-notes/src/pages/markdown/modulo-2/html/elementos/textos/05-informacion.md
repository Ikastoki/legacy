---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Información"
block: "Textos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Información</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Información](#información)
- [Citar](#citar)
- [Fecha y hora](#fecha-y-hora)
- [Agrupar información(contactos)](#agrupar-informacióncontactos)

</div>
</div>

## Información

HTML ofrece diversas etiquetas para representar información importante que puede incluir citas, fechas, horas, direcciones, entre otros tipos de datos específicos. Estas etiquetas no solo mejoran la semántica del documento, sino que también son útiles para motores de búsqueda, lectores de pantalla y otros sistemas automatizados.

## Citar

Para utilizar citas, fuentes y referencias en HTML hay tres etiquetas principales`<blockquote>,<q>,<cite>`.

- `<blockquote>` Para insertar una cita en forma de bloques.
- `<q>` Para insertar una cita en forma de línea.
- `<cite>` Para insertar una cita que haga referencia a un trabajo creativo. Se suele usar dentro del `<blockquote>` para informar sobre la fuente de la cita.

```html
<!-- Ejemplo -->
<blockquote cite="https://developer.mozilla.org/es/">
  <p>
    <strong>Info:</strong> Página web con una gran cantidad de documentación
    sobre HTML,CSS,JS...
  </p>
</blockquote>
```

## Fecha y hora

La etiqueta `<time>` se utiliza para marcar contenido que representa información de fecha y hora. Puede utilizarse para mostrar fechas, horas, marcas de tiempo, duraciones y otros datos relacionados con el tiempo. La etiqueta en sí misma no muestra nada directamente en la página; su propósito principal es proporcionar información estructurada y semántica para ayudar a los navegadores y a otros agentes de usuario a interpretar y presentar la información temporal de manera adecuada.

La etiqueta `<time>` tiene un atributo `datetime` que se utiliza para proporcionar una representación en formato de fecha y hora que sea legible por máquinas, lo que ayuda a la identificación precisa del tiempo.

> ✍️ Nota
>
> El atributo datetime contiene la fecha en formato ISO 8601 (AAAA-MM-DD)

```html
<p>
  La fecha de publicación de este artículo es
  <time datetime="2050-10-25">25 de octubre de 2050</time>.
</p>
```

## Agrupar información(contactos)

La etiqueta `<address>` se utiliza para marcar información de contacto o detalles de contacto, como direcciones físicas, direcciones de correo electrónico o números de teléfono.

> ✍️ Nota
>
> La etiqueta `<address> `no impone ningún formato o estilo específico, pero se considera una etiqueta semántica que ayuda a los motores de búsqueda y a los navegadores a reconocer la información de contacto.

```html
<!-- HTML -->
<address>
  <p>Nombre de la Empresa</p>
  <p>Dirección: 123 Calle Principal, Ciudad, País</p>
  <p>Teléfono: <a href="tel:+123456789">+123 456 789</a></p>
  <p>
    Correo Electrónico: <a href="mailto:info@empresa.com">info@empresa.com</a>
  </p>
</address>
```

</div>
