'use strict'

// Модальные окна

let modal = function () {
  let htmlPage = document.querySelector(".page");
  let modalsOpen = document.querySelectorAll(".js-button-open");
  let modalWindows = document.querySelectorAll(".modal");
  let modalOverlay = document.querySelector(".modal-overlay");
  let modalFormBack = document.querySelector(".modal__form--backcall");
  let modalFormCalc = document.querySelector(".modal__form--calc");
  let buttonsClose = document.querySelectorAll(".js-button-close");
  let modalTitles = document.querySelectorAll(".modal__title");
  let modalUsernames = document.querySelectorAll(".modal__form-input--username");

  let modalOpenName;
  let scrollPosition;
  let modalName;

  // Заголовки для окон

  let dynamicTitles = function () {
    for (let modalTitle of modalTitles) {
      modalTitle.textContent = modalName;
    }
  };

  // Автофокус

  let autofocus = function () {
    for (let modalUsername of modalUsernames) {
      modalUsername.focus();
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
          autofocus();
        }
      }
    }
  };

  // Закрытие окна

  let closesWindows = function () {
    for (let modalWindow of modalWindows) {
      htmlPage.classList.remove("page__modal-opened");
      modalWindow.classList.remove("modal__show");
      modalWindow.classList.remove("modal-error");
      modalOverlay.classList.remove("modal-overlay__open");
      htmlPage.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollPosition);
      htmlPage.style.scrollBehavior = "";
      htmlPage.style.top = "";
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

  // Количество выбранных файлов в label

  let inputFile = document.getElementById("file");
  let labelFile = document.querySelector(".modal__form-label--file");
  inputFile.onchange = function () {
    labelFile.textContent = "Выбрано файлов: " + inputFile.files.length;
  };

  // Отправка формы

  modalFormBack.addEventListener("submit", formSendCalc);

  async function formSendCalc (evt) {
    evt.preventDefault();
    let formData = new FormData(modalFormBack);
    let response = await fetch("../backcall.php", {
      method: "POST",
      body: formData
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      modalFormBack.reset();
      closesWindows();
    } else {
      alert("Error");
      closesWindows();
    }
  };

  modalFormCalc.addEventListener("submit", formSendBack);

  async function formSendBack (evt) {
    evt.preventDefault();
    let formData = new FormData(modalFormCalc);
    let response = await fetch("../calculate.php", {
      method: "POST",
      body: formData
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      modalFormCalc.reset();
      closesWindows();
    } else {
      alert("Error");
      closesWindows();
    }
  };
};

export default modal()
