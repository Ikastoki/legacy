---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "¿Qué es Java?"
block: "Fundamentos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">¿Qué es Java?</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué es Java?](#qué-es-java)
- [Lenguaje compilado e interpretado](#lenguaje-compilado-e-interpretado)
- [Usos más comunes](#usos-más-comunes)
- [Características](#características)
  - [Plataformas independientes](#plataformas-independientes)
  - [Seguridad](#seguridad)
  - [Programación orientada a objetos](#programación-orientada-a-objetos)
  - [Robustez](#robustez)
  - [Arquitectura Neutral](#arquitectura-neutral)
  - [Multihilo](#multihilo)

</div>
</div>

## ¿Qué es Java?

Java es un lenguaje de programación de propósito general que se diseñó para tener la menor cantidad de dependencias posibles. Esto significa que los programas escritos en Java pueden ejecutarse en cualquier dispositivo que tenga un intérprete Java instalado, lo que los hace muy portátiles. Java es conocido por su capacidad de escribir una vez y ejecutar en cualquier lugar (write once, run anywhere, o WORA). Además, Java es un lenguaje orientado a objetos, lo que significa que se centra en la creación y manipulación de objetos que contienen datos y funcionalidades. También es ampliamente utilizado en el desarrollo de aplicaciones web, aplicaciones móviles, sistemas embebidos, y una amplia gama de otros tipos de software.

## Lenguaje compilado e interpretado

Java es un lenguaje de programación que se compila a bytecode, que luego es interpretado por una Máquina Virtual Java (JVM). Esto significa que Java es un lenguaje compilado e interpretado al mismo tiempo, lo que a menudo se describe como "compilado a bytecode y luego interpretado por la JVM".

Cuando compilas un programa Java, el compilador (javac) traduce el código fuente Java en un formato intermedio llamado bytecode. Este bytecode es un conjunto de instrucciones de nivel de máquina diseñadas para ser ejecutadas por la JVM.

Cuando ejecutas un programa Java, la JVM toma el bytecode generado por el compilador y lo interpreta o, en algunos casos, lo compila a código de máquina nativo utilizando el compilador JIT (Just-In-Time). La interpretación del bytecode implica que la JVM lee y ejecuta las instrucciones una por una, mientras que la compilación JIT convierte el bytecode en código de máquina nativo en tiempo de ejecución para mejorar el rendimiento.

Entonces, aunque Java no es completamente interpretado en el sentido tradicional, tampoco es completamente compilado a código de máquina nativo antes de la ejecución. En cambio, utiliza una combinación de compilación a bytecode y ejecución interpretada o compilación JIT para proporcionar un equilibrio entre portabilidad, seguridad y rendimiento. Esto es parte de lo que hace que Java sea un lenguaje tan versátil y popular para una amplia gama de aplicaciones de software.

## Usos más comunes

Hay principalmente 4 tipos de aplicaciones:

- **Aplicación independiente:**

  Las aplicaciones independientes también se conocen como aplicaciones de escritorio o aplicaciones basadas en ventanas. Estos son un software tradicional que necesitamos instalar en cada máquina.

  > ✍️ Nota
  >
  > Para crear este tipo de aplicaciones se puede utilizar AWR y Swing.

- **Aplicación web:**

  Una aplicación que se ejecuta en el lado del servidor y crea una página dinámica se llama aplicación web.

  > ✍️ Nota
  >
  > Para crear este tipo de aplicaciones se puede utilizar Servlet, JSP, Struts, Spring, Hibernate, JSF.

- **Aplicación institucional:**

  Programas de software diseñados específicamente para satisfacer las necesidades y requerimientos de instituciones como empresas, organizaciones gubernamentales, instituciones educativas, entidades financieras, y otros tipos de instituciones.

  > ✍️ Nota
  >
  > Para crear este tipo de aplicaciones se puede utilizar EJB.

- **Aplicación móvil:**

  Programas de software diseñados específicamente para móviles.

  > ✍️ Nota
  >
  > Para crear este tipo de aplicaciones se puede utilizar Android y Java ME.

## Características

El objetivo de la creación era hacer un lenguaje de programación **portátil, sencillo y seguro**.

Características importantes a tener en cuenta:

### Plataformas independientes

Java es conocido por su capacidad de ser una "plataforma independiente", lo que significa que las aplicaciones Java pueden ejecutarse en diferentes sistemas operativos sin necesidad de modificaciones adicionales. Esto se logra a través del concepto de "Write Once, Run Anywhere" (Escribir una vez, ejecutar en cualquier lugar) que Java promueve.

La independencia de la plataforma en Java se debe principalmente a dos factores:

1. **Máquina virtual Java (JVM):** Java se compila en un bytecode intermedio en lugar de un código máquina específico para una plataforma en particular. Este bytecode se ejecuta en la JVM, que está disponible para varias plataformas, como Windows, macOS y diferentes distribuciones de Linux. La JVM interpreta o compila el bytecode en código máquina nativo para la plataforma específica en la que se está ejecutando, lo que permite que las aplicaciones Java sean portables.

2. **Librerías estándar (APIs):** Java proporciona una amplia gama de librerías estándar (APIs) que ofrecen funcionalidades comunes y abstracciones de bajo nivel que son independientes de la plataforma. Esto significa que las aplicaciones Java pueden hacer uso de estas librerías sin preocuparse por los detalles específicos de la plataforma subyacente.

### Seguridad

La seguridad en Java es un aspecto fundamental y se aborda a través de múltiples capas y características en el lenguaje y su plataforma

Medidas de seguridad en Java:

1. **Sandbox de seguridad:** Java utiliza un modelo de seguridad basado en sandbox que restringe las operaciones que un programa puede realizar. Esto se logra ejecutando el código en un entorno controlado (sandbox) donde se imponen restricciones, como la prohibición de acceder al sistema de archivos local o a recursos del sistema, a menos que se otorguen permisos explícitos.

2. **Verificación de bytecode:** Antes de ejecutar un programa Java, la JVM verifica el bytecode para asegurarse de que cumple con ciertas reglas de seguridad. Esto ayuda a prevenir vulnerabilidades como el desbordamiento de búfer y otros errores de programación comunes que pueden ser aprovechados por atacantes.

3. Gestión de permisos y políticas de seguridad: Java utiliza un sistema de gestión de permisos y políticas de seguridad que permite controlar qué acciones puede realizar un programa Java. Estos permisos se otorgan mediante archivos de políticas de seguridad y pueden ser configurados para aplicaciones individuales o para todo el entorno de ejecución.

4. Clases y métodos seguros: Java proporciona clases y métodos específicos que están diseñados para operar de manera segura en entornos potencialmente peligrosos. Por ejemplo, las clases de cifrado y las funciones de manejo de archivos proporcionan interfaces seguras para realizar operaciones criptográficas y de E/S de manera segura.

5. Actualizaciones de seguridad: Oracle, el mantenedor principal de Java, proporciona regularmente actualizaciones de seguridad para abordar vulnerabilidades conocidas en la plataforma Java. Es importante mantener actualizadas las versiones de Java para protegerse contra nuevas amenazas de seguridad.

6. Criptografía: Java incluye bibliotecas para realizar operaciones criptográficas seguras, como cifrado y firma digital. Estas bibliotecas están diseñadas para cumplir con los estándares de seguridad y son utilizadas por aplicaciones Java para garantizar la confidencialidad e integridad de los datos.

> ✍️ Nota
>
> Java incorpora una variedad de características y prácticas de seguridad que ayudan a proteger las aplicaciones Java y los sistemas en los que se ejecutan contra diversas amenazas de seguridad. Sin embargo, es importante que los desarrolladores sigan buenas prácticas de programación y mantengan actualizadas las versiones de Java para maximizar la seguridad de sus aplicaciones.

### Programación orientada a objetos

Java es un lenguaje de programación orientado a objetos. **Todo en Java es un objeto**.
Orientado a objetos significa que organizamos nuestro software como una combinación de diferentes tipos de objetos que incorporan datos y comportamiento. Es una metodología que simplifica el desarrollo y mantenimiento de software proporcionando algunas reglas.

Conceptos básicos:

- Objetos
- Clases
- Herencia
- Polimorfismo
- Abstracción
- Encapsulación

### Robustez

La robustez es una característica fundamental de Java que se refiere a la capacidad del lenguaje y su plataforma para manejar errores y condiciones excepcionales de manera efectiva, evitando fallos catastróficos y comportamientos inesperados. Aquí hay algunas razones por las cuales Java es considerado un lenguaje robusto:

- **Gestión de excepciones:** Java tiene un sólido sistema de manejo de excepciones que permite a los programadores anticipar y manejar errores de manera elegante.

- **Verificación de tipos:** Java es un lenguaje de programación de tipado estático, lo que significa que el compilador realiza una verificación exhaustiva de tipos durante la compilación. Esto ayuda a detectar errores de tipo en tiempo de compilación, evitando errores comunes que podrían conducir a fallos en tiempo de ejecución.

- **Gestión de memoria automática:** Java utiliza un recolector de basura (garbage collector) para administrar automáticamente la memoria asignada a los objetos, lo que evita problemas comunes relacionados con la gestión manual de memoria, como fugas de memoria y corrupción de memoria.

- **Ausencia de punteros aritméticos:** A diferencia de lenguajes como C y C++, Java no permite el acceso directo a direcciones de memoria o la manipulación de punteros aritméticos. Esto ayuda a prevenir errores de bajo nivel que podrían comprometer la estabilidad y seguridad del programa.

- **Control de acceso y encapsulación:** Java utiliza modificadores de acceso (public, private, protected) para controlar el acceso a variables y métodos de una clase. Esto promueve el principio de encapsulación, que ayuda a ocultar la implementación interna de una clase y protegerla contra modificaciones no autorizadas.

- Gestión de hilos (multithreading): Java proporciona una API robusta para trabajar con hilos, lo que permite a los programadores crear aplicaciones concurrentes de manera segura y eficiente. La sincronización y los mecanismos de bloqueo en Java ayudan a evitar problemas como las condiciones de carrera y los bloqueos muertos.

### Arquitectura Neutral

La arquitectura-neutral contribuye significativamente a su portabilidad y capacidad de ejecución en una amplia variedad de dispositivos y plataformas. Aquí hay algunas razones por las cuales Java es considerado arquitectura-neutral:

- **Bytecode y JVM:** En Java, el código fuente se compila en un formato intermedio llamado bytecode en lugar de código de máquina específico de la arquitectura de la computadora. Este bytecode se ejecuta en la Máquina Virtual Java (JVM), que está disponible para diversas arquitecturas de hardware y sistemas operativos.

- **Independencia de plataforma:** La JVM es responsable de interpretar o compilar el bytecode en código de máquina nativo, lo que permite que las aplicaciones Java se ejecuten de manera consistente en diferentes sistemas operativos y arquitecturas de hardware sin necesidad de realizar cambios en el código fuente.

- **Portabilidad:** El enfoque basado en bytecode y la JVM garantizan que una aplicación Java pueda ser desarrollada una vez y ejecutada en cualquier plataforma que admita Java, lo que simplifica el proceso de desarrollo y distribución de software.

- **Estandarización:** Java sigue especificaciones y estándares rigurosos que garantizan la coherencia y la compatibilidad entre las diferentes implementaciones de la JVM en varias plataformas. Esto promueve la interoperabilidad y facilita la creación de aplicaciones que funcionan de manera confiable en diferentes entornos.

- **Abstracción de la plataforma:** Java proporciona una capa de abstracción sobre la plataforma subyacente, lo que significa que los detalles específicos del sistema operativo y la arquitectura de hardware están ocultos para el desarrollador. Esto simplifica el desarrollo de software al proporcionar una interfaz consistente y uniforme para interactuar con el entorno de ejecución.

### Multihilo

Java ofrece un conjunto completo de características y APIs para la programación multihilo, lo que permite a los desarrolladores crear aplicaciones concurrentes y escalables de manera segura y eficiente. Sin embargo, trabajar con múltiples hilos también introduce desafíos adicionales, como condiciones de carrera y bloqueos, que deben abordarse cuidadosamente para garantizar el correcto funcionamiento del programa.
