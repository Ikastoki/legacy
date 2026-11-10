---
layout: ../../../../../layouts/modulo-3/Typescript.astro
title: "Mapped Types"
block: "Mix"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Mapped Types</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Mapped Types (Tipos Mapeados)](#mapped-types-tipos-mapeados)
- [Conditional Types (Tipos Condicionales)](#conditional-types-tipos-condicionales)
- [Literal Types (Tipos Literales)](#literal-types-tipos-literales)
- [Template Literal Types (Tipos de Literales de Plantillas)](#template-literal-types-tipos-de-literales-de-plantillas)
- [Recursive Types (Tipos Recursivos)](#recursive-types-tipos-recursivos)

</div>
</div>

## Mapped Types (Tipos Mapeados)

Los tipos mapeados son una característica de TypeScript que permite transformar cada propiedad de un tipo existente en un nuevo tipo, aplicando una operación a cada una de ellas.

```ts
type Mayusculas<T> = {
  [K in keyof T]: T[K] extends string ? Uppercase<T[K]> : T[K];
};

type PersonaMayusculas = Mayusculas<Persona>;
```

## Conditional Types (Tipos Condicionales)

Los tipos condicionales permiten definir tipos que dependen de condiciones basadas en otros tipos.

```ts
type EsString<T> = T extends string ? true : false;

type Resultado = EsString<string>; // true
```

## Literal Types (Tipos Literales)

Los tipos literales permiten definir tipos que representan un conjunto específico de valores literales.

```ts
type Color = "rojo" | "verde" | "azul";

let color: Color = "verde";
```

## Template Literal Types (Tipos de Literales de Plantillas)

Los tipos de literales de plantillas son una extensión de los tipos literales que permiten crear tipos basados en plantillas de cadenas.

```ts
type Saludo<T extends string> = `Hola, ${T}`;

type SaludoJuan = Saludo<"Juan">; // "Hola, Juan"
```

## Recursive Types (Tipos Recursivos)

Los tipos recursivos permiten definir tipos que se refieren a sí mismos, lo que es útil para modelar estructuras de datos recursivas.

```ts
type Saludo<T extends string> = `Hola, ${T}`;

type SaludoJuan = Saludo<"Juan">; // "Hola, Juan"
```
