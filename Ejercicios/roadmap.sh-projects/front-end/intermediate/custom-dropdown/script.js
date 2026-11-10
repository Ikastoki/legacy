const toggleButton = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const items = document.querySelectorAll(".dropdown-item");

toggleButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    toggleButton.textContent = e.target.textContent;
    dropdownMenu.classList.remove("show");
  });
});
