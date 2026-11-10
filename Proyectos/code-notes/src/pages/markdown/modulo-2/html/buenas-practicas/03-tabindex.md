---
layout: ../../../../../layouts/modulo-2/HTML.astro
title: "Tabindex"
block: "Buenas practicas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Tabindex</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Tabindex](#tabindex)
- [Usos de tabindex](#usos-de-tabindex)
  - [Tabulación en el orden natural del documento](#tabulación-en-el-orden-natural-del-documento)
  - [Modificar el orden de tabulación](#modificar-el-orden-de-tabulación)
  - [Excluir elementos del orden de tabulación](#excluir-elementos-del-orden-de-tabulación)
- [Casos comunes](#casos-comunes)
  - [Botones personalizados](#botones-personalizados)
  - [Diálogos y modales](#diálogos-y-modales)
  - [Controlar el enfoque](#controlar-el-enfoque)
- [Buenas prácticas](#buenas-prácticas)

</div>
</div>

## Tabindex

El atributo tabindex en HTML controla el orden de tabulación y la navegabilidad por teclado de los elementos en una página web. Es particularmente importante para la accesibilidad, ya que permite a los usuarios navegar por una página utilizando el teclado (con la tecla Tab), lo cual es esencial para personas con discapacidades que no pueden usar un ratón.

## Usos de tabindex

El valor del atributo tabindex puede ser:

- **Positivo (tabindex="n"):** Define un orden de tabulación explícito. Los elementos con un valor positivo de tabindex serán enfocados antes que los que no tienen o tienen un tabindex de 0.

- **Cero (tabindex="0"):** Hace que el elemento sea navegable por teclado en el orden natural del documento, es decir, según el flujo normal del DOM.

- **Negativo (tabindex="-1"):** Permite que el elemento sea enfocado programáticamente (con JavaScript), pero no se puede navegar a él usando el teclado.

### Tabulación en el orden natural del documento

El valor 0 hace que el elemento sea navegable por teclado siguiendo el flujo de la página, pero no altera el orden natural de tabulación.

```html
<div tabindex="0">Este div es accesible con Tab</div>
<button>Botón normal</button>
<a href="#" tabindex="0">Enlace accesible</a>
```

En este caso, el `<div>` y el `<a>` son accesibles por teclado, al igual que el botón, pero el orden de tabulación será el orden en que aparecen en el DOM.

### Modificar el orden de tabulación

El valor positivo de tabindex cambia el orden en que los elementos se enfocan al usar la tecla Tab. Los elementos con valores numéricos menores serán enfocados antes.

```html
<input type="text" tabindex="2" placeholder="Segundo" />
<input type="text" tabindex="1" placeholder="Primero" />
<input type="text" placeholder="Tercero" />
```

Aquí, el segundo campo de texto tiene `tabindex="1"`, por lo que será enfocado primero, aunque esté en segundo lugar en el código. El orden de enfoque será: Primero, Segundo, Tercero.

> ✍️ Nota
>
> El uso de valores positivos de tabindex es generalmente desaconsejado, ya que puede romper la coherencia natural del orden de tabulación en una página, especialmente en interfaces complejas.

### Excluir elementos del orden de tabulación

Si se quiere que un elemento sea enfocable con JavaScript pero no navegable con la tecla Tab, se utiliza `tabindex="-1"`. Esto es útil para modales, diálogos o menús.

```html
<div tabindex="-1" id="modal">
  <p>Este contenido no es accesible por tabulación directa.</p>
</div>

<button onclick="document.getElementById('modal').focus()">
  Enfocar Modal
</button>
```

El contenido del div con `tabindex="-1"` no será accesible usando Tab, pero sí puede enfocarse programáticamente (con JavaScript).

## Casos comunes

### Botones personalizados

Si creas un botón personalizado con un elemento no interactivo (como un `<div>` o un `<span>`), debes usar `tabindex="0"` para hacerlo navegable por teclado.

```html
<div role="button" tabindex="0" onclick="alert('Botón activado')">
  Este es un botón personalizado.
</div>
```

### Diálogos y modales

Al abrir un modal, puede ser útil usar `tabindex="-1"` para enfocar el modal sin permitir que sea navegable con Tab de manera predeterminada.

```html
<div id="modal" tabindex="-1" role="dialog">
  <p>Este es un diálogo modal.</p>
</div>
```

### Controlar el enfoque

En un formulario, puedes ajustar el flujo de tabulación para guiar al usuario por los campos en un orden específico.

## Buenas prácticas

**Evita el uso de valores positivos de tabindex:** En la mayoría de los casos, es mejor confiar en el orden natural del DOM para gestionar la tabulación. El uso de valores positivos puede hacer que la navegación por teclado sea confusa e impredecible.

**Usa tabindex="0" para elementos interactivos personalizados:** Si creas componentes interactivos personalizados (como botones, enlaces o menús) utilizando `<div> o <span>`, asegúrate de hacerlos accesibles con `tabindex="0"`.

**Limita el uso de tabindex="-1" para elementos enfocados programáticamente:** Si un elemento debe ser enfocado mediante JavaScript, usa `tabindex="-1"` para evitar que sea navegable por teclado.

**Mantén la accesibilidad en mente:** La navegación por teclado es clave para la accesibilidad, así que asegúrate de que los elementos importantes de tu página sean accesibles mediante tabulación y que el orden de tabulación sea intuitivo.

</div>
