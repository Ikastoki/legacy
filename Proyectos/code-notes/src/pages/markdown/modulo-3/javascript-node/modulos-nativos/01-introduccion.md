---
layout: ../../../../../layouts/modulo-3/JS-Node.astro
title: "Módulos Nativos"
block: "Módulos Nativos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Módulos Nativos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué son los Módulos Nativos?](#qué-son-los-módulos-nativos)
- [Tipos de Módulos Nativos](#tipos-de-módulos-nativos)

</div>
</div>

## ¿Qué son los Módulos Nativos?

Los módulos nativos, también conocidos como módulos del núcleo (o "core modules"), son bibliotecas que vienen integradas en la instalación de Node.js. No necesitas instalarlos con npm, simplemente están ahí, listos para ser usados. Estos módulos proporcionan la funcionalidad básica y esencial para construir aplicaciones del lado del servidor, como la gestión de archivos, el manejo de peticiones HTTP, el acceso al sistema operativo, etc.

Para usarlos, simplemente los importas en tu código con require() (CommonJS) o import (ES6).

```javascript
// Usando CommonJS (la forma más común en Node.js)
const http = require("node:http");

// Usando ES6 Modules (si tu proyecto está configurado para ello)
import { createServer } from "http";
```

## Tipos de Módulos Nativos

Los módulos nativos cubren una amplia gama de funcionalidades. Los más importantes son:

- `fs` (File System): Para interactuar con el sistema de archivos del servidor. Te permite leer, escribir, eliminar y modificar archivos y directorios.

- `http`: Para crear servidores web y manejar peticiones y respuestas HTTP. Es la base para cualquier aplicación web en Node.js.

- `path`: Para trabajar con rutas de archivos y directorios de manera segura y multiplataforma.

- `os` (Operating System): Para obtener información sobre el sistema operativo en el que se está ejecutando el programa.

- `url`: Para analizar y resolver URLs.
