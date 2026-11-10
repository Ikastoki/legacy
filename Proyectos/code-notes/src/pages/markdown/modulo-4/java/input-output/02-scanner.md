---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Scanner"
block: "Input/Output"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Scanner</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Scanner](#scanner)

</div>
</div>

## Scanner

Scanner es una clase en Java que se encuentra en el paquete java.util. Se utiliza para obtener la entrada del usuario desde la consola o desde otros tipos de fuentes, como archivos, y procesarla en tu programa.

Para utilizar Scanner, primero necesitas crear un objeto Scanner asociado a una fuente de entrada específica, como la entrada estándar (System.in) o un archivo. Luego, puedes usar los métodos proporcionados por la clase Scanner para leer datos desde esa fuente.

**Ejemplo**

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Por favor, ingresa tu nombre: ");
        String nombre = scanner.nextLine();

        System.out.print("Por favor, ingresa tu edad: ");
        int edad = scanner.nextInt();

        System.out.println("Hola, " + nombre + ". Tienes " + edad + " años.");

        scanner.close();
    }
}
```

> ✍️ Nota
>
> Es importante cerrar el objeto Scanner utilizando el método close() cuando ya no lo necesites para liberar los recursos asociados.

Además de la entrada estándar, Scanner también puede leer datos de otros tipos de fuentes, como archivos, cadenas de texto y flujos de datos. Esto lo hace muy útil para una amplia gama de aplicaciones de entrada/salida en Java.