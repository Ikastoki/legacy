---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "TreeSet"
block: "Otros"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">TreeSet</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [BitSet](#bitset)
- [Declaración y creación](#declaración-y-creación)
- [Operaciones comunes](#operaciones-comunes)
- [Eficiencia](#eficiencia)
- [Uso recomendado](#uso-recomendado)

</div>
</div>

## BitSet

BitSet en Java es una clase que implementa un conjunto de bits (valores booleanos), donde cada bit representa un valor booleano (verdadero o falso). Se puede utilizar para representar un conjunto de elementos de manera eficiente, donde cada elemento está asociado con un índice único.

```java
import java.util.BitSet;

public class Main {
    public static void main(String[] args) {
        // Crear un BitSet
        BitSet bits = new BitSet(16);

        // Establecer algunos bits
        bits.set(0);
        bits.set(2);
        bits.set(4);
        bits.set(6);
        bits.set(8);

        // Imprimir los bits establecidos
        System.out.println("Bits establecidos: " + bits);

        // Comprobar si un bit está establecido
        boolean bit4 = bits.get(4);
        System.out.println("El bit en la posición 4 está establecido: " + bit4);

        // Borrar un bit
        bits.clear(2);

        // Imprimir el BitSet actualizado
        System.out.println("Bits después de borrar el bit en la posición 2: " + bits);

        // Contar el número de bits establecidos
        int cantidadBitsEstablecidos = bits.cardinality();
        System.out.println("Número de bits establecidos: " + cantidadBitsEstablecidos);
    }
}

```

## Declaración y creación

- La clase BitSet está ubicada en el paquete java.util de Java, por lo que necesitas importarla para usarla.

- Puedes crear una instancia de BitSet utilizando el constructor predeterminado o especificando el tamaño deseado del BitSet. Por ejemplo: BitSet bits = new BitSet(); o BitSet bits = new BitSet(10); para un BitSet con un tamaño inicial de 10 bits.

## Operaciones comunes

- set(int index): Establece el bit en el índice especificado en verdadero.

- clear(int index): Establece el bit en el índice especificado en falso.

- get(int index): Devuelve el valor del bit en el índice especificado.

- flip(int index): Invierte el valor del bit en el índice especificado.

- cardinality(): Devuelve el número de bits establecidos en verdadero (el conteo de bits establecidos en 1).

## Eficiencia

- BitSet es eficiente en términos de espacio de almacenamiento, ya que representa cada bit con un solo bit en la memoria.

- Las operaciones en BitSet son eficientes y se pueden realizar en tiempo constante (O(1)) para la mayoría de las operaciones.

## Uso recomendado

- BitSet es útil cuando necesitas representar un conjunto grande de valores booleanos de manera eficiente.

- Es adecuado para situaciones donde necesitas realizar operaciones de conjunto, como uniones, intersecciones, y diferencias de conjuntos de bits.

- Se utiliza a menudo en algoritmos de optimización, manipulación de bits, y en situaciones donde el espacio de almacenamiento es crítico.
