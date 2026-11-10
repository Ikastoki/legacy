---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "LinkedHashSet"
block: "Conjuntos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">LinkedHashSet</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [LinkedHashSet](#linkedhashset)
- [Declaración y creación](#declaración-y-creación)
- [Características](#características)
- [Operaciones comunes](#operaciones-comunes)
- [Uso recomendado](#uso-recomendado)

</div>
</div>

## LinkedHashSet

LinkedHashSet en Java es una implementación de la interfaz Set que mantiene el orden de inserción de los elementos. Combina las características de HashSet y LinkedHashSet: al igual que HashSet, garantiza la unicidad de los elementos, y al igual que LinkedHashSet, mantiene el orden de inserción de los elementos.

```java
import java.util.LinkedHashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        // Crear un LinkedHashSet de Strings
        Set<String> conjunto = new LinkedHashSet<>();

        // Agregar elementos al conjunto
        conjunto.add("Perro");
        conjunto.add("Gato");
        conjunto.add("Perro"); // No se agregará, ya que "Perro" ya está presente
        conjunto.add("Araña");

        // Verificar si un elemento está presente
        boolean contieneGato = conjunto.contains("Gato");
        System.out.println("¿El conjunto contiene 'Gato'? " + contieneGato);

        // Eliminar un elemento del conjunto
        conjunto.remove("Araña");

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

- Al igual que con otras implementaciones de colecciones en Java, necesitas importar la clase LinkedHashSet del paquete java.util.
- Puedes crear un LinkedHashSet especificando el tipo de elementos que contendrá entre los signos de mayor y menor (<>). Por ejemplo: `LinkedHashSet<String>` para un LinkedHashSet que contiene Strings.

## Características

- LinkedHashSet mantiene el orden de inserción de los elementos, lo que significa que cuando iteras sobre un LinkedHashSet, los elementos se devuelven en el orden en que fueron insertados.
- Al igual que HashSet, LinkedHashSet no permite elementos duplicados. Cada elemento en el conjunto es único.
- Utiliza una estructura de datos de tabla hash con listas enlazadas para mantener el orden de inserción de los elementos.

## Operaciones comunes

Las operaciones comunes en un LinkedHashSet son similares a las de otras implementaciones de Set:

- add(elemento): Agrega un elemento al conjunto si no está presente.

- remove(elemento): Elimina un elemento del conjunto si está presente.

- contains(elemento): Verifica si el conjunto contiene un elemento específico.

- size(): Devuelve el número de elementos en el conjunto.

- isEmpty(): Verifica si el conjunto está vacío.

- clear(): Elimina todos los elementos del conjunto.

## Uso recomendado

- LinkedHashSet es útil cuando necesitas mantener el orden de inserción de los elementos y, al mismo tiempo, garantizar la unicidad de los elementos en el conjunto.
- Es útil cuando necesitas iterar sobre los elementos en el mismo orden en que fueron insertados.
- Puede ser utilizado en situaciones donde el orden de los elementos es importante, como mantener el historial de acciones del usuario en una aplicación.
