---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "String"
block: "Clases integradas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">String</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [String](#string)
- [Inmutables](#inmutables)
  - [StringBuffer](#stringbuffer)
- [Métodos importantes](#métodos-importantes)

</div>
</div>

## String

La clase String es una de las clases más importantes en Java y se utiliza para representar cadenas de caracteres.

- La clase String en Java representa una secuencia inmutable de caracteres Unicode.

- Las cadenas en Java se crean utilizando literales de cadena (por ejemplo, "Hola Mundo") o utilizando el constructor de la clase String.

- Una vez creada, una cadena no puede modificarse. Cualquier operación que parezca modificar una cadena en realidad crea una nueva cadena.

- Las cadenas en Java son objetos, no tipos primitivos.

## Inmutables

Los objetos de la clase String en Java son inmutables, lo que significa que una vez que se crea un objeto String, su contenido no puede ser modificado.

- **No se puede cambiar su contenido:** Una vez que se crea un objeto String, no se puede cambiar su valor. Cualquier operación que parezca modificar el contenido de un String en realidad crea un nuevo String con el contenido modificado.

- **Seguridad:** La inmutabilidad de los String proporciona seguridad en el manejo de datos, ya que evita que otros objetos modifiquen su contenido de manera no autorizada.

- **Hace que el código sea más predecible:** Al ser inmutables, los String se comportan de manera predecible en el código, lo que facilita la depuración y el mantenimiento.

```java
/*
En este caso, parece que estamos modificando el contenido de str al agregar " Mundo" al final de "Hola". Sin embargo, en realidad se está creando un nuevo String con el contenido "Hola Mundo" y asignándolo a la variable str. El String original "Hola" permanece inmutable.
*/
String str = "Hola";
str += " Mundo";
```

### StringBuffer

Para manejar cadenas de manera mutable, es decir, donde se pueden realizar modificaciones en su contenido, se puede utilizar la clase StringBuffer. A diferencia de la clase String, los objetos StringBuffer son mutables, lo que significa que su contenido puede ser modificado sin necesidad de crear un nuevo objeto en cada operación.

```java
StringBuffer buffer = new StringBuffer("Hola");
buffer.append(" Mundo"); // Agregar " Mundo" al final de la cadena
buffer.insert(5, ","); // Insertar una coma en la posición 5
buffer.replace(5, 6, "!"); // Reemplazar la coma por un signo de exclamación
buffer.deleteCharAt(4); // Eliminar el espacio en la posición 4

System.out.println(buffer); // Imprime "Hola,Mundo!"
```

## Métodos importantes

- **length():** Devuelve la longitud de la cadena.

- **charAt(int index):** Devuelve el carácter en la posición especificada.

- **substring(int beginIndex):** Devuelve una nueva cadena que es un subconjunto de la cadena original, comenzando desde beginIndex.

- **substring(int beginIndex, int endIndex):** Devuelve una nueva cadena que es un subconjunto de la cadena original, comenzando desde beginIndex y hasta endIndex - 1.

- **equals(Object obj):** Comprueba si la cadena es igual a otro objeto.

- **equalsIgnoreCase(String anotherString):** Comprueba si la cadena es igual a otra cadena, ignorando las diferencias de mayúsculas y minúsculas.

- **indexOf(String str):** Devuelve la posición de la primera ocurrencia de la subcadena especificada dentro de la cadena.

- **toUpperCase():** Devuelve una nueva cadena con todos los caracteres convertidos a mayúsculas.

- **toLowerCase():** Devuelve una nueva cadena con todos los caracteres convertidos a minúsculas.

- **trim():** Devuelve una copia de la cadena sin espacios en blanco al principio o al final.

```java
String str1 = "Hola";
String str2 = new String("Mundo");
String concatenada = str1 + " " + str2; // Concatenación de cadenas
int longitud = str1.length(); // Obtiene la longitud de la cadena

System.out.println(concatenada); // Imprime "Hola Mundo"
System.out.println(str1.charAt(0)); // Imprime 'H'
System.out.println(str2.substring(0, 3)); // Imprime "Mun"
System.out.println(str1.equals("Hola")); // Imprime true
```
