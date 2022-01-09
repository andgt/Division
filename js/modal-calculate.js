'use strict'

// Закрытие окна
let htmlPage = document.querySelector(".page");
let modalOverlay = document.querySelector(".modal-overlay");
let modalWindows = document.querySelectorAll(".modal");
let scrollPosition;
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

let modalCalculate = function () {
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

  let modalFormCalc = document.querySelector(".modal__form--calc");
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

export default modalCalculate()