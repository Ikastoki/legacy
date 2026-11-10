---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Formularios"
block: "Pseudoclases"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pseudoclases de formularios</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pseudoclases de formularios](#pseudoclases-de-formularios)
  - [:autofill](#autofill)
  - [:checked](#checked)
  - [:disabled y :enabled](#disabled-y-enabled)
  - [:in-range](#in-range)
  - [:invalid](#invalid)
  - [:optional](#optional)
  - [:out-of-range](#out-of-range)
  - [:placeholder-shown](#placeholder-shown)
  - [:required](#required)
  - [:user-invalid](#user-invalid)
  - [:valid](#valid)

</div>
</div>

## Pseudoclases de formularios

### :autofill

Se utiliza para seleccionar elementos `<input>` que han sido rellenados de forma automática por el navegador.

```html
<!-- HTML -->
<form>
  <label for="name">Nombre</label>
  <input id="name" name="name" type="text" autocomplete="name" />

  <label for="email">Correo</label>
  <input id="email" name="email" type="email" autocomplete="email" />
</form>
```

```css
/* CSS */
input:autofill {
  border: 3px dashed red;
}

input:-webkit-autofill {
  border: 3px dashed red;
}
```

---

### :checked

Se utiliza para seleccionar y estilizar elementos de formulario que han sido marcados o seleccionados por el usuario. Es comúnmente utilizada con elementos de entrada como casillas de verificación `<input type="checkbox">` y botones de opción `<input type="radio">`.

**Ocultar y mostrar un párrafo mediante un checkbox.**

```html
<!-- HTML -->
<label for="mostrar-ocultar">Pulsa aquí</label>
<input type="checkbox" name="mostrar-ocultar" id="mostrar-ocultar" />

<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptas quo
  sint voluptate illo mollitia quam possimus obcaecati atque sunt quos, fuga
  similique inventore ad hic nihil temporibus ea at.
</p>
```

```css
/* CSS */
#mostrar-ocultar:checked + p {
  display: none;
}
```

---

### :disabled y :enabled

Se utiliza para seleccionar y estilizar elementos que están deshabilitados(:disabled) o habilitados(:enabled). Esto es comúnmente utilizado con elementos de formulario, como botones, campos de entrada, casillas de verificación, y otros, que han sido desactivados para la interacción del usuario.

**Cambiar el fondo,texto y cursor cuando este desactivado**

```html
<!-- HTML -->
<button>Botón Habilitado</button>
<button disabled>Botón Deshabilitado</button>
```

```css
/* CSS */
button {
  padding: 10px;
  margin: 5px;
}

button:disabled {
  background-color: #d3d3d3;
  color: #808080;
  cursor: not-allowed;
}
```

---

### :in-range

Se utiliza para seleccionar y estilizar un elemento de formulario (como un `<input>` de tipo número) cuando su valor está dentro del rango especificado.

**Cambia el borde cuando está dentro del rango(1-10)**

```html
<!-- HTML -->
<label for="quantity">Cantidad (entre 1 y 10):</label>
<input type="number" id="quantity" name="quantity" min="1" max="10" value="0" />
```

```css
/* CSS */
input[type="number"] {
  padding: 10px;
  margin: 5px;
}

input[type="number"]:in-range {
  border: 2px solid greenyellow;
}
```

---

### :invalid

Se utiliza para seleccionar y estilizar elementos de formulario que tienen un estado de validación "inválido". Un elemento de formulario se considera inválido si no cumple con las restricciones de validación especificadas en su atributo pattern, required, min, max, type, etc.

```html
<!-- HTML -->
<label for="quantity">Cantidad (debe ser un número):</label>
<input type="number" id="quantity" name="quantity" required />
```

```css
/* CSS */
input[type="number"] {
  padding: 10px;
  margin: 5px;
}

input[type="number"]:invalid {
  border: 2px solid red;
}
```

---

### :optional

La pseudoclase :optional se utiliza en CSS para seleccionar los elementos de formulario que no requieren ser completados por el usuario.

```html
<form>
  <label for="name">Nombre (obligatorio):</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email (opcional):</label>
  <input type="email" id="email" name="email" />

  <label for="age">Edad (opcional):</label>
  <input type="number" id="age" name="age" />

  <button type="submit">Enviar</button>
</form>
```

```css
input:optional {
  border: 2px solid green; /* Aplica un borde verde a los campos opcionales */
}
```

---

### :out-of-range

La pseudoclase :out-of-range se utiliza en CSS para seleccionar los elementos de formulario cuyos valores no están dentro del rango especificado por los atributos min y max en los elementos `<input>` o `<textarea>`.

```html
<label for="quantity">Cantidad (entre 1 y 10):</label>
<input type="number" id="quantity" name="quantity" min="1" max="10" />
```

```css
input[type="number"]:out-of-range {
  border: 2px solid red; /* Aplica un borde rojo a los campos fuera de rango */
}
```

### :placeholder-shown

La pseudoclase :placeholder-shown se utiliza en CSS para seleccionar elementos de formulario cuyo placeholder (texto de marcador de posición) está siendo mostrado.

```html
<label for="username">Nombre de usuario:</label>
<input
  type="text"
  id="username"
  name="username"
  placeholder="Ingrese su nombre de usuario"
/>

<label for="message">Mensaje:</label>
<textarea
  id="message"
  name="message"
  placeholder="Ingrese su mensaje aquí"
></textarea>
```

```css
input:placeholder-shown,
textarea:placeholder-shown {
  color: #999; /* Cambia el color del texto de marcador de posición */
}
```

### :required

Se utiliza para seleccionar y estilizar elementos de formulario que tienen el atributo required. Esta pseudoclase es comúnmente utilizada para aplicar estilos específicos a campos de formulario que deben ser completados antes de enviar el formulario.

```html
<!-- HTML -->
<form>
  <label for="username">Nombre de usuario:</label>
  <input type="text" id="username" name="username" required />

  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" required />

  <button type="submit">Enviar</button>
</form>
```

```css
/* CSS */
:required {
  border: 2px solid #e74c3c;
  background-color: #f9d5d5;
}
```

---

### :user-invalid

Selecciona un elemento de formulario en función de si el valor (tal como lo ingresa un usuario) es válido cuando se compara con lo que se especifica como un valor aceptado en el marcado HTML.

**Agregar un borde y una X si el email no es valido**

```html
<!-- HTML -->
<form>
  <label for="email">Email *: </label>
  <input id="email" name="email" type="email" required />
  <span></span>
</form>
```

```css
/* CSS */
input:user-invalid {
  border: 2px solid red;
}

input:user-invalid + span::before {
  content: "✖";
  color: red;
}
```

---

### :valid

Se utiliza para seleccionar y estilizar elementos de formulario que han sido validados con éxito. Esta pseudoclase es comúnmente utilizada para aplicar estilos a campos de formulario después de que el usuario ha ingresado datos válidos.

```html
<!-- HTML -->
<form>
  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" required minlength="8" />

  <button type="submit">Enviar</button>
</form>
```

```css
/* CSS */
/* Estilo para campos de formulario que son válidos */
:valid {
  border: 2px solid #2ecc71;
  background-color: #d4f1d9;
}
```

---

</div>
