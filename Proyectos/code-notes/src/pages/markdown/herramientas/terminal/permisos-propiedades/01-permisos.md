---
layout: ../../../../../layouts/herramientas/Terminal.astro
title: "Permisos"
block: "Permisos y Propiedades"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Permisos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Permisos](#permisos)
- [Tipos de permisos y su notación](#tipos-de-permisos-y-su-notación)
  - [Permisos básicos (para cada categoría)](#permisos-básicos-para-cada-categoría)
  - [Categorías de usuarios](#categorías-de-usuarios)
- [Notación numérica (octal)](#notación-numérica-octal)
- [Comando chmod (cambiar permisos)](#comando-chmod-cambiar-permisos)
  - [Métodos para asignar permisos](#métodos-para-asignar-permisos)
- [Errores comunes](#errores-comunes)
- [Caso práctico: configurar un proyecto web](#caso-práctico-configurar-un-proyecto-web)

</div>
</div>

## Permisos

Los permisos son el mecanismo de seguridad fundamental en sistemas Unix/Linux que controlan qué usuarios pueden leer, modificar o ejecutar archivos y directorios.

## Tipos de permisos y su notación

### Permisos básicos (para cada categoría)

- `r` (read) Lectura
- `w` (write) Escritura
- `x` (execute) Ejecución

### Categorías de usuarios

Cada archivo/directorio tiene permisos para 3 roles:

- Usuario propietario `(u)`

- Grupo asignado `(g)`

- Otros usuarios `(o)`

Ejemplo visual con ls -l:

```bash
-rwxr-xr-- 1 usuario developers 1024 Feb 20 10:00 script.sh
```

- **-rwxr-xr--:** Los primeros 10 caracteres muestran permisos.

  - **Primer carácter:** Tipo (`-` = archivo, `d` = directorio).

  - **Tripletas siguientes:** `rwx` (usuario), `r-x` (grupo), `r--` (otros).

## Notación numérica (octal)

Cada permiso se representa con un valor numérico:

- r = 4

- w = 2

- x = 1

Ejemplos de combinaciones:

- `rwx` 4+2+1 = 7 7

- `r-x` 4+0+1 = 5 5

- `--x` 0+0+1 = 1 1

Permisos típicos:

- `755` (ejecutables): `rwxr-xr-x`

- `644` (archivos normales): `rw-r--r--`

- `700` (privado solo para el dueño): `rwx------`

## Comando chmod (cambiar permisos)

```bash
chmod [opciones] permisos archivo_o_directorio
```

### Métodos para asignar permisos

Notación simbólica (usuarios+permisos)

```bash
chmod [ugoa][+-=][rwx] archivo
```

Operadores:

- `+` Añade permisos.

- `-` Quita permisos.

- `=` Asigna permisos exactos.

```bash
chmod u+x script.sh       # Añade ejecución al dueño
chmod g-w documentos/     # Quita escritura al grupo
chmod o=r-- config.cfg    # Otros solo pueden leer
chmod a+w log.txt         # Todos (+a) pueden escribir
```

Notación octal (recomendada para sets completos)

```bash
chmod 755 script.sh       # rwxr-xr-x
chmod 640 secretos.txt    # rw-r-----
```

## Errores comunes

- **Evitar 777:** Dar todos los permisos a todos es un riesgo de seguridad.

- **Directorios vs archivos:** Los directorios necesitan x para ser accesibles (incluso si tienen r).

## Caso práctico: configurar un proyecto web

```bash
chmod 755 /var/www/html/      # Dueño: rwx, Grupo/Otros: r-x
chmod 644 /var/www/html/*.html # Archivos HTML solo editables por dueño
find /var/www/ -type d -exec chmod 755 {} \;  # Aplicar a todos los directorios
find /var/www/ -type f -exec chmod 644 {} \;  # Aplicar a todos los archivos
```

</div>
