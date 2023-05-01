'use strict'

let changeColor = () => {
	let form = document.querySelector(".form-constructor");
	let select = form.querySelectorAll(".form-constructor__change-color");
	
	select.forEach(el => {
		el.addEventListener("change", function() {
			console.log(1);
		});
	});

}

export default changeColor()