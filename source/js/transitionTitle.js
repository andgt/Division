'use strict'

let options = {
  root: null,
  threshold: 0.6,
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    let currentSection = entry.target;
    let currentTitle = currentSection.querySelector(".page-main__subtitle");
    let currentDescription = currentSection.querySelector(".page-main__description");

    if (entry.isIntersecting) {
      currentTitle.classList.add("page-main__subtitle--show");

      if (currentDescription !== null) {
        currentDescription.classList.add("page-main__description--show");
      }
    }
  })
}, options);

let transitionTitle = function() {
  let mainSection = document.querySelectorAll(".page-main__section");

  mainSection.forEach(el => {
    observer.observe(el);
  })
}

transitionTitle();

export default transitionTitle
