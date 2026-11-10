---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Pseudoelementos"
block: "Pseudoelementos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudoelementos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué son los pseudoelementos?](#qué-son-los-pseudoelementos)
- [Pseudoelementos comunes](#pseudoelementos-comunes)

</div>
</div>

## ¿Qué son los pseudoelementos?

Los pseudoelementos te permiten estilizar partes específicas de un elemento, como la primera letra, línea, o incluso insertar contenido antes o después del contenido real del elemento — todo sin modificar el HTML.

Sintaxis:

```css
selector::pseudoelemento {
  propiedad: valor;
}
```

> ✍️ Nota
>
> Los pseudoelementos se escriben con doble dos puntos :: para diferenciarlos de las pseudoclases (:), aunque algunos navegadores aún aceptan una sola.

## Pseudoelementos comunes

- `::before` Inserta contenido antes del contenido real de un elemento.
- `::after` Inserta contenido después del contenido real.
- `::first-letter` Estiliza la primera letra de un elemento.
- `::first-line` Estiliza la primera línea visible de un texto.
- `::placeholder` Estiliza el texto de marcador de posición (placeholder) en inputs.
- `::selection` Estiliza el texto cuando es seleccionado por el usuario.

</div>
