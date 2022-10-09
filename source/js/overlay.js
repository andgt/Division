'use strict'

let mainOverlay = function() {
	let mainWrapper = document.querySelectorAll(".page-main__wrapper");
	let mainOverlay = document.querySelectorAll(".page-main__promo-inner--bg");

	mainWrapper.forEach(item => {
		item.addEventListener("mouseover", function() {
			mainOverlay.forEach(el => {
				setTimeout(() => el.classList.add("page-main__promo-inner--hidden"), 1500);
			});
		});

		item.addEventListener("mouseout", function() {
			mainOverlay.forEach(el => {
				setTimeout(() => el.classList.remove("page-main__promo-inner--hidden"), 1500);
			});
		});
	});
};

export default mainOverlay()
