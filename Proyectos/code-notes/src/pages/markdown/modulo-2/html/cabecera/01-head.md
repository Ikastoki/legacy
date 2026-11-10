---
layout: ../../../../../layouts/modulo-2/HTML.astro
title: "Head"
block: "Cabecera"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Head</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué hay en el Head?](#qué-hay-en-el-head)
- [Orden de los elementos](#orden-de-los-elementos)
- [Ejemplo básico](#ejemplo-básico)

</div>
</div>

## ¿Qué hay en el Head?

Dentro del elemento `<head>` se guardan la información y los metadatos que **no se muestran directamente en la página web.** Aunque estos datos no se muestren son fundamentales para el funcionamiento de la web.

**Elementos más comunes dentro del `<head>`:**

- `<meta>`: Establece un metadato específico en el documento actual.
- `<title>`: Indica el título de la página.
- `<link>`: Establece una relación del documento actual con otro externo.
- `<style>`: Crea estilos CSS que afectarán únicamente al documento actual.
- `<script>`: Indica un script a cargar o ejecutar en la página actual.
- `<noscript>`: Proporcionar contenido alternativo o instrucciones a los usuarios que tienen deshabilitado o no admiten JavaScript en sus navegadores.
- `<base>`: URL base de los enlaces (usado para gestionar rutas relativas).

## Orden de los elementos

El orden y la inclusión de estos elementos pueden variar según el proyecto y las necesidades específicas. Sin embargo, es importante que elementos críticos y las hojas de estilo se coloquen de manera que se carguen temprano en el proceso de carga de la página y sean fundamentales para la representación adecuada del contenido.

Orden "típico":

1. `<meta charset="UTF-8">`: Para garantizar que los caracteres se interpreten correctamente.
2. `<meta name="viewport"`: Para optimizar los sitios para móviles.
3. `<title>`: El titulo, importante para el SEO y la identificación de la página.
4. `<meta>`: Metainformación adicional.
5. `<link>`: Enlaces externos.
6. `<style>`: Estilos de CSS.
7. `<script>`: Archivos JavaScript.

## Ejemplo básico

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Descripción de la página" />
    <meta name="keywords" content="HTML, CSS, JavaScript" />
    <meta name="author" content="Nombre del autor" />
    <title>Título de la Página</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hola, mundo!</h1>
  </body>
</html>
```

</div>
