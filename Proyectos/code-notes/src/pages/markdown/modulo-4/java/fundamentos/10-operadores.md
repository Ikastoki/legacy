---
layout: ../../../../../layouts/modulo-4/Java.astro
title: "Operadores"
block: "Fundamentos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Operadores</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Operadores](#operadores)
  - [Operadores Aritméticos](#operadores-aritméticos)
  - [Operadores de Asignación](#operadores-de-asignación)
  - [Operadores de Incremento y Decremento](#operadores-de-incremento-y-decremento)
  - [Operadores de Comparación](#operadores-de-comparación)
  - [Operadores Lógicos](#operadores-lógicos)
  - [Operadores Bit a Bit](#operadores-bit-a-bit)
  - [Operadores Ternarios](#operadores-ternarios)
- [Operador Diamante](#operador-diamante)

</div>
</div>

## Operadores

Los operadores son símbolos especiales que realizan operaciones específicas en variables y valores.

### Operadores Aritméticos

Se utilizan para realizar operaciones matemáticas básicas, como suma, resta, multiplicación, división y módulo.

- \+ (suma)
- \- (resta)
- \* (multiplicación)
- / (división)
- % (módulo)

### Operadores de Asignación

Se utilizan para asignar valores a variables.

- = (asignación simple)
- += (asignación con suma)
- -= (asignación con resta)
- \*= (asignación con multiplicación)
- /= (asignación con división)
- %= (asignación con módulo)

### Operadores de Incremento y Decremento

Se utilizan para aumentar o disminuir el valor de una variable en uno.

- ++ (incremento)
- -- (decremento)

### Operadores de Comparación

Se utilizan para comparar dos valores.

- == (igual a)
- != (no igual a)
- \> (mayor que)
- \< (menor que)
- \>= (mayor o igual que)
- <= (menor o igual que)

### Operadores Lógicos

Se utilizan para realizar operaciones lógicas en booleanos.

- && (AND lógico)
- || (OR lógico)
- ! (NOT lógico)

### Operadores Bit a Bit

Se utilizan para realizar operaciones a nivel de bits en valores enteros.

- & (AND a nivel de bits)
- | (OR a nivel de bits)
- ^ (XOR a nivel de bits)
- ~ (complemento a nivel de bits)
- \<< (desplazamiento a la izquierda)
- \>> (desplazamiento a la derecha con signo)
- \>>> (desplazamiento a la derecha sin signo)

### Operadores Ternarios

Es un operador condicional que se utiliza para tomar decisiones basadas en una condición.

- condición ? expresión1 : expresión2

## Operador Diamante

El "operador diamante" en Java se introdujo en Java 7 como una característica de sintaxis para simplificar la creación de instancias de tipos genéricos. El operador diamante se representa mediante <> y se utiliza al crear instancias de clases genéricas. Permite omitir la repetición del tipo de dato dentro de los corchetes angulares en el lado derecho de una declaración de variable cuando el tipo se puede inferir del lado izquierdo de la declaración.

Antes de Java 7, al crear una instancia de una clase genérica, era necesario repetir el tipo de dato dentro de los corchetes angulares en ambos lados de la declaración, lo que podía resultar en código redundante y menos legible.

```java
List<String> lista = new ArrayList<String>();
Map<Integer, String> mapa = new HashMap<Integer, String>();
```

Con la introducción del operador diamante en Java 7, se puede simplificar la creación de instancias de tipos genéricos, permitiendo que el tipo de dato se infiera automáticamente.

```java
List<String> lista = new ArrayList<>();
Map<Integer, String> mapa = new HashMap<>();
```

El operador diamante ayuda a reducir la redundancia y a mejorar la legibilidad del código al eliminar la necesidad de repetir el tipo de dato en ambos lados de la declaración. Es especialmente útil cuando el tipo de dato es largo o complejo, ya que simplifica la escritura del código sin perder claridad en la expresión del tipo genérico.
