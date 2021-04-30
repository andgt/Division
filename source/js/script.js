'use strict'

// Главное меню

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

// Модальные окна

let modalsOpen = document.querySelectorAll(".js-button-open");
let modalWindows = document.querySelectorAll(".modal");
let modalOpenName;
let buttonsClose = document.querySelectorAll(".js-button-close");

for (let modalOpen of modalsOpen) {
  modalOpen.onclick = function (evt) {
    evt.preventDefault();
    modalOpenName = this.getAttribute("data-modal-window");
    for (let modalWindow of modalWindows) {
      if (modalWindow.classList.contains(modalOpenName)) {
        modalWindow.classList.add("modal__show");
      }
    }
  }
};

for (let buttonClose of buttonsClose) {
  buttonClose.onclick = function () {
    for (let modalWindow of modalWindows) {
      modalWindow.classList.remove("modal__show");
    }
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    for (let modalWindow of modalWindows) {
      modalWindow.classList.remove("modal__show");
    }
  }
});
