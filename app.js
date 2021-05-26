const menu = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
var t = true;
menu.addEventListener("click", () => {
  if (t) {
    t = false;
    navbar.classList.toggle("on");
  } else {
    t = true;
    navbar.classList.remove("on");
  }
});
