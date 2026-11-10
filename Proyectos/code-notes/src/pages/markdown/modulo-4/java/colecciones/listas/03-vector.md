---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "Vector"
block: "Listas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Vector</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Vector](#vector)
- [Declaración y creación](#declaración-y-creación)
- [Características](#características)
- [Operaciones comunes](#operaciones-comunes)
- [Eficiencia](#eficiencia)
- [Uso recomendado](#uso-recomendado)

</div>
</div>

## Vector

Un vector en Java es una estructura de datos que representa una matriz unidimensional que puede contener elementos de un tipo específico. Los vectores en Java son similares a los arrays, pero tienen algunas diferencias clave, como la capacidad de cambiar su tamaño dinámicamente.

```java
import java.util.Vector;

public class Main {
    public static void main(String[] args) {
        // Crear un vector
        Vector<Integer> vector = new Vector<>();

        // Agregar elementos al vector
        vector.add(10);
        vector.add(20);
        vector.add(30);

        // Acceder a un elemento por su índice
        int elemento = vector.get(1);
        System.out.println("Elemento en el índice 1: " + elemento);

        // Modificar un elemento
        vector.set(2, 40);
        System.out.println("Vector modificado: " + vector);

        // Eliminar un elemento por su índice
        vector.remove(0);
        System.out.println("Vector después de eliminar elemento en el índice 0: " + vector);

        // Tamaño del vector
        int tamaño = vector.size();
        System.out.println("Tamaño del vector: " + tamaño);

        // Iterar sobre los elementos del vector
        System.out.println("Elementos del vector:");
        for (int i = 0; i < vector.size(); i++) {
            System.out.println(vector.get(i));
        }

        // Verificar si un elemento está presente
        boolean contiene = vector.contains(40);
        System.out.println("¿El vector contiene 40? " + contiene);

        // Eliminar todos los elementos
        vector.clear();
        System.out.println("Vector después de limpiar: " + vector);
    }
}
```

## Declaración y creación

-Para utilizar vectores en Java, necesitas importar la clase Vector del paquete java.util.

-Puedes declarar y crear un vector especificando el tipo de elementos que contendrá entre los signos de mayor y menor (<>). Por ejemplo: Vector<Integer> para un vector que contiene enteros.

## Características

- Un vector en Java es similar a un array, pero tiene la capacidad de cambiar su tamaño dinámicamente.

- A diferencia de los arrays estáticos, los vectores pueden crecer o reducirse automáticamente según sea necesario.

- Los vectores en Java son sincronizados, lo que significa que son seguros para su uso en entornos multihilo. Sin embargo, si no necesitas sincronización, se recomienda utilizar otras clases de la colección, como ArrayList, que son más eficientes.

## Operaciones comunes

Las operaciones comunes en un vector son similares a las de otras estructuras de datos, como ArrayList:

- Agregar elementos: Utiliza el método add(elemento) para agregar un elemento al final del vector.

- Acceder elementos: Utiliza el método get(indice) para acceder a un elemento por su índice.

- Modificar elementos: Utiliza el método set(indice, elemento) para reemplazar un elemento en un índice específico.

- Eliminar elementos: Utiliza el método remove(indice) para eliminar un elemento por su índice, o remove(elemento) para eliminar la primera ocurrencia de un elemento.

- Tamaño del vector: Utiliza el método size() para obtener el número de elementos en el vector.

- Iterar sobre elementos: Puedes utilizar un bucle for o un bucle foreach para iterar sobre todos los elementos del vector.

- Verificar si un elemento está presente: Utiliza el método contains(elemento) para verificar si un elemento está presente en el vector.

- Eliminar todos los elementos: Utiliza el método clear() para eliminar todos los elementos del vector.

## Eficiencia

- La eficiencia de un vector en Java varía según la implementación específica.

- En general, las operaciones de agregar y eliminar al final del vector tienen una complejidad de tiempo de O(1) amortizado.

- Sin embargo, las inserciones y eliminaciones en posiciones intermedias pueden ser costosas (O(n)), ya que pueden requerir desplazar los elementos adyacentes.

## Uso recomendado

- Los vectores en Java son útiles cuando necesitas una estructura de datos dinámica que pueda crecer o reducirse según sea necesario.

- Si no necesitas la sincronización proporcionada por los vectores, considera usar ArrayList u otras implementaciones de la interfaz List, que son más eficientes en la mayoría de los casos.
