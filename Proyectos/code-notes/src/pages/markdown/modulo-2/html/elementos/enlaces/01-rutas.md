---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Rutas"
block: "Enlaces"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Rutas</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Rutas](#rutas)
- [Rutas absolutas](#rutas-absolutas)
- [Rutas relativas](#rutas-relativas)
  - [Relativa a la ubicación actual](#relativa-a-la-ubicación-actual)
  - [Relativa al nivel superior](#relativa-al-nivel-superior)
  - [En el mismo directorio](#en-el-mismo-directorio)
  - [Ruta desde la raíz del servidor](#ruta-desde-la-raíz-del-servidor)
  - [Ruta desde la raíz del servidor](#ruta-desde-la-raíz-del-servidor-1)
  - [Rutas vacías ("")](#rutas-vacías-)
- [Buenas prácticas](#buenas-prácticas)

</div>
</div>

## Rutas

Antes de explicar el funcionamiento de los enlaces y sus tipos es importante saber como funcionan las rutas. **Las rutas especifican la dirección en la que se encuentran ubicados los archivos**.
Existen dos tipos de rutas:

- **Rutas Absolutas:** Las rutas absolutas indican todas las carpetas que hay entre el tipo de enlace `http:`(Protocolo de transferencia de hipertexto) hasta el archivo que queremos.
  - `tipo-de-enlace://dominio/directorio/archivo.html`
  - `http://www.midomino.com/informacion/contactos.html`
- **Rutas Relativas:** Las rutas relativas no necesitan la ubicación completa.
  - ./ Ruta actual.
  - / Desde la raíz.
  - ../ Moverse a un nivel superior(Ir hacia atrás).
  - imagen.png si solo esta el nombre + la extension significa que se encuentra en el mismo directorio.

## Rutas absolutas

Una ruta absoluta especifica una ubicación completa, incluyendo el protocolo (como http://, https://), el dominio y la ruta completa del archivo en el servidor. Estas rutas son independientes de la ubicación del archivo HTML.

```html
<img src="https://www.ejemplo.com/imagenes/logo.png" alt="Logo de Ejemplo" />
```

En este caso, la ruta incluye el protocolo https://, el dominio www.ejemplo.com y la ruta completa al archivo de imagen (/imagenes/logo.png).

- **Ventaja:** Las rutas absolutas funcionan en cualquier parte, ya que siempre apuntan a la misma ubicación sin importar dónde esté el archivo HTML.
- **Desventaja:** Si el dominio o la ubicación del recurso cambia, todas las rutas absolutas deben ser actualizadas.

## Rutas relativas

Una ruta relativa describe la ubicación de un archivo en relación con el archivo HTML actual. No incluye el dominio completo, lo que la hace flexible y adaptable a diferentes entornos, como cuando se mueve un proyecto de un entorno de desarrollo a producción.

### Relativa a la ubicación actual

La ruta se basa en la ubicación del archivo HTML que la referencia.

```html
<img src="imagenes/logo.png" alt="Logo de Ejemplo" />
```

### Relativa al nivel superior

Utiliza ../ para subir al directorio superior.

```html
<a href="../index.html">Volver a la página principal</a>
```

### En el mismo directorio

Si el archivo está en el mismo directorio que el archivo HTML, se utiliza directamente el nombre del archivo.

```html
<link rel="stylesheet" href="estilos.css" />
```

### Ruta desde la raíz del servidor

Comienza con una barra /, que indica que la ruta se basa en la raíz del servidor.

```html
<link rel="stylesheet" href="estilos.css" />
```

### Ruta desde la raíz del servidor

Comienza con una barra /, que indica que la ruta se basa en la raíz del servidor.

```html
<img src="/assets/imagenes/logo.png" alt="Logo desde la raíz" />
```

### Rutas vacías ("")

Se refiere al mismo documento o a una sección del documento actual. Es común en enlaces que apuntan a secciones del mismo documento usando anclas (#).

```html
<a href="#seccion1">Ir a la Sección 1</a>
```

## Buenas prácticas

- **Organización de archivos:** Mantener una estructura lógica y organizada de archivos y carpetas ayuda a mantener rutas claras y fáciles de manejar.

- **Rutas relativas vs. absolutas:** Usar rutas relativas para archivos dentro de tu proyecto es una buena práctica, ya que facilita la portabilidad entre diferentes entornos (desarrollo y producción). Las rutas absolutas son útiles cuando se hace referencia a recursos externos (como imágenes o bibliotecas alojadas en otro servidor).

- **Cuidado con las mayúsculas y minúsculas:** En algunos servidores, como los que usan Linux, las rutas son sensibles a las mayúsculas y minúsculas. Por lo tanto, asegúrate de que las rutas coincidan exactamente con los nombres de los archivos.

</div>
