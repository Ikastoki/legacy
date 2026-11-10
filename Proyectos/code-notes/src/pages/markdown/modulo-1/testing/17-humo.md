---
layout: ../../../../layouts/modulo-1/Testing.astro
title: "Pruebas de Humo"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Pruebas de Humo</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Pruebas de Humo (Smoke Testing)](#pruebas-de-humo-smoke-testing)
- [Objetivos de las Pruebas de Humo](#objetivos-de-las-pruebas-de-humo)
- [Características de las Pruebas de Humo](#características-de-las-pruebas-de-humo)
- [Ejemplo de Escenarios de Pruebas de Humo](#ejemplo-de-escenarios-de-pruebas-de-humo)
- [Estrategia de Ejecución de Pruebas de Humo](#estrategia-de-ejecución-de-pruebas-de-humo)
- [Beneficios de las Pruebas de Humo](#beneficios-de-las-pruebas-de-humo)
- [Limitaciones de las Pruebas de Humo](#limitaciones-de-las-pruebas-de-humo)

</div>
</div>

## Pruebas de Humo (Smoke Testing)

Las pruebas de humo (Smoke Testing) son un tipo de prueba inicial y superficial que se realiza sobre un software recién desarrollado o actualizado para determinar si es lo suficientemente estable como para someterse a pruebas más exhaustivas. Estas pruebas se denominan "pruebas de humo" porque, al igual que encender una máquina para ver si produce humo, se realizan para verificar si el software "funciona" básicamente.

## Objetivos de las Pruebas de Humo

**Validar la estabilidad inicial:** Determinar si el software recién desarrollado o actualizado es lo suficientemente estable como para someterse a pruebas más detalladas.

**Identificar problemas críticos:** Descubrir errores graves o fallos que puedan impedir que el software funcione correctamente o que afecten a su funcionalidad básica.

**Evaluar la instalación y configuración:** Verificar que el software se haya instalado y configurado correctamente en el entorno de prueba y que pueda ejecutarse sin problemas.

## Características de las Pruebas de Humo

**Superficiales:** Se centran en aspectos básicos y fundamentales del software, como la capacidad de iniciar sesión, cargar páginas principales o realizar funciones esenciales.

**Rápidas:** Se ejecutan de manera rápida y eficiente para proporcionar una evaluación inicial del software en un corto período de tiempo.

**No exhaustivas:** No cubren todas las funcionalidades del software ni exploran todos los posibles escenarios de uso. Su objetivo es detectar problemas críticos de manera rápida y eficiente.

## Ejemplo de Escenarios de Pruebas de Humo

**Inicio de sesión:** Verificar que los usuarios puedan iniciar sesión en el sistema utilizando credenciales válidas.

**Página principal:** Comprobar que la página principal del sistema se cargue correctamente y que los elementos básicos estén visibles.

**Funcionalidad clave:** Probar una funcionalidad esencial del software, como agregar un elemento a un carrito de compras en una aplicación de comercio electrónico.

## Estrategia de Ejecución de Pruebas de Humo

**Antes de la entrega:** Realizar pruebas de humo antes de entregar una nueva versión del software al equipo de pruebas para asegurarse de que sea lo suficientemente estable para pruebas más exhaustivas.

**Después de cambios significativos:** Ejecutar pruebas de humo después de realizar cambios importantes en el software para validar su estabilidad y funcionalidad básica.

**En entornos de integración y despliegue:** Realizar pruebas de humo en entornos de integración y despliegue para verificar la instalación y configuración correctas del software.

## Beneficios de las Pruebas de Humo

**Identificación temprana de problemas:** Permiten detectar y corregir problemas críticos en una etapa temprana del ciclo de desarrollo del software.

**Ahorro de tiempo y recursos:** Ayudan a evitar la realización de pruebas más exhaustivas en un software inestable o con errores graves.

**Aumento de la confianza:** Proporcionan una evaluación inicial de la estabilidad y funcionalidad del software, lo que aumenta la confianza en su calidad y rendimiento.

## Limitaciones de las Pruebas de Humo

**No garantizan la ausencia de errores:** Aunque pueden detectar problemas graves, las pruebas de humo no garantizan que el software esté libre de errores.

**Limitadas en cobertura:** No exploran todas las funcionalidades del software ni cubren todos los posibles escenarios de uso.
