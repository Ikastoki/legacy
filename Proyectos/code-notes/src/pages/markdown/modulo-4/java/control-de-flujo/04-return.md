---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Return"
block: "Control de flujo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Return</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Return](#return)
- [return !== break](#return--break)

</div>
</div>

## Return

La palabra clave return se utiliza para finalizar la ejecución de un método y, opcionalmente, devolver un valor resultante al lugar donde se invocó el método.

Cuando se encuentra la instrucción return dentro de un método, el flujo de ejecución del programa **sale inmediatamente del método**, sin importar si hay más código después de la instrucción return en el mismo método.

**Sintaxis**

```java
return; // Sin devolver ningún valor

return expression; // Devuelve un valor de tipo compatible con el tipo de retorno del método
```

**Ejemplo en un método**

```java
public class Main {
    public static void main(String[] args) {
        int resultado = suma(5, 3);
        System.out.println("El resultado de la suma es: " + resultado);
    }

    // Método que suma dos números y devuelve el resultado
    public static int suma(int a, int b) {
        int suma = a + b;
        return suma; // Devuelve el resultado de la suma
    }
}
```

## return !== break

Return se utiliza para salir de un método, mientras que break se utiliza para salir de bucles o bloques switch. Además, return puede tener una expresión asociada para devolver un valor, mientras que break no devuelve ningún valor.
