---
layout: ../../../../../layouts/modulo-2/Diseño.astro
title: "Atomic Design"
block: "Enfoque de Desarrollo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Atomic Design</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Atomic Design](#atomic-design)
  - [La estructura de Atomic Design comprende cinco niveles:](#la-estructura-de-atomic-design-comprende-cinco-niveles)
  - [Estructura del componente](#estructura-del-componente)

</div>
</div>

## Atomic Design

Atomic Design es una metodología propuesta por Brad Frost que organiza el diseño de interfaces de usuario en niveles jerárquicos y atómicos. La idea es estructurar los componentes de una interfaz de usuario de manera modular y reutilizables.

### La estructura de Atomic Design comprende cinco niveles:

1. **Átomos (Atoms):** Las unidades más básicas e indivisibles, como botones, entradas de texto, etc.
2. **Moléculas (Molecules):** Combinaciones de átomos que forman componentes más complejos, como un campo de formulario con una etiqueta.
3. **Organismos (Organisms):** Conjuntos de moléculas y átomos que forman secciones o partes de una interfaz de usuario más grande, como un encabezado de página.
4. **Templates:** Estructuras que definen el diseño general de una página y contienen instancias de organismos.
5. **Páginas (Pages):** Instancias específicas de templates con contenido real.

La metodología de Atomic Design ayuda a los diseñadores y desarrolladores a crear interfaces de usuario de manera modular y escalable, promoviendo la reutilización de componentes y facilitando el mantenimiento a medida que los proyectos crecen.

### Estructura del componente

1. Átomo (Atom) - button-atom.html: Representa la unidad más básica, que es un botón simple.

```html
<!-- button-atom.html -->
<button class="button-atom">Click me</button>
```

2. Molécula (Molecule) - form-button-molecule.html: Combina átomos para formar una molécula más compleja, en este caso, un botón dentro de un formulario.

```html
<!-- form-button-molecule.html -->
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" />
  <button class="form-button-molecule">Submit</button>
</form>
```

3. Organismo (Organism) - header-organism.html: Combina átomos y moléculas para formar un organismo más grande, en este caso, un encabezado de página con un botón.

```html
<!-- header-organism.html -->
<header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <button class="header-button-organism">Sign In</button>
</header>
```

4. Template - default-template.html: Define la estructura general de una página utilizando instancias de organismos.

```html
<!-- default-template.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>My Website</title>
  </head>
  <body>
    <include src="header-organism.html"></include>
    <!-- Otras instancias de organismos o moléculas según sea necesario -->
    <script src="scripts.js"></script>
  </body>
</html>
```

> ✍️ Nota
>
> Este es solo un ejemplo básico para ilustrar cómo podrías estructurar componentes a través de los niveles de Atomic Design. La idea es que los átomos, moléculas y organismos se puedan combinar y reutilizar fácilmente para construir páginas más complejas.
