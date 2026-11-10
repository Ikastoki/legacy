---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Listas ordenadas"
block: "Listas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Listas ordenadas</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Listas ordenadas](#listas-ordenadas)
  - [Cambiar número de inicio](#cambiar-número-de-inicio)
  - [Cambiar el valor](#cambiar-el-valor)
  - [Invertir orden](#invertir-orden)
  - [Cambiar tipo](#cambiar-tipo)

</div>
</div>

## Listas ordenadas

Las listas ordenadas en HTML se utilizan para mostrar elementos en un orden específico, numerado o con otro tipo de secuencia. Se crean con la etiqueta `<ol>` (Ordered List), y cada ítem dentro de la lista se coloca con la etiqueta `<li>`. A continuación, veremos cómo crear y personalizar listas ordenadas en HTML.

`<ol> <li>Elementos<li> </ol>`

```html
Ejemplo:
    <ol>
      <li>Elemento-1</li>
      <li>Elemento-2</li>
      <li>Elemento-3</li>
    </ol>

Resultado:
    1.Elemento-1
    2.Elemento-2
    3.Elemento-3
```

### Cambiar número de inicio

Se puede cambiar el número de inicio de las listas ordenadas con el atributo `start="numero"`

```html
Ejemplo:
    <ol start="4">
      <li>Elemento-1</li>
      <li>Elemento-2</li>
      <li>Elemento-3</li>
    </ol>

Resultado:
    4.Elemento-1
    5.Elemento-2
    6.Elemento-3
```

### Cambiar el valor

Se puede cambiar el valor concreto de un número en las listas ordenadas con el atributo `value="numero"`

> ✍️ Nota
>
> También cambia los números que van después del valor cambiado.

```html
Ejemplo:
    <ol>
      <li>Elemento-1</li>
      <li value="44">Elemento-2</li>
      <li>Elemento-3</li>
      <li>Elemento-4</li>
      <li>Elemento-5</li>
    </ol>

Resultado:
    1.Elemento-1
    44.Elemento-2
    45.Elemento-3
    46.Elemento-4
    47.Elemento-5
```

### Invertir orden

Para invertir el orden de las listas(No cambia el orden del contenido) `<ol reversed>`

```html
Ejemplo:
    <ol reversed>
      <li>Elemento-1</li>
      <li>Elemento-2</li>
      <li>Elemento-3</li>
    </ol>

Resultado:
    3.Elemento-1
    2.Elemento-2
    1.Elemento-3
```

### Cambiar tipo

Para cambiar el tipo de orden de una lita ordenada:

- Lista decimales(Por defecto).
- Listas alfabéticas en minúsculas-mayúsculas(a-A).
- Listas de números romanos en minúsculas-mayúsculas(i-I).
- Mediante CSS se puede cambiar más tipos: `list-style-type`
- Mejor asignar el tipo de lista mediante CSS.

```html
Ejemplo:
    <ol type="a">
      <li>Elemento-1</li>
      <li>Elemento-2</li>
      <li>Elemento-3</li>
    </ol>

Resultado:
    a.Elemento-1
    b.Elemento-2
    c.Elemento-3
```

</div>
