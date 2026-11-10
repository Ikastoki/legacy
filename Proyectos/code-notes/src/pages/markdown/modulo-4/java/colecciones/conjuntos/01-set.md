---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "Set"
block: "Conjuntos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Set</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Set](#set)
- [Declaración y creación](#declaración-y-creación)
- [Características](#características)
- [Operaciones comunes](#operaciones-comunes)
- [Implementaciones de Set](#implementaciones-de-set)
- [Uso recomendado](#uso-recomendado)

</div>
</div>

## Set

En Java, una interfaz Set representa una colección que no contiene elementos duplicados. Un conjunto (set) se utiliza comúnmente para almacenar elementos únicos en una colección. La interfaz Set es parte del marco de colecciones (collections framework) en Java y es una de las subinterfaces de la interfaz Collection.

```java
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        // Crear un HashSet de Strings
        Set<String> conjunto = new HashSet<>();

        // Agregar elementos al conjunto
        conjunto.add("Hola");
        conjunto.add("Mundo");
        conjunto.add("Hola"); // No se agregará, ya que "Hola" ya está presente

        // Verificar si un elemento está presente
        boolean contieneHola = conjunto.contains("Hola");
        System.out.println("¿El conjunto contiene 'Hola'? " + contieneHola);

        // Eliminar un elemento del conjunto
        conjunto.remove("Mundo");

        // Imprimir todos los elementos del conjunto
        System.out.println("Elementos del conjunto:");
        for (String elemento : conjunto) {
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

- La interfaz Set es parte del paquete java.util, por lo que necesitas importarla si deseas utilizarla.

- Puedes crear un Set utilizando una de sus implementaciones, como HashSet, TreeSet o LinkedHashSet.

## Características

- Un conjunto (Set) en Java no permite elementos duplicados. Cada elemento en un conjunto es único.

- No garantiza ningún orden específico de los elementos almacenados. El orden puede variar según la implementación concreta utilizada.

- Las operaciones básicas como agregar, eliminar y verificar la presencia de elementos son muy eficientes en un conjunto.

## Operaciones comunes

Las operaciones comunes en un conjunto incluyen:

- add(elemento): Agrega un elemento al conjunto si no está presente.

- remove(elemento): Elimina un elemento del conjunto si está presente.

- contains(elemento): Verifica si el conjunto contiene un elemento específico.

- size(): Devuelve el número de elementos en el conjunto.

- isEmpty(): Verifica si el conjunto está vacío.

- clear(): Elimina todos los elementos del conjunto.

## Implementaciones de Set

- HashSet: Implementación basada en una tabla hash, que ofrece un acceso rápido a los elementos y no garantiza ningún orden particular.

- TreeSet: Implementación basada en un árbol rojo-negro, que almacena los elementos en orden ascendente y ofrece operaciones de conjunto en tiempo logarítmico.

- LinkedHashSet: Implementación basada en una lista doblemente enlazada y una tabla hash, que mantiene el orden de inserción de los elementos.

## Uso recomendado

- Usa un conjunto (Set) cuando necesites almacenar elementos únicos y no te importe el orden en que se almacenan.
- Es útil para eliminar duplicados de una colección, verificar la pertenencia de un elemento y realizar operaciones de conjunto como unión, intersección o diferencia.
