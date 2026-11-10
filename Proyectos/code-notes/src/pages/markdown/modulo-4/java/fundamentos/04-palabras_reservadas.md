---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Palabras reservadas"
block: "Fundamentos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Palabras reservadas</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Palabras reservadas](#palabras-reservadas)
  - [Tabla con algunas palabras reservadas](#tabla-con-algunas-palabras-reservadas)

</div>
</div>

## Palabras reservadas

Las palabras reservadas en Java son palabras clave que tienen un significado especial y están reservadas para su uso en el lenguaje. Estas palabras tienen funciones específicas y no pueden ser utilizadas como identificadores (como nombres de variables, clases o métodos) en un programa Java. Las palabras reservadas se utilizan para definir la sintaxis y la estructura del código en Java.

### Tabla con algunas palabras reservadas

<div class="only-mobile-warning">📵 Esta tabla solo está disponible en versión escritorio.</div>

| Concepto     | Definición                                                                                                                                                                                                       |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| abstract     | Especifica que una clase o método será implementado más tarde, en una subclase.                                                                                                                                  |
| assert       | Assert describe un predicado colocado en un programa Java para indicar que el desarrollador piensa que el predicado es siempre verdadero en ese lugar.                                                           |
| boolean      | Un tipo de datos que puede contener solo valores Verdadero y Falso.                                                                                                                                              |
| break        | Una declaración de control para salir de bucles.                                                                                                                                                                 |
| byte         | Un tipo de datos que puede contener valores de datos de 8 bits.                                                                                                                                                  |
| case         | Utilizado en declaraciones switch para marcar bloques de texto.                                                                                                                                                  |
| catch        | Captura excepciones generadas por declaraciones try.                                                                                                                                                             |
| char         | Un tipo de datos que puede contener caracteres Unicode sin signo de 16 bits.                                                                                                                                     |
| class        | Declara una nueva clase.                                                                                                                                                                                         |
| continue     | Envía el control fuera de un bucle.                                                                                                                                                                              |
| default      | Especifica el bloque de código predeterminado en una declaración switch.                                                                                                                                         |
| do           | Comienza un bucle do-while.                                                                                                                                                                                      |
| double       | Un tipo de datos que puede contener números de punto flotante de 64 bits.                                                                                                                                        |
| else         | Indica ramas alternativas en una declaración if.                                                                                                                                                                 |
| enum         | Una palabra clave de Java que se utiliza para declarar un tipo enumerado. Las enumeraciones extienden la clase base.                                                                                             |
| extends      | Indica que una clase se deriva de otra clase o interfaz.                                                                                                                                                         |
| final        | Indica que una variable contiene un valor constante o que un método no será anulado.                                                                                                                             |
| finally      | Indica un bloque de código en una estructura try-catch que siempre se ejecutará.                                                                                                                                 |
| float        | Un tipo de datos que contiene un número de punto flotante de 32 bits.                                                                                                                                            |
| for          | Se utiliza para iniciar un bucle for.                                                                                                                                                                            |
| if           | Prueba una expresión verdadero/falso y ramifica en consecuencia.                                                                                                                                                 |
| implements   | Especifica que una clase implementa una interfaz.                                                                                                                                                                |
| import       | Hace referencia a otras clases.                                                                                                                                                                                  |
| instanceof   | Indica si un objeto es una instancia de una clase específica o implementa una interfaz.                                                                                                                          |
| int          | Un tipo de datos que puede contener un entero de 32 bits con signo.                                                                                                                                              |
| interface    | Declara una interfaz.                                                                                                                                                                                            |
| long         | Un tipo de datos que contiene un número entero de 64 bits.                                                                                                                                                       |
| native       | Especifica que un método se implementa con código nativo (específico de la plataforma).                                                                                                                          |
| new          | Crea nuevos objetos.                                                                                                                                                                                             |
| null         | Esto indica que una referencia no se refiere a nada.                                                                                                                                                             |
| package      | Declara un paquete Java.                                                                                                                                                                                         |
| private      | Un especificador de acceso que indica que un método o variable solo puede ser accedido en la clase en la que se declara.                                                                                         |
| protected    | Un especificador de acceso que indica que un método o variable solo puede ser accedido en la clase en la que se declara (o una subclase de la clase en la que se declara o en otras clases en el mismo paquete). |
| public       | Un especificador de acceso utilizado para clases, interfaces, métodos y variables que indica que un ítem es accesible en toda la aplicación (o donde la clase que lo define es accesible).                       |
| return       | Envía control y posiblemente un valor de retorno desde un método llamado.                                                                                                                                        |
| short        | Un tipo de datos que puede contener un entero de 16 bits.                                                                                                                                                        |
| static       | Indica que una variable o método es un método de clase (en lugar de estar limitado a un objeto particular).                                                                                                      |
| strictfp     | Una palabra clave de Java que se utiliza para restringir la precisión y el redondeo de cálculos de punto flotante para garantizar la portabilidad.                                                               |
| super        | Se refiere a la clase base de una clase (utilizado en un método o constructor de clase).                                                                                                                         |
| switch       | Una declaración que ejecuta código basado en un valor de prueba.                                                                                                                                                 |
| synchronized | Especifica secciones críticas o métodos en código multihilo.                                                                                                                                                     |
| this         | Se refiere al objeto actual en un método o constructor.                                                                                                                                                          |
| throw        | Crea una excepción.                                                                                                                                                                                              |
| throws       | Indica qué excepciones pueden ser lanzadas por un método.                                                                                                                                                        |
| transient    | Especifica que una variable no es parte del estado persistente de un objeto.                                                                                                                                     |
| try          | Comienza un bloque de código que será probado para excepciones.                                                                                                                                                  |
| void         | Especifica que un método no tiene un valor de retorno.                                                                                                                                                           |
| volatile     | Esto indica que una variable puede cambiar de forma asincrónica.                                                                                                                                                 |
| while        | Comienza un bucle while.                                                                                                                                                                                         |
| sealed       | La palabra clave sealed se utiliza para declarar una clase como "sellada", lo que significa que restringe qué clases pueden extenderla.                                                                          |
| permits      | La palabra clave permits se utiliza dentro de una declaración de clase sellada para especificar las subclases que tienen permitido extenderla.                                                                   |
