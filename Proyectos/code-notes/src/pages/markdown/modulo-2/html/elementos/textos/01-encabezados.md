---
layout: ../../../../../../layouts/modulo-2/HTML.astro
title: "Encabezados"
block: "Textos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Encabezados</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Encabezados](#encabezados)
- [Estructura de los encabezados](#estructura-de-los-encabezados)
- [Agrupar encabezados](#agrupar-encabezados)
  - [¿Se usa mucho?](#se-usa-mucho)
  - [¿Deberías usarla?](#deberías-usarla)
- [Características clave de los encabezados](#características-clave-de-los-encabezados)
- [Buenas prácticas](#buenas-prácticas)

</div>
</div>

## Encabezados

Los encabezados en HTML son esenciales para estructurar y organizar el contenido de una página web. HTML ofrece seis niveles de encabezados, que van desde `<h1>` (el más importante) hasta `<h6>` (el menos importante). Cada nivel tiene un propósito semántico que ayuda tanto a los motores de búsqueda como a los usuarios a entender la jerarquía y la importancia de los temas en la página.

## Estructura de los encabezados

Los encabezados se definen con las etiquetas `<h1> a <h6>`, y cada nivel de encabezado indica un grado de relevancia. Normalmente, un documento HTML solo tiene un encabezado `<h1>`, que representa el título principal de la página o sección, y a medida que desciendes a `<h2>, <h3>`, etc., los subtítulos o secciones secundarias son menos prominentes.

```html
<h1>Encabezado de nivel 1</h1>
<p>
  Este es el encabezado principal de la página, usualmente utilizado para el
  título del contenido.
</p>

<h2>Encabezado de nivel 2</h2>
<p>Este es un subtítulo o encabezado de sección principal.</p>

<h3>Encabezado de nivel 3</h3>
<p>Este encabezado se usa para subsecciones dentro de un nivel 2.</p>

<h4>Encabezado de nivel 4</h4>
<p>Este nivel es útil para subdivisiones dentro de secciones más detalladas.</p>

<h5>Encabezado de nivel 5</h5>
<p>Generalmente usado para un detalle muy específico o subsección pequeña.</p>

<h6>Encabezado de nivel 6</h6>
<p>
  Es el nivel de encabezado más bajo en la jerarquía, y rara vez se usa en la
  mayoría de los sitios web.
</p>
```

## Agrupar encabezados

La etiqueta `<hgroup>` en HTML se usa para agrupar un conjunto de encabezados relacionados, como un título principal y un subtítulo. Su objetivo es indicar que esos encabezados forman una unidad semántica, lo cual puede ser útil para lectores de pantalla, motores de búsqueda, y otras herramientas que interpretan la estructura del documento.

```html
<hgroup>
  <h1>El Señor de los Anillos</h1>
  <h2>La Comunidad del Anillo</h2>
</hgroup>
```

En este caso, el `<h1>` sería el título principal, y el `<h2>` un subtítulo relacionado. Agruparlos con `<hgroup>` indica que ambos pertenecen a la misma sección o concepto.

### ¿Se usa mucho?

No, la etiqueta `<hgroup>` ha tenido uso limitado y su soporte en navegadores ha sido inconsistente. De hecho, en HTML5 se eliminó su definición por un tiempo y luego se reintrodujo con una definición más clara. Aún así, no es ampliamente utilizada y muchos desarrolladores prefieren simplemente usar los encabezados directamente, sin agruparlos.

### ¿Deberías usarla?

Solo si necesitas dar claridad semántica específica a una combinación de títulos y subtítulos. Si no tienes una necesidad clara, puedes omitirla sin problema.

## Características clave de los encabezados

- **Jerarquía visual y semántica:** Los encabezados más grandes son los más importantes (generalmente `<h1>`), y ayudan a organizar el contenido de una página de forma clara.
- **Accesibilidad:** Los encabezados facilitan la navegación a través de lectores de pantalla, ya que permiten a los usuarios saltar entre secciones. Es importante mantener un orden lógico (no saltar directamente de `<h1>` a `<h4>`, por ejemplo).
- **SEO (Optimización para motores de búsqueda):** Los encabezados son fundamentales para el SEO. Los motores de búsqueda usan la jerarquía de encabezados para comprender mejor la estructura y el contenido de una página. El `<h1>` suele contener el tema principal y es uno de los factores que Google utiliza para indexar el contenido.

## Buenas prácticas

- **Único `<h1>` por página:** Aunque técnicamente es posible tener más de un `<h1>`, es recomendable usar solo uno por página para evitar confusión en la estructura.
- **Usar los niveles en orden:** Sigue un orden lógico en los encabezados. No uses un `<h4>` antes que un `<h2>`. Esto mantiene una estructura clara tanto para el usuario como para los motores de búsqueda.
- **Estilo por CSS, no por la semántica:** Si necesitas ajustar el tamaño del texto de un encabezado, usa CSS para hacerlo en lugar de usar un nivel de encabezado inapropiado solo para obtener un tamaño diferente.

</div>
