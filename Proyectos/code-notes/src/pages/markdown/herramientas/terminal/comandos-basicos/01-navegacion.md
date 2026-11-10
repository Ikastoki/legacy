---
layout: ../../../../../layouts/herramientas/Terminal.astro
title: "Navegación"
block: "Comandos básicos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Navegación</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Navegación](#navegación)
- [Comando pwd (print working directory)](#comando-pwd-print-working-directory)
- [Comando cd (change directory)](#comando-cd-change-directory)
- [Comando ls (List) y dir (Windows)](#comando-ls-list-y-dir-windows)
- [Trucos básicos](#trucos-básicos)
  - [Autocompletado con Tab](#autocompletado-con-tab)
  - [Búsqueda rápida con ls + patrones](#búsqueda-rápida-con-ls--patrones)
  - [Atajos en Bash/Zsh](#atajos-en-bashzsh)
- [Errores comunes](#errores-comunes)

</div>
</div>

## Navegación

Uno de los primeros pasos para dominar la terminal es aprender a moverse entre directorios y listar archivos.

- **Linux/macOS:** `cd`, `ls`, `pwd`

- **Windows (CMD):** `cd`, `dir`, `chdir`

## Comando pwd (print working directory)

Muestra la ruta absoluta del directorio actual.

Bash

```bash
$ pwd /home/usuario/proyectos
```

En Windows (CMD), el equivalente es `cd` sin argumentos:

```cmd
C:\> cd
```

## Comando cd (change directory)

Cambia el directorio de trabajo.

<div class="only-mobile-warning">📵 Esta tabla solo está disponible en versión escritorio.</div>

| Comando           | Acción                                    |
| ----------------- | ----------------------------------------- |
| cd /ruta/absoluta | Ir a una ruta absoluta (desde la raíz /). |
| cd directorio     | Entrar a un subdirectorio (relativo).     |
| cd ..             | Subir un nivel (directorio padre).        |
| cd ~ o cd         | Ir al directorio home (/home/usuario).    |
| cd -              | Volver al directorio anterior.            |

Bash

```bash
$ cd /var/www/html  # Ruta absoluta

$ cd ../css         # Relativo: sube a /var/www y entra a /css
```

CMD

```cmd
C:\> cd \Windows\System32  # Ruta absoluta

C:\Windows\System32> cd ..\Drivers  # Relativo: sube a \Windows y entra a \Drivers
```

## Comando ls (List) y dir (Windows)

Lista archivos y directorios en la ubicación actual.

<div class="only-mobile-warning">📵 Esta tabla solo está disponible en versión escritorio.</div>

| Opción | Significado                                  |
| ------ | -------------------------------------------- |
| ls -l  | Listado en formato largo (permisos, tamaño). |
| ls -a  | Muestra archivos ocultos (.).                |
| ls -h  | Tamaños legibles (KB, MB).                   |
| ls -t  | Ordena por fecha de modificación.            |

Bash

```bash
$ ls -la /home

drwxr-xr-x 5 usuario usuario 4096 Feb 20 10:15 .
drwxr-xr-x 3 root    root    4096 Jan 15 09:00 ..
-rw------- 1 usuario usuario  220 Jan 15 09:00 .bash_logout
```

CMD

```cmd
C:\> dir          # Lista simple
C:\> dir /A       # Muestra archivos ocultos
C:\> dir /O:D     # Ordena por fecha
```

## Trucos básicos

### Autocompletado con Tab

Al escribir `cd /u[TAB]`, se autocompleta a `/usr/`.

Si hay múltiples opciones, presiona Tab dos veces para verlas.

### Búsqueda rápida con ls + patrones

Bash

```bash
$ ls *.txt       # Lista todos los archivos .txt
$ ls D*          # Lista lo que empiece con "D"
```

### Atajos en Bash/Zsh

Bash

```bash
$ cd /var/log && ls -l  # Cambia de directorio y lista en un solo comando
```

## Errores comunes

- **cd:** No such file or directory: La ruta no existe (verifica mayúsculas y rutas relativas).

- **ls:** cannot open directory: No tienes permisos (usa sudo ls si es necesario).

- **Windows:** dir no muestra archivos ocultos por defecto (usa /A).

</div>
