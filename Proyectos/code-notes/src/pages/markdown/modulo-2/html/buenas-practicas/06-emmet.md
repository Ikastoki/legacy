---
layout: ../../../../../layouts/modulo-2/HTML.astro
title: "Emmet"
block: "Buenas practicas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Emmet</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Sintaxis](#sintaxis)
- [Operadores principales](#operadores-principales)
  - [Operador hijo: \>](#operador-hijo-)
  - [Operador hermano: +](#operador-hermano-)
  - [Operador multiplicar: \*](#operador-multiplicar-)
  - [Operador numeración: $](#operador-numeración-)
  - [Operador subir de nivel: ^](#operador-subir-de-nivel-)
  - [Operador agrupar: ()](#operador-agrupar-)
  - [Añadir texto: {}](#añadir-texto-)
  - [Añadir atributos: \[\]](#añadir-atributos-)
  - [- Añadir clase: .](#--añadir-clase-)
  - [- Añadir ID: #](#--añadir-id-)
- [Comprimir lo comprimido](#comprimir-lo-comprimido)
- [Texto de relleno](#texto-de-relleno)
- [Encapsular código](#encapsular-código)

</div>
</div>

## Sintaxis

La sintaxis principal de emmet son las etiquetas html sin los símbolos de apertura y cierre.

```html
<!-- Algunos Ejemplos: -->

Emmet: div Resultado:
<div></div>

<!-- Emmet: a Resultado: -->
<a href="””"></a>

<!-- Emmet: img Resultado: -->
<img src="" alt="" />
```

## Operadores principales

- **Hijo: >**
- **Hermano: +**
- **Multiplicar: \***
- **Numeración: $**
- **Subir Nivel: ^**
- **Agrupar: ()**
- **Añadir Texto: {}**
- **Añadir Atributo: []**
- **Añadir clase: .**
- **Añadir ID: #**

### Operador hijo: >

Usar el operador > para anidar elementos uno dentro del otro.

```html
<!-- Emmet: div>h1 Resultado: -->
<div>
  <h1></h1>
</div>

<!-- Emmet: div>article>p Resultado: -->
<div>
  <article>
    <p></p>
  </article>
</div>
```

### Operador hermano: +

Use el operador + para colocar elementos en el mismo nivel.

```html
<!-- Emmet: div+p Resultado: -->
<div></div>
<p></p>

<!-- Emmet: div+h1+h2 Resultado: -->
<div></div>
<h1></h1>
<h2></h2>
```

### Operador multiplicar: \*

Use el operador \* para definir el número de veces que se imprime el elemento.

```html
<!-- Emmet: div*3 Resultado: -->
<div></div>
<div></div>
<div></div>
```

### Operador numeración: $

Use el operador \$ para enumerar los elementos.

Usando múltiples \$ se añaden ceros(antes del número entero).

```html
<!-- Emmet: ul>li*3{$} Resultado: -->
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>

<!-- Emmet: ul>li*3{$$$$} Resultado: -->
<ul>
  <li>0001</li>
  <li>0002</li>
  <li>0003</li>
</ul>
```

Invertir el orden del operador numérico:

```html
<!-- Emmet: ul>li.item$@-*3 Resultado: -->
<ul>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>
```

Que comience con un número específico:

```html
<!-- Emmet: ul>li.item$@4*3 Resultado: -->
<ul>
  <li class="item4"></li>
  <li class="item5"></li>
  <li class="item6"></li>
</ul>
```

### Operador subir de nivel: ^

Use el operador ^ para subir de nivel los elementos.

El operador hijo > añade los elementos en un "sub nivel".

El operador hermano + añade los elementos en el mismo nivel.

```html
<!-- Emmet: div>ul>li^div>h1 Resultado: -->
<div>
  <ul>
    <li></li>
    <-Nivel antes de ^
  </ul>
  <div>
    <-Nivel después de ^
    <h1></h1>
  </div>
</div>
```

### Operador agrupar: ()

Use el operador () para agrupar las etiquetas a la hora de estructurar una abreviatura compleja.

Es otra forma de manejar los niveles de los elementos.

```html
<!-- Emmet: div>(header>ul>li>a)+footer>p Resultado: -->
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

### Añadir texto: {}

Use el operador {} para añadir texto dentro de los elementos.

```html
<!-- Emmet: div>h1{Encabezado} Resultado: -->
<div>
  <h1>Encabezado</h1>
</div>
```

### Añadir atributos: []

Use el operador [] para añadir atributos a los elementos que se van a generar.

```html
<!-- Emmet: h1[style="color:red;"]{Encabezado en rojo} Resultado: -->
<h1 style="color:red;">Encabezado en rojo</h1>
```

### - Añadir clase: .

Use el operador . para añadir clases a los elementos que se van a generar.

```html
<!-- Emmet: p.parrafo__principal{texto de relleno} Resultado: -->
<p class="parrafo__principal">texto de relleno</p>

<!-- Usar Dos Clases. No Permite espacios(Evitar num en las clases) -->
<!-- Emmet: p.clase1.clase2 Resultado: -->
<p class="clase1 clase2"></p>
```

### - Añadir ID: \#

Use el operador # para añadir un ID a los elementos que se van a generar.

```html
<!-- Emmet: p#parrafo__principal{texto de relleno} Resultado: -->
<p id="parrafo__principal">texto de relleno</p>
```

## Comprimir lo comprimido

No todos los comandos de emmet son compatibles con el operador **etiqueta:tipo/característica/atributo**.

-Ejemplos:

```html
<!-- Emmet: html:5 (Generar anatomía de un documento HTML 5) Resultado: -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>

<!-- Emmet: form:get (Generar un formulario de tipo get) Resultado: -->
<form action="" method="get"></form>

<!-- Emmet: a:mail (Generar un enlace de tipo mail) Resultado: -->
<a href="mailto:"></a>

<!-- Emmet: input:submit (Generar un input de tipo submit) Resultado: -->
<input type="submit" value="" />
```

## Texto de relleno

Generar texto de relleno (Lorem ipsum):

```html
<!-- Emmet: lorem Resultado:  -->
Lorem ipsum dolor sit amet consectetur, adipisicing
elit. Quae deleniti voluptate, atque eligendi error, necessitatibus alias ipsam
dolores exercitationem quisquam facilis quo. Laudantium dolorum, perferendis
vero illum dolor facilis unde!
```

## Encapsular código

1- Seleccionar bloque de código.

2- Pulsar F1

3- Buscar Emmet:Wrap (Emmet:Encapsular)

4- Colocar comando de Emmet que encapsulara el código.

</div>
