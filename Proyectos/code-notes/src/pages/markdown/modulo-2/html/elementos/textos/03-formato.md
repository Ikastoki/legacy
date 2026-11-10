---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Formato"
block: "Textos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Formato</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Formato](#formato)
- [Etiquetas más comunes para dar formato](#etiquetas-más-comunes-para-dar-formato)
- [Contenido eliminado o insertado](#contenido-eliminado-o-insertado)

</div>
</div>

## Formato

En HTML, existen varias etiquetas para aplicar formato al texto, como negrita, cursiva, subrayado, y otros estilos que mejoran la presentación del contenido. A continuación, te muestro las principales etiquetas para formatear texto y cómo utilizarlas correctamente.

> ✍️ Nota
>
> No utilizar estas etiquetas para dar estilos, para dar estilos a la web se utiliza CSS. Estas etiquetas se usan para agregar contenido mas haya de lo estético. Enfatizar un párrafo, resaltar o subrayar un texto como importante,
> advertir al lector de que una palabra o una frase puede no resultarle familiar, ya sea porque es extranjera o porque forma parte de una jerga o argot.

## Etiquetas más comunes para dar formato

- `<em>`: se utiliza para enfatizar o resaltar texto dentro de un párrafo o una sección de texto.
- `<mark>`: se utiliza para resaltar o destacar parte del texto en un color de fondo amarillo por defecto, lo que puede ser personalizado mediante CSS.
- `<strong>`: se utiliza para dar un énfasis más fuerte al texto, lo que generalmente se traduce en hacer que el texto sea más importante o destacado.
- `<span>`:se utiliza como un contenedor genérico para aplicar estilos o scripts a partes específicas del texto.No tiene ningún efecto visual por sí misma.
- `<i>`: se utiliza para mostrar texto en cursiva.
- `<b>`: se utiliza para mostrar texto en negrita.
- `<u>`: se utiliza para mostrar texto subrayado.

```html
<!-- Ejemplos -->
<p>Este es un ejemplo de texto <em>enfocado</em> en HTML.</p>

<p>Este es un <mark>texto resaltado</mark> en HTML.</p>

<p>Este es un ejemplo de texto <strong>importante</strong> en HTML.</p>

<p>Este es un <span>texto con estilo personalizado</span> en HTML.</p>

<p>Este es un ejemplo de <i>texto en cursiva</i> en HTML.</p>

<p>Este es un ejemplo de <b>texto en negrita</b> en HTML.</p>

<p>Este es un ejemplo de <u>texto subrayado</u> en HTML.</p>
```

## Contenido eliminado o insertado

Con las etiquetas `<del>` e `<ins>` podemos representar contenido eliminado o insertado, respectivamente.

- `<del>`(Deleted Text): Se utiliza para representar texto que ha sido eliminado o eliminado de una versión anterior del documento.
- `<ins>`(Inserted Text): Se utiliza para representar texto que ha sido insertado o añadido en una versión posterior del documento.

```html
<!-- HTML -->
<p>Este es un <del>texto eliminado</del> y este es el texto actualizado.</p>
<p>Este es un <ins>texto insertado</ins> en el documento.</p>
```

</div>
