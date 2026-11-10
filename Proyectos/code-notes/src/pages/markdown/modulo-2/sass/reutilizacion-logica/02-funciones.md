---
layout: ../../../../../layouts/modulo-2/SASS.astro
title: "Functions"
block: "Reutilización y Lógica"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Functions</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Functions](#functions)
- [¿Por qué usar funciones?](#por-qué-usar-funciones)
- [Cómo se definen y se usan](#cómo-se-definen-y-se-usan)
  - [Definición](#definición)
  - [Inclusión](#inclusión)
- [Mixins vs. Functions: ¿Cuál usar y cuándo?](#mixins-vs-functions-cuál-usar-y-cuándo)

</div>
</div>

## Functions

Las funciones en Sass son similares a las de otros lenguajes de programación. Su objetivo principal es realizar cálculos, manipular datos y devolver un único valor. A diferencia de los mixins, que imprimen un bloque completo de CSS, las funciones son para procesar información y retornar un resultado.

## ¿Por qué usar funciones?

Las funciones son perfectas para cuando necesitas hacer un cálculo repetitivo o convertir valores. Por ejemplo, podrías crear una función para:

- Convertir píxeles a `em` o `rem`.

- Aclarar u oscurecer un color.

- Calcular el ancho de una columna en un sistema de `grid`.

- Devolver el `padding` o el `border-radius` de un elemento en base a ciertos criterios.

## Cómo se definen y se usan

### Definición

Se usa la directiva @function seguida del nombre de la función y sus parámetros. Dentro de la función, usas @return para devolver el valor final.

```scss
// Sass
@function px-a-rem($pixels) {
  @return $pixels / 16px * 1rem;
}
```

En este ejemplo, la función px-a-rem toma un valor en píxeles y lo convierte a rem (asumiendo que la base de rem es de 16px).

### Inclusión

Una vez que la función está definida, puedes usarla en cualquier parte de tus estilos, como si fuera un valor normal.

```scss
// Sass
.titulo {
  font-size: px-a-rem(32px); // Aquí usamos la función
}

.cuerpo {
  font-size: px-a-rem(18px);
}
```

El código compilado a CSS se vería así:

```css
/* CSS compilado */
.titulo {
  font-size: 2rem;
}

.cuerpo {
  font-size: 1.125rem;
}
```

## Mixins vs. Functions: ¿Cuál usar y cuándo?

<div class="only-mobile-warning">📵 Esta tabla solo está disponible en versión escritorio.</div>

Esta es una de las preguntas más comunes para los principiantes. La diferencia clave es lo que devuelven

| .             | Mixins (`@mixin`)               | Functions (`@function`)                         |
| ------------- | ------------------------------- | ----------------------------------------------- |
| **Propósito** | Generar bloques de estilos.     | Realizar cálculos y devolver un valor.          |
| **Uso**       | Con la directiva `@include`.    | Directamente en una declaración de estilo.      |
| **Devuelve**  | Múltiples declaraciones de CSS. | Un solo valor.                                  |
| **Ejemplo**   | Un mixin para un flexbox.       | Una función para calcular un color o un tamaño. |

---

- Si necesitas generar código CSS repetitivo con diferentes propiedades, usa un mixin.

- Si necesitas calcular o manipular datos para obtener un solo valor (como un color o un número), usa una función.
