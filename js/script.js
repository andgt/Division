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

let modal = function () {
  let htmlPage = document.querySelector(".page");
  let modalsOpen = document.querySelectorAll(".js-button-open");
  let modalWindows = document.querySelectorAll(".modal");
  let modalOverlay = document.querySelector(".modal-overlay");
  let buttonsClose = document.querySelectorAll(".js-button-close");
  let modalOpenName;
  let scrollPosition;

  let closesWindows = function () {
    for (let modalWindow of modalWindows) {
      htmlPage.classList.remove("modal__opened");
      modalWindow.classList.remove("modal__show");
      modalOverlay.classList.remove("modal-overlay__open");
      htmlPage.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollPosition);
      htmlPage.style.scrollBehavior = "";
      htmlPage.style.top = "";
    }
  };

  for (let modalOpen of modalsOpen) {
    modalOpen.onclick = function (evt) {
      evt.preventDefault();
      scrollPosition = pageYOffset;
      modalOpenName = this.getAttribute("data-modal-window");
      for (let modalWindow of modalWindows) {
        if (modalWindow.classList.contains(modalOpenName)) {
          htmlPage.classList.add("modal__opened");
          htmlPage.style.top = -scrollPosition + "px";
          modalOverlay.classList.add("modal-overlay__open");
          modalWindow.classList.add("modal__show");
        }
      }
    }
  };

  for (let buttonClose of buttonsClose) {
    buttonClose.onclick = function (evt) {
      evt.preventDefault();
      closesWindows();
    }
  };

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      closesWindows();
    }
  });

  htmlPage.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("modal-overlay")) {
      closesWindows();
    }
  });
};

modal();
