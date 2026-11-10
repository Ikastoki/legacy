---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Modificadores de acceso"
block: "POO"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Modificadores de acceso</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Modificadores de acceso](#modificadores-de-acceso)

</div>
</div>

## Modificadores de acceso

Los modificadores de acceso son palabras clave que se utilizan para controlar la visibilidad de los campos, métodos y constructores de una clase. Estos modificadores determinan desde dónde se puede acceder a los miembros de una clase y quién puede acceder a ellos.

Java proporciona cuatro tipos de modificadores de acceso:

- **public:** Los miembros marcados como public son accesibles desde cualquier clase y cualquier paquete. No hay restricciones de acceso.

- **private:** Los miembros marcados como private son accesibles solo dentro de la misma clase. No se pueden acceder desde clases fuera de la clase que los contiene.

- **protected:** Los miembros marcados como protected son accesibles dentro de la misma clase, dentro del mismo paquete y por clases que son subclases de la clase que los contiene (herencia).

- **default** (sin especificador de acceso): Si no se especifica un modificador de acceso (también conocido como "default"), el miembro es accesible solo dentro del mismo paquete. No se puede acceder desde clases fuera del paquete.

**Ejemplo**

```java
package com.ejemplo;

public class Ejemplo {
    public int publico; // Accesible desde cualquier lugar
    private int privado; // Accesible solo dentro de la misma clase
    protected int protegido; // Accesible dentro del mismo paquete y por subclases
    int defaultInt; // Accesible solo dentro del mismo paquete
}
```
