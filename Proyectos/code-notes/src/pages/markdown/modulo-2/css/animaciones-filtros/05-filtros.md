---
layout: ../../../../../layouts/modulo-2/CSS.astro
title: "Filtros"
block: "Animaciones y Filtros"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Filtros</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Filtros](#filtros)
  - [Blur(desenfoque)](#blurdesenfoque)
  - [Brightness(brillo)](#brightnessbrillo)
  - [Grayscale(escala de grises)](#grayscaleescala-de-grises)
  - [Drop-shadow(sombras paralelas)](#drop-shadowsombras-paralelas)
- [Filtro de fondo](#filtro-de-fondo)

</div>
</div>

## Filtros

Mediante el uso de filtros podemos añadir efectos a diferentes elementos. Para aplicar estos filtros usaremos la propiedad `filter`.

Ejemplos:

### Blur(desenfoque)

Este filtro recibe un argumento, tiene que ser una unidad de longitud que no sea un porcentaje.

```html
<!-- HTML -->
<img src="img/pruebas.jpg" alt="ordenador portátil" />
```

```css
/* CSS */
img {
  width: 400px;
  filter: blur(20px);
}
```

![filtro blur](./img/blur.png)

---

### Brightness(brillo)

Este filtro recibe un argumento, tiene que ser un porcentaje. 0% es negro y 100% es el valor inicial.

```html
<!-- HTML -->
<img src="img/pruebas.jpg" alt="ordenador portátil" />
```

```css
/* CSS */
img {
  width: 400px;
  filter: brightness(20%);
}
```

![filtro brightness](./img/brillo.png)

---

### Grayscale(escala de grises)

Este filtro recibe un argumento, puede ser un porcentaje o un `1` o `0`.
<br>
1- Aplica escala de grises.<br>
0- Elemento por defecto.

```html
<!-- HTML -->
<img src="img/pruebas.jpg" alt="ordenador portátil" />
```

```css
/* CSS */
img {
  width: 400px;
  filter: grayscale(1);
}
```

![filtro grayscale](./img/grayscale.png)

---

### Drop-shadow(sombras paralelas)

Este filtro recibe un argumento, las areas del elemento y el color.

```html
<!-- HTML -->
<img src="img/pruebas.jpg" alt="ordenador portátil" />
```

```css
/* CSS */
img {
  width: 400px;
  filter: drop-shadow(5px 5px 20px purple);
}
```

![filtro drop-shadow](./img/drop-shadow.png)

## Filtro de fondo

Con la propiedad `backdrop-filter` podemos aplicar filtros al fondo del elemento. `backdrop-filter` acepta los mismos valores y utiliza la misma sintaxis que `filter`.

```html
<!-- HTML -->
<div class="fondo">
  <div class="caja">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa dolor
      aliquam accusantium? Alias aut assumenda illo reprehenderit, ad aliquid,
      iste cumque quisquam blanditiis reiciendis pariatur minima voluptates,
      delectus aperiam!
    </p>
  </div>
</div>
```

```css
/* CSS */
.fondo {
  background: url(pruebas.jpg) no-repeat center;
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 400px;
  width: 400px;
}

.caja {
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  padding: 20px;
  margin: 30px;
  font-weight: bold;
}
```

![Filtro backdrop-filter](./img/backdrop.png)
