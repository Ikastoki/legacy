---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Pseudoclases"
block: "Pseudoclases"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudoclases</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pseudoclases](#pseudoclases)
- [Ejemplos comunes de pseudoclases](#ejemplos-comunes-de-pseudoclases)

</div>
</div>

## Pseudoclases

Las pseudoclases son palabras clave que se agregan a los selectores para aplicar estilos cuando un elemento está en un estado específico, sin necesidad de modificar el HTML. Es decir, te permiten estilizar elementos basados en información que no está directamente representada en el árbol del documento.

La diferencia de las pseudoclases y pseudoelementos es que los pseudoelementos suelen hacer referencia a determinadas partes de un elemento.

Sintaxis:

```css
selector:pseudoclase {
  propiedad: valor;
}
```

## Ejemplos comunes de pseudoclases

- `:hover` Cuando el puntero está sobre el elemento.
- `:active` Cuando el elemento está siendo activado (por ejemplo, clickeado).
- `:focus` Cuando el elemento está enfocado (como un input al que se le hace clic o tab).
- `:first-child` Cuando el elemento es el primer hijo de su padre.
- `:last-child` Cuando es el último hijo.
- `:nth-child(n)` Selecciona el elemento que es el enésimo hijo de su padre.
- `:not(selector)` Selecciona todo excepto lo que coincide con el selector.
- `:checked` Para inputs marcados (como checkboxes o radios).

</div>
