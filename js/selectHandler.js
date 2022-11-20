'use strict'

let changeModel = () => {

	let selectModel = document.querySelectorAll('.js-select-model');
	let sportModel = document.querySelectorAll('.js-model');

	selectModel.forEach(el => {
		el.addEventListener('change', () => {
			let selectValue = el.value;
			let currentParent;

			sportModel.forEach(model => {

				if (model.classList.contains(selectValue)) {

					currentParent = model.parentElement;
					let removeActive = currentParent.children;


					for (let elem of removeActive) {
						elem.classList.remove('viewer__active')					
					};

					model.classList.add('viewer__active');
				}

			});
		})
	})
}

export default changeModel()