---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Abstracción"
block: "POO"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Abstracción</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Abstracción](#abstracción)
- [Clases Abstractas](#clases-abstractas)
- [Interfaces](#interfaces)
- [Beneficios de la Abstracción](#beneficios-de-la-abstracción)

</div>
</div>

## Abstracción

La abstracción es un concepto fundamental en la Programación Orientada a Objetos (POO) que se refiere a la capacidad de representar los aspectos esenciales de una entidad sin preocuparse por los detalles irrelevantes. En esencia, la abstracción consiste en identificar y definir las características más importantes de un objeto o sistema, mientras se ocultan los detalles de implementación.

En Java, la abstracción se logra mediante el uso de clases abstractas e interfaces.

## Clases Abstractas

- Una clase abstracta es una clase que no se puede instanciar directamente y que puede contener métodos abstractos, así como métodos concretos.

- Un método abstracto es un método que no tiene una implementación concreta en la clase abstracta. En lugar de ello, se deja sin definir y debe ser implementado por las subclases.

- Las clases abstractas pueden contener campos, métodos concretos y métodos abstractos.

- Se utiliza la palabra clave abstract para declarar una clase como abstracta.

**Ejemplo**

```java
interface Animal {
    void hacerSonido();
}

class Perro implements Animal {
    public void hacerSonido() {
        System.out.println("Guau Guau");
    }
}
```

## Interfaces

- Una interfaz es una colección de métodos abstractos y constantes que definen un conjunto de comportamientos que una clase puede implementar.

- Una clase puede implementar múltiples interfaces.

- Todos los métodos en una interfaz son automáticamente públicos y abstractos, por lo que no se requiere la palabra clave abstract ni el modificador de acceso public.

- Las interfaces permiten la implementación de múltiples herencias y la flexibilidad en el diseño de clases.

```java
interface Animal {
    void hacerSonido();
}

class Perro implements Animal {
    public void hacerSonido() {
        System.out.println("Guau Guau");
    }
}
```

## Beneficios de la Abstracción

- **Simplificación del código:** Permite enfocarse en los aspectos esenciales de una entidad y ocultar la complejidad de la implementación.

- **Reutilización del código:** Facilita la creación de clases y métodos genéricos que pueden ser reutilizados en diferentes contextos.

- **Flexibilidad:** Permite cambios en la implementación interna sin afectar a los clientes que utilizan la abstracción.
