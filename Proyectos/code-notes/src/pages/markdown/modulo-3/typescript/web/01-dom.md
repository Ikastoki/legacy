---
layout: ../../../../../layouts/modulo-3/Typescript.astro
title: "DOM"
block: "Web"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">DOM</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Tipificación del DOM](#tipificación-del-dom)
- [Seleccionar elementos del DOM de forma segura](#seleccionar-elementos-del-dom-de-forma-segura)
  - [Con getElementById()](#con-getelementbyid)
  - [Con querySelector()](#con-queryselector)
- [Manejar Eventos](#manejar-eventos)

</div>
</div>

## Tipificación del DOM

En JavaScript, cuando seleccionas un elemento del DOM, el tipo devuelto es a menudo genérico (HTMLElement o simplemente Element). TypeScript eleva esto al proporcionarte una tipificación más precisa.

El compilador de TypeScript reconoce los tipos de elementos HTML comunes (como HTMLDivElement, HTMLInputElement, HTMLButtonElement, etc.) y las propiedades y métodos que pertenecen a cada uno. Esto significa que puedes detectar errores de tipo en tu código del DOM antes de ejecutarlo.

## Seleccionar elementos del DOM de forma segura

Una práctica común es usar `document.getElementById()`, `document.querySelector()` o `document.querySelectorAll()` para obtener elementos. TypeScript te ayuda a manejar los resultados de forma segura.

### Con getElementById()

Este método es el más seguro, ya que TypeScript puede inferir el tipo correcto del elemento si lo configuras adecuadamente en tu `tsconfig.json`.

```typescript
const miBoton = document.getElementById("mi-boton"); // Tipo inferido: HTMLElement | null

if (miBoton) {
  // Ahora miBoton es de tipo HTMLElement y es seguro usarlo
  miBoton.addEventListener("click", () => {
    console.log("Botón clickeado");
  });
}
```

Es importante verificar si el elemento existe (`if (miBoton)`) porque el método puede devolver null si no lo encuentra.

### Con querySelector()

Este método es más flexible, pero también más peligroso si no se usa correctamente. TypeScript solo puede inferir el tipo `Element | null`, que es muy genérico. Para obtener una tipificación más precisa, debes usar una afirmación de tipo.

```typescript
// Afirmación de tipo (as HTMLInputElement) para que TypeScript sepa que es un input
const miInput = document.querySelector("#mi-input") as HTMLInputElement | null;

if (miInput) {
  // Ahora miInput es de tipo HTMLInputElement y tiene acceso a propiedades como .value
  miInput.value = "Hola desde TypeScript";
}
```

Afirmar un tipo (`as TipoDeElemento`) le dice al compilador de TypeScript que tú estás seguro del tipo de elemento que has seleccionado. Sin embargo, si la afirmación es incorrecta, puedes introducir un error en tiempo de ejecución.

## Manejar Eventos

Cuando manejas eventos del DOM, TypeScript te ayuda a asegurarte de que el objeto de evento (`event`) tenga el tipo correcto.

```typescript
const miBoton = document.getElementById("mi-boton") as HTMLButtonElement;

if (miBoton) {
  miBoton.addEventListener("click", (evento: MouseEvent) => {
    // El objeto 'evento' es de tipo MouseEvent y tiene propiedades como 'clientX'
    console.log(`Coordenadas del clic: ${evento.clientX}, ${evento.clientY}`);
  });
}
```

Aquí, el parámetro evento es de tipo MouseEvent de forma explícita, lo que te da acceso a las propiedades correctas sin errores. Si no especificas el tipo, TypeScript lo inferirá como un Event genérico.
