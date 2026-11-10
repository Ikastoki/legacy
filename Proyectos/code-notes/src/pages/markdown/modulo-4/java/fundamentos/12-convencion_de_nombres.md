---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Convención de nombre"
block: "Fundamentos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Convención de nombre</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Convención de Nombre](#convención-de-nombre)
- [Convenciones de nombramiento más comunes](#convenciones-de-nombramiento-más-comunes)
  - [Nombres de Clases](#nombres-de-clases)
  - [Nombres de Métodos y Variables](#nombres-de-métodos-y-variables)
  - [Nombres de Constantes](#nombres-de-constantes)
  - [Nombres de Paquetes](#nombres-de-paquetes)
  - [Convenciones Generales](#convenciones-generales)

</div>
</div>

## Convención de Nombre

En Java, existen convenciones de nombramiento que son ampliamente aceptadas y recomendadas por la comunidad para mejorar la legibilidad y mantenibilidad del código. Estas convenciones se aplican a nombres de clases, métodos, variables, constantes y paquetes, entre otros elementos del código.

## Convenciones de nombramiento más comunes

### Nombres de Clases

- Deben empezar con una letra mayúscula.

- Deberían seguir la convención de nombres CamelCase, donde cada palabra comienza con una letra mayúscula y las palabras se combinan sin espacios.

```java
public class MiClase {
    // Código de la clase
}
```

### Nombres de Métodos y Variables

- Deben empezar con una letra minúscula.

- Deberían seguir la convención de nombres CamelCase para métodos y variables.

```java
public class Ejemplo {
    int miVariable;

    void miMetodo() {
        // Código del método
    }
}
```

### Nombres de Constantes

- Deben estar en mayúsculas.

- Si hay múltiples palabras, deben estar separadas por guiones bajos.

### Nombres de Paquetes

- Deben ser en minúsculas.

- Deben seguir una estructura de nombres jerárquica, similar a la estructura de directorios en el sistema de archivos.

```java
package com.ejemplo.proyecto;
```

### Convenciones Generales

- Los nombres deben ser descriptivos y significativos.

- Se deben evitar las abreviaturas confusas.

- Se debe utilizar el idioma inglés para los nombres, a menos que el proyecto esté específicamente destinado a un idioma diferente.
