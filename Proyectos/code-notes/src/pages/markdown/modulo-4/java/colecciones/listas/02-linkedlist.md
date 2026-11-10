---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "LinkedList"
block: "Listas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">LinkedList</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [LinkedList](#linkedlist)
- [Características](#características)
- [Declaración y creación](#declaración-y-creación)
- [Operaciones comunes](#operaciones-comunes)
- [Eficiencia](#eficiencia)
- [Uso recomendado](#uso-recomendado)

</div>
</div>

## LinkedList

LinkedList es otra estructura de datos en Java que implementa la interfaz List, al igual que ArrayList. Sin embargo, a diferencia de ArrayList, que se basa en un array dinámico, LinkedList se basa en una lista doblemente enlazada.

```java
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        // Crear una LinkedList
        LinkedList<String> listaEnlazada = new LinkedList<>();

        // Agregar elementos al final de la lista
        listaEnlazada.add("Hola");
        listaEnlazada.add("Mundo");
        listaEnlazada.add("!");

        // Agregar un elemento en una posición específica
        listaEnlazada.add(1, "Java");

        // Acceder a un elemento por su índice
        String elemento = listaEnlazada.get(2);
        System.out.println("Elemento en el índice 2: " + elemento);

        // Modificar un elemento
        listaEnlazada.set(3, "LinkedList");

        // Eliminar un elemento por su valor
        listaEnlazada.remove("Mundo");

        // Eliminar un elemento por su índice
        listaEnlazada.remove(0);

        // Iterar sobre los elementos de la lista
        System.out.println("Elementos de la LinkedList:");
        for (String item : listaEnlazada) {
            System.out.println(item);
        }

        // Verificar si un elemento está presente
        boolean contieneJava = listaEnlazada.contains("Java");
        System.out.println("¿La LinkedList contiene 'Java'? " + contieneJava);

        // Tamaño de la LinkedList
        int tamaño = listaEnlazada.size();
        System.out.println("Tamaño de la LinkedList: " + tamaño);

        // Eliminar todos los elementos
        listaEnlazada.clear();
        System.out.println("LinkedList después de limpiar: " + listaEnlazada);
    }
}
```

## Características

- Una LinkedList es una colección de elementos en la que cada elemento está enlazado a su sucesor y predecesor.

- Cada elemento de la lista (nodo) contiene un valor y referencias al siguiente y al anterior nodo.

- La LinkedList no utiliza un array subyacente, lo que la hace más adecuada para inserciones y eliminaciones frecuentes en cualquier posición de la lista.

## Declaración y creación

- Al igual que con ArrayList, necesitas importar la clase LinkedList del paquete java.util.

- Puedes declarar y crear una LinkedList especificando el tipo de elementos que contendrá entre los signos de mayor y menor (<>). Por ejemplo: `LinkedList<String>`para una LinkedList que contiene Strings.

## Operaciones comunes

Las operaciones comunes en LinkedList son similares a las de ArrayList, pero la eficiencia puede variar:

- Agregar elementos: Utiliza el método add(elemento) para agregar un elemento al final de la LinkedList, o add(indice, elemento) para agregar en una posición específica.

- Acceder elementos: Utiliza el método get(indice) para acceder a un elemento por su índice. Sin embargo, el acceso aleatorio puede ser menos eficiente en LinkedList que en ArrayList debido a la naturaleza de la lista enlazada.

- Modificar elementos: Utiliza el método set(indice, elemento) para reemplazar un elemento en un índice específico.

- Eliminar elementos: Utiliza el método remove(indice) para eliminar un elemento por su índice, o remove(elemento) para eliminar la primera ocurrencia de un elemento.

- Tamaño de la LinkedList: Utiliza el método size() para obtener el número de elementos en la LinkedList.

- Iterar sobre elementos: Puedes utilizar un bucle for-each para iterar sobre todos los elementos de la LinkedList.

- Verificar si un elemento está presente: Utiliza el método contains(elemento) para verificar si un elemento está presente en la LinkedList.

- Eliminar todos los elementos: Utiliza el método clear() para eliminar todos los elementos de la LinkedList.

## Eficiencia

- La LinkedList es eficiente para inserciones y eliminaciones en cualquier posición de la lista (O(1)).

- Sin embargo, el acceso aleatorio es menos eficiente que en ArrayList, ya que puede requerir recorrer la lista desde el principio o desde el final hasta el elemento deseado (O(n) en el peor de los casos).

## Uso recomendado

- Usa LinkedList cuando necesites realizar operaciones frecuentes de inserción y eliminación en posiciones intermedias de la lista.

- Evita LinkedList cuando necesites un acceso aleatorio rápido a elementos, ya que en esos casos ArrayList suele ser más eficiente.
