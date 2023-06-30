const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".containerButtonsHeader");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document
  .querySelectorAll(".containerButtonsHeader")
  .forEach((n) => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }));
