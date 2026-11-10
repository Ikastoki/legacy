---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Lista de definiciones"
block: "Listas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Lista de definiciones</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Lista de definiciones](#lista-de-definiciones)
- [Buenas prácticas](#buenas-prácticas)

</div>
</div>

## Lista de definiciones

Las listas de definiciones en HTML son útiles para representar pares de términos y descripciones, como glosarios, listas de preguntas frecuentes o cualquier otro contenido donde se necesite definir términos. Se crean utilizando las etiquetas `<dl>` (Definition List), `<dt>` (Definition Term), y `<dd>` (Definition Description).

`<dl> <dt>Término<dt> <dd>Definición<dd> </dl>`

```html
Ejemplo:
<dl>
  <dt>Término1</dt>
  <dd>Definición 1</dd>

  <dt>Término 2</dt>
  <dd>Definición 2</dd>
</dl>

Resultado: Término1 Definición 1 Término 2 Definición 2
```

## Buenas prácticas

- **Uso Semántico:** Asegúrate de usar listas de definiciones cuando se trate de términos y sus definiciones para mejorar la semántica y accesibilidad de tu HTML.

- **Contenido Claro y Conciso:** Mantén las definiciones claras y concisas para facilitar la comprensión.

</div>
