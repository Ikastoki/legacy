---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "HashSet"
block: "Conjuntos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">HashSet</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [HashSet](#hashset)
- [Declaración y creación](#declaración-y-creación)
- [Características](#características)
- [Operaciones comunes](#operaciones-comunes)
- [Uso recomendado](#uso-recomendado)

</div>
</div>

## HashSet

HashSet en Java es una implementación de la interfaz Set que representa una colección de elementos únicos, sin ningún orden específico. Esta implementación utiliza una tabla hash para el almacenamiento de los elementos.

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

- Para utilizar HashSet en Java, necesitas importar la clase HashSet del paquete java.util.

- Puedes crear un HashSet especificando el tipo de elementos que contendrá entre los signos de mayor y menor (<>). Por ejemplo: `HashSet<String>` para un HashSet que contiene Strings.

## Características

- HashSet no permite elementos duplicados; cada elemento en el conjunto es único.

- No garantiza ningún orden específico de los elementos; los elementos pueden estar almacenados en cualquier orden.

- HashSet utiliza una estructura de tabla hash internamente para lograr un acceso rápido y eficiente a los elementos.

## Operaciones comunes

Las operaciones comunes en un HashSet incluyen:

- add(elemento): Agrega un elemento al conjunto si no está presente.

- remove(elemento): Elimina un elemento del conjunto si está presente.

- contains(elemento): Verifica si el conjunto contiene un elemento específico.

- size(): Devuelve el número de elementos en el conjunto.

- isEmpty(): Verifica si el conjunto está vacío.

- clear(): Elimina todos los elementos del conjunto.

## Uso recomendado

- HashSet es útil cuando necesitas almacenar elementos únicos y no te importa el orden en que se almacenan.

- Es eficiente para verificar la presencia de un elemento y agregar y eliminar elementos.
