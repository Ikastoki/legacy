---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Estado"
block: "Pseudoclases"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudoclases de estado</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pseudoclases de estado](#pseudoclases-de-estado)
  - [:any-link](#any-link)
  - [:blank](#blank)
  - [:default](#default)

</div>
</div>

## Pseudoclases de estado

### :any-link

Se utiliza para seleccionar cualquier enlace `<a>` que sea un hiperenlace, independientemente de su estado (ya sea visitado o no). Esta pseudoclase es útil cuando deseas aplicar estilos a todos los enlaces en tu documento, incluyendo aquellos que no han sido visitados.

> ✍️ Nota
>
> Un elemento que contiene el atributo `href` es un hipervínculo.
> :any-link es como el selector de atributo[href]

**Aplicar estilo a los enlaces con hipervínculo**

```html
<!-- HTML -->
<ul>
  <li><a href="#">Enlace de prueba</a></li>
  <li><a>Enlace de prueba</a></li>
  <li><a href="#">Enlace de prueba</a></li>
</ul>
```

```css
/* CSS */
a:any-link {
  text-decoration: none;
  color: purple;
  font-size: 20px;
}
```

---

### :blank

La pseudoclase :blank se basa en la pseudoclase :empty. Al igual que :empty, :blank seleccionará elementos que no contengan nada en absoluto o que solo contengan un comentario HTML. Pero :blank también seleccionará elementos que incluyan espacios en blanco, lo cual :empty no lo hará.

```html
<!-- HTML -->
<p>Párrafo con contenido</p>
<p><!-- Párrafo con comentario --></p>
<p></p>
```

```css
/* CSS */
p {
  min-height: 30px;
  width: 250px;
  background-color: teal;
  color: white;
}

p:blank {
  background-color: yellowgreen;
}
```

> ✍️ Nota
>
> :blank apenas tiene soporte en los navegadores actuales.

---

### :default

Se utiliza para seleccionar y estilizar el elemento por defecto de un conjunto de opciones, como en el caso de un elemento `<option>` dentro de un menú desplegable `<select>`. El selector :default se aplica al elemento que se seleccionaría por defecto cuando el formulario se carga inicialmente.

**Modificar el fondo del valor por defecto(selected)**

```html
<!-- HTML -->
<select>
  <option value="opc1">Opción 1</option>
  <option value="opc2" selected>Opción por defecto</option>
  <option value="opc3">Opción 3</option>
</select>
```

```css
/* CSS */
option:default {
  background-color: salmon;
}
```

</div>
