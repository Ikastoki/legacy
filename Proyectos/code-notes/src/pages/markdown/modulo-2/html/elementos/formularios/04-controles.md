---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Controles"
block: "Formularios"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Etiquetado de controles</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Etiquetado de controles](#etiquetado-de-controles)
- [Agrupación de controles](#agrupación-de-controles)
  - [Agrupar select](#agrupar-select)

</div>
</div>

## Etiquetado de controles

Las etiquetas de controles sirven para asociar una descripción corta para los campos.

- El atributo `for` asocia la etiqueta `<label>` con el `id` del campo.
- El `for` y el `id` tienen que coincidir.
- Al hacer click en el `<label>` hace autofocus en el campo.

```html
<!-- Ejemplo -->
<label for="nombre">Nombre</label>
<input type="text" id="nombre" name="nombre" />
```

> ✍️ Nota
>
> Otra forma de asociar con label sin **for** ni **id**:
>
> ```html
> <label>
>   Nombre:
>   <input type="text" name="nombre" />
> </label>
> ```

## Agrupación de controles

Para agrupar los campos de un formulario en grupos y tener una mejor organización HTML dispone de la etiqueta `<fieldset>`. Mediante es uso de la etiqueta `<legend>` podemos asignar un titulo a la agrupación del `<fieldset>`.

```html
<!-- Ejemplo -->
<fieldset>
  <legend>Información Personal</legend>
  Nombre: <input name="nombre" type="text" />
  <br />
  <br />
  Apellidos: <input name="apellidos" type="text" />
</fieldset>
```

### Agrupar select

Para agrupar en diferentes categorías las opciones de un select podemos hacer uso del elemento `<optgroup label="NombreCategoría">`

```html
<!-- Ejemplo -->
<select>
  <option value="">Elija una opción</option>
  <optgroup label="Frontend">
    <option value="">HTML</option>
    <option value="">CSS</option>
    <option value="">JavaScript</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="">Java</option>
    <option value="">PHP</option>
    <option value="">SQL</option>
  </optgroup>
</select>
```

</div>
