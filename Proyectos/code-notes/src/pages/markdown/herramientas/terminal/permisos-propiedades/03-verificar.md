---
layout: ../../../../../layouts/herramientas/Terminal.astro
title: "Verificación"
block: "Permisos y Propiedades"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Verificación de permisos, propietarios y grupos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Verificación de permisos, propietarios y grupos](#verificación-de-permisos-propietarios-y-grupos)
- [Comando ls -l: visualización detallada](#comando-ls--l-visualización-detallada)
  - [Interpretación de permisos en ls -l](#interpretación-de-permisos-en-ls--l)
- [Comando stat: información avanzada](#comando-stat-información-avanzada)
- [Comando id: ver grupos de un usuario](#comando-id-ver-grupos-de-un-usuario)
- [Combinación práctica de comandos](#combinación-práctica-de-comandos)

</div>
</div>

## Verificación de permisos, propietarios y grupos

Antes de modificar permisos o propietarios, es crucial verificar la configuración actual de archivos y directorios

## Comando ls -l: visualización detallada

```bash
ls -l [archivo_o_directorio]

-rwxr-xr-- 1 usuario developers 2048 Feb 20 10:00 script.sh
```

- Tipo y permisos `-rwxr-xr--`
- Número de enlaces `1`
- Propietario `usuario`
- Grupo `developers`
- Tamaño (bytes) `2048`
- Fecha de modificación `Feb 20 10:00`
- Nombre `script.sh`

### Interpretación de permisos en ls -l

```bash
- rwx r-x r--
↑ ↑↑↑ ↑↑↑ ↑↑↑
|  |   |   |
|  |   |   └─ Permisos para "otros" (others)
|  |   └───── Permisos para el grupo (group)
|  └───────── Permisos para el propietario (user)
└──────────── Tipo de archivo
```

Tipos de archivo

- `-` Archivo regular
- `d` Directorio
- `l` Enlace simbólico
- `c` Dispositivo de caracteres
- `b` Dispositivo de bloques

Ejemplos de permisos

- `-rwx------:` Solo el propietario puede leer, escribir y ejecutar.

- `dr-xr-xr-x:` Directorio legible/ejecutable por todos, pero solo el dueño puede modificar.

- `-rw-rw-r--:` Archivo editable por dueño y grupo, otros solo pueden leer.

## Comando stat: información avanzada

Muestra metadatos detallados, incluyendo permisos numéricos.

```bash
stat [archivo_o_directorio]

# Salida
stat script.sh
  File: script.sh
  Size: 2048       Blocks: 8          IO Block: 4096   regular file
Access: (0754/-rwxr-xr--)  Uid: ( 1000/  usuario)   Gid: ( 1001/developers)
```

Claves importantes

- **Access:** Muestra permisos en formato octal (`0754`) y simbólico (`-rwxr-xr--`).

- **Uid/Gid:** ID numérico y nombre del usuario/grupo.

## Comando id: ver grupos de un usuario

Verifica a qué grupos pertenece el usuario actual o uno específico.

```bash
id [nombre_usuario]

$ id juan
uid=1000(juan) gid=1000(juan) groups=1000(juan),1001(developers),1002(docker)
```

Campos destacados

- **uid:** User ID y nombre.

- **gid:** Grupo primario.

- **groups:** Todos los grupos secundarios.

## Combinación práctica de comandos

Ver todos los archivos de un usuario

```bash
find / -user juan -ls 2>/dev/null
```

Ver archivos modificados recientemente con sus permisos

```bash
ls -lt | head -n 10
```

Verificar si un usuario tiene acceso a un archivo

```bash
# Paso 1: Ver grupos del usuario
id usuario

# Paso 2: Ver permisos del archivo
ls -l archivo.conf
```

</div>
