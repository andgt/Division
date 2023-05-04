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
					let modelChangeColor = model.children[0];
					let removeChangeColor;


					for (let elem of removeActive) {
						elem.classList.remove('viewer__active');
						removeChangeColor = elem.children[0];
						removeChangeColor.classList.remove('js-active-color');
					};

					model.classList.add('viewer__active');
					modelChangeColor.classList.add('js-active-color');
				}

			});
		})
	})
}

export default changeModel()