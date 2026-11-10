---
layout: ../../../../../layouts/modulo-3/JS-Core.astro
title: "Conversión"
block: "JSON"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Conversión entre JSON y JS</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Conversión entre JSON y JavaScript](#conversión-entre-json-y-javascript)
- [Convertir de objeto JavaScript a JSON](#convertir-de-objeto-javascript-a-json)
- [Convertir de JSON a objeto JavaScript](#convertir-de-json-a-objeto-javascript)


</div>
</div>

## Conversión entre JSON y JavaScript

JavaScript tiene soporte nativo para JSON y proporciona métodos para convertir objetos JavaScript a JSON y viceversa. Los dos métodos principales son JSON.`stringify()` y `JSON.parse()`.

## Convertir de objeto JavaScript a JSON

El método `JSON.stringify()` se utiliza para convertir un objeto JavaScript en una cadena JSON.

```js
const objeto = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: false,
};

const json = JSON.stringify(objeto);
console.log(json); // '{"nombre":"Juan","edad":30,"esEstudiante":false}'
```

Esto es útil cuando se necesita enviar datos desde una aplicación a un servidor en formato JSON.

## Convertir de JSON a objeto JavaScript

El método `JSON.parse()` convierte una cadena JSON en un objeto JavaScript.

```js
const jsonString = '{"nombre":"Juan","edad":30,"esEstudiante":false}';
const objeto = JSON.parse(jsonString);

console.log(objeto.nombre); // "Juan"
console.log(objeto.edad); // 30
```

Este método es útil cuando recibes datos en formato JSON (por ejemplo, desde una API) y necesitas procesarlos como un objeto JavaScript.
