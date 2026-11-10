---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "HashMap"
block: "Mapas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">HashMap</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [HashMap](#hashmap)
- [Eficiencia](#eficiencia)
- [Manejo de colisiones](#manejo-de-colisiones)
- [Iteración](#iteración)
- [Sincronización](#sincronización)
- [Uso de null](#uso-de-null)

</div>
</div>
 
 ## HashMap

Implementación que utiliza una tabla hash para almacenar las entradas. No garantiza ningún orden particular de las claves.

```java
import java.util.HashMap;
import java.util.Map;

public class Main {
   public static void main(String[] args) {
       // Crear un HashMap de Strings (clave) a Integers (valor)
       Map<String, Integer> mapa = new HashMap<>();

       // Agregar elementos al mapa
       mapa.put("Juan", 25);
       mapa.put("María", 30);
       mapa.put("Pedro", 28);

       // Acceder a un valor por su clave
       int edadDeMaria = mapa.get("María");
       System.out.println("La edad de María es: " + edadDeMaria);

       // Verificar si una clave está presente
       boolean contienePedro = mapa.containsKey("Pedro");
       System.out.println("¿El mapa contiene a Pedro? " + contienePedro);

       // Eliminar un elemento del mapa
       mapa.remove("Juan");

       // Imprimir todos los pares clave-valor del mapa
       System.out.println("Elementos del mapa:");
       for (Map.Entry<String, Integer> entry : mapa.entrySet()) {
           System.out.println(entry.getKey() + ": " + entry.getValue());
       }

       // Obtener el tamaño del mapa
       int tamaño = mapa.size();
       System.out.println("Tamaño del mapa: " + tamaño);

       // Verificar si el mapa está vacío
       boolean vacio = mapa.isEmpty();
       System.out.println("¿El mapa está vacío? " + vacio);
   }
}
```

## Eficiencia

- HashMap proporciona un rendimiento rápido en la mayoría de las operaciones básicas (inserción, eliminación, búsqueda) con una complejidad de tiempo promedio de O(1).

- La complejidad de tiempo puede ser O(n) en el peor de los casos, pero esto es raro y ocurre cuando hay colisiones de hash.

- La eficiencia de HashMap se debe a su uso de una tabla hash, que permite un acceso directo a los elementos basado en su clave.

## Manejo de colisiones

- Una colisión ocurre cuando dos claves distintas tienen el mismo valor hash y se asignan a la misma posición en la tabla hash.

- HashMap maneja colisiones utilizando listas vinculadas (buckets) en cada posición de la tabla hash. Cuando ocurre una colisión, los elementos se almacenan en una lista vinculada en esa posición.

- En general, el rendimiento de HashMap degrada cuando hay muchas colisiones, pero esto es raro en práctica con una buena función de hash.

## Iteración

- HashMap no garantiza un orden específico de iteración de los elementos.

- Los elementos se almacenan en la tabla hash basándose en sus valores hash, lo que significa que el orden en que se iteran los elementos puede variar.

- Si necesitas un orden específico de iteración, considera usar LinkedHashMap, que mantiene el orden de inserción de los elementos.

## Sincronización

- HashMap no es sincronizado y no es seguro para subprocesos (no thread-safe).

- Si necesitas un mapa que sea seguro para subprocesos, considera usar ConcurrentHashMap o Collections.synchronizedMap para obtener una versión sincronizada de HashMap.

## Uso de null

- HashMap permite una clave nula y varios valores nulos.

- Puedes almacenar una entrada con clave nula y también recuperar un valor asociado a una clave nula.

- Sin embargo, es importante tener en cuenta que al almacenar múltiples valores nulos, no se puede distinguir entre una clave que no existe y una clave con valor nulo.
