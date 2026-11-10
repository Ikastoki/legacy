---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Generar contenido"
block: "Pseudoelementos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Contenido generado en CSS</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Contenido generado en CSS](#contenido-generado-en-css)
  - [::before y ::after](#before-y-after)
  - [::backdrop](#backdrop)
  - [::file-selector-button](#file-selector-button)

</div>
</div>

## Contenido generado en CSS

### ::before y ::after

`::before` Este pseudoelemento crea un contenedor virtual antes del contenido real del elemento seleccionado. Puedes usar la propiedad content para especificar qué contenido debe aparecer antes del contenido real. Esto es útil para agregar decoraciones, iconos, o texto adicional.

`::after` Similar a ::before, este pseudoelemento crea un contenedor virtual después del contenido real del elemento seleccionado. También se usa con la propiedad content para agregar contenido adicional al final del elemento.

```html
<!-- HTML -->
<p>Texto del párrafo.</p>
```

```css
/* CSS */
p::before {
  content: "Inicio: ";
  font-weight: bold;
}

p::after {
  content: " Fin.";
  font-style: italic;
}
```

---

### ::backdrop

El pseudoelemento CSS ::backdrop crea un fondo que cubre toda la ventana gráfica y se representa inmediatamente debajo de un `<dialog>` o cualquier elemento que entre en modo de pantalla completa.

```html
<!-- HTML -->
<button popovertarget="mensaje" popovertargetaction="toggle">
  Mostrar Mensaje
</button>

<div id="mensaje" popover>
  <p>Esto es un mensaje de prueba</p>
</div>
```

```css
/* CSS */
[popover]::backdrop {
  background-color: darkorange;
  background-image: linear-gradient(
    130deg,
    #ff7a18,
    #af002d 41.07%,
    #319197 76.05%
  );
}

[popover]:popover-open {
  font-size: 2rem;
  padding: 20px;
}
```

---

### ::file-selector-button

Es un pseudoelemento que selecciona los elementos `<input type="file">` del HTML.

```html
<!-- HTML -->
<input type="file" />
```

```css
/* CSS */
input::file-selector-button {
  background-color: teal;
  color: greenyellow;
  padding: 20px;
  font-size: 16px;
}
```

---

</div>
