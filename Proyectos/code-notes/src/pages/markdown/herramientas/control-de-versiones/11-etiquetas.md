---
layout: ../../../../layouts/herramientas/Git.astro
title: "Etiquetas"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Etiquetas</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Que son las etiquetas?](#que-son-las-etiquetas)
- [Operaciones básicas](#operaciones-básicas)
  - [Crear Etiqueta](#crear-etiqueta)
  - [Listar Etiquetas](#listar-etiquetas)
  - [Añadir mensaje a las Etiquetas](#añadir-mensaje-a-las-etiquetas)
  - [Subir Etiqueta(Remoto)](#subir-etiquetaremoto)
  - [Eliminar Etiquetas(Local)](#eliminar-etiquetaslocal)
  - [Eliminar Etiquetas(Remoto)](#eliminar-etiquetasremoto)

</div>
</div>

## ¿Que son las etiquetas?

Las etiquetas son referencias estáticas a puntos específicos en la historia de un repositorio. A diferencia de las ramas, que son móviles y cambian a medida que se realizan nuevos commits, **las etiquetas son inmutables y se utilizan comúnmente para marcar versiones específicas de un proyecto.** Las etiquetas son útiles para indicar hitos importantes, como versiones de lanzamiento.

## Operaciones básicas

### Crear Etiqueta

Puedes crear una etiqueta utilizando el siguiente comando, donde `<nombre_etiqueta>` es el nombre que deseas asignar a la etiqueta y `<commit_id>` es el identificador del commit que deseas etiquetar.

```bash
git tag <nombre_etiqueta> <commit_id>

git tag v1.0
```

### Listar Etiquetas

```bash
#Esto muestra todas las etiquetas en el repositorio.
git tag

#Esto muestra la información detallada del commit al que apunta la etiqueta.
git show <nombre_etiqueta>
```

### Añadir mensaje a las Etiquetas

```bash
git tag -a v2.0 -m "Versión 2.0"
```

### Subir Etiqueta(Remoto)

```bash
git push origin <nombre_etiqueta>
```

### Eliminar Etiquetas(Local)

```bash
git tag -d <nombre_etiqueta>
```

### Eliminar Etiquetas(Remoto)

```bash
git push --delete origin <nombre_etiqueta>
```
