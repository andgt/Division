'use strict'

let constructorForm = function() {
	let mainSelect = document.querySelector(".js-select-sport");
	let optionSport = document.querySelectorAll(".js-kind-of-sport");

	mainSelect.addEventListener("change", function() {
		let currentOptionValue = function() {
			let currentElement = mainSelect.value;
		};

		currentOptionValue();
	});
}

export default constructorForm()