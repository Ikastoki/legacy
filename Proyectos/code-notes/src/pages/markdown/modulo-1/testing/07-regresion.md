---
layout: ../../../../layouts/modulo-1/Testing.astro
title: "Pruebas de Regresión"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pruebas de Regresión</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pruebas de Regresión (Regression Testing)](#pruebas-de-regresión-regression-testing)
- [Objetivos de las Pruebas de Regresión](#objetivos-de-las-pruebas-de-regresión)
- [Tipos de Pruebas de Regresión](#tipos-de-pruebas-de-regresión)
- [Ventajas](#ventajas)
- [Prácticas Recomendadas para las Pruebas de Regresión](#prácticas-recomendadas-para-las-pruebas-de-regresión)
- [Ejemplo Conceptual (sin código)](#ejemplo-conceptual-sin-código)

</div>
</div>

## Pruebas de Regresión (Regression Testing)

Las pruebas de regresión (Regression Testing) son un tipo de prueba de software que se centran en verificar que las modificaciones recientes en el código, como correcciones de errores, mejoras o nuevas funcionalidades, no hayan introducido nuevos defectos en las partes existentes del sistema. Estas pruebas aseguran que el software siga funcionando correctamente después de cualquier cambio.

## Objetivos de las Pruebas de Regresión

**Verificar la estabilidad del sistema:** Asegurar que las nuevas modificaciones no afecten negativamente las funcionalidades existentes.

**Detectar defectos reintroducidos:** Identificar cualquier defecto que pueda haber sido reintroducido en el sistema debido a cambios recientes.

**Validar el funcionamiento del sistema:** Comprobar que el sistema sigue cumpliendo con los requisitos especificados después de las modificaciones.

**Asegurar la calidad continua:** Mantener un alto nivel de calidad del software a lo largo de su ciclo de vida.

## Tipos de Pruebas de Regresión

**Pruebas de regresión completas:** Ejecutar todos los casos de prueba existentes para verificar que todas las funcionalidades del sistema funcionen correctamente. Este enfoque es exhaustivo pero puede ser costoso y llevar mucho tiempo.

**Pruebas de regresión selectivas:** Ejecutar un subconjunto de los casos de prueba que son más relevantes para los cambios realizados. Este enfoque es más eficiente en términos de tiempo y recursos.

**Pruebas de regresión automatizadas:** Utilizar herramientas de automatización para ejecutar las pruebas de regresión de manera eficiente y repetitiva. Este enfoque es ideal para proyectos grandes y complejos con muchas pruebas de regresión.

## Ventajas

**Aseguran la estabilidad del sistema:** Garantizan que las nuevas modificaciones no causen problemas en las funcionalidades existentes.

**Detectan defectos reintroducidos:** Ayudan a identificar defectos que pueden haber sido reintroducidos debido a cambios recientes.

**Mejoran la calidad del software:** Mantienen la calidad del software a lo largo de su ciclo de vida, asegurando que siga cumpliendo con los requisitos especificados.

**Reducción de riesgos:** Reducen los riesgos asociados con las modificaciones en el software, asegurando que no se introduzcan nuevos problemas.

## Prácticas Recomendadas para las Pruebas de Regresión

**Automatización de pruebas:** Utilizar herramientas de automatización para ejecutar pruebas de regresión de manera eficiente y repetitiva.

**Gestión de casos de prueba:** Mantener un repositorio bien organizado de casos de prueba que cubran todas las funcionalidades críticas del sistema.

**Selección de casos de prueba relevantes:** Seleccionar casos de prueba que sean más relevantes para los cambios realizados para optimizar el tiempo y los recursos.

**Ejecución continua de pruebas de regresión:** Ejecutar pruebas de regresión de manera continua, especialmente después de cada cambio importante en el sistema.

**Mantenimiento de scripts de prueba:** Actualizar y mantener los scripts de prueba automatizados para asegurar que sigan siendo efectivos y relevantes.

## Ejemplo Conceptual (sin código)

Supongamos que estamos desarrollando una aplicación de gestión de proyectos. Después de realizar una serie de mejoras y correcciones de errores, es necesario ejecutar pruebas de regresión para asegurar que el sistema siga funcionando correctamente.

**Agregar nueva funcionalidad de reporte:**

- **Caso de regresión:** Verificar que las funcionalidades existentes, como la creación de proyectos y la asignación de tareas, sigan funcionando correctamente después de agregar la nueva funcionalidad de reporte.

**Corrección de un error en la asignación de tareas:**

- **Caso de regresión:** Asegurarse de que la corrección del error no haya afectado otras funcionalidades relacionadas con la gestión de tareas, como la edición o eliminación de tareas.

**Mejora en la interfaz de usuario:**

- **Caso de regresión:** Verificar que las mejoras en la interfaz de usuario no hayan causado problemas en otras áreas de la aplicación, como la navegación o la visualización de datos.
