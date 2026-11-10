const close = document.querySelector("#close");
const cookiePopup = document.querySelector(".cookie-popup");
const cookieConsent = document.querySelector("#cookie-consent");

document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = localStorage.getItem("cookieConsent");
  if (cookieConsent === "true") {
    cookiePopup.style.display = "none";
  }
});

close.addEventListener("click", () => (cookiePopup.style.display = "none"));

cookieConsent.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("cookieConsent", "true");
  cookiePopup.style.display = "none";
});
