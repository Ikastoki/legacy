---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Variables"
block: "Fundamentos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Variables</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Variables](#variables)
- [Tipos de Variables](#tipos-de-variables)
  - [Variables Locales](#variables-locales)
  - [Variables de Instancia](#variables-de-instancia)
  - [Variables Estáticas](#variables-estáticas)

</div>
</div>

## Variables

Las variables son contenedores que se utilizan para almacenar datos. Cada variable tiene [un tipo de datos](./09-tipos_de_datos.md) que define qué tipo de valores puede contener y un nombre que se utiliza para referirse a ella en el código.

**Ejemplo**

```java
public class EjemploVariablesSimples {
    public static void main(String[] args) {
        // Variables simples de tipo primitivo
        int edad = 25;
        double altura = 1.75;
        char inicial = 'J';
        boolean esEstudiante = true;

        // Mostrar los valores de las variables
        System.out.println("Edad: " + edad);
        System.out.println("Altura: " + altura);
        System.out.println("Inicial: " + inicial);
        System.out.println("¿Es estudiante?: " + esEstudiante);
    }
}
```

## Tipos de Variables

> ✍️ Nota
>
> Los tipos de variables están estrechamente relacionados con los conceptos de la Programación Orientada a Objetos (POO). Están asociados principalmente con la visibilidad y el alcance de esas variables en relación con las clases y objetos. Si estas leyendo esto y recién comienzas a programar lo más seguro es que sea complicado de entender. Puedes echar un vistazo y cuando veas POO quedara más claro.

### Variables Locales

En Java, una variable local es una variable declarada dentro de un método, constructor, o bloque. Estas variables solo son accesibles dentro del alcance en el que se han declarado.

**Características:**

- **Alcance (Scope):**
  - Una variable local solo es válida dentro del bloque en el que se declara. El alcance de una variable local comienza cuando se declara y termina cuando finaliza el bloque que la contiene.
  - No se puede acceder a una variable local fuera del bloque en el que se declaró.
- **Inicialización:**
  - Las variables locales deben ser inicializadas antes de ser utilizadas.
  - Si una variable local no se inicializa antes de su uso, se generará un error de compilación.
- **No tienen valores por defecto:**
  - A diferencia de las variables de instancia (miembro de clase), las variables locales no tienen valores por defecto. Por lo tanto, es obligatorio inicializarlas antes de usarlas.

**Ejemplo**

```java
public class EjemploVariablesLocales {
    public void miMetodo() {
        // Declaración e inicialización de una variable local
        int x = 10;
        System.out.println("El valor de x es: " + x);

        // Otro bloque
        {
            // Declaración de otra variable local
            int y = 20;
            System.out.println("El valor de y es: " + y);
        }

        // La variable "y" no es accesible aquí
        // System.out.println("El valor de y es: " + y); // Esto generaría un error de compilación

        // Las variables locales pueden tener el mismo nombre en bloques diferentes
        int x2 = 30;
        System.out.println("El valor de x2 es: " + x2);
    }

    public static void main(String[] args) {
        EjemploVariablesLocales ejemplo = new EjemploVariablesLocales();
        ejemplo.miMetodo();
    }
}

```

### Variables de Instancia

Las variables de instancia en Java son variables que pertenecen a cada instancia (objeto) de una clase. Cada objeto tiene su propia copia de las variables de instancia, lo que significa que los valores de estas variables pueden ser diferentes entre diferentes objetos de la misma clase.

**Características:**

- **Pertenecen a objetos individuales:**
  - Cada objeto de una clase tiene sus propias variables de instancia.
  - Los valores de las variables de instancia pueden variar entre diferentes objetos de la misma clase.
- **Inicialización:**
  - Las variables de instancia se inicializan automáticamente con valores predeterminados si no se les asigna un valor explícitamente.
  - Los valores predeterminados dependen del tipo de la variable. Por ejemplo, las variables de tipo int se inicializan con 0, las variables de tipo boolean se inicializan con false, etc.
- **Acceso:**
  - Las variables de instancia se pueden acceder y modificar utilizando la instancia de la clase a la que pertenecen.
  - Se accede a las variables de instancia utilizando el operador de acceso punto (.).

**Ejemplo**

```java
public class Persona {
    // Variables de instancia
    String nombre;
    int edad;
    boolean esEstudiante;

    // Constructor
    public Persona(String nombre, int edad, boolean esEstudiante) {
        this.nombre = nombre;
        this.edad = edad;
        this.esEstudiante = esEstudiante;
    }

    // Método para mostrar información de la persona
    public void mostrarInformacion() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
        System.out.println("Es estudiante: " + esEstudiante);
    }

    public static void main(String[] args) {
        // Crear objetos de la clase Persona
        Persona persona1 = new Persona("Juan", 25, true);
        Persona persona2 = new Persona("María", 30, false);

        // Acceder a las variables de instancia y llamar al método mostrarInformacion()
        System.out.println("Información de la persona 1:");
        persona1.mostrarInformacion();
        System.out.println();

        System.out.println("Información de la persona 2:");
        persona2.mostrarInformacion();
    }
}

```

### Variables Estáticas

Las variables estáticas en Java son variables asociadas a la clase en sí misma, en lugar de a instancias individuales de la clase. Esto significa que una sola copia de la variable estática se comparte entre todas las instancias de esa clase y se puede acceder a ella utilizando el nombre de la clase, en lugar de a través de una instancia específica de la clase.

**Características:**

- **Asociadas a la clase:**
  - Las variables estáticas pertenecen a la clase en sí misma, en lugar de a instancias individuales de la clase.
  - Se definen con la palabra clave static y se inicializan una sola vez cuando se carga la clase en la memoria.
- **Compartidas entre todas las instancias:**
  - Una sola copia de la variable estática se comparte entre todas las instancias de la clase.
  - Si el valor de una variable estática se modifica en una instancia, ese cambio se reflejará en todas las demás instancias y en cualquier otra parte del código que acceda a esa variable.
- **Acceso a través del nombre de la clase:**
  - Las variables estáticas se pueden acceder utilizando el nombre de la clase, seguido de un punto (.) y el nombre de la variable.
  - No es necesario crear una instancia de la clase para acceder a una variable estática.
- **Alcance global:**
  - Las variables estáticas tienen un alcance global dentro de la clase en la que están definidas y se pueden acceder desde cualquier parte del código donde se pueda acceder a la clase.

**Ejemplo**

```java
public class EjemploVariablesEstaticas {
    // Variable estática
    static int contador = 0;

    public EjemploVariablesEstaticas() {
        // Incrementar el contador cada vez que se crea una nueva instancia de la clase
        contador++;
    }

    public static void main(String[] args) {
        // Acceder a la variable estática a través del nombre de la clase
        System.out.println("Valor del contador: " + EjemploVariablesEstaticas.contador);

        // Crear instancias de la clase
        EjemploVariablesEstaticas obj1 = new EjemploVariablesEstaticas();
        EjemploVariablesEstaticas obj2 = new EjemploVariablesEstaticas();

        // Mostrar el valor actual del contador después de crear las instancias
        System.out.println("Valor del contador después de crear las instancias: " + EjemploVariablesEstaticas.contador);
    }
}
```
