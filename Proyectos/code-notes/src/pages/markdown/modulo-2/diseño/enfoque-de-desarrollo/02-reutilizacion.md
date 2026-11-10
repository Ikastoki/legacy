---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Reutilización de Estilos"
block: "Enfoque de Desarrollo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Reutilización de Estilos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Reutilización de Estilos](#reutilización-de-estilos)
- [Clases de Utilidad (Utility Classes)](#clases-de-utilidad-utility-classes)
- [Variables CSS (Custom Properties)](#variables-css-custom-properties)
- [¿Por qué es crucial la reutilización de estilos?](#por-qué-es-crucial-la-reutilización-de-estilos)


</div>
</div>

## Reutilización de Estilos

La reutilización de estilos busca escribir reglas de CSS que puedan aplicarse a múltiples elementos en diferentes partes del sitio web, en lugar de escribir estilos específicos para cada elemento. Esto reduce la cantidad de código, minimiza la redundancia y facilita los cambios globales.

## Clases de Utilidad (Utility Classes)

Las clases de utilidad son la forma más sencilla y común de reutilizar estilos. Son clases de CSS pequeñas y con un solo propósito que se pueden aplicar directamente en el HTML. Suelen tener nombres descriptivos de la propiedad que aplican.

- **Agilidad**: Permiten prototipar y maquetar rápidamente sin tener que escribir CSS nuevo.

- **Reusabilidad**: Se pueden usar en cualquier lugar y en cualquier momento.

- **Coherencia**: Aseguran que el espaciado, la tipografía o los colores sean consistentes en todo el proyecto.

```html
<h1 class="text-center mt-10">Título Centrado</h1>
<p class="text-primary">Texto importante.</p>
```

```css
/* Clases de utilidad comunes */
.text-center {
  text-align: center;
}
.mt-10 {
  margin-top: 10px;
}
.d-flex {
  display: flex;
}
.text-primary {
  color: #007bff;
}
```

## Variables CSS (Custom Properties)

Las variables CSS, o custom properties, te permiten definir valores reutilizables (como colores, tamaños de fuente o espaciados) en un solo lugar y usarlos en cualquier parte de la hoja de estilos. Esto es ideal para gestionar el diseño de un sitio web.

- Fácil mantenimiento: Si necesitas cambiar un color, solo tienes que modificar la variable en un lugar, y el cambio se reflejará en todo el sitio.

- Coherencia: Aseguran el uso de la misma paleta de colores o los mismos tamaños en todo el proyecto.

- Temas: Facilitan la creación de temas dinámicos, como un modo claro y oscuro.

```css
:root {
  --primary-color: #3498db;
  --font-size-base: 1rem;
}

body {
  color: var(--primary-color);
  font-size: var(--font-size-base);
}

.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-base);
}
```

## ¿Por qué es crucial la reutilización de estilos?

- Mantenibilidad: Se reduce el riesgo de errores y se facilita la depuración. Si un estilo está en un solo lugar, es más fácil de encontrar y corregir.

- Escalabilidad: Un proyecto con estilos reutilizables es más fácil de hacer crecer. Añadir nuevas funcionalidades o componentes se vuelve más rápido y predecible.

- Rendimiento: Se reduce el tamaño del archivo CSS, lo que mejora la velocidad de carga del sitio.
