---
layout: ../../../../../../layouts/modulo-4/Java.astro
title: "EnumSet"
block: "Otros"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">EnumSet</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [EnumSet](#enumset)
- [Declaración y creación](#declaración-y-creación)
- [Operaciones comunes](#operaciones-comunes)
- [Eficiencia](#eficiencia)
- [Uso recomendado](#uso-recomendado)

</div>
</div>

## EnumSet

EnumSet en Java es una clase especializada diseñada para su uso con enumeraciones. Proporciona una implementación eficiente de un conjunto cuyos elementos son todos valores de una enumeración determinada.

```java
import java.util.EnumSet;

public class Main {
    // Enumeración de días de la semana
    public enum DiaSemana {
        LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO
    }

    public static void main(String[] args) {
        // Crear un EnumSet con todos los días de la semana
        EnumSet<DiaSemana> diasLaborales = EnumSet.of(DiaSemana.LUNES, DiaSemana.MARTES,
                                                      DiaSemana.MIERCOLES, DiaSemana.JUEVES, DiaSemana.VIERNES);

        // Agregar el sábado y el domingo como días no laborales
        EnumSet<DiaSemana> finDeSemana = EnumSet.of(DiaSemana.SABADO, DiaSemana.DOMINGO);

        // Imprimir los días laborales
        System.out.println("Días laborales: " + diasLaborales);

        // Imprimir si el sábado es un día laboral
        System.out.println("¿El sábado es un día laboral? " + diasLaborales.contains(DiaSemana.SABADO));

        // Agregar el sábado y el domingo como días no laborales
        diasLaborales.addAll(finDeSemana);

        // Imprimir los días laborales actualizados
        System.out.println("Días laborales después de agregar el fin de semana: " + diasLaborales);
    }
}
```

## Declaración y creación

- La clase EnumSet está ubicada en el paquete java.util de Java, por lo que necesitas importarla para usarla.

- Puedes crear un EnumSet utilizando varios métodos estáticos proporcionados por la clase EnumSet. Por ejemplo:
  - EnumSet.allOf(Enum.class): Crea un EnumSet que contiene todos los valores de la enumeración especificada.
  - EnumSet.noneOf(Enum.class): Crea un EnumSet vacío con el tipo de enumeración especificado.
  - EnumSet.of(Enum1, Enum2, ...): Crea un EnumSet con los elementos especificados.

## Operaciones comunes

- add(Enum e): Agrega el elemento especificado al conjunto.

- remove(Object o): Elimina el elemento especificado del conjunto, si está presente.

- contains(Object o): Devuelve true si el conjunto contiene el elemento especificado.

- isEmpty(): Devuelve true si el conjunto está vacío.

- size(): Devuelve el número de elementos en el conjunto.

## Eficiencia

 -EnumSet está diseñado para ser altamente eficiente y compacto, utilizando representaciones internas optimizadas para conjuntos de enumeraciones.

 -Las operaciones en EnumSet son eficientes y se pueden realizar en tiempo constante (O(1)) para la mayoría de las operaciones.

## Uso recomendado

- EnumSet es útil cuando necesitas trabajar con conjuntos de elementos de una enumeración en Java.

- Es adecuado para situaciones donde necesitas realizar operaciones de conjunto, como uniones, intersecciones y diferencias, en conjuntos de valores de enumeración.

- Se utiliza a menudo en la programación con enumeraciones para representar conjuntos de opciones o estados.
