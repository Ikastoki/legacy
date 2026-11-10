---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Parámetros"
block: "Métodos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Parámetros</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Parámetros](#parámetros)
- [Características](#características)
  - [Declaración de parámetros](#declaración-de-parámetros)
  - [Número y tipo de parámetros](#número-y-tipo-de-parámetros)
  - [Paso de argumentos](#paso-de-argumentos)
  - [Referencia por valor](#referencia-por-valor)
- [Parámetros vs Argumentos](#parámetros-vs-argumentos)

</div>
</div>

## Parámetros

Los parámetros son variables que se pasan a un método cuando se llama, y que el método utiliza para realizar sus operaciones. Los parámetros permiten que los métodos acepten datos de entrada y realicen tareas basadas en esos datos.

## Características

### Declaración de parámetros

Los parámetros se declaran dentro de los paréntesis en la declaración del método. Cada parámetro se especifica con un tipo de dato y un nombre.

```java
public void saludar(String nombre) {
    System.out.println("¡Hola, " + nombre + "!");
}
```

### Número y tipo de parámetros

Un método puede aceptar cualquier número de parámetros, incluyendo ninguno. Los parámetros pueden ser de cualquier tipo de datos, incluyendo tipos primitivos, objetos, arreglos, e incluso otras interfaces o clases.

```java
public void sumar(int a, int b) {
    int suma = a + b;
    System.out.println("La suma de " + a + " y " + b + " es " + suma);
}
```

### Paso de argumentos

Cuando se llama a un método que acepta parámetros, se deben pasar argumentos correspondientes a los tipos y el número de parámetros definidos en el método.

```java
public static void main(String[] args) {
    saludar("Juan");
    sumar(5, 3);
}
```

### Referencia por valor

Los parámetros se pasan por valor, lo que significa que una copia del valor de cada argumento se pasa al parámetro correspondiente. Esto significa que los cambios realizados en los parámetros dentro del método no afectan a los argumentos originales fuera del método.

```java
public void duplicar(int x) {
    x *= 2;
    System.out.println("El valor duplicado es: " + x);
}

public static void main(String[] args) {
    int numero = 5;
    duplicar(numero); // El valor de numero no cambia fuera del método
    System.out.println("El valor original es: " + numero);
}
```

## Parámetros vs Argumentos

En el contexto de la programación, los términos "parámetros" y "argumentos" se refieren a conceptos relacionados pero distintos. Cuando llamas al método son argumentos y en la definición del método son parámetros.

**Parámetros:**

- Los parámetros son variables que se declaran en la definición de un método. Son utilizados para recibir valores que serán utilizados dentro del cuerpo del método.

- Los parámetros se especifican en la firma del método, dentro de los paréntesis que siguen al nombre del método.

- Cuando defines un método, puedes declarar cualquier número de parámetros, cada uno con un tipo de dato y un nombre.

- Por ejemplo, en el método sumar(int a, int b), a y b son parámetros.

**Argumentos:**

- Los argumentos son los valores reales que se pasan a un método cuando es llamado.

- Los argumentos se pasan al método durante su invocación, y estos valores pueden ser constantes, variables, o expresiones que resuelven a un valor del tipo esperado por los parámetros.

- Los argumentos se colocan entre paréntesis después del nombre del método cuando es llamado.

- Por ejemplo, en la llamada al método sumar(5, 3), 5 y 3 son argumentos.
