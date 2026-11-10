---
layout: ../../../../../layouts/modulo-3/Typescript.astro
title: "Utility Types"
block: "Mix"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Utility Types</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Utility Types](#utility-types)
- [Partial](#partial)
- [Pick\<T, K\>](#pickt-k)
- [Omit\<T, K\>](#omitt-k)
- [Readonly](#readonly)
- [Record\<K, T\>](#recordk-t)
- [Exclude\<T, U\>](#excludet-u)
- [Extract\<T, U\>](#extractt-u)
- [NonNullable](#nonnullable)
- [Parameters](#parameters)
- [ReturnType](#returntype)
- [InstanceType](#instancetype)
- [Awaited](#awaited)

</div>
</div>

## Utility Types

Los "Utility Types" son un conjunto de tipos predefinidos en TypeScript que proporcionan funcionalidades útiles para manipular y transformar otros tipos. Estos tipos están diseñados para facilitar tareas comunes y mejorar la legibilidad y la seguridad del código.

## Partial<T>

Este tipo convierte todas las propiedades de un tipo T en opcionales, lo que permite crear objetos parciales que contienen solo algunas propiedades del tipo original.

```ts
interface Persona {
  nombre: string;
  edad: number;
}

type PersonaParcial = Partial<Persona>;

let personaParcial: PersonaParcial = { nombre: "Juan" };
```

## Pick<T, K>

Este tipo permite seleccionar un conjunto específico de propiedades de un tipo T y crear un nuevo tipo que contenga solo esas propiedades.

```ts
type PersonaNombre = Pick<Persona, "nombre">;

let personaNombre: PersonaNombre = { nombre: "Juan" };
```

## Omit<T, K>

Este tipo permite omitir un conjunto específico de propiedades de un tipo T y crear un nuevo tipo que contenga todas las propiedades excepto las especificadas.

```ts
type PersonaSinEdad = Omit<Persona, "edad">;

let personaSinEdad: PersonaSinEdad = { nombre: "Juan" };
```

## Readonly<T>

Este tipo convierte todas las propiedades de un tipo T en de solo lectura, lo que significa que no se pueden modificar después de la inicialización.

```ts
type PersonaReadOnly = Readonly<Persona>;

let personaReadOnly: PersonaReadOnly = { nombre: "Juan", edad: 30 };
// personaReadOnly.nombre = "Pedro"; // Error: Propiedad de solo lectura
```

## Record<K, T>

Este tipo crea un objeto cuyas claves son del tipo K y cuyos valores son del tipo T.

```ts
type Edades = Record<"Juan" | "Pedro" | "María", number>;

let edades: Edades = { Juan: 30, Pedro: 25, María: 28 };
```

## Exclude<T, U>

Este tipo crea un nuevo tipo que excluye todos los miembros de T que son asignables a U.

```ts
type Numeros = Exclude<number | string, string>;

let numeros: Numeros = 5; // Tipo: number
```

## Extract<T, U>

Este tipo crea un nuevo tipo que incluye solo los miembros de T que son asignables a U.

```ts
type Strings = Extract<number | string, string>;

let strings: Strings = "Hola"; // Tipo: string
```

## NonNullable<T>

Este tipo crea un nuevo tipo que excluye null y undefined de T.

```ts
type NombreNoNulo = NonNullable<string | null>;

let nombre: NombreNoNulo = "Juan"; // Tipo: string
```

## Parameters<T>

Este tipo obtiene los tipos de los parámetros de una función T como una tupla.

```ts
type ParametrosDeFuncion = Parameters<(x: number, y: number) => number>;

let parametros: ParametrosDeFuncion = [5, 10]; // Tipo: [number, number]
```

## ReturnType<T>

Este tipo obtiene el tipo de retorno de una función T.

```ts
type TipoDeRetornoDeFuncion = ReturnType<() => string>;

let retorno: TipoDeRetornoDeFuncion = "Hola"; // Tipo: string
```

## InstanceType<T>

Este tipo obtiene el tipo de instancia de una clase T.

```ts
class MiClase {
  nombre: string;
}

type InstanciaDeMiClase = InstanceType<typeof MiClase>;

let instancia: InstanciaDeMiClase = { nombre: "Instancia" };
```

## Awaited<T>

Este tipo obtiene el tipo de valor resuelto de una promesa T.

```ts
type ValorResueltoDePromesa = Awaited<Promise<string>>;

async function obtenerTexto(): Promise<string> {
  return "Texto obtenido";
}

let valor: ValorResueltoDePromesa = await obtenerTexto(); // Tipo: string
```
