---
layout: ../../../../../layouts/herramientas/Terminal.astro
title: "Búsqueda de archivos"
block: "Comandos básicos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Búsqueda de archivos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Búsqueda de archivos](#búsqueda-de-archivos)
- [Comando find (búsqueda de archivos por atributos)](#comando-find-búsqueda-de-archivos-por-atributos)
- [Comando grep (búsqueda de contenido dentro de archivos)](#comando-grep-búsqueda-de-contenido-dentro-de-archivos)
- [Comando locate (búsqueda rápida en una base de datos)](#comando-locate-búsqueda-rápida-en-una-base-de-datos)
- [Diferencias clave: find vs grep vs locate](#diferencias-clave-find-vs-grep-vs-locate)

</div>
</div>

## Búsqueda de archivos

En sistemas con miles de archivos, encontrar lo que necesitas rápidamente es crucial.

## Comando find (búsqueda de archivos por atributos)

Busca archivos/directorios en una jerarquía según nombre, tamaño, fecha, permisos y más.

```bash
find [ruta] [expresión_de_búsqueda]
```

Opciones

- `Nombre` Archivos .txt en /home. `find /home -name "*.txt"`
- `Tamaño` Archivos >10MB en /var. `find /var -size +10M`
- `Fecha modificación` Archivos modificados en los últimos 7 días. `find / -mtime -7`
- `Permisos` Archivos con permisos 644. `find /etc -perm 644`
- `Tipo` Solo directorios en el home. `find ~ -type d`
- `Ejecutar acción` Elimina todos los .tmp en /tmp. `find /tmp -name "*.tmp" -exec rm {} \;`

Opciones útiles

- **-iname:** Búsqueda sin distinguir mayúsculas/minúsculas.

- **-maxdepth 2:** Limita la profundidad de búsqueda.

- **-user root:** Archivos propiedad de root.

Ejemplo combinado:

```bash
find /var/log -name "*.log" -size +1M -mtime +30 -exec gzip {} \;
```

(Comprime logs >1MB y más viejos de 30 días).

## Comando grep (búsqueda de contenido dentro de archivos)

Busca patrones de texto dentro de archivos (o entrada estándar).

```bash
grep [opciones] "patrón" [archivo(s)]
```

Opciones

- `-r` Búsqueda recursiva en directorios. `grep -r "ERROR" /var/log/`
- `-i` Ignora mayúsculas/minúsculas. `grep -i "warning" sistema.log`
- `-v` Invierte la búsqueda (líneas que no coinciden). `grep -v "#" config.cfg`
- `-A 3` Muestra 3 líneas después del match. `grep -A 3 "Exception" error.log`
- `-B 2` Muestra 2 líneas antes del match. `grep -B 2 "FAILED" test_results.txt`
- `-C 1` Muestra 1 línea alrededor del match. `grep -C 1 "panic" kernel.log`
- `-E` Usa expresiones regulares (regex). `grep -E "^[0-9]{3}-[A-Z]+" datos.txt`

Buscar en múltiples archivos:

```bash
grep "404" /var/log/nginx/*.log
```

Combinar con find:

```bash
find /etc -type f -exec grep -l "127.0.0.1" {} \;
```

## Comando locate (búsqueda rápida en una base de datos)

Busca archivos usando una base de datos preindexada (más rápido que find, pero menos actualizada). No busca por tamaño, permisos o contenido.

```bash
locate [opciones] "patrón"

$ locate "*.jpg"          # Todos los archivos `.jpg` en el sistema
$ locate -i "Documento"   # Búsqueda sin distinguir mayúsculas
```

Actualizar la base de datos

```bash
sudo updatedb
```

(Necesario si se agregaron archivos recientemente).

## Diferencias clave: find vs grep vs locate

<div class="only-mobile-warning">📵 Esta tabla solo está disponible en versión escritorio.</div>

| Comando | Propósito                    | Velocidad          | Tipo de Operación |
| ------- | ---------------------------- | ------------------ | ----------------- |
| find    | Nombre, tamaño, fecha, etc.  | Lenta              | Tiempo real       |
| grep    | Contenido dentro de archivos | Depende del tamaño | Tiempo real       |
| locate  | Nombre (en base de datos)    | Muy rápida         | Requiere updatedb |

</div>
