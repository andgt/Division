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


// Плавный скролл к якорям

/*const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};*/
