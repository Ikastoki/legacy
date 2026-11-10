const navItems = document.querySelectorAll(".navigation-list li");
const tabs = document.querySelectorAll(".tab");

navItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    navItems.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");

    tabs.forEach((tab) => tab.classList.remove("active"));

    tabs[index].classList.add("active");
  });
});
