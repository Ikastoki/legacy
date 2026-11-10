---
layout: ../../../../../layouts/herramientas/Terminal.astro
title: "Propietario y grupo"
block: "Permisos y Propiedades"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Propietario y grupo</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Propietario y grupo](#propietario-y-grupo)
- [Comando chown (change owner)](#comando-chown-change-owner)
- [Comando chgrp (change group)](#comando-chgrp-change-group)
- [Comando usermod (modificar usuario)](#comando-usermod-modificar-usuario)

</div>
</div>

## Propietario y grupo

En sistemas Unix/Linux, cada archivo y directorio tiene un propietario (usuario) y un grupo asignado, que determinan quién puede acceder o modificarlos.

> ✍️ Nota
>
> Requiere permisos de root (por eso se usa sudo).
><br><br>
> El usuario debe existir en el sistema (/etc/passwd).

## Comando chown (change owner)

Cambia el usuario propietario de un archivo o directorio.

```bash
chown [opciones] nuevo_propietario archivo_o_directorio
```

Opciones comunes

- `-R` Cambia recursivamente (para directorios).
- `-v` Muestra los cambios realizados (verbose).

```bash
# Cambiar propietario de un archivo
sudo chown juan informe.txt

# Cambiar propietario de un directorio y su contenido (recursivo)
sudo chown -R juan /var/mi_proyecto

# Cambiar propietario y grupo al mismo tiempo (usuario:grupo)
sudo chown juan:developers script.sh
```

## Comando chgrp (change group)

Cambia el grupo asignado (sin modificar el propietario).

```bash
chgrp [opciones] nuevo_grupo archivo_o_directorio

# Cambiar grupo de un archivo
sudo chgrp developers app.py

# Cambio recursivo en un directorio
sudo chgrp -R www-data /var/www/html
```

> ✍️ Nota
>
> El grupo debe existir (/etc/group).
> <br><br>
> Alternativamente, puedes usar chown :grupo para cambiar solo el grupo.

## Comando usermod (modificar usuario)

Añade un usuario a un grupo (requiere aplicar cambios con `chown`/`chgrp` después).

```bash
# -aG: Añade al grupo sin quitar otros
sudo usermod -aG grupo usuario

# Añadir el usuario "juan" al grupo "developers"
sudo usermod -aG developers juan

# Ver grupos de un usuario
groups juan
```

</div>
