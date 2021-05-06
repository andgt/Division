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
  let modalTitles = document.querySelectorAll(".modal__title");
  let modalOpenName;
  let scrollPosition;
  let modalName;

  // Заголовки для окон

  let dynamicTitles = function () {
    for (let modalTitle of modalTitles) {
      modalTitle.textContent = modalName;
    };
  };

  // Закрытие окна

  let closesWindows = function () {
    for (let modalWindow of modalWindows) {
      htmlPage.classList.remove("page__modal-opened");
      modalWindow.classList.remove("modal__show");
      modalOverlay.classList.remove("modal-overlay__open");
      htmlPage.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollPosition);
      htmlPage.style.scrollBehavior = "";
      htmlPage.style.top = "";
    }
  };

  // Открытие окна

  for (let modalOpen of modalsOpen) {
    modalOpen.onclick = function (evt) {
      evt.preventDefault();
      scrollPosition = pageYOffset;
      modalOpenName = this.getAttribute("data-modal-window");
      modalName = this.getAttribute("data-modal-name");
      for (let modalWindow of modalWindows) {
        if (modalWindow.classList.contains(modalOpenName)) {
          dynamicTitles();
          htmlPage.classList.add("page__modal-opened");
          htmlPage.style.top = -scrollPosition + "px";
          modalOverlay.classList.add("modal-overlay__open");
          modalWindow.classList.add("modal__show");
        }
      }
    }
  };

  // Закрытие окна по кнопке

  for (let buttonClose of buttonsClose) {
    buttonClose.onclick = function (evt) {
      evt.preventDefault();
      closesWindows();
    }
  };

  // Закрытие окна по esc

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      closesWindows();
    }
  });

  // Закрытие по клику вне окна

  htmlPage.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("modal-overlay")) {
      closesWindows();
    }
  });

  // Кнопки в форме

  let modalCount = function () {
    let leftButton = document.querySelector(".modal__value--min");
    let rightButton = document.querySelector(".modal__value--max");
    let inputValueNumber = document.querySelector(".modal__value--number");

    leftButton.onclick = function () {
      inputValueNumber.value--;
      if (inputValueNumber.value <= 5) {
        leftButton.disabled = true;
      }
    };

    rightButton.onclick = function () {
      inputValueNumber.value++;
      if (inputValueNumber.value > 5) {
        leftButton.disabled = false;
      }
    };
  };

  modalCount();
};

modal();


// Количество выбранных файлов в label

let inputFile = document.getElementById("file");
let labelFile = document.querySelector(".modal__form-label--file");
inputFile.onchange = function () {
  labelFile.textContent = "Выбрано файлов: " + inputFile.files.length;
};

// Кнопка наверх

let scrollUp = document.querySelector(".button__scroll-up");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    scrollUp.classList.add("button__scroll-up--showed");
  } else {
    scrollUp.classList.remove("button__scroll-up--showed");
  }
};

scrollUp.onclick = function () {
  window.scrollTo(0, 0);
};

