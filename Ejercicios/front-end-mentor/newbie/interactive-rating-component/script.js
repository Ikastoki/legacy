const submitBtn = document.querySelector("#submit-btn");
const card = document.querySelector(".card");
const thankCard = document.querySelector("#thank-card");

submitBtn.addEventListener("click", () => {
  thankCard.classList.remove("hidden");
  card.classList.add("hidden");
});
