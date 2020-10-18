const buttonHam = document.getElementById("hamburger");
const nav = document.getElementById("nav");

buttonHam.addEventListener("click", () => {
  if(buttonHam.classList.contains("hamburger__open")) {
    buttonHam.classList.remove("hamburger__open")
    nav.classList.add("nav__close");
  } else {
    buttonHam.classList.add("hamburger__open")
    nav.classList.remove("nav__close");
  }
})
