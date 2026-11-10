---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Listas desordenadas"
block: "Listas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Listas desordenadas</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Listas desordenadas](#listas-desordenadas)
  - [Cambiar el símbolo](#cambiar-el-símbolo)
- [Buenas prácticas](#buenas-prácticas)

</div>
</div>

## Listas desordenadas

Las listas desordenadas en HTML son útiles cuando necesitas mostrar una colección de elementos sin un orden específico. Los elementos dentro de la lista se presentan con viñetas (o "puntos" como marcador por defecto). Se crean utilizando la etiqueta `<ul>` (Unordered List), y los ítems dentro de la lista se incluyen dentro de la etiqueta `<li>`.

`<ul> <li>Elementos<li> </ul>`

```html
Ejemplo:
<ul>
  <li>Elemento-1</li>
  <li>Elemento-2</li>
  <li>Elemento-3</li>
</ul>

Resultado: • Elemento-1 • Elemento-2 • Elemento-3
```

### Cambiar el símbolo

Se puede cambiar el símbolo de la lista desordenada:
<br> `<ul type="square">`

- Por defecto las listas desordenas usan el símbolo de `•`
- Los 4 tipos mas comunes son:
  - **dist:** Para poner el símbolo por defecto.
  - **circle:** Para poner un símbolo circular.
  - **square:** Para poner un símbolo cuadrado.
  - **none:** Para eliminar la marca.
- Mejor asignar el tipo de lista mediante CSS.

```html
Ejemplo:
<ul type="circle">
  <li>Elemento-1</li>
  <li>Elemento-2</li>
  <li>Elemento-3</li>
</ul>

Resultado: ◌ Elemento-1 ◌ Elemento-2 ◌ Elemento-3
```

## Buenas prácticas

- **Semántica HTML:** Asegúrate de usar listas desordenadas cuando el orden de los elementos no sea importante. Para listas ordenadas, utiliza `<ol>` (Ordered List).

- **Accesibilidad:** Considera la accesibilidad y el contraste de los símbolos para asegurarte de que sean fácilmente visibles y comprensibles para todos los usuarios.

</div>
