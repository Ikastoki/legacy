---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Sobrecarga de Métodos"
block: "Métodos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Sobrecarga de Métodos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Sobrecarga de Métodos](#sobrecarga-de-métodos)
  - [Características clave de la sobrecarga de métodos:](#características-clave-de-la-sobrecarga-de-métodos)
- [Sobrecarga vs Sobrescritura](#sobrecarga-vs-sobrescritura)

</div>
</div>

## Sobrecarga de Métodos

La sobrecarga de métodos(Method Overloading) en Java se refiere a la capacidad de una clase para tener múltiples métodos con el mismo nombre pero con diferentes listas de parámetros. Esto permite que varios métodos tengan el mismo nombre pero realicen tareas diferentes según los parámetros que se les pasen.

### Características clave de la sobrecarga de métodos:

- Los métodos deben tener el mismo nombre pero diferentes listas de parámetros (cantidad o tipos de parámetros).

- La firma del método (nombre y lista de parámetros) debe ser única para cada método sobrecargado.

- La decisión sobre qué método sobrecargado se llama se toma en tiempo de compilación basándose en los tipos y la cantidad de argumentos pasados.

```java
public class Ejemplo {
    public void imprimir(int num) {
        System.out.println("Número entero: " + num);
    }

    public void imprimir(double num) {
        System.out.println("Número decimal: " + num);
    }
}
```

## Sobrecarga vs Sobrescritura

la sobrecarga de métodos se refiere a tener varios métodos con el mismo nombre pero diferentes parámetros, mientras que la sobrescritura de métodos se refiere a proporcionar una implementación específica de un método que ya está definido en una superclase. Ambos conceptos son fundamentales en la programación orientada a objetos y son utilizados frecuentemente en el desarrollo de aplicaciones Java.
