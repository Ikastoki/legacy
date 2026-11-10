---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Map"
block: "Imágenes"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Map</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Map](#map)
- [Cords](#cords)
- [Usos comunes del mapa de imagen](#usos-comunes-del-mapa-de-imagen)
- [Consideraciones](#consideraciones)

</div>
</div>

## Map

La etiqueta `<map>`(mapa de imágenes) se utiliza junto con las etiquetas `<area>` para crear mapas de imagen interactivos. Un mapa de imagen permite dividir una imagen en áreas o regiones clickable, cada una asociada a un enlace o acción diferente. Puedes utilizar la etiqueta `<map>` para definir las áreas y luego vincularlas a URLs específicas o activar funciones JavaScript cuando el usuario interactúa con esas áreas.

```html
<!-- HTML -->
<img src="continentes.jpg" usemap="#mapa-continentes" />

<map name="mapa-continentes">
  <area
    target="_blank"
    alt="Africa"
    title="Africa"
    href="https://es.wikipedia.org/wiki/%C3%81frica"
    coords="395,111,215,258"
    shape="rect"
  />
</map>
```

> ✍️ Nota
>
> La etiqueta `<map>` debe tener un atributo name que coincide con el atributo usemap de la etiqueta de imagen para establecer la asociación entre la imagen y el mapa.

## Cords

El atributo coords en las etiquetas `<area>` de un mapa de imagen HTML se utiliza para especificar las coordenadas de una forma geométrica que define la región de la imagen que es sensible al clic del usuario. La forma puede ser rectangular, circular o poligonal, dependiendo del valor del atributo shape. Las coordenadas deben proporcionarse en píxeles.

El valor exacto del atributo coords varía según la forma especificada. Aquí hay una breve descripción de cómo se definen las coordenadas para diferentes formas:

**Rectangular (shape="rect"):**

- El atributo coords tiene cuatro valores: left, top, right, y bottom.
- Ejemplo: coords="10,20,50,40" indica una región rectangular con esquinas en (10, 20) y (50, 40).

**Circular (shape="circle"):**

- El atributo coords tiene tres valores: x, y, y radio.
- Ejemplo: coords="50,50,30" indica una región circular con centro en (50, 50) y radio de 30 píxeles.

**Poligonal (shape="poly"):**

- El atributo coords tiene una lista de pares x,y que representan los vértices del polígono.
- Ejemplo: coords="10,10,30,40,50,20" indica un triángulo con vértices en (10,10), (30,40), y (50,20).

> ✍️ Nota
>
> Usar generadores de map como [Image Map Generator](https://www.image-map.net/). O con Gimp también se puede saber las coordenadas y medir objetos.

## Usos comunes del mapa de imagen

**Mapas interactivos:** Los mapas de imagen son útiles para crear mapas interactivos, como mapas de ciudades, sitios web de turismo, o incluso mapas del mundo.

**Interfaces gráficas:** A veces se usa un mapa de imagen para crear botones gráficos en lugar de usar botones estándar de HTML.

**Organización de contenido visual:** El mapa de imagen puede ayudar a organizar contenido visual, donde cada sección de la imagen es un enlace a una página diferente.

## Consideraciones

**Resolución:** Las coordenadas de las áreas deben ser exactas para que las áreas interactuables se alineen correctamente con la imagen. Si la imagen cambia de tamaño o se redimensiona, es posible que las áreas no funcionen correctamente. Para garantizar que las coordenadas sean precisas, algunas personas utilizan herramientas de edición de imágenes para obtener las coordenadas exactas.

**Accesibilidad:** Es fundamental usar la descripción adecuada en los atributos alt y title para mejorar la accesibilidad de los mapas de imagen, especialmente para personas con discapacidades visuales.

</div>
