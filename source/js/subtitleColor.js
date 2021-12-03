'use strict'

let subtitleColor = function() {
  let subtitleAdvantages = document.querySelector(".page-main__subtitle--advantages");
  subtitleAdvantages.dataset.content = subtitleAdvantages.textContent;
};

export default subtitleColor()
