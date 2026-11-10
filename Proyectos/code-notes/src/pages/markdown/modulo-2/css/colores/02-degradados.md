---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Degradados"
block: "Colores"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Degradados</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Degradados](#degradados)
- [Degradados lineales (linear-gradient)](#degradados-lineales-linear-gradient)
- [Degradados radiales (radial-gradient)](#degradados-radiales-radial-gradient)
- [Degradados cónicos (conic-gradient)](#degradados-cónicos-conic-gradient)
- [Técnicas avanzadas](#técnicas-avanzadas)
  - [Degradados repetitivos (repeating-linear-gradient)](#degradados-repetitivos-repeating-linear-gradient)
  - [Máscaras de degradado](#máscaras-de-degradado)
  - [Animaciones con degradados](#animaciones-con-degradados)

</div>
</div>

## Degradados

Los degradados (gradients) en CSS permiten crear transiciones suaves entre dos o más colores, generando efectos visuales dinámicos sin necesidad de imágenes. Desde fondos sutiles hasta interfaces modernas, los degradados son una herramienta esencial en el diseño web.

## Degradados lineales (linear-gradient)

Crea una transición de colores en línea recta, con dirección personalizable.

Sintaxis:

```css
selector {
  background: radial-gradient(forma tamaño en posición, color1, color2);
}
```

Dirección explícita (ángulos o palabras clave):

```css
.fondo {
  background: linear-gradient(
    to right,
    #ff7e5f,
    #feb47b
  ); /* Izquierda a derecha */
}

.fondo-angular {
  background: linear-gradient(45deg, #3a7bd5, #00d2ff); /* Diagonal 45° */
}
```

Puntos de parada (color stops):

```css
.fondo-detallado {
  background: linear-gradient(to bottom, #ff7e5f 0%, #feb47b 50%, #ffffff 100%);
}
```

## Degradados radiales (radial-gradient)

Transición circular desde un punto central hacia afuera.

Sintaxis:

```css
selector {
  background: radial-gradient(forma tamaño en posición, color1, color2);
}
```

Forma y tamaño:

```css
.circulo {
  background: radial-gradient(circle, #ff9966, #ff5e62);
}

.elipse {
  background: radial-gradient(ellipse at top, #a8ff78, #78ffd6);
}
```

Posición personalizada:

```css
.fondo-destacado {
  background: radial-gradient(circle at 20% 70%, #ff0000, #0000ff);
}
```

## Degradados cónicos (conic-gradient)

Transición de colores rotando alrededor de un punto central (como un gráfico de pastel).

Sintaxis:

```css
selector {
  background: conic-gradient(color1 ángulo, color2 ángulo, ...);
}
```

```css
.rueda-colores {
  background: conic-gradient(
    red 0deg 120deg,
    green 120deg 240deg,
    blue 240deg 360deg
  );
  border-radius: 50%; /* Para forma circular */
}
```

## Técnicas avanzadas

### Degradados repetitivos (repeating-linear-gradient)

Patrones infinitos sin imágenes:

```css
.rayas {
  background: repeating-linear-gradient(
    45deg,
    #ff9a9e 0px,
    #ff9a9e 10px,
    #fad0c4 10px,
    #fad0c4 20px
  );
}
```

### Máscaras de degradado

Recortar texto o formas con degradados:

```css
.texto-degradado {
  background: linear-gradient(to right, #12c2e9, #c471ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Animaciones con degradados

Usar @keyframes para efectos dinámicos:

```css
@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.fondo-animado {
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient-move 10s ease infinite;
}
```

</div>
