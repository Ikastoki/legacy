---
layout: ../../../../../layouts/modulo-2/HTML.astro
title: "SEO"
block: "Buenas practicas"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">SEO</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [SEO](#seo)
- [Etiquetas de título](#etiquetas-de-título)
- [Meta descripción](#meta-descripción)
- [Uso de encabezados](#uso-de-encabezados)
- [Atributos alt en imágenes](#atributos-alt-en-imágenes)
- [URLs limpias y amigables](#urls-limpias-y-amigables)
- [Etiquetas meta robots](#etiquetas-meta-robots)
- [Atributo rel="canonical"](#atributo-relcanonical)
- [Optimización de velocidad](#optimización-de-velocidad)
- [Enlaces internos y externos](#enlaces-internos-y-externos)
- [Uso correcto de enlaces](#uso-correcto-de-enlaces)
- [Contenido optimizado para móviles](#contenido-optimizado-para-móviles)
- [Etiquetas Open Graph y Twitter Cards](#etiquetas-open-graph-y-twitter-cards)

</div>
</div>

## SEO

El SEO (Optimización para Motores de Búsqueda) se refiere a la práctica de estructurar y escribir el código de un sitio web de manera que los motores de búsqueda como Google puedan entender, indexar y clasificar el contenido de manera más eficiente. Un HTML bien optimizado ayuda a mejorar la visibilidad del sitio web en los resultados de búsqueda, lo que puede aumentar el tráfico orgánico.

## Etiquetas de título

La etiqueta `<title>` es fundamental para el SEO. Se muestra como el título de la página en los resultados de búsqueda y en la pestaña del navegador. Debe ser descriptiva, única para cada página, y contener palabras clave relevantes.

➡️ Limita el título a menos de 60 caracteres y colócalo dentro de la etiqueta `<head>`.

## Meta descripción

La meta descripción(`<meta name="description">`) ofrece un resumen breve del contenido de la página y aparece en los resultados de búsqueda bajo el título. Aunque no afecta directamente el ranking, influye en la tasa de clics (CTR), ya que es lo primero que los usuarios leen.

➡️ Escribe descripciones claras y atractivas de entre 150 y 160 caracteres que incluyan palabras clave importantes.

## Uso de encabezados

Los encabezados ayudan a estructurar el contenido de la página. El `<h1>` debe usarse para el título principal, y los `<h2>, <h3>`, etc., para subtítulos. Los motores de búsqueda utilizan estos encabezados para entender la jerarquía y el tema del contenido.

➡️ Usa solo un `<h1>` por página, y asegúrate de que los encabezados sigan un orden lógico. Utiliza palabras clave relevantes en ellos.

## Atributos alt en imágenes

Los atributos alt proporcionan una descripción alternativa para las imágenes. Son importantes para la accesibilidad y para que los motores de búsqueda comprendan el contenido visual.

➡️ Utiliza descripciones claras y concisas que incluyan palabras clave si es relevante, pero no hagas "keyword stuffing".

## URLs limpias y amigables

Las URLs amigables son fáciles de leer tanto para los usuarios como para los motores de búsqueda. Deben describir el contenido de la página y, preferiblemente, contener palabras clave.

➡️ Evita URLs largas con números o caracteres irrelevantes. Usa guiones (-) para separar palabras, no guiones bajos (\_).

## Etiquetas meta robots

La etiqueta meta robots(`<meta name="robots">`) le dice a los motores de búsqueda cómo tratar la página. Puedes indicarle que no la indexe o que no siga los enlaces en ella, lo cual puede ser útil para páginas de baja prioridad o en desarrollo.

➡️ Solo usa esta etiqueta cuando sea necesario. Para páginas importantes, lo habitual es no incluirla o establecer el valor a index, follow.

## Atributo rel="canonical"

El atributo canonical ayuda a evitar el contenido duplicado. Si tienes múltiples URLs que apuntan al mismo contenido, el atributo rel="canonical" indica a los motores de búsqueda cuál es la versión principal.

➡️ Úsalo para señalar la página original cuando haya variaciones de la misma URL (por ejemplo, con parámetros de seguimiento).

## Optimización de velocidad

El tiempo de carga de la página afecta el SEO. Google valora sitios que cargan rápidamente, especialmente en dispositivos móviles. Puedes optimizar el HTML para mejorar la velocidad de carga:

- **Optimiza imágenes:** Comprime imágenes y usa formatos modernos como WebP.
- **Carga diferida de recursos (Lazy Loading):** Usa el atributo loading="lazy" en imágenes y iframes para retrasar la carga de elementos hasta que sean necesarios.

## Enlaces internos y externos

Los enlaces internos ayudan a los motores de búsqueda a navegar y entender la estructura de tu sitio. Los enlaces externos (hacia sitios de autoridad) pueden mejorar la relevancia de tu página.

➡️ Usa enlaces internos que ayuden a distribuir la autoridad dentro de tu sitio. Asegúrate de que los enlaces externos sean de sitios confiables y relevantes.

## Uso correcto de enlaces

Los enlaces(`<a>`) deben usar texto ancla descriptivo, es decir, el texto visible que describe el contenido al que se vincula. Esto ayuda a los motores de búsqueda a comprender mejor la relación entre las páginas enlazadas.

➡️ Evita usar "haz clic aquí" como texto ancla. En su lugar, usa descripciones claras y relevantes.

## Contenido optimizado para móviles

La optimización para dispositivos móviles es crucial, ya que Google usa mobile-first indexing. Asegúrate de que tu HTML sea responsivo (es decir, se adapta bien a diferentes tamaños de pantalla).

➡️ Usa la metaetiqueta viewport para garantizar que el contenido responda adecuadamente en dispositivos móviles.

## Etiquetas Open Graph y Twitter Cards

Estas etiquetas no afectan directamente el SEO, pero mejoran cómo se comparte el contenido en redes sociales, lo que puede aumentar el tráfico a tu sitio web.

> ✍️ Nota
>
> Esto son solo algunos aspectos a tener en cuenta. Esto es una introducción, es un tema tan amplio que podría tener su propio bloque.

</div>
