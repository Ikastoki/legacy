---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Interacción"
block: "Pseudoclases"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudoclases de interacción</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pseudoclases de interacción](#pseudoclases-de-interacción)
  - [:active](#active)
  - [:focus](#focus)
  - [:focus-visible](#focus-visible)
  - [:focus-within](#focus-within)
  - [:hover](#hover)
  - [:target](#target)
  - [:visited](#visited)
  - [:link](#link)

</div>
</div>

## Pseudoclases de interacción

### :active

Se utiliza para seleccionar y estilizar un elemento cuando está siendo activado o "clickeado" por el usuario.

**Cambiar tamaño y color de letra:**

```html
<!-- HTML -->
<a href="#">Enlace de prueba</a>
```

```css
/* CSS */
a:active {
  font-size: 30px;
  color: pink;
}
```

---

### :focus

Se utiliza para seleccionar y estilizar un elemento que actualmente tiene el foco, es decir, el elemento que está siendo activamente utilizado o interactuado por el usuario, como un campo de entrada de texto o un enlace activado por teclado.

**Cambiar borde al hacer foco**

```html
<!-- HTML -->
<label for="username">Nombre de usuario:</label>
<input type="text" id="username" placeholder="Ingresa tu nombre de usuario" />
```

```css
/* CSS */
input {
  padding: 10px;
  margin: 5px;
}

/ input:focus {
  border: 2px solid salmon;
  outline: none;
}
```

---

### :focus-visible

Se utiliza para seleccionar y estilizar un elemento que tiene el foco, pero solo cuando el foco se está aplicando mediante interacción del usuario (por ejemplo, mediante el teclado), y no cuando el foco es activado mediante eventos del mouse.

```html
<!-- HTML -->
<label for="username">Nombre de usuario:</label>
<input type="text" id="username" placeholder="Ingresa tu nombre de usuario" />
```

```css
/* CSS */

input {
  padding: 10px;
  margin: 5px;
}

input:focus-visible {
  border: 2px solid #3498db;
  outline: none;
}
```

---

### :focus-within

Se utiliza para seleccionar y estilizar un elemento padre que contiene un hijo que tiene el foco. Es útil cuando deseas aplicar estilos al contenedor que rodea al elemento focalizado, lo que puede ser útil para indicar visualmente la relación entre el contenedor y el elemento focalizado.

**Cambia el color del borde del padre cuando el hijo tiene foco**

```html
<!-- HTML -->
<div class="container">
  <label for="username">Nombre de usuario:</label>
  <input type="text" id="username" placeholder="Ingresa tu nombre de usuario" />
</div>
```

```css
/* CSS */
.container {
  padding: 20px;
  border: 2px solid #ddd;
}

.container:focus-within {
  border-color: #3498db; /* Cambia el color del borde cuando contiene un elemento con foco */
}

input {
  padding: 10px;
  margin: 5px;
}
```

---

### :hover

Se utiliza para seleccionar y estilizar un elemento cuando el usuario pasa el ratón sobre él. Esta pseudoclase es comúnmente utilizada para proporcionar efectos visuales y de estilo adicionales cuando se interactúa con un elemento.
**Cambiar color de un párrafo al pasar el ratón por encima**

```html
<!-- HTML -->
<p class="cambiar-color">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis cupiditate
  quaerat similique porro voluptas nesciunt, cum quia harum sapiente sed earum
  consectetur adipisci esse assumenda maxime eligendi molestias vero nisi!
</p>
```

```css
/* CSS */
.cambiar-color:hover {
  color: blue;
}
```

---

### :target

Se utiliza para seleccionar y estilizar el elemento que es el destino de un enlace interno (ancla) en la URL. Un enlace interno es un hipervínculo que apunta a un fragmento específico de la misma página. Cuando haces clic en un enlace interno y se activa, el elemento al que apunta el fragmento se convierte en el "objetivo" (:target) y puede ser seleccionado y estilizado utilizando esta pseudoclase.

```html
<!-- HTML -->
<nav>
  <ul>
    <li><a href="#seccion1">Ir a la Sección 1</a></li>
    <li><a href="#seccion2">Ir a la Sección 2</a></li>
  </ul>
</nav>

<section id="seccion1">
  <h2>Sección 1</h2>
  <p>Contenido de la Sección 1.</p>
</section>

<section id="seccion2">
  <h2>Sección 2</h2>
  <p>Contenido de la Sección 2.</p>
</section>
```

```css
/* CSS */
:target {
  background-color: #f9d5d5;
  border: 2px solid #e74c3c;
}
```

---

### :visited

Se utiliza para seleccionar y estilizar enlaces que han sido visitados por el usuario. Es útil para proporcionar una indicación visual de qué enlaces ya se han explorado.

> ✍️ Nota
>
> Es importante destacar que, por razones de privacidad y seguridad, las propiedades que pueden ser estilizadas utilizando :visited están limitadas. En general, solo se permiten cambios en propiedades relacionadas con el color, como color, background-color, border-color, etc., para evitar posibles abusos que podrían comprometer la privacidad del usuario.

```html
<!-- HTML -->
<ul>
  <li><a href="https://www.ejemplo.com" target="_blank">Enlace 1</a></li>
  <li><a href="https://www.otro-ejemplo.com" target="_blank">Enlace 2</a></li>
  <li>
    <a href="https://www.yet-another-example.com" target="_blank">Enlace 3</a>
  </li>
</ul>
```

```css
/* CSS */
a:visited {
  color: #8e44ad;
  text-decoration: underline;
}
```

---

### :link

La pseudoclase :link es utilizada para seleccionar los enlaces que aún no han sido visitados por el usuario.

```css
a:link {
  color: blue; /* Estilo para enlaces no visitados */
}

a:visited {
  color: purple; /* Estilo para enlaces visitados */
}
```

---

</div>
