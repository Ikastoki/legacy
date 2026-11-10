---
layout: ../../../../../layouts/modulo-2/SASS.astro
title: "SASS"
block: "Básico"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">SASS</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué es Sass?](#qué-es-sass)
- [¿Por qué usar Sass?](#por-qué-usar-sass)

</div>
</div>

## ¿Qué es Sass?

Sass (Syntactically Awesome Style Sheets) es un preprocesador de CSS. Esto significa que no es CSS por sí solo, sino un lenguaje de scripting que se compila a CSS. Piensa en él como una capa extra de poder que le añades a tu CSS.

Básicamente, escribes código en una sintaxis especial de Sass, que incluye características que no existen en el CSS estándar (como variables, anidación y bucles). Luego, un programa llamado compilador de Sass toma ese código y lo traduce a CSS normal, que es lo que el navegador web puede entender.

## ¿Por qué usar Sass?

La principal razón para usar Sass es que te ayuda a escribir CSS de una forma más eficiente, organizada y fácil de mantener. Resuelve muchos de los problemas que surgen en proyectos grandes de CSS, como la repetición de código o la dificultad para hacer cambios globales.

Aquí tienes un resumen de las principales ventajas:

- Variables: Puedes guardar valores (como colores o tamaños de fuente) en variables para reutilizarlos en tu proyecto.

- Anidación: Te permite anidar selectores de CSS unos dentro de otros, lo que hace el código más legible y estructurado.

- Mixins: Son bloques de código reutilizables que puedes incluir en cualquier parte de tu hoja de estilo, evitando la repetición.

- Funciones: Te permiten crear lógica para manipular valores y generar estilos dinámicamente.

- Partials e Imports: Puedes dividir tu código en archivos más pequeños y modulares para una mejor organización.
