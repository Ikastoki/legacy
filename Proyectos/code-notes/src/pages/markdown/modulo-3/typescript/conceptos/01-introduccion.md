---
layout: ../../../../../layouts/modulo-3/Typescript.astro
title: "TypeScript"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">TypeScript</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué es TypeScript?](#qué-es-typescript)
- [¿Cuándo usar TypeScript?](#cuándo-usar-typescript)
- [¿Dónde usar TypeScript?](#dónde-usar-typescript)
- [¿Cómo funciona?](#cómo-funciona)

</div>
</div>

## ¿Qué es TypeScript?

TypeScript es un superset de JavaScript. Esto significa que es un lenguaje que se basa en JavaScript, añadiéndole funcionalidades. Su principal característica es la tipificación estática opcional, lo que permite definir el tipo de datos que tendrán las variables, parámetros de funciones, etc., en tiempo de desarrollo.

Todo código JavaScript válido es, por defecto, código TypeScript válido. Por eso, puedes ir adoptando TypeScript gradualmente en tus proyectos sin tener que reescribir todo desde cero.

## ¿Cuándo usar TypeScript?

TypeScript brilla especialmente en proyectos grandes y complejos.

- **Proyectos grandes**: Cuando el código base crece, el mantenimiento se vuelve un desafío. La tipificación estática ayuda a detectar errores de lógica y de tipo antes de ejecutar la aplicación, lo que reduce el tiempo de depuración.

- **Equipos de trabajo**: La tipificación explícita funciona como documentación del código. Cuando otros desarrolladores leen tus funciones, saben exactamente qué tipo de datos esperar y qué tipo de datos deben retornar.

- **Frameworks modernos**: Muchos frameworks y librerías, como Angular, React y Vue.js, tienen un excelente soporte para TypeScript, con plantillas y tipado integrado que facilitan su uso.

## ¿Dónde usar TypeScript?

TypeScript se usa tanto en el desarrollo frontend como en el backend.

- **Frontend**: Se usa en frameworks como React, Angular y Vue.js para construir interfaces de usuario robustas y escalables.

- **Backend**: Con Node.js, TypeScript se usa para construir APIs y servicios. Frameworks como NestJS están construidos sobre TypeScript, lo que los hace ideales para aplicaciones empresariales.

## ¿Cómo funciona?

El navegador web no entiende TypeScript; solo entiende JavaScript. Por lo tanto, el código TypeScript debe ser transpilado a JavaScript. La transpilación es el proceso de convertir un lenguaje de programación a otro.

Para esto, usas el compilador de TypeScript, tsc.

1. Escribes tu código en archivos .ts.

2. Ejecutas el compilador de TypeScript (tsc).

3. El compilador genera el código JavaScript equivalente en archivos .js.

4. Este código .js es el que se ejecuta en el navegador o en Node.js.

El principal beneficio es que la verificación de tipos ocurre en el paso 2, por lo que detectas los errores antes de que tu aplicación se ejecute.
