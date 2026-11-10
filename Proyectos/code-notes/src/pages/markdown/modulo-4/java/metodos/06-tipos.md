---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Tipos de Métodos"
block: "Métodos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Tipos de Métodos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Tipos de Métodos](#tipos-de-métodos)
  - [Métodos de instancia](#métodos-de-instancia)
  - [Métodos estáticos](#métodos-estáticos)
  - [Métodos abstractos](#métodos-abstractos)
  - [Constructores](#constructores)
  - [Métodos de acceso (getters y setters)](#métodos-de-acceso-getters-y-setters)

</div>
</div>

## Tipos de Métodos

Hay varios tipos de métodos que se pueden definir en Java, dependiendo de cómo se comporten y de cómo se relacionen con las instancias de una clase.

### Métodos de instancia

Son métodos que pertenecen a una instancia particular de una clase y pueden acceder y modificar los campos (variables de instancia) de esa instancia.

```java
public class MiClase {
    private int valor;

    public void setValor(int valor) {
        this.valor = valor; // Método de instancia que modifica un campo de instancia
    }
}
```

### Métodos estáticos

Como se explicó anteriormente, son métodos que pertenecen a la clase en sí misma en lugar de a instancias específicas de esa clase. Se pueden llamar directamente en la clase sin necesidad de crear una instancia.

```java
public class MiClase {
    public static void metodoEstatico() {
        // Cuerpo del método estático
    }
}
```

### Métodos abstractos

Son métodos declarados en una clase abstracta pero no implementados en esa clase. Las subclases deben proporcionar una implementación concreta para estos métodos.

```java
public abstract class MiClase {
    public abstract void metodoAbstracto(); // Método abstracto
}
```

### Constructores

Son métodos especiales que se utilizan para inicializar objetos de una clase. Tienen el mismo nombre que la clase y no tienen un tipo de retorno explícito.

```java
public class MiClase {
    public MiClase() {
        // Constructor
    }
}
```

### Métodos de acceso (getters y setters)

Son métodos utilizados para acceder y modificar los campos privados de una clase. Los métodos "get" devuelven el valor de un campo y los métodos "set" establecen el valor de un campo.

```java
public class MiClase {
    private int valor;

    public int getValor() {
        return valor; // Método de acceso (getter)
    }

    public void setValor(int valor) {
        this.valor = valor; // Método de acceso (setter)
    }
}
```

> ✍️ Nota
>
> Estos son algunos de los tipos comunes de métodos que se pueden definir en Java. La elección del tipo de método adecuado depende de cómo se quiera diseñar la clase y qué funcionalidad se quiera proporcionar.
