---
layout: ../../../../../layouts/herramientas/Terminal.astro
title: "Tipos de terminal"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Tipos de terminal</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Tipos de terminal](#tipos-de-terminal)
- [Terminales físicas vs. virtuales](#terminales-físicas-vs-virtuales)
  - [Terminales físicas (hardware)](#terminales-físicas-hardware)
  - [Terminales virtuales (emuladores)](#terminales-virtuales-emuladores)
- [Terminales basadas en texto vs. gráficas](#terminales-basadas-en-texto-vs-gráficas)
  - [Terminales de solo texto](#terminales-de-solo-texto)
  - [Terminales gráficas (emuladores)](#terminales-gráficas-emuladores)
- [Shells: el intérprete de comandos](#shells-el-intérprete-de-comandos)
- [Diferencias clave entre Bash, Zsh y PowerShell](#diferencias-clave-entre-bash-zsh-y-powershell)
  - [Bash vs. Zsh](#bash-vs-zsh)

</div>
</div>

## Tipos de terminal

Aunque comúnmente llamamos "terminal" a cualquier ventana de comandos, en realidad hay diferencias clave entre emuladores de terminal, shells y lenguajes de scripting.

## Terminales físicas vs. virtuales

### Terminales físicas (hardware)

Ejemplos históricos: VT100, IBM 3270.

- Se conectaban directamente a mainframes mediante cables seriales (RS-232).

- Hoy son obsoletas, reemplazadas por software.

### Terminales virtuales (emuladores)

Programas que simulan una terminal dentro de un entorno gráfico.

Ejemplos:

- **Linux:** gnome-terminal, konsole, terminator.

- **macOS:** Terminal.app, iTerm2 (más avanzado).

- **Windows:** cmd.exe, Windows Terminal (moderno), PowerShell ISE.

## Terminales basadas en texto vs. gráficas

### Terminales de solo texto

- Ejecutadas en modo consola (sin GUI), como la tty en Linux (Ctrl+Alt+F1-F6).

- Útiles para sistemas sin interfaz gráfica o en emergencias.

### Terminales gráficas (emuladores)

- Soporte para fuentes personalizadas, pestañas y splits (ej: Tmux).

## Shells: el intérprete de comandos

El shell es el programa que interpreta los comandos ingresados en la terminal. Los más populares son: Bash, Zsh, PowerShell.

<div class="only-mobile-warning">📵 Esta tabla solo está disponible en versión escritorio.</div>

| Shell                             | Sistema predeterminado    | Características principales            |
| --------------------------------- | ------------------------- | -------------------------------------- |
| Bash (Bourne-Again SHell)         | Linux, macOS (hasta 2019) | - Compatible con sh.                   |
|                                   |                           | - Historial de comandos (↑/↓).         |
|                                   |                           | - Scripting robusto.                   |
| Zsh (Z Shell)                     | macOS (desde 2019)        | - Autocompletado mejorado.             |
|                                   |                           | - Temas y plugins (Oh My Zsh).         |
|                                   |                           | - Corrección de errores.               |
| PowerShell                        | Windows (actual)          | - Orientado a objetos (no solo texto). |
|                                   |                           | - Integración con .NET.                |
|                                   |                           | - Cmdlets (Verb-Sustantivo).           |
| Fish (Friendly Interactive SHell) | Ninguno (alternativa)     | - Sintaxis amigable.                   |
|                                   |                           | - Autosugerencias en tiempo real.      |
|                                   |                           | - No compatible con Bash.              |

## Diferencias clave entre Bash, Zsh y PowerShell

### Bash vs. Zsh

Compatibilidad:

- Bash es el estándar en Linux y scripts antiguos.

- Zsh es retrocompatible pero añade mejoras (ej: globbing \*\* para búsquedas recursivas).

Experiencia de usuario:

- Zsh tiene autocompletado contextual (ej: sugiere flags como --help).

- Bash requiere plugins (como bash-completion).

Personalización:

- Zsh + Oh My Zsh permite temas y plugins (Git, Docker).

- Bash se personaliza manualmente (archivo ~/.bashrc).

</div>
