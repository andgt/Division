'use strict'

// Кнопка наверх

let buttonUp = function() {
  let scrollUp = document.querySelector(".button__scroll-up");

  window.onscroll = function () {
    if (window.pageYOffset > 100) {
      scrollUp.classList.add("button__scroll-up--showed");
    } else {
      scrollUp.classList.remove("button__scroll-up--showed");
    }
  }

  scrollUp.onclick = function () {
    window.scrollTo(0, 0);
  }
};

buttonUp();

export default buttonUp
