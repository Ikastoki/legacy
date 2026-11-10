---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Diseño adaptativo"
block: "Diseño adaptativo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Diseño adaptativo</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Introducción al diseño adaptativo](#introducción-al-diseño-adaptativo)
- [Diseño Responsivo (Responsive Design)](#diseño-responsivo-responsive-design)
- [Diseño Adaptativo (Adaptive Design)](#diseño-adaptativo-adaptive-design)
- [Diseño Fluido (Fluid Design)](#diseño-fluido-fluid-design)
- [Enfoque Mobile-First](#enfoque-mobile-first)

</div>
</div>

## Introducción al diseño adaptativo

El diseño web ha evolucionado para asegurar que los sitios funcionen en cualquier dispositivo. Esta evolución ha dado lugar a varios enfoques que, aunque relacionados, tienen diferencias clave.

## Diseño Responsivo (Responsive Design)

Es el enfoque más popular y moderno. Un sitio web responsivo se adapta de forma fluida al tamaño de la pantalla. En lugar de tener un diseño fijo, el layout cambia su estructura y sus componentes (como las imágenes y el texto) se reubican o cambian de tamaño para ajustarse al espacio disponible.

- Principio clave: Se usa una única base de código CSS que, mediante Media Queries, aplica diferentes estilos en puntos de ruptura específicos (breakpoints).

- Ventajas: Es muy flexible y se adapta a cualquier tamaño de pantalla que no se haya previsto.

- Desventajas: Puede requerir más planificación y, si no está bien optimizado, puede cargar más recursos de lo necesario en dispositivos móviles.

## Diseño Adaptativo (Adaptive Design)

A diferencia del diseño responsivo, el diseño adaptativo tiene varios layouts fijos predefinidos para diferentes tamaños de pantalla (por ejemplo, uno para móviles, otro para tablets y otro para computadoras). El servidor detecta el tamaño de la pantalla y carga el layout que mejor se ajusta.

- Principio clave: Se crean múltiples versiones del mismo sitio y se eligen en función del dispositivo.

- Ventajas: Ofrece un control más preciso sobre el diseño en cada breakpoint específico. Puede ser más rápido en cargar si se optimizan los recursos para cada versión.

- Desventajas: No se adapta a tamaños de pantalla que no estén definidos en sus breakpoints. Si sale un nuevo dispositivo, el diseño puede no verse bien.

## Diseño Fluido (Fluid Design)

El diseño fluido es el precursor del diseño responsivo. Se basa en el uso de unidades relativas como porcentajes (%) en lugar de píxeles fijos. El layout se estira y encoge de manera proporcional al tamaño de la pantalla.

- Principio clave: La estructura de la página siempre ocupa un porcentaje del contenedor.

- Desventajas: No reestructura el contenido. Simplemente lo estira o encoge. Esto puede hacer que el texto sea ilegible o que los elementos se vean raros en pantallas muy grandes o muy pequeñas.

## Enfoque Mobile-First

El enfoque Mobile-First es una estrategia de desarrollo que prioriza la experiencia en dispositivos móviles.

- ¿Por qué es importante?: Debido al aumento del uso de smartphones, es fundamental que el diseño principal esté optimizado para la pantalla más pequeña. Esto fuerza a los diseñadores a priorizar el contenido y la funcionalidad más importantes.

- Proceso: Se comienza a diseñar y codificar para pantallas pequeñas. Luego, se usan media queries para pantallas más grandes, añadiendo más contenido o funcionalidades que solo son relevantes en esos dispositivos.

Este enfoque asegura que el sitio sea rápido y eficiente en móviles, ya que no carga recursos innecesarios.

> ✍️ Nota
>
> En la práctica, el diseño responsivo es el método más común hoy en día, y casi siempre se combina con un enfoque Mobile-First.
