---
layout: ../../../../../layouts/herramientas/Terminal.astro
title: "Visualización de archivos"
block: "Comandos básicos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Visualización de archivos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Visualización de archivos](#visualización-de-archivos)
- [Comando cat (concatenar y mostrar)](#comando-cat-concatenar-y-mostrar)
- [Comando less (visualización interactiva)](#comando-less-visualización-interactiva)
- [Comandos head y tail (primeras/últimas líneas)](#comandos-head-y-tail-primerasúltimas-líneas)
  - [Head](#head)
  - [Tail](#tail)
- [Errores comunes](#errores-comunes)

</div>
</div>

## Visualización de archivos

Trabajar en la terminal implica manipular archivos de texto con frecuencia, usando herramientas como `cat`, `less`, `head` y `tail` esenciales para leer logs, scripts o documentos sin abrir editores gráficos.

## Comando cat (concatenar y mostrar)

Muestra el contenido completo de un archivo en la terminal.

```bash
cat [opciones] archivo
```

Opciones útiles

- `cat -n` Muestra números de línea.
- `cat -b` Numera solo líneas no vacías.

Bash

```bash
$ cat config.txt        # Muestra el contenido de config.txt
$ cat -n script.sh     # Muestra el script con números de línea

# Concatenar múltiples archivos:
$ cat archivo1.txt archivo2.txt > combinado.txt
```

> ✍️ Nota
>
> No es ideal para archivos muy grandes (usa `less` en su lugar).

## Comando less (visualización interactiva)

Muestra archivos página por página (scroll interactivo).

No carga todo el archivo en memoria (ideal para logs grandes).

```bash
less [opciones] archivo
```

Opciones útiles

- `Espacio` Avanza una página.
- `Enter` Avanza una línea.
- `b` Retrocede una página.
- `/texto` Busca "texto" (presiona n para siguiente).
- `q` Sale de less.

Bash

```bash
$ less /var/log/syslog  # Visualiza el archivo de sistema de forma paginada
```

## Comandos head y tail (primeras/últimas líneas)

### Head

Muestra las primeras 10 líneas por defecto.

```bash
head [opciones] archivo
```

Opciones útiles

- `head -n 20` Muestra las primeras 20 líneas.
- `head -f` Sigue el archivo en tiempo real (follow)

Bash

```bash
$ head acceso.log          # Muestra las primeras 10 líneas
$ head -n 5 config.yaml    # Muestra solo 5 líneas
```

### Tail

Muestra las últimas 10 líneas (útil para logs en tiempo real).

```bash
tail [opciones] archivo
```

Opciones útiles

- `tail -n 20` Muestra las últimas 20 líneas.
- `tail -f` Sigue el archivo en tiempo real (follow)

Bash

```bash
$ tail -n 15 error.log     # Últimas 15 líneas
$ tail -f /var/log/apache2/access.log  # Monitorea nuevos accesos al servidor web
```

## Errores comunes

- **cat:** archivo: No such file: Verifica la ruta y permisos.

- **less no permite editar:** Usa nano o vim si necesitas modificar.

</div>
