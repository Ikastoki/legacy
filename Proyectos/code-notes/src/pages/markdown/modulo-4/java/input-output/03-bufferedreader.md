---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "BufferedReader"
block: "Input/Output"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">BufferedReader</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [BufferedReader](#bufferedreader)

</div>
</div>

## BufferedReader

BufferedReader es una clase en Java que se encuentra en el paquete java.io. Se utiliza para leer texto desde una fuente de entrada, como un archivo o un flujo de entrada, de manera eficiente mediante el almacenamiento en búfer.

La eficiencia proviene del hecho de que BufferedReader almacena internamente un búfer de caracteres, lo que reduce la cantidad de operaciones de lectura realizadas en el sistema subyacente (como el sistema de archivos o el sistema de entrada estándar). Esto puede mejorar significativamente el rendimiento, especialmente al leer grandes cantidades de datos.

Para utilizar BufferedReader, primero necesitas crear un objeto BufferedReader asociado a una fuente de entrada específica, como un FileReader para leer desde un archivo o InputStreamReader para leer desde otros tipos de flujos de entrada. Luego, puedes utilizar el método readLine() para leer una línea de texto desde la fuente de entrada.

**Ejemplo**

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("archivo.txt"))) {
            String linea;
            while ((linea = reader.readLine()) != null) {
                System.out.println(linea);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```

> ✍️ Nota
>
> Es importante cerrar el objeto BufferedReader utilizando el bloque try-with-resources o llamando explícitamente al método close() cuando ya no lo necesites para liberar los recursos asociados y garantizar la correcta gestión de la memoria.
