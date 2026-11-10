---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Color schemas"
block: "Colores"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Color Schemas</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Color schemas](#color-schemas)
- [Fundamentos de los esquemas de color](#fundamentos-de-los-esquemas-de-color)
  - [¿Qué es un "color schema"?](#qué-es-un-color-schema)
- [Implementación con prefers-color-scheme](#implementación-con-prefers-color-scheme)
- [Variables CSS para esquemas dinámicos](#variables-css-para-esquemas-dinámicos)
- [Switcher manual (JavaScript + CSS)](#switcher-manual-javascript--css)
- [Modo alto contraste](#modo-alto-contraste)
- [Ejemplo completo: esquema dinámico](#ejemplo-completo-esquema-dinámico)

</div>
</div>

## Color schemas

Los esquemas de color (color schemes) permiten adaptar el diseño de un sitio web a las preferencias del usuario, como el modo claro/oscuro del sistema operativo o configuraciones de accesibilidad.

## Fundamentos de los esquemas de color

### ¿Qué es un "color schema"?

Un conjunto de colores coordinados que definen la apariencia de una interfaz. Los más comunes son:

- **Modo Claro (light mode):** Fondo claro, texto oscuro.

- **Modo Oscuro (dark mode):** Fondo oscuro, texto claro.

- **Alto Contraste:** Para usuarios con necesidades de accesibilidad.

Técnicas para Implementarlos:

- Media Query `prefers-color-scheme` (detecta preferencias del SO).

- Variables CSS (para cambiar colores globalmente).

- Custom Properties y JavaScript (para switchers manuales).

## Implementación con prefers-color-scheme

Media Query Nativa

CSS permite detectar el modo seleccionado en el sistema operativo:

```css
/* Estilos base (light mode por defecto) */
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #121212;
    --text-color: #f0f0f0;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

## Variables CSS para esquemas dinámicos

Estructura Recomendada

Usa variables en :root para colores primarios, secundarios y de acento:

```css
:root {
  /* Colores base */
  --primary: #4a6fa5;
  --secondary: #ff7e5f;

  /* Modo Claro (default) */
  --bg-light: #f9f9f9;
  --text-light: #333;

  /* Modo Oscuro */
  --bg-dark: #1a1a1a;
  --text-dark: #e0e0e0;
}

/* Aplicar esquema según preferencia */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: var(--bg-dark);
    --text: var(--text-dark);
  }
}
```

## Switcher manual (JavaScript + CSS)

Permite a los usuarios cambiar el modo manualmente:

```html
<button id="theme-toggle">Cambiar Modo</button>
```

```css
.dark-theme {
  --bg: var(--bg-dark);
  --text: var(--text-dark);
}
```

```javascript
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
```

> ✍️ Nota
>
> Guarda la preferencia en localStorage para persistencia.

## Modo alto contraste

Media Query prefers-contrast

```css
@media (prefers-contrast: high) {
  :root {
    --text: #000;
    --bg: #fff;
    --primary: #0066cc; /* Azul oscuro para mejor visibilidad */
  }
}
```

> ✍️ Nota
>
> - Usar bordes gruesos (2px mínimo).
> - Evitar degradados o transparencias.

## Ejemplo completo: esquema dinámico

```css
:root {
  /* Colores base */
  --primary: #4a6fa5;
  --secondary: #ff7e5f;
  --bg: #f9f9f9;
  --text: #333;
  --card-bg: #fff;

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    --bg: #1a1a1a;
    --text: #e0e0e0;
    --card-bg: #2d2d2d;
  }
}

.card {
  background: var(--card-bg);
  color: var(--text);
  border: 1px solid var(--primary);
}
```

</div>
