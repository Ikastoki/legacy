---
layout: ../../../../../layouts/modulo-2/HTML.astro
title: "Data attributes"
block: "Buenas practicas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Data attributes</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Data attributes](#data-attributes)
- [Sintaxis de los data attributes](#sintaxis-de-los-data-attributes)
- [Ventajas de los data attributes](#ventajas-de-los-data-attributes)
- [Acceso a los data attributes en JavaScript](#acceso-a-los-data-attributes-en-javascript)

</div>
</div>

## Data attributes

Los data attributes en HTML (atributos de datos) permiten a los desarrolladores almacenar información personalizada directamente en los elementos HTML. Estos atributos son útiles cuando se necesita asociar datos a un elemento del DOM sin alterar la estructura o semántica de la página.

## Sintaxis de los data attributes

Los atributos de datos personalizados en HTML se definen utilizando el prefijo data- seguido de un nombre. Este nombre puede ser cualquier valor alfanumérico (sin espacios ni caracteres especiales), y su valor puede ser cualquier cadena de texto válida.

```html
<div data-usuario-id="12345" data-role="admin">Usuario Administrador</div>
```

- **data-usuario-id:** contiene el identificador del usuario.
- **data-role:** contiene el rol del usuario, en este caso, "admin".

## Ventajas de los data attributes

- **Flexibilidad:** Puedes añadir cualquier tipo de dato que necesites a un elemento HTML sin alterar la semántica del HTML o el estilo visual.
- **No invasivos:** Los atributos de datos no interfieren con el comportamiento del HTML estándar, pero están disponibles para ser manipulados mediante JavaScript.
- **Acceso a datos personalizados:** Estos atributos son fácilmente accesibles desde JavaScript a través de la API de DOM.

## Acceso a los data attributes en JavaScript

Una de las grandes ventajas de los data attributes es que puedes acceder a ellos fácilmente usando JavaScript a través de la propiedad dataset de un elemento.

> ✍️ Nota
>
> En los apuntes de JavaScript se explica como manejarlos.

</div>
