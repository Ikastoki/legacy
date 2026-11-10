---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Excepciones"
block: "Control de flujo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Excepciones</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Excepciones](#excepciones)
- [try y catch](#try-y-catch)
  - [finally](#finally)
- [throw](#throw)
- [throws](#throws)
- [Tipos de excepciones principales](#tipos-de-excepciones-principales)
  - [Excepciones comprobadas (Checked exceptions)](#excepciones-comprobadas-checked-exceptions)
  - [Excepciones no comprobadas (Unchecked exceptions)](#excepciones-no-comprobadas-unchecked-exceptions)

</div>
</div>

## Excepciones

Las excepciones son objetos que representan situaciones anómalas que ocurren durante la ejecución de un programa. Estas situaciones anómalas pueden ser errores de tiempo de ejecución (como divisiones por cero o acceso a un índice fuera del rango válido en un array) o condiciones excepcionales específicas del programa (como un archivo no encontrado o una conexión de red perdida).

Las excepciones en Java están diseñadas para proporcionar un mecanismo para manejar errores de manera estructurada y permitir que el programa responda a estas situaciones de manera apropiada. Cuando ocurre una excepción, se lanza (o "thrown") desde el lugar donde ocurrió el error. Si la excepción no se maneja localmente en ese lugar, se propaga hacia arriba en la pila de llamadas hasta que se encuentra un bloque de código que la maneje adecuadamente o hasta que el programa se detenga.

## try y catch

`try` y `catch` son bloques utilizados para manejar excepciones.

**Sintaxis**

- **try:** Este bloque envuelve el código que podría lanzar una excepción. Dentro de este bloque, se coloca el código que se sospecha que podría arrojar una excepción.

- **catch:** Este bloque se utiliza para manejar la excepción que ha sido lanzada dentro del bloque try. Se especifica el tipo de excepción que se espera manejar y un nombre para la referencia a la excepción.

- **TipoDeExcepcion:** Especifica el tipo de excepción que se espera manejar. Puede ser una excepción específica, como IOException, o una clase base, como Exception, para capturar cualquier excepción.

- **nombreDeExcepcion:** Es el nombre que se le da a la referencia de la excepción que ha sido lanzada. Puede ser cualquier nombre válido de variable.

```java
try {
    // Código que podría lanzar una excepción
} catch (TipoDeExcepcion nombreDeExcepcion) {
    // Código para manejar la excepción
}
```

**Ejemplo**

```java
public class Main {
    public static void main(String[] args) {
        try {
            int resultado = dividir(10, 0); // Intentando dividir por cero
            System.out.println("Resultado de la división: " + resultado);
        } catch (ArithmeticException e) {
            System.out.println("Error: División por cero.");
        }
    }

    public static int dividir(int dividendo, int divisor) {
        return dividendo / divisor; // Puede lanzar una excepción si divisor es cero
    }
}
```

### finally

La palabra clave finally en Java se utiliza en conjunto con bloques try-catch para proporcionar un bloque de código que se ejecutará independientemente de si se lanza una excepción o no.

El bloque finally se utiliza comúnmente para realizar limpieza de recursos, como cerrar archivos o conexiones de red abiertas en el bloque try, asegurando que estos recursos se liberen adecuadamente, incluso si ocurre una excepción. También se puede utilizar para realizar cualquier otra acción que deba ocurrir independientemente de si se lanza una excepción o no.

**Ejemplo**

```java
import java.io.*;

public class Main {
    public static void main(String[] args) {
        BufferedReader lector = null;
        try {
            lector = new BufferedReader(new FileReader("archivo.txt"));
            String linea = lector.readLine();
            System.out.println("Contenido del archivo: " + linea);
        } catch (IOException e) {
            System.out.println("Error de entrada/salida al leer el archivo: " + e.getMessage());
        } finally {
            try {
                if (lector != null) {
                    lector.close(); // Cerrar el lector de archivos
                }
            } catch (IOException e) {
                System.out.println("Error al cerrar el archivo: " + e.getMessage());
            }
        }
    }
}
```

## throw

La palabra clave throw en Java se utiliza para lanzar una excepción explícitamente desde cualquier parte de tu código. Permite crear y lanzar objetos de excepción en situaciones específicas donde se detecta un error o una condición excepcional que no se puede manejar localmente.

**Sintaxis**

```java
public class Main {
    public static void main(String[] args) {
        try {
            validarEdad(15);
        } catch (EdadInvalidaException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void validarEdad(int edad) throws EdadInvalidaException {
        if (edad < 18) {
            throw new EdadInvalidaException("La persona debe ser mayor de 18 años.");
        }
        System.out.println("La persona es mayor de 18 años.");
    }
}

class EdadInvalidaException extends Exception {
    public EdadInvalidaException(String mensaje) {
        super(mensaje);
    }
}
```

## throws

La palabra clave throws se utiliza en la firma de un método para indicar que el método puede lanzar una o más excepciones de un tipo específico. La palabra clave throws se coloca después de la lista de parámetros del método y antes del cuerpo del método.

**Sintaxis**

- **tipoDeRetorno:** Especifica el tipo de valor que devuelve el método, o void si el método no devuelve ningún valor.

- **nombreDelMetodo:** Es el nombre del método.

- **parametros:** Es la lista de parámetros que el método acepta, si los hay.

- **TipoDeExcepcion1, TipoDeExcepcion2, ...:** Es una lista de tipos de excepción que el método puede lanzar. Estos tipos de excepción deben ser subtipos de Throwable.

```java
tipoDeRetorno nombreDelMetodo(parametros) throws TipoDeExcepcion1, TipoDeExcepcion2, ... {
    // Cuerpo del método
}
```

Cuando un método declara que puede lanzar excepciones utilizando throws, cualquier código que llame a ese método debe manejar esas excepciones de alguna manera. Esto se puede hacer utilizando un bloque try-catch para capturar las excepciones o propagando las excepciones a métodos que los llamen utilizando también throws.

**Ejemplo**

```java
import java.io.*;

public class Main {
    public static void main(String[] args) {
        try {
            leerArchivo("archivo.txt");
        } catch (IOException e) {
            System.out.println("Error al leer el archivo: " + e.getMessage());
        }
    }

    public static void leerArchivo(String nombreArchivo) throws IOException {
        BufferedReader lector = new BufferedReader(new FileReader(nombreArchivo));
        String linea = lector.readLine();
        System.out.println("Contenido del archivo: " + linea);
        lector.close();
    }
}

```

> ✍️ Nota
>
> throw y throws no son lo mismo en Java. Aunque están relacionados con el manejo de excepciones, tienen propósitos diferentes.
>
> Throw se utiliza para lanzar excepciones dentro de un método, mientras que throws se utiliza para declarar las excepciones que un método puede lanzar, pero no maneja dentro de sí mismo

## Tipos de excepciones principales

### Excepciones comprobadas (Checked exceptions)

Las excepciones comprobadas (Checked exceptions) en Java son aquellas que el compilador obliga a manejar o declarar en la firma del método. Esto significa que el programador debe tomar medidas explícitas para manejar estas excepciones o propagarlas hacia arriba en la pila de llamadas.

Las excepciones comprobadas son una parte fundamental del manejo de errores en Java y están diseñadas para ayudar a los desarrolladores a escribir código robusto y confiable al obligarlos a anticipar y manejar situaciones excepcionales que puedan surgir durante la ejecución del programa.

Algunos ejemplos de excepciones comprobadas en Java incluyen:

- **IOException:** Se produce cuando ocurre un error de entrada/salida, como no poder abrir un archivo o una conexión de red.

- **SQLException:** Se produce cuando se produce un error relacionado con la base de datos al ejecutar una consulta SQL.

- **FileNotFoundException:** Se produce cuando se intenta abrir un archivo que no existe en el sistema de archivos.

**Ejemplo**

```java
import java.io.*;

public class Main {
    public static void main(String[] args) {
        try {
            BufferedReader lector = new BufferedReader(new FileReader("archivo.txt"));
            String linea = lector.readLine();
            System.out.println("Contenido del archivo: " + linea);
            lector.close();
        } catch (IOException e) {
            System.out.println("Error de entrada/salida al leer el archivo: " + e.getMessage());
        }
    }
}
```

```java
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader lector = new BufferedReader(new FileReader("archivo.txt"));
        String linea = lector.readLine();
        System.out.println("Contenido del archivo: " + linea);
        lector.close();
    }
}
```

### Excepciones no comprobadas (Unchecked exceptions)

Las excepciones no comprobadas (Unchecked exceptions) en Java son aquellas excepciones que el compilador no obliga a manejar. A diferencia de las excepciones comprobadas, no es necesario capturarlas o declararlas en la firma del método.

Estas excepciones suelen ser errores de programación o problemas que el programador no pudo anticipar o manejar. Se consideran excepciones no comprobadas porque generalmente están relacionadas con situaciones que están fuera del control del programador o que no se pueden manejar de manera adecuada en tiempo de compilación.

Algunos ejemplos de excepciones no comprobadas en Java incluyen:

- **ArithmeticException:** Se produce cuando ocurre un error aritmético, como una división por cero.

- **NullPointerException:** Se produce cuando se intenta acceder a un objeto que es null.

- **ArrayIndexOutOfBoundsException:** Se produce cuando se intenta acceder a un índice fuera del rango válido en un array.

Estas excepciones no comprobadas son subtipos de RuntimeException o Error. La diferencia entre ellas es que RuntimeException representa errores que podrían haberse evitado si el programador hubiera tomado precauciones adecuadas, mientras que Error representa situaciones más graves que generalmente están fuera del control del programador y que no deberían manejarse.

**Ejemplo**

```java
public class Main {
    public static void main(String[] args) {
        int[] array = {1, 2, 3};
        System.out.println(array[3]); // Intentando acceder a un índice fuera del rango válido
    }
}
```
