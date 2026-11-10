---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Tipado"
block: "Fundamentos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Tipado</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Tipado](#tipado)
  - [Características](#características)
- [Tipos de datos](#tipos-de-datos)
  - [Datos Primitivos](#datos-primitivos)
  - [Datos de Referencia](#datos-de-referencia)

</div>
</div>

## Tipado

Java es un lenguaje de programación fuertemente tipado. Esto significa que en Java, todos los tipos de datos de las variables deben ser declarados explícitamente y el compilador verifica los tipos de datos en tiempo de compilación para asegurar que se utilicen de manera coherente y segura a lo largo del programa.

### Características

- **Declaración de tipos:** En Java, debes declarar el tipo de datos de todas las variables antes de usarlas. Por ejemplo, int, double, String, etc.

- **Verificación de tipos en tiempo de compilación:** El compilador de Java verifica los tipos de datos en tiempo de compilación para asegurarse de que no haya asignaciones o operaciones entre tipos incompatibles. Esto ayuda a detectar errores de tipo antes de que se ejecute el programa.

- **Estricta coerción de tipos:** Java no realiza conversiones automáticas entre tipos incompatibles sin una conversión explícita del desarrollador (casting). Por ejemplo, no puedes asignar un valor double a una variable int sin una conversión explícita.

- **Fuerte restricción en las operaciones entre tipos:** En Java, no puedes realizar operaciones entre tipos de datos que no sean compatibles. Por ejemplo, no puedes sumar una cadena (String) y un número (int) sin una conversión explícita.

- **Seguridad de tipos:** La fuerte tipificación en Java ayuda a prevenir errores comunes relacionados con los tipos de datos, como errores de desbordamiento de memoria, errores de truncamiento y errores de acceso a la memoria no válidos.

## Tipos de datos

Los tipos de datos se pueden clasificar en dos categorías principales: tipos de datos primitivos y tipos de datos de referencia (también conocidos como tipos no primitivos o tipos de objetos).

Los tipos de datos primitivos se utilizan para almacenar valores simples, mientras que los tipos de datos de referencia se utilizan para almacenar referencias a objetos en la memoria. Los tipos de datos primitivos se almacenan en la pila de memoria, mientras que los objetos se almacenan en el heap de memoria.

> ✍️ Nota
>
> El "heap" es una región de la memoria donde se almacenan los objetos creados durante la ejecución de un programa. Es una estructura de datos dinámica que se utiliza para asignar y desasignar memoria para objetos durante el tiempo de ejecución.

### Datos Primitivos

- **No numéricos**

  - boolean: Un tipo de datos que puede tener uno de dos valores: true o false.
  - char: Un tipo de datos de 16 bits que puede almacenar un único carácter Unicode.

- **Numéricos**

  - Enteros

    - byte: Un tipo de datos de 8 bits que puede almacenar valores enteros en el rango de -128 a 127.
    - short: Un tipo de datos de 16 bits que puede almacenar valores enteros en el rango de -32,768 a 32,767.
    - int: Un tipo de datos de 32 bits que puede almacenar valores enteros en el rango de -2,147,483,648 a 2,147,483,647.
    - long: Un tipo de datos de 64 bits que puede almacenar valores enteros en el rango de -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807.

  - Coma flotante
    - float: Un tipo de datos de 32 bits que puede almacenar valores de punto flotante de precisión simple.
    - double: Un tipo de datos de 64 bits que puede almacenar valores de punto flotante de doble precisión.

**Ejemplos**

```java
public class EjemploDatosPrimitivos {
    public static void main(String[] args) {
        // Declaración e inicialización de variables de tipos primitivos
        int numeroEntero = 10;
        double numeroDecimal = 3.14;
        char caracter = 'A';
        boolean esVerdadero = true;

        // Imprimir los valores de las variables
        System.out.println("Número entero: " + numeroEntero);
        System.out.println("Número decimal: " + numeroDecimal);
        System.out.println("Carácter: " + caracter);
        System.out.println("Booleano: " + esVerdadero);
    }
}
```

```java
public class EjemploDatosPrimitivos {
    public static void main(String[] args) {
        // Declaración e inicialización de variables de tipos primitivos
        int edad = 25;
        double altura = 1.75;
        char inicial = 'J';
        boolean esEstudiante = true;

        // Imprimir los valores de las variables
        System.out.println("Edad: " + edad);
        System.out.println("Altura: " + altura);
        System.out.println("Inicial: " + inicial);
        System.out.println("¿Es estudiante?: " + esEstudiante);
    }
}
```

### Datos de Referencia

- String: Una secuencia inmutable de caracteres Unicode.

- Arrays: Colecciones de elementos del mismo tipo.

- Clases: personalizadas: Las clases que defines en tu programa, como las que creas para representar objetos específicos en tu aplicación.

- Interfaces: Las definiciones de métodos que una clase puede implementar.

> ✍️ Nota
>
> Ejemplos más adelante en cada una de su secciones.
