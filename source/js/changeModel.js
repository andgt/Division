'use strict'

let changeModel = () => {
	let selectModel = document.querySelectorAll('.js-select-model');
	let sportModel = document.querySelectorAll('.js-model');

	selectModel.forEach(el => {
		el.addEventListener('change', () => {
			let selectValue = el.value;

			sportModel.forEach(model => {
				
				model.classList.remove('viewer__active');

				if (model.classList.contains(selectValue)) {
					model.classList.add('viewer__active');
				}

			});
		})
	})
}

export default changeModel()