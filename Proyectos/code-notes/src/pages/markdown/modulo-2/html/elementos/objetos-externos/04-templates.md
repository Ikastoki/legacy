---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Templates"
block: "Objetos externos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Templates</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué son las etiquetas template?](#qué-son-las-etiquetas-template)
- [Utilidad](#utilidad)
- [Como se utilizan](#como-se-utilizan)

</div>
</div>

## ¿Qué son las etiquetas template?

Las etiquetas `<template>` en HTML son una forma de definir fragmentos de contenido que no se renderizan cuando la página se carga inicialmente, pero que pueden clonarse y renderizarse posteriormente mediante JavaScript. Estas etiquetas son útiles cuando deseas incluir contenido en tu página web que no debe mostrarse de inmediato, sino que puede generarse dinámicamente cuando sea necesario.

> ✍️ Nota
>
> Se utilizan en conjunto con JavaScript.

## Utilidad

Las etiquetas `<template>` son útiles en situaciones como:

- Crear componentes web reutilizables que pueden instanciarse varias veces en una página.
- Almacenar fragmentos de contenido que se pueden mostrar cuando se cumplen ciertas condiciones.
- Generar contenido dinámicamente desde datos obtenidos de una fuente externa, como una API, y mostrarlo en la página.

## Como se utilizan

1. Definición del Template: Dentro de una etiqueta `<template>`, puedes colocar cualquier contenido HTML, como elementos, texto y otros elementos HTML válidos.

   ```html
   <!-- HTML -->
   <template id="miTemplate">
     <p>Este es un ejemplo de template.</p>
   </template>
   ```

2. Clonación y Renderización: Para mostrar el contenido de un template en la página, puedes clonar el contenido del template y luego adjuntarlo al DOM utilizando JavaScript.

   ```js
   // JavaScript

   // Clonar el contenido del template
   const template = document.getElementById("miTemplate");
   const clone = document.importNode(template.content, true);

   // Adjuntar el contenido clonado al DOM
   document.body.appendChild(clone);
   ```

> ✍️ Nota
>
> Las etiquetas `<template>` son especialmente útil para crear páginas web interactivas y dinámicas.

</div>
