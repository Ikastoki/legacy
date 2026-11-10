---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "TreeMap"
block: "Mapas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">TreeMap</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [TreeMap](#treemap)
- [Declaración y creación](#declaración-y-creación)
- [Características](#características)
- [Iteración](#iteración)
- [Uso recomendado](#uso-recomendado)

</div>
</div>
 
 ## TreeMap

TreeMap en Java es una implementación de la interfaz Map que utiliza un árbol rojo-negro para almacenar los pares clave-valor. Este árbol mantiene las claves ordenadas en un orden ascendente, lo que facilita la recuperación eficiente de los elementos en orden ascendente.

```java
import java.util.TreeMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // Crear un TreeMap de Strings (clave) a Integers (valor)
        Map<String, Integer> treeMap = new TreeMap<>();

        // Agregar elementos al TreeMap
        treeMap.put("Juan", 25);
        treeMap.put("María", 30);
        treeMap.put("Pedro", 28);

        // Acceder a un valor por su clave
        int edadDeMaria = treeMap.get("María");
        System.out.println("La edad de María es: " + edadDeMaria);

        // Eliminar un elemento del TreeMap
        treeMap.remove("Juan");

        // Imprimir todos los pares clave-valor del TreeMap
        System.out.println("Elementos del TreeMap:");
        for (Map.Entry<String, Integer> entry : treeMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Obtener el tamaño del TreeMap
        int tamaño = treeMap.size();
        System.out.println("Tamaño del TreeMap: " + tamaño);
    }
}
```

## Declaración y creación

- Para utilizar TreeMap en Java, necesitas importar la clase TreeMap del paquete java.util.

- Puedes crear un TreeMap especificando el tipo de las claves y los valores entre los signos de mayor y menor (<>). Por ejemplo: `TreeMap<String, Integer>` para un TreeMap que mapea cadenas a enteros.

## Características

- TreeMap mantiene las claves ordenadas en un orden ascendente. Esto significa que los elementos se recuperan en orden ascendente basándose en las claves.

- Al igual que otras implementaciones de Map, TreeMap no permite claves duplicadas.

- TreeMap proporciona un rendimiento eficiente en operaciones de inserción, eliminación y búsqueda, con una complejidad de tiempo promedio de O(log n) para cada operación.

## Iteración

- La iteración sobre un TreeMap se realiza en el orden ascendente de las claves.

- Esto significa que si iteras sobre un TreeMap, obtendrás los elementos en orden ascendente basándote en las claves.

## Uso recomendado

- TreeMap es útil cuando necesitas mantener las claves ordenadas y acceder rápidamente a los elementos en orden ascendente.

- Es adecuado para casos de uso donde necesitas procesar datos en un orden específico, como la clasificación de datos o la implementación de un diccionario ordenado.
