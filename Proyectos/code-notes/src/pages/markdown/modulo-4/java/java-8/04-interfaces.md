---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Interfaces"
block: "Java 8"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Interfaces</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Interfaces](#interfaces)
- [Métodos por Defecto en Interfaces](#métodos-por-defecto-en-interfaces)
- [Métodos Estáticos en Interfaces](#métodos-estáticos-en-interfaces)
- [Referencias a Métodos](#referencias-a-métodos)

</div>
</div>

## Interfaces

En Java 8, se introdujeron varias mejoras en las interfaces, incluyendo la capacidad de definir métodos por defecto, métodos estáticos y referencias a métodos. Estas características ampliaron significativamente la flexibilidad y la expresividad de las interfaces en Java.

## Métodos por Defecto en Interfaces

Los métodos por defecto permiten definir métodos con implementaciones predeterminadas en una interfaz. Esto significa que las clases que implementan la interfaz pueden optar por usar la implementación predeterminada o proporcionar su propia implementación.

```java
interface MiInterface {
    default void metodoPorDefecto() {
        System.out.println("Método por defecto en la interfaz");
    }
}
```

## Métodos Estáticos en Interfaces

Los métodos estáticos en interfaces son métodos que se pueden invocar utilizando el nombre de la interfaz, sin necesidad de una instancia de la interfaz. Estos métodos pueden proporcionar funcionalidad auxiliar relacionada con la interfaz.

```java
interface MiInterface {
    static void metodoEstatico() {
        System.out.println("Método estático en la interfaz");
    }
}
```

## Referencias a Métodos

Las referencias a métodos proporcionan una forma compacta de referenciar métodos existentes, incluyendo métodos estáticos, métodos de instancia y constructores. Esto simplifica la sintaxis y hace que el código sea más legible.

```java
interface Operacion {
    int aplicar(int a, int b);
}

class Calculadora {
    static int sumar(int a, int b) {
        return a + b;
    }
}

// Referencia a un método estático
Operacion op = Calculadora::sumar;
```
