---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Estructura y Organización"
block: "Enfoque de Desarrollo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Estructura y Organización</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Estructura y Organización del Código CSS](#estructura-y-organización-del-código-css)
- [Estructura del Archivo](#estructura-del-archivo)
- [Comentarios y Documentación](#comentarios-y-documentación)

</div>
</div>

## Estructura y Organización del Código CSS

Una buena organización del código te ayuda a trabajar más rápido, facilita la colaboración en equipo y hace que el mantenimiento del proyecto sea mucho más sencillo.

## Estructura del Archivo

Una práctica común es dividir tu CSS en archivos separados para cada componente o sección de tu sitio web. Esto evita tener un archivo style.css gigante y difícil de navegar.

- `style.css` (o `main.css`): El archivo principal que importa todos los demás.

- `_base.css`: Contiene estilos generales y de reinicio (reset) para toda la página, como el box-sizing, tipografía base y colores.

- `_layout.css`: Define la estructura de la página usando Flexbox o Grid para la cabecera, el pie de página, la barra lateral, etc.

- `_components.css`: Incluye los estilos de componentes reutilizables como botones, tarjetas, formularios o menús de navegación.

- `_utilities.css`: Contiene clases de utilidad que se pueden usar para tareas específicas, como text-center o margin-top-10.

- `_themes.css`: Maneja los estilos de diferentes temas (por ejemplo, modo oscuro).

Puedes importar estos archivos en tu style.css usando la regla @import:

```css
/* style.css */
@import "base.css";
@import "layout.css";
@import "components.css";
```

## Comentarios y Documentación

Documentar tu código es fundamental para que otros desarrolladores (o tú mismo en el futuro) puedan entenderlo.

- Usa comentarios para explicar por qué se hizo una elección de diseño o para delimitar secciones en un archivo largo.

- Utiliza comentarios de un solo bloque para una idea simple (/_ Esto alinea el ítem _/) o de múltiples líneas para explicaciones más detalladas

```css
/* =========================== */
/* Componente: Botón de acción */
/* =========================== */
.button {
  background-color: #3498db;
  color: #fff;
  /* ...otros estilos */
}
```

> ✍️ Nota
>
> Una buena organización no solo te ayuda a mantener el código limpio, sino que también evita la necesidad de usar selectores demasiado específicos (como #id > .class) que hacen el CSS difícil de sobrescribir.
