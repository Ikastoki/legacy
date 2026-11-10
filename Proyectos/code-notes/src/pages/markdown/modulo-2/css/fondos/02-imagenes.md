---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Imágenes"
block: "Fondos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Imágenes</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Fondos con imágenes](#fondos-con-imágenes)
- [Propiedades básicas de background-image](#propiedades-básicas-de-background-image)
- [Control de posición y repetición](#control-de-posición-y-repetición)
  - [background-position](#background-position)
  - [background-repeat](#background-repeat)
- [Ajuste de Tamaño (background-size)](#ajuste-de-tamaño-background-size)
  - [Valores clave](#valores-clave)
  - [Técnica para fondos responsivos](#técnica-para-fondos-responsivos)
- [Optimización de rendimiento](#optimización-de-rendimiento)
  - [Imágenes responsivas con srcset (HTML + CSS)](#imágenes-responsivas-con-srcset-html--css)

</div>
</div>

## Fondos con imágenes

Las imágenes de fondo son esenciales para el diseño web moderno, permitiendo crear banners, hero y elementos visuales impactantes.

## Propiedades básicas de background-image

Formatos Recomendados

- JPEG: Fotografías (con compresión)
- PNG: Gráficos con transparencia
- WebP: Versión moderna (mejor compresión)
- SVG: Iconos y gráficos vectoriales

```css
.elemento {
  background-image: url("ruta/a/imagen.jpg");
}
```

## Control de posición y repetición

### background-position

Ajusta dónde se coloca la imagen dentro del elemento:

```css
.hero {
  background-position: center top; /* horizontal | vertical */
  background-position: 20px 50px; /* coordenadas X Y */
}
```

### background-repeat

```css
.banner {
  background-repeat: no-repeat; /* Sin repetición */
  background-repeat: repeat-x; /* Solo horizontal */
  background-repeat: space; /* Espaciado uniforme */
}
```

## Ajuste de Tamaño (background-size)

### Valores clave

```css
.card {
  background-size: cover; /* Cubre todo el espacio (recorta si es necesario) */
  background-size: contain; /* Ajusta para que toda la imagen sea visible */
  background-size: 100% 80%; /* Ancho | Alto personalizado */
}
```

### Técnica para fondos responsivos

```css
.responsive-bg {
  background-image: url("imagen-grande.jpg");
  background-size: cover;
  background-position: center;
  aspect-ratio: 16/9; /* Mantiene proporción */
}
```

> ✍️ Nota
>
> La propiedad` aspect-ratio` dice cómo de ancho y cómo de alto debe ser un elemento, manteniendo siempre la misma forma. Por ejemplo, si es un cuadrado, la relación será 1/1 (igual de ancho que de alto). Si es un rectángulo de pantalla, como en los videos, la relación será 16/9 (más ancho que alto).
> <br> <br>
>
> Es como decirle al navegador: "Este elemento debe siempre guardar esta proporción", sin importar el tamaño del contenedor.

## Optimización de rendimiento

### Imágenes responsivas con srcset (HTML + CSS)

```html
<div
  class="adaptive-bg"
  style="--mobile: url('small.jpg'); --desktop: url('large.jpg')"
></div>
```

```css
.adaptive-bg {
  background-image: var(--mobile);
}

@media (min-width: 768px) {
  .adaptive-bg {
    background-image: var(--desktop);
  }
}
```

</div>
