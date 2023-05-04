'use strict'

let changeColor = () => {
	let form = document.querySelector(".form-constructor");
	let select = form.querySelectorAll(".form-constructor__change-color");
	let selectedColor;
	
	select.forEach(el => {
		el.addEventListener("change", function() {
			let selectedModel = document.querySelector(".js-active-color");
			selectedColor = el.options[el.selectedIndex].getAttribute("data-color");
			selectedModel.style.fill = selectedColor;
		});
	});

}

export default changeColor()