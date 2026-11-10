---
layout: ../../../../../layouts/herramientas/Terminal.astro
title: "Editores de texto"
block: "Comandos básicos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Editores de texto</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Editores de texto](#editores-de-texto)
- [Nano](#nano)
  - [Comandos básicos](#comandos-básicos)
- [Gedit](#gedit)
  - [Atajos útiles](#atajos-útiles)

</div>
</div>

## Editores de texto

Trabajar en la terminal a menudo requiere editar archivos de configuración, scripts o documentos.

## Nano

Editor básico y fácil de usar, ideal para usuarios que inician en la terminal.

Instalación (si no está incluido)

```bash
sudo apt install nano    # Debian/Ubuntu
sudo dnf install nano   # RedHat/CentOS
```

### Comandos básicos

- Abrir un archivo `nano archivo.txt`
- Guardar `Ctrl + O (Enter para confirmar)`
- Salir `Ctrl + X`
- Buscar texto `Ctrl + W`
- Cortar línea `Ctrl + K`
- Pegar `Ctrl + U`
- Habilitar numeración `Alt + Shift + 3`

## Gedit

Editor GTK+ con interfaz gráfica, útil para usuarios que prefieren GUI pero trabajan en terminal.

```bash
gedit archivo.txt
```

### Atajos útiles

- Guardar `Ctrl + S`
- Buscar `Ctrl + F`
- Ir a línea `Ctrl + I`

</div>
