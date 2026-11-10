const counterValue = document.querySelector(".counter-value");
const message = document.querySelector(".message");
const textContainer = document.querySelector(".text-container");

document.addEventListener("keyup", () => {
  counterValue.innerHTML = message.value.length;

  if (message.value.length >= 250) {
    textContainer.classList.add("text-limit");
  } else {
    textContainer.classList.remove("text-limit");
  }
});
