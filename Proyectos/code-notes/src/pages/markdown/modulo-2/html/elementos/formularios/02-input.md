---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Input"
block: "Formularios"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Input</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Input](#input)
- [Atributos](#atributos)
- [Atributos adicionales para input](#atributos-adicionales-para-input)

</div>
</div>

## Input

El elemento `<input>` es una de las etiquetas más versátiles y fundamentales en los formularios HTML. Se utiliza para crear diversos tipos de campos de entrada interactivos, como campos de texto, casillas de verificación, botones de opción, y más. La funcionalidad del campo de entrada se define mediante el atributo type.

```html
<input type="tipo" name="nombre" id="id" valor="valor" />
```

## Atributos

```html
<input type="tipo-del-campo" />
```

**Atributos:**

- **type:** Asigna un tipo especifico al campo input.
  - **Submit:** Botón para enviar el formulario.
  - **Reset:** Restablece los valores iniciales del formulario.
  - **Text:** Cajas de texto de una sola línea.
  - **Password:** Para contraseñas.
  - **File:** Para archivos.
  - **Image:** Envío gráficos.
  - **Hidden:** Incluir datos que los usuarios no pueden ver ni modificar.
  - **Button:** Botón.
  - **Number:** Solo números.
  - **Search:** Consultas de búsqueda.
  - **Tel:** Número de teléfono.
  - **Url:** Para insertar y editar URL.
  - **Email:** Para insertar correos.
  - **Date:** Especial fechas.
  - **Time:** Horas-Minutos (segundos).
  - **Radio:** Seleccionar una opción.
  - **Checkbox:** Seleccionar multiples opciones.
  - **Search:** Ingresar consultas de búsqueda.
  - **URL:** Ingresar y editar una URL.
  - **Color:** Permite a los usuarios especificar un color mediante un control que simula un cuadro cromático.
  - **Range:** Establecer un Rango.
  - **Month:** Mes.
  - **Week:** Semana.
  - **Datetime-local:** Para ingresar tiempo y fecha (hora, minuto, segundo y fracción de segundo) basado en la zona horaria UTC.
- **name:** El atributo name se usa para identificar el campo. Sólo se envían los campos que lo tienen.
- **value:** El atributo value permite establecer el valor inicial de un campo.
- **required:** Indica que el campo es obligatorio. No se enviaran los datos si no se rellena.
- **size:** Permite establecer la longitud de los controles de texto.
- **maxlength y minlength:** Permiten establecer la longitud máxima y mínima, respectivamente.
- **autofocus:** Indica el control que debe tener el foco al cargarse el formulario.

## Atributos adicionales para input

- **pattern:** Establece una expresión regular que debe cumplir el valor ingresado.
- **maxlength:** Establece la longitud máxima de los caracteres que se pueden ingresar.
- **min y max:** Para los campos de tipo number, date, range, etc., define el valor mínimo y máximo que el usuario puede seleccionar.
- **step:** Define el intervalo de valores permitidos (útil en campos de tipo number o range).

</div>
