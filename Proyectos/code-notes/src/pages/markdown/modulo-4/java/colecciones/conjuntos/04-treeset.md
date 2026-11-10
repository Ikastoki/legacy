---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "TreeSet"
block: "Conjuntos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">TreeSet</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [TreeSet](#treeset)
- [Declaración y creación](#declaración-y-creación)
- [Características](#características)
- [Operaciones comunes](#operaciones-comunes)
- [Uso recomendado](#uso-recomendado)

</div>
</div>

## TreeSet

TreeSet en Java es una implementación de la interfaz Set que utiliza un árbol binario balanceado para almacenar los elementos. Este árbol garantiza que los elementos se mantengan en orden ascendente (orden natural) o en un orden definido por un comparador personalizado.

```java
import java.util.TreeSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        // Crear un TreeSet de enteros
        Set<Integer> conjunto = new TreeSet<>();

        // Agregar elementos al conjunto
        conjunto.add(5);
        conjunto.add(3);
        conjunto.add(8);
        conjunto.add(3); // No se agregará, ya que "3" ya está presente
        conjunto.add(10);

        // Verificar si un elemento está presente
        boolean contieneOcho = conjunto.contains(8);
        System.out.println("¿El conjunto contiene '8'? " + contieneOcho);

        // Eliminar un elemento del conjunto
        conjunto.remove(5);

        // Imprimir todos los elementos del conjunto
        System.out.println("Elementos del conjunto:");
        for (Integer elemento : conjunto) {
            System.out.println(elemento);
        }

        // Obtener el tamaño del conjunto
        int tamaño = conjunto.size();
        System.out.println("Tamaño del conjunto: " + tamaño);

        // Verificar si el conjunto está vacío
        boolean vacio = conjunto.isEmpty();
        System.out.println("¿El conjunto está vacío? " + vacio);
    }
}
```

## Declaración y creación

- Para utilizar TreeSet en Java, necesitas importar la clase TreeSet del paquete java.util.

- Puedes crear un TreeSet especificando el tipo de elementos que contendrá entre los signos de mayor y menor (<>). Por ejemplo: `TreeSet<Integer>` para un TreeSet que contiene enteros.

## Características

- TreeSet mantiene los elementos ordenados según su valor. Los elementos se ordenan automáticamente mientras se insertan en el conjunto.

- Puedes utilizar el orden natural de los elementos (si son comparables) o proporcionar un comparador personalizado para definir el orden.

- Al igual que otras implementaciones de Set, TreeSet no permite elementos duplicados. Cada elemento en el conjunto es único.

## Operaciones comunes

Las operaciones comunes en un TreeSet son similares a las de otras implementaciones de Set:

- add(elemento): Agrega un elemento al conjunto si no está presente.

- remove(elemento): Elimina un elemento del conjunto si está presente.

- contains(elemento): Verifica si el conjunto contiene un elemento específico.

- size(): Devuelve el número de elementos en el conjunto.

- isEmpty(): Verifica si el conjunto está vacío.

- clear(): Elimina todos los elementos del conjunto.

## Uso recomendado

- TreeSet es útil cuando necesitas mantener los elementos ordenados y eliminar duplicados de manera eficiente.

- Es útil cuando necesitas iterar sobre los elementos en un orden específico definido por su valor.

- Puedes utilizarlo en situaciones donde el orden de los elementos es importante, como mantener una lista ordenada de nombres o fechas.
