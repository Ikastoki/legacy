---
layout: ../../../../../layouts/herramientas/Terminal.astro
title: "Gestión de archivos"
block: "Comandos básicos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Gestión de archivos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Gestión de archivos](#gestión-de-archivos)
- [Creación de directorios (mkdir)](#creación-de-directorios-mkdir)
- [Creación de archivos (touch)](#creación-de-archivos-touch)
- [Copiar archivos/directorios (cp)](#copiar-archivosdirectorios-cp)
- [Mover/renombrar archivos (mv)](#moverrenombrar-archivos-mv)
- [Eliminar archivos/directorios (rm)](#eliminar-archivosdirectorios-rm)
- [Combinación de comandos](#combinación-de-comandos)
- [Errores comunes](#errores-comunes)

</div>
</div>

## Gestión de archivos

Una vez dominada la navegación, el siguiente paso es aprender a crear, copiar, mover y eliminar archivos y directorios. Estos comandos son esenciales para organizar proyectos, scripts y configuraciones en la terminal.

## Creación de directorios (mkdir)

Crea un nuevo directorio.

```bash
mkdir [opciones] nombre_directorio
```

Opciones útiles

- `mkdir -p` Crea directorios padres si no existen.
- `mkdir -v` Muestra un mensaje de confirmación.

Bash

```bash
$ mkdir proyectos              # Crea un directorio llamado "proyectos"
$ mkdir -p proyectos/web/css  # Crea la estructura completa (web/css dentro de proyectos)
```

CMD

```cmd
C:\> mkdir proyectos
```

## Creación de archivos (touch)

Crea un archivo vacío o actualiza su fecha de modificación.

```bash
touch nombre_archivo
```

Bash

```bash
$ touch index.html           # Crea index.html
$ touch app.js styles.css    # Crea múltiples archivos
```

CMD

```cmd
type nul > archivo.txt.
```

PowerShell

```powershell
New-Item -Name archivo.txt -ItemType File
```

## Copiar archivos/directorios (cp)

Copia archivos o directorios a una ubicación destino.

```bash
cp [opciones] origen destino
```

Opciones útiles

- `cp -r` Copia directorios recursivamente.
- `cp -i` Pide confirmación antes de sobrescribir.
- `cp -v` Muestra detalles de lo copiado.

Bash

```bash
$ cp informe.txt backups/          # Copia el archivo a la carpeta backups
$ cp -r img/ proyecto_final/       # Copia todo el directorio img/
```

CMD

```cmd
C:\> copy origen.txt destino.txt
C:\> xcopy /E /I carpeta_origen carpeta_destino  # Para directorios
```

## Mover/renombrar archivos (mv)

Mueve archivos o los renombra.

```bash
mv [opciones] origen destino
```

Bash

```bash
# Mover
$ mv documento.txt /backups/

# Renombrar
$ mv viejo.txt nuevo.txt
```

CMD

```cmd
C:\> move viejo.txt nuevo.txt
```

## Eliminar archivos/directorios (rm)

Elimina archivos o directorios. ¡Usar con cuidado!

```bash
rm [opciones] archivo_o_directorio
```

Opciones útiles

- `rm -r` Elimina directorios y su contenido.
- `rm -f` Fuerza la eliminación (sin confirmación).
- `rm -i` Pide confirmación antes de borrar.

Bash

```bash
$ rm archivo.tmp              # Elimina un archivo
$ rm -r carpeta_basura/       # Elimina un directorio y todo su contenido
```

CMD

```cmd
C:\> del archivo.txt          # Elimina archivos
C:\> rmdir /S /Q carpeta      # Elimina directorios (/S: recursivo, /Q: sin confirmar)
```

## Combinación de comandos

Crear y entrar a un directorio:

```bash
$ mkdir nuevo_proyecto && cd nuevo_proyecto
```

Copiar todos los archivos .txt a otro directorio:

```bash
$ cp *.txt /backups/
```

## Errores comunes

- **rm:** cannot remove 'dir': Is a directory: Usa rm -r para directorios.

- **cp:** omitting directory: Usa cp -r para copiar directorios.

- **Permisos denegados:** Usa sudo si es necesario (ej: sudo rm -r /dir_protegido).

</div>
