---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "Collections.synchronizedSet"
block: "Colecciones Sincronizadas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Collections.synchronizedSet</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Collections.synchronizedSet](#collectionssynchronizedset)
- [Uso](#uso)
- [Sincronización](#sincronización)
- [Uso recomendado](#uso-recomendado)

</div>
</div>

## Collections.synchronizedSet

Collections.synchronizedSet en Java es un método que devuelve una versión sincronizada de un conjunto dado. Al igual que Collections.synchronizedList, este método garantiza que las operaciones en el conjunto sincronizado sean seguras para subprocesos, lo que significa que solo un subproceso puede acceder al conjunto en un momento dado, evitando así condiciones de carrera y corrupción de datos.

```java
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        // Crear un conjunto
        Set<Integer> conjuntoOriginal = new HashSet<>();

        // Crear un conjunto sincronizado a partir del conjunto original
        Set<Integer> conjuntoSincronizado = Collections.synchronizedSet(conjuntoOriginal);

        // Agregar elementos al conjunto sincronizado
        conjuntoSincronizado.add(1);
        conjuntoSincronizado.add(2);
        conjuntoSincronizado.add(3);

        // Imprimir el conjunto sincronizado
        System.out.println("Conjunto sincronizado:");
        synchronized (conjuntoSincronizado) {
            for (int elemento : conjuntoSincronizado) {
                System.out.println(elemento);
            }
        }
    }
}
```

## Uso

- Collections.synchronizedSet se utiliza para obtener una versión sincronizada de cualquier conjunto en Java.

- Toma un conjunto existente como argumento y devuelve una instancia de conjunto que está sincronizada, lo que significa que todas las operaciones en este conjunto están sincronizadas y son seguras para subprocesos.

## Sincronización

- Al igual que con Collections.synchronizedList, cuando un conjunto se sincroniza utilizando Collections.synchronizedSet, cada método del conjunto está sincronizado, lo que significa que solo un subproceso puede acceder al conjunto a la vez.

- Esto evita condiciones de carrera y corrupción de datos cuando múltiples subprocesos intentan acceder y modificar el conjunto simultáneamente.

## Uso recomendado

- Collections.synchronizedSet es útil cuando necesitas utilizar un conjunto en un entorno de subprocesos múltiples y quieres asegurarte de que las operaciones en el conjunto sean seguras para subprocesos.

- Es útil en situaciones donde varias partes del programa necesitan acceder y modificar un conjunto compartido al mismo tiempo.
