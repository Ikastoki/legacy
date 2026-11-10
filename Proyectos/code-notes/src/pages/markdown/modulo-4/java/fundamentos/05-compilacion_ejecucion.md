---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Compilación"
block: "Fundamentos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Compilación</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Compilación](#compilación)
  - [Proceso de compilación](#proceso-de-compilación)
- [Tiempo de ejecución](#tiempo-de-ejecución)

</div>
</div>

## Compilación

La compilación en Java se refiere al proceso de traducir el código fuente escrito en Java(archivo con extensión .java) en código de bytes Java(archivo con extensión .class) que puede ser ejecutado por la Máquina Virtual Java (JVM).

La compilación en Java es un proceso de dos pasos: primero se compila el código fuente en bytecode Java, y luego se ejecuta el bytecode en la JVM. Este enfoque permite que las aplicaciones Java sean portables y se ejecuten en diferentes plataformas sin necesidad de recompilar el código fuente.

### Proceso de compilación

1. **Escribir código fuente:** El proceso comienza escribiendo el código fuente en Java utilizando un editor de texto o un entorno de desarrollo integrado (IDE).

2. **Guardar el archivo Java:** El código fuente se guarda en un archivo con extensión .java. Es importante que el nombre del archivo coincida con el nombre de la clase principal que contiene el método main() si la clase es pública.

3. **Compilación del código fuente:** Utilizando el compilador Java (javac), el archivo .java se compila en bytecode Java, que es un código de bytes independiente de la plataforma y contiene las instrucciones para la JVM.

   - Comando: `javac MiClase.java`
     > ✍️ Nota
     >
     > Este comando compila el archivo MiClase.java y genera un archivo MiClase.class que contiene el bytecode Java.

4. **Verificación del código compilado:** Después de la compilación, el compilador Java realiza una verificación de tipos para garantizar que el código sea sintácticamente correcto y cumpla con las reglas de tipado estático de Java. Si hay errores, se mostrarán mensajes de error y el archivo .class no se generará.

5. **Ejecución del programa:** Una vez que el archivo .class se ha generado correctamente, se puede ejecutar utilizando la Máquina Virtual Java (JVM). La JVM carga el archivo .class, interpreta su bytecode y ejecuta el programa.

   - Comando: `java MiClase`
     > ✍️ Nota
     >
     > Este comando ejecuta el programa y busca la clase principal (MiClase) para comenzar la ejecución.

## Tiempo de ejecución

Durante el tiempo de ejecución de un programa Java, la JVM realiza una serie de pasos para cargar, verificar, interpretar o compilar y ejecutar el código bytecode, mientras administra los recursos y maneja las excepciones que puedan surgir durante la ejecución del programa.

Pasos que ocurren para que la aplicación se ejecute correctamente en la Máquina Virtual Java (JVM).

1.  **Carga de clases:** La JVM carga las clases necesarias para ejecutar el programa. Esto incluye la carga de la clase principal (la que contiene el método main()), así como cualquier otra clase o biblioteca que se necesite durante la ejecución.

2.  **Verificación de bytecode:** La JVM verifica el bytecode de las clases cargadas para asegurarse de que cumplan con las reglas de seguridad y de integridad de Java. Esto incluye verificar la estructura y el formato del bytecode para evitar vulnerabilidades de seguridad y errores de ejecución.

3.  **Interpretación o compilación JIT:** Una vez que se han verificado las clases, la JVM puede interpretar directamente el bytecode o compilarlo en código máquina nativo utilizando el compilador JIT (Just-In-Time). La compilación JIT mejora el rendimiento al traducir partes del bytecode en código nativo que puede ejecutarse más eficientemente en el hardware subyacente.

4.  **Ejecución del programa:** Con las clases cargadas y el bytecode verificado e interpretado o compilado, la JVM comienza a ejecutar el programa. Esto implica ejecutar el método main() de la clase principal y seguir las instrucciones del programa para realizar las tareas especificadas.

5.  **Gestión de memoria:** Durante la ejecución del programa, la JVM gestiona dinámicamente la asignación y liberación de memoria para objetos y otros recursos utilizados por el programa. Esto incluye la gestión del heap de objetos, la recolección de basura para liberar la memoria no utilizada y la administración de recursos como hilos y sockets de red.

6.  **Manejo de excepciones:** La JVM maneja las excepciones que se producen durante la ejecución del programa, como errores de tiempo de ejecución, excepciones lanzadas explícitamente por el código y excepciones relacionadas con la memoria. Esto implica detener la ejecución normal del programa, buscar un manejador de excepciones adecuado y tomar las acciones necesarias para manejar la excepción de manera adecuada.
