'use strict'

// Главное меню


let mainMenu = function() {
  let mainNav = document.querySelector(".main-nav");
  let menuToggle = document.querySelector(".main-nav__toggle");

  mainNav.classList.remove("main-nav--no-js");

  menuToggle.addEventListener("click", function () {
    if (mainNav.classList.contains("main-nav--closed")) {
      mainNav.classList.remove("main-nav--closed");
      mainNav.classList.add("main-nav--opened");
    } else {
      mainNav.classList.add("main-nav--closed");
      mainNav.classList.remove("main-nav--opened");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mainNav.classList.contains("main-nav--opened")) {
        evt.preventDefault();
        mainNav.classList.remove("main-nav--opened");
        mainNav.classList.add("main-nav--closed");
      }
    }
  });
};

export default mainMenu()
