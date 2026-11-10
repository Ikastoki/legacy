// Obtén todos los elementos de imagen con la clase "item__header"
const images = document.querySelectorAll(".item__header img");

// Itera sobre cada imagen y añade un evento de click
images.forEach((image) => {
  image.addEventListener("click", () => {
    // Obtén el párrafo correspondiente al elemento de imagen clicado
    const paragraph = image.parentElement.nextElementSibling;

    // Alterna la clase 'active' para cambiar la visibilidad del párrafo
    paragraph.classList.toggle("active");

    // Obtén la ruta de la imagen actual
    const currentSrc = image.src;

    // Obtén la ruta de la imagen de cambio
    const newSrc = currentSrc.includes("icon-plus.svg")
      ? "./assets/images/icon-minus.svg"
      : "./assets/images/icon-plus.svg";

    // Cambia la ruta de la imagen
    image.src = newSrc;
  });
});
