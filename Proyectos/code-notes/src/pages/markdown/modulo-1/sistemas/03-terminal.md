---
layout: ../../../../layouts/modulo-1/Sistemas.astro
title: "Terminal"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Introducción a la terminal</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Terminal](#terminal)
- [Funciones principales](#funciones-principales)
- [Comandos básicos de la terminal](#comandos-básicos-de-la-terminal)
- [Terminal en diferentes sistemas operativos](#terminal-en-diferentes-sistemas-operativos)
- [Ventajas](#ventajas)

</div>
</div>

## Terminal

La terminal, también conocida como línea de comandos o consola, es una interfaz de texto que permite a los usuarios interactuar directamente con el sistema operativo. A diferencia de las interfaces gráficas (GUI), que utilizan ventanas, iconos y menús, la terminal se basa en comandos de texto para ejecutar tareas. Aunque puede parecer intimidante al principio, la terminal es una herramienta poderosa que ofrece un control preciso y eficiente sobre el sistema.

La terminal es especialmente popular entre desarrolladores, administradores de sistemas y usuarios avanzados, ya que permite automatizar tareas, gestionar archivos y configurar el sistema de manera rápida y eficaz. Además, es una herramienta esencial en sistemas operativos como Linux y macOS, aunque también está disponible en Windows a través de herramientas como PowerShell o el Subsistema de Windows para Linux (WSL).

> ✍️ Nota
>
> Breve introducción a las terminales, la terminal es un tema amplio e importante y tiene su propio bloque en herramientas complementarias.

## Funciones principales

La terminal permite realizar una amplia variedad de tareas, entre las que se incluyen:

- **Gestión de Archivos y Directorios:**

  - Crear, mover, copiar y eliminar archivos y carpetas.

  - Ejemplo: En Linux, el comando `mkdir` crea un directorio, mientras que `rm` elimina archivos.

- **Instalación y Gestión de Software:**

  - Instalar, actualizar y desinstalar programas mediante comandos.

  - Ejemplo: En Ubuntu, el comando `sudo apt install nombre_del_programa` instala un software.

- **Administración del Sistema:**

  - Gestionar usuarios, permisos y servicios del sistema.

  - Ejemplo: El comando `sudo useradd nombre_usuario` crea un nuevo usuario en Linux.

- **Automatización de Tareas:**

  - Crear scripts (archivos de comandos) para ejecutar tareas repetitivas.

  - Ejemplo: Un script en Bash puede automatizar la copia de seguridad de archivos.

- **Diagnóstico y Monitoreo:**

  - Verificar el estado del sistema, como el uso de memoria o el rendimiento de la red.

  - Ejemplo: El comando `top` en Linux muestra los procesos en ejecución y el uso de recursos.

## Comandos básicos de la terminal

Aquí hay algunos comandos esenciales para comenzar a usar la terminal:

- **Navegación:**

  - **pwd:** Muestra la ruta del directorio actual.

  - **cd:** Cambia de directorio. Por ejemplo, `cd /home/usuario` te lleva a la carpeta del usuario.

  - **ls:** Lista los archivos y directorios en la ubicación actual.

- **Gestión de Archivos:**

  - **touch:** Crea un archivo vacío. Por ejemplo, `touch archivo.txt`.

  - **cp:** Copia archivos o directorios. Por ejemplo, `cp archivo.txt /ruta/destino`.

  - **mv:** Mueve o renombra archivos. Por ejemplo, `mv archivo.txt nuevo_nombre`.txt.

  - **rm:** Elimina archivos. Por ejemplo, `rm archivo.txt`.

- **Permisos:**

  - **chmod:** Cambia los permisos de un archivo o directorio. Por ejemplo, `chmod 755 archivo.sh`.

  - **chown:** Cambia el propietario de un archivo o directorio. Por ejemplo, `chown usuario:grupo archivo.txt`.

- **Redes:**

  - **ping:** Verifica la conectividad con un servidor. Por ejemplo, `ping google`.com.

  - **ssh:** Conecta a un servidor remoto. Por ejemplo, `ssh usuario@servidor`.

## Terminal en diferentes sistemas operativos

La terminal varía ligeramente según el sistema operativo:

- **Linux:**

  - La terminal en Linux suele utilizar el shell Bash (Bourne Again Shell).

  - Ejemplo: Abre una terminal y escribe bash para iniciar el shell.

- **macOS:**

  - macOS también utiliza Bash por defecto, aunque en versiones recientes ha adoptado Zsh (Z Shell).

  - Ejemplo: Abre la aplicación "Terminal" desde la carpeta de Utilidades.

- **Windows:**

  - Windows ofrece varias opciones, como Command Prompt (CMD), PowerShell y el Subsistema de Windows para Linux (WSL).

  - Ejemplo: Para usar WSL, instala una distribución de Linux desde la Microsoft Store y abre "Ubuntu" desde el menú de inicio.

## Ventajas

- **Eficiencia:** Permite realizar tareas complejas con unos pocos comandos.

- **Control:** Ofrece un mayor control sobre el sistema operativo y sus funciones.

- **Automatización:** Facilita la creación de scripts para automatizar tareas repetitivas.

- **Acceso Remoto:** Es esencial para administrar servidores y sistemas remotos mediante SSH.

</div>
