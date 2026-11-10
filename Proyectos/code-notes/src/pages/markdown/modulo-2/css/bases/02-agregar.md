---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Agregar CSS"
block: "Bases"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Agregar CSS</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [CSS interno](#css-interno)
- [CSS externo](#css-externo)
- [CSS en linea(inline)](#css-en-lineainline)
- [Importar](#importar)
  - [@import \& link](#import--link)

</div>
</div>

## CSS interno

El CSS interno se agrega en la sección del `<head>` de un documento HTML.

Al añadir el CSS en la misma página que el HTML no necesita cargar varios archivos. Pero aumenta el tamaño del HTML y puede ralentizar las cargas.

**Ejemplo:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- Añadir CSS interno -->
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Título de la Página</h1>
  </body>
</html>
```

## CSS externo

El CSS externo es un documento que se tiene que enlazar en la sección del `<head>` de un documento HTML.
Este método es el mas usado, permite una mayor organización.

Sintaxis:

```html
<link rel="stylesheet" href="ruta/del/archivo/CSS" />
```

Arquitectura de directorios:

- index.html
- CSS
  - style.css

**Ejemplo:**

```html
<!-- Archivo HTML -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="CSS/style.css" />
  </head>
  <body>
    <h1>Título de la Página</h1>
  </body>
</html>
```

```css
/* Archivo CSS */
h1 {
  color: red;
}
```

## CSS en linea(inline)

El CSS en linea se aplica directamente en el elemento HTML mediante el uso del atributo `style=""`

Sintaxis:

```html
<h1 style="color: red">Título de la Página</h1>
```

## Importar

Mediante el uso de **@import** se puede incluir una hoja de estilos externa en un archivo CSS.

Sintaxis:

```css
@import url("ruta/al/archivo.css");
```

Sintaxis:

```css
@import "ruta/al/archivo";
```

### @import & link

La diferencia entre @import y link es que @import es el mecanismo de CSS para incluir una hoja de estilo externa, mientras que link es el mecanismo de HTML.

**Algunas diferencias son:**

- link se carga en paralelo con el resto de la página, mientras que @import se carga de forma secuencial, lo que puede retrasar la carga de la página.
- link permite especificar atributos como rel, type o media, mientras que @import solo permite especificar el media query.
- link es compatible con todos los navegadores, mientras que @import no funciona en algunos navegadores antiguos.

</div>
