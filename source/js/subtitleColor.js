'use strict'

let subtitleColor = function() {
  let subtitleAdvantages = document.querySelector(".page-main__subtitle--advantages");
  if (subtitleAdvantages) {
    subtitleAdvantages.dataset.content = subtitleAdvantages.textContent;
  }
};

export default subtitleColor()
