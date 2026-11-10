---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Continue/Break"
block: "Control de flujo"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Continue/Break</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Continue](#continue)
- [Break](#break)

</div>
</div>

## Continue

La palabra clave continue se utiliza dentro de un bucle para omitir la ejecución del resto del código dentro del bucle en la iteración actual y pasar a la siguiente iteración. Esto significa que si se encuentra la instrucción continue, el programa salta directamente al inicio del bucle y evalúa la siguiente iteración sin ejecutar el código restante dentro del bloque de bucle para la iteración actual.

**Ejemplo**

```java
public class Main {
    public static void main(String[] args) {
        // Imprimir números pares entre 0 y 9
        for (int i = 0; i < 10; i++) {
            if (i % 2 != 0) {
                continue; // Salta a la siguiente iteración si i no es par
            }
            System.out.println(i);
        }
    }
}
```

## Break

La palabra clave break se utiliza para salir inmediatamente de un bucle (como for, while, o do-while) o de un bloque switch. Cuando se encuentra la instrucción break, el programa sale del bucle o del bloque switch y continúa con la ejecución del código después del bucle o del bloque switch.

**Ejemplo**

```java
public class Main {
    public static void main(String[] args) {
        // Encuentra el primer número mayor que 5 en un array
        int[] numeros = {1, 3, 7, 4, 9};

        for (int numero : numeros) {
            if (numero > 5) {
                System.out.println("El primer número mayor que 5 es: " + numero);
                break; // Sale del bucle una vez que se encuentra el primer número mayor que 5
            }
        }
    }
}
```

> ✍️ Nota
>
> Break también se puede utilizar en un bloque switch para salir del bloque switch antes de que se complete. La forma de usar break en un bloque switch es similar a su uso en un bucle.
