---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Pop-up"
block: "Interactivas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pop-up</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Dialog](#dialog)
  - [Ejemplo con JavaScript](#ejemplo-con-javascript)
  - [Ejemplo con CSS](#ejemplo-con-css)
- [Popover](#popover)

</div>
</div>

## Dialog

La etiqueta `<dialog>` en HTML se utiliza para representar una ventana de diálogo o un cuadro de diálogo dentro de una página web. Los diálogos son ventanas modales que se utilizan para interactuar con el usuario, y `<dialog>` proporciona una forma estándar de crear y manipular estos elementos en HTML.

### Ejemplo con JavaScript

```html
<!-- HTML -->
<button id="mostrarDialogo">Mostrar Diálogo</button>

<dialog id="miDialogo">
  <p>Este es un contenido de diálogo.</p>
  <button id="cerrarDialogo">Cerrar</button>
</dialog>
```

```js
//JavaScript

// Obtener referencias a elementos
var botonMostrar = document.getElementById("mostrarDialogo");
var dialogo = document.getElementById("miDialogo");
var botonCerrar = document.getElementById("cerrarDialogo");

// Configurar eventos
botonMostrar.addEventListener("click", function () {
  dialogo.showModal();
});

botonCerrar.addEventListener("click", function () {
  dialogo.close();
});
```

---

### Ejemplo con CSS

```html
<!-- HTML -->
<input type="checkbox" id="mostrarDialogo" />
<label for="mostrarDialogo">Mostrar Diálogo</label>

<dialog id="miDialogo">
  <p>Este es un contenido de diálogo.</p>
  <label for="mostrarDialogo">Cerrar</label>
</dialog>
```

```css
/* CSS */
#miDialogo {
  display: none;
}

#mostrarDialogo:checked ~ #miDialogo {
  display: block;
}
```

## Popover

Los popover sirven para crear elementos emergentes(contenido por encima de otro contenido).

- Por defecto se posiciona en el centro de la pantalla.
- Podemos cambiar su CSS [popover]{ código css}
  - Selectores:
    - **::backdrop** Aplica estilos al fondo de la página cuando se muestra el popover.
    - **:popover-open** Aplica estilos a un popover que se esté actualmente visible.

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
  background: tomato;
}

[popover]:popover-open {
  font-size: 2rem;
}
```

</div>
