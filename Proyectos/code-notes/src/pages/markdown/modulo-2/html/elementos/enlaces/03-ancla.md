---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Enlaces ancla"
block: "Enlaces"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Enlaces ancla</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Enlaces ancla](#enlaces-ancla)
- [Enlaces ancla con un desplazamiento suave (Smooth Scroll)](#enlaces-ancla-con-un-desplazamiento-suave-smooth-scroll)
- [Enlaces ancla en páginas externas](#enlaces-ancla-en-páginas-externas)
- [Buenas prácticas](#buenas-prácticas)

</div>
</div>

## Enlaces ancla

Un enlace ancla es un tipo especial de enlace en HTML que permite navegar dentro de la misma página web, desplazándose a una sección específica de la página sin tener que cargar una nueva. Este tipo de enlace es especialmente útil cuando deseas dirigir a los usuarios a partes específicas de un contenido largo, como un índice de contenido, un formulario o una sección informativa.

Los enlaces ancla se crean mediante la combinación de dos elementos clave en HTML:

1. **El enlace (`<a>`):** Se utiliza para crear el enlace.
2. **El identificador o "ancla" (id):** Se aplica a un elemento de la página para que el enlace se desplace hasta ese punto.

Imagina que tienes una página con muchas secciones y deseas incluir un índice de contenido al principio para facilitar la navegación. Cada sección del contenido puede ser vinculada a través de un enlace ancla.

```html
<h2>Contenido</h2>
<ul>
  <li><a href="#seccion1">Introducción</a></li>
  <li><a href="#seccion2">Cómo Funciona</a></li>
  <li><a href="#seccion3">Conclusión</a></li>
</ul>

<!-- Secciones de la página -->
<h3 id="seccion1">Introducción</h3>
<p>Contenido de la introducción...</p>

<h3 id="seccion2">Cómo Funciona</h3>
<p>Detalles sobre cómo funciona...</p>

<h3 id="seccion3">Conclusión</h3>
<p>Resumen y conclusiones...</p>
```

## Enlaces ancla con un desplazamiento suave (Smooth Scroll)

En ocasiones, puede ser útil implementar un desplazamiento suave para que, en lugar de saltar instantáneamente a la sección deseada, la página se desplace de forma gradual hacia el destino. Esto se puede lograr con CSS o JavaScript.

```css
html {
  scroll-behavior: smooth;
}
```

Con esta pequeña regla CSS, los enlaces ancla tendrán un desplazamiento suave al hacer clic, en lugar de un salto brusco.

## Enlaces ancla en páginas externas

Los enlaces ancla también pueden ser utilizados en páginas externas, siempre que se conozca el id del elemento de destino en esa página. Esto se logra agregando la URL de la página y el # seguido del ID.

```html
<a href="https://www.example.com#seccion-especial">Ir a Sección Especial</a>
```

Esto llevará a los usuarios a la página https://www.example.com, y automáticamente los desplazará hasta el elemento con el `id="seccion-especial"`.

## Buenas prácticas

- **Identificadores únicos:** Asegúrate de que cada id sea único dentro de la página. Si dos elementos tienen el mismo id, el navegador podría no saber a cuál dirigirse.
- **Accesibilidad:** El uso de enlaces ancla mejora la navegación, especialmente en documentos largos, y puede beneficiar la accesibilidad de la página al permitir un fácil acceso directo a secciones específicas.
- **Desplazamiento suave:** El desplazamiento suave mejora la experiencia del usuario al hacer que la transición entre secciones sea más natural.
- **Uso en formularios y listas de contenido:** Los enlaces ancla son útiles en formularios largos o índices de contenido donde los usuarios necesitan acceder a secciones específicas rápidamente.

</div>
