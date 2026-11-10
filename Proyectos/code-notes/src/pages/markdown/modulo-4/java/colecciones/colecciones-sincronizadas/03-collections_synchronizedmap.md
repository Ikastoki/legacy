---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "Collections.synchronizedMap"
block: "Colecciones Sincronizadas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Collections.synchronizedMap</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Collections.synchronizedMap](#collectionssynchronizedmap)
- [Uso](#uso)
- [Sincronización](#sincronización)
- [Uso recomendado](#uso-recomendado)

</div>
</div>

## Collections.synchronizedMap

Collections.synchronizedMap en Java es un método que devuelve una versión sincronizada de un mapa dado. Al igual que Collections.synchronizedList y Collections.synchronizedSet, este método garantiza que las operaciones en el mapa sincronizado sean seguras para subprocesos, lo que significa que solo un subproceso puede acceder al mapa en un momento dado, evitando así condiciones de carrera y corrupción de datos.

```java
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // Crear un mapa
        Map<String, Integer> mapaOriginal = new HashMap<>();

        // Crear un mapa sincronizado a partir del mapa original
        Map<String, Integer> mapaSincronizado = Collections.synchronizedMap(mapaOriginal);

        // Agregar elementos al mapa sincronizado
        mapaSincronizado.put("Juan", 25);
        mapaSincronizado.put("María", 30);
        mapaSincronizado.put("Pedro", 28);

        // Imprimir el mapa sincronizado
        System.out.println("Mapa sincronizado:");
        synchronized (mapaSincronizado) {
            for (Map.Entry<String, Integer> entry : mapaSincronizado.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
    }
}
```

## Uso

- Collections.synchronizedMap se utiliza para obtener una versión sincronizada de cualquier mapa en Java.

- Toma un mapa existente como argumento y devuelve una instancia de mapa que está sincronizada, lo que significa que todas las operaciones en este mapa están sincronizadas y son seguras para subprocesos.

## Sincronización

- Al igual que con Collections.synchronizedList y Collections.synchronizedSet, cuando un mapa se sincroniza utilizando Collections.synchronizedMap, cada método del mapa está sincronizado, lo que significa que solo un subproceso puede acceder al mapa a la vez.

- Esto evita condiciones de carrera y corrupción de datos cuando múltiples subprocesos intentan acceder y modificar el mapa simultáneamente.

## Uso recomendado

- Collections.synchronizedMap es útil cuando necesitas utilizar un mapa en un entorno de subprocesos múltiples y quieres asegurarte de que las operaciones en el mapa sean seguras para subprocesos.

- Es útil en situaciones donde varias partes del programa necesitan acceder y modificar un mapa compartido al mismo tiempo.
