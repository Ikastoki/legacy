---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Párrafos"
block: "Textos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Párrafos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Párrafos](#párrafos)
- [Estructura básica de un párrafo](#estructura-básica-de-un-párrafo)
- [Características clave de los párrafos](#características-clave-de-los-párrafos)
- [Buenas prácticas para usar párrafos](#buenas-prácticas-para-usar-párrafos)

</div>
</div>

## Párrafos

Los párrafos en HTML se utilizan para agrupar y presentar bloques de texto. La etiqueta principal para crear párrafos es `<p>`, que envuelve el contenido textual y le da una separación visual y semántica respecto a otros elementos en una página web.

## Estructura básica de un párrafo

La etiqueta `<p>` define un párrafo de texto. El contenido que se coloca dentro de esta etiqueta aparecerá como un bloque independiente en la página, con un pequeño margen por defecto tanto antes como después de dicho bloque.

```html
<p>
  Este es un párrafo de ejemplo en HTML. Los párrafos permiten agrupar el texto
  en bloques separados.
</p>

<p>
  Otro párrafo con más información sobre cómo los párrafos facilitan la lectura
  y organización del contenido en una página web.
</p>
```

## Características clave de los párrafos

- **Separación automática:** Cada vez que se utiliza un párrafo (`<p>`), el navegador añade automáticamente un espacio antes y después de cada bloque de texto, lo que ayuda a mejorar la legibilidad.

- **Uso de varias líneas:** Puedes escribir el contenido de un párrafo en varias líneas en el archivo HTML, pero esto no afectará la forma en que se muestra en el navegador, ya que HTML no reconoce los saltos de línea dentro de los párrafos a menos que se utilicen etiquetas específicas (como `<br>`).

- **Salto de línea manual con `<br>`:** Si necesitas realizar un salto de línea dentro de un párrafo sin iniciar uno nuevo, puedes utilizar la etiqueta `<br>`. A diferencia de `<p>`, esta etiqueta no añade margen extra, solo un salto de línea.

> ✍️ Nota
>
> Si quieres hacer un salto de línea dentro de un párrafo utiliza la etiqueta `<br>`. <br>
> También se puede utilizar `<wbr>` para sugerir un salto de línea donde el navegador decide dividir la palabra.
>
> - `<br>` Fuerza el sato de línea
> - `<wbr>` Sugiere al navegador un sato de línea

## Buenas prácticas para usar párrafos

**Un solo tema por párrafo:** Mantén cada párrafo enfocado en una sola idea o tema. Esto mejora la legibilidad y la claridad.

**Evitar el uso de `<br>` en exceso:** Usa `<br>` solo cuando sea estrictamente necesario, como para direcciones o poesía. Para organizar mejor el texto, es preferible utilizar varios párrafos en lugar de depender de muchos saltos de línea manuales.

**Asegúrate de cerrar las etiquetas `<p>`:** Aunque algunos navegadores pueden renderizar correctamente un párrafo sin cerrar su etiqueta, siempre es buena práctica cerrar todas las etiquetas para garantizar la compatibilidad con todos los navegadores.

</div>
