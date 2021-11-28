'use strict'

// Буквы у заголовков

let separateSubtitle = function() {
  let mainSubtitle = document.querySelector(".js-subtitle");


function addSpan(mainSubtitle) {
  mainSubtitle.innerHTML =  mainSubtitle.innerHTML.replace(/(.)/g, '<span class="page-main__subtitle-letter">$1</span>');
};

addSpan(mainSubtitle);
  /*let currentWords = [];
  let processedWords = [];

  mainSubtitle.forEach(el => {
    let current = el.textContent.split('');
    currentWords.push(current);
  });

  for (let i = 0; i < currentWords.length; i++) {
    for (let j = 0; j < currentWords[i].length; j++) {
      let subArray = currentWords[i][j];
      let newSubArray = `<span class="page-main__subtitle-letter">${subArray}</span>`;
      currentWords[i][j] = newSubArray;
    }
  }

  for (let i = 0; i < mainSubtitle.length; i++) {
    let newWord = currentWords[i].toString();
    currentWords[i] = newWord;
    mainSubtitle[i].appendChild(currentWords[i]);
  }
  console.log(currentWords);*/
};

separateSubtitle();

////

let subtitleLetters = document.querySelectorAll(".page-main__subtitle-letter");

let countTranslate = 0;
let countDuration = 0;

subtitleLetters.forEach(el => {
  countTranslate += 10;
  countDuration += 0.07;
  el.style.transition = `ease-in ${countDuration}s`;
  el.style.transform = `translateY(-${countTranslate}px)`;
});

let letterDown = function() {
  subtitleLetters.forEach(el => {
    el.style.transform = "translateY(0)";
    el.classList.add("page-main__subtitle-letter--show");
  })
};

window.onload = setTimeout(letterDown, 500);

export default separateSubtitle
