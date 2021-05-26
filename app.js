const toggle = document.querySelector(".toggle");
const nav = document.querySelector("ul");
const menu = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");
console.log(nav);
toggle.addEventListener("click", function () {
  nav.classList.toggle("enable");
  toggle.classList.toggle("enable");
});
