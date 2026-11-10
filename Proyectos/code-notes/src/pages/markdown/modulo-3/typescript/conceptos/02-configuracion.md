---
layout: ../../../../../layouts/modulo-3/Typescript.astro
title: "Configuración"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">JavaScript</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Archivo tsconfig.json](#archivo-tsconfigjson)
- [Transpilación y watch](#transpilación-y-watch)
- [Ejemplo de Estructura de Proyecto](#ejemplo-de-estructura-de-proyecto)

</div>
</div>

## Archivo tsconfig.json

Este archivo es el corazón de la configuración de TypeScript. Se encuentra en la raíz de tu proyecto y le dice al compilador de TypeScript (tsc) cómo debe transpolar tus archivos.

Puedes generar un archivo tsconfig.json por defecto con el siguiente comando:

```bash
tsc --init
```

Esto creará un archivo con muchas opciones comentadas. A continuación, te presento las propiedades más importantes que debes conocer

- `"target"`: Define la versión de JavaScript a la que se transpilará tu código. Por ejemplo, "es2015" o "es5".

- `"module"`: Especifica el sistema de módulos que se usará. Por ejemplo, "commonjs" para Node.js o "esnext" para el desarrollo moderno.

- `"outDir"`: Indica el directorio donde se guardarán los archivos JavaScript transpildos. Por ejemplo, "./dist".

- `"rootDir"`: Especifica el directorio raíz de tu código fuente TypeScript. Por ejemplo, "./src".

- `"include"`: Un array de patrones que le dice al compilador qué archivos .ts debe incluir.

- `"exclude"`: Un array de patrones que le dice al compilador qué archivos debe ignorar, como node_modules o archivos de pruebas.

- `"strict"`: Si se establece en true, activa un conjunto de estrictas reglas de verificación de tipos que te ayudan a escribir un código más robusto. Es muy recomendable activarlo.

## Transpilación y watch

El compilador de TypeScript, tsc, puede transpolar tus archivos de varias maneras.

- Transpilación manual: Para transpolar una vez todos tus archivos TypeScript a JavaScript, simplemente ejecuta:

  ```bash
  tsc
  ```

  Si has definido "outDir" en tu tsconfig.json, los archivos generados se guardarán en ese directorio.

- Modo watch: Para evitar tener que ejecutar tsc cada vez que haces un cambio, puedes usar el modo watch. Este modo se mantiene a la escucha de los cambios en tus archivos .ts y transpila automáticamente cuando detecta una modificación.

  ```bash
  tsc --watch
  ```

  Esto es ideal para el desarrollo, ya que te permite ver los errores de tipo en tiempo real sin tener que volver a compilar.

## Ejemplo de Estructura de Proyecto

Una estructura de proyecto típica con TypeScript sería la siguiente:

```
/mi-proyecto
|-- node_modules/
|-- src/                    # Código fuente en TypeScript
|   |-- app.ts
|   |-- interfaces.ts
|-- dist/                   # Código transpildos en JavaScript (no subir a git)
|   |-- app.js
|   |-- interfaces.js
|-- tsconfig.json
|-- package.json
```

En esta estructura, tsc toma los archivos de src/ y los transpila a dist/.
