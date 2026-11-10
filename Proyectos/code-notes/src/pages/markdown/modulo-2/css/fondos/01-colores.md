---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Color"
block: "Fondos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Color</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Fondos de color](#fondos-de-color)
- [Patrones CSS puros (sin imágenes)](#patrones-css-puros-sin-imágenes)
  - [Rayas (stripes)](#rayas-stripes)
  - [Puntos (dots)](#puntos-dots)
  - [Cuadrícula (grid)](#cuadrícula-grid)
- [Efectos especiales](#efectos-especiales)
  - [Efecto vidrio (glassmorphism)](#efecto-vidrio-glassmorphism)
  - [Sombras en el fondo](#sombras-en-el-fondo)
- [Buenas prácticas](#buenas-prácticas)

</div>
</div>

## Fondos de color

Define un color sólido de fondo para un elemento.

```css
.elemento {
  background-color: #3498db; /* Hexadecimal */
  background-color: rgb(52, 152, 219); /* RGB */
  background-color: hsl(204, 78%, 53%); /* HSL */
  background-color: rgba(52, 152, 219, 0.7); /* RGB con transparencia */
}
```

## Patrones CSS puros (sin imágenes)

### Rayas (stripes)

```css
.rayas {
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
}
```

### Puntos (dots)

```css
.puntos {
  background: radial-gradient(circle, #333 2px, transparent 2px);
  background-size: 20px 20px; /* Tamaño del patrón */
}
```

### Cuadrícula (grid)

```css
.cuadricula {
  background: linear-gradient(to right, #ddd 1px, transparent 1px),
    linear-gradient(to bottom, #ddd 1px, transparent 1px);
  background-size: 20px 20px;
}
```

## Efectos especiales

### Efecto vidrio (glassmorphism)

```css
.vidrio {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Sombras en el fondo

```css
.sombra-interna {
  background: linear-gradient(to bottom, #fff, #f0f0f0);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
}
```

## Buenas prácticas

- **Optimización:** Usar degradados CSS en lugar de imágenes cuando sea posible.
- **Accesibilidad:** Asegurar que los degradados no reduzcan el contraste del texto.
- **Variables CSS:** Centralizar colores en :root para fácil mantenimiento.

</div>
