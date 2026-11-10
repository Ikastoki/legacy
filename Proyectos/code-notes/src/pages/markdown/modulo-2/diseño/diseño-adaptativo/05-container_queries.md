---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Container Queries"
block: "Diseño adaptativo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Container Queries</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué son las Container Queries?](#qué-son-las-container-queries)
- [Cómo usar Container Queries](#cómo-usar-container-queries)
  - [Definir el contenedor](#definir-el-contenedor)
  - [Escribir la consulta](#escribir-la-consulta)
- [Ventajas y aplicaciones prácticas](#ventajas-y-aplicaciones-prácticas)


</div>
</div>

## ¿Qué son las Container Queries?

Las Container Queries son una nueva funcionalidad de CSS que te permite aplicar estilos a un elemento basado en las dimensiones (ancho, altura, etc.) de su contenedor padre, y no en las del viewport completo.

Hasta ahora, solo podíamos usar Media Queries para cambiar el diseño de la página completa. Con las Container Queries, puedes crear componentes modulares y reutilizables que se adaptan a cualquier espacio en el que se coloquen.

¿Cuál es la diferencia con Media Queries?

- Media Queries: Responden al tamaño del viewport (la ventana del navegador).

- Container Queries: Responden al tamaño del contenedor que los envuelve.

Esto significa que un componente puede tener un aspecto en la barra lateral de un sitio web (donde su contenedor es estrecho) y un aspecto totalmente diferente en el área de contenido principal (donde su contenedor es ancho), sin importar el tamaño total de la pantalla.

## Cómo usar Container Queries

Para usar las Container Queries, necesitas dos cosas:

1. **Definir el contenedor**: El contenedor debe ser un "elemento de contención". Esto se hace con la propiedad container-type.

2. **Escribir la consulta**: La consulta se parece a una Media Query, pero se usa la regla `@container`.

### Definir el contenedor

Puedes usar una de las siguientes propiedades en el elemento padre para establecer un contexto de consulta:

- `container-type: size;`: El contenedor puede ser consultado por su ancho y alto.

- `container-type: inline-size;`: El contenedor solo puede ser consultado por su ancho. Esta es la opción más común y recomendada.

También puedes usar un atajo: `container: container-name / container-type;`.

```css
/* Definimos el elemento con la clase 'card-container' como un contenedor */
.card-container {
  container-type: inline-size;
}
```

### Escribir la consulta

Ahora, dentro del componente hijo, puedes usar @container para aplicar estilos.

```css
/* Estos estilos se aplicarán al elemento con la clase 'card' si su contenedor tiene un ancho mínimo de 400px */
.card {
  display: flex;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row; /* En pantallas grandes, las tarjetas se verán una al lado de la otra */
  }

  .card .card-image {
    width: 200px;
  }
}
```

## Ventajas y aplicaciones prácticas

- Reusabilidad de Componentes: Puedes crear un componente (card, widget, etc.) una sola vez y su diseño se adaptará automáticamente a cualquier lugar donde lo coloques. Esto elimina la necesidad de modificar estilos para cada contexto.

- Layouts Independientes: Con Container Queries, cada componente puede tener su propio diseño responsivo interno sin afectar a los demás elementos de la página.

- Mejor Mantenimiento: El código es más modular y fácil de mantener, ya que los estilos de un componente están encapsulados dentro de sus propias consultas.
