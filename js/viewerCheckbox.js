'use strict'

let viewerCheckbox = () => {
	let viewerElements = document.querySelectorAll('.viewer__block');
	let viewerChecboxes = document.querySelectorAll('.form-constructor__input--checkbox');
	

	viewerChecboxes.forEach(el => {

		el.addEventListener('change', () => {
			let elShorts = document.querySelector('.js-shorts');
			let elTshirt = document.querySelector('.js-t-shirts');
			let selectModel = document.querySelectorAll('.js-select-model');
			let viewerCheckboxData = el.getAttribute('data-viewer');

			if (viewerCheckboxData === 't-shirt' && elTshirt.checked === false) {
				elShorts.setAttribute('disabled', true);
				elShorts.classList.add('form-constructor__disabled');

				selectModel.forEach(el => {
					el.setAttribute('disabled', true);
					el.classList.add('form-constructor__disabled');
				});

			} else if (viewerCheckboxData === 't-shirt' && elTshirt.checked === true) {
				elShorts.removeAttribute('disabled');
				elShorts.classList.remove('form-constructor__disabled');

				selectModel.forEach(el => {
					el.removeAttribute('disabled', true);
					el.classList.remove('form-constructor__disabled');
				});
			}

			if (viewerCheckboxData === 'shorts' && elShorts.checked === false) {
				elTshirt.setAttribute('disabled', true);

				elTshirt.classList.add('form-constructor__disabled');

			} else if (viewerCheckboxData === 'shorts' && elShorts.checked === true) {
				elTshirt.removeAttribute('disabled');

				elTshirt.classList.remove('form-constructor__disabled');
			}

			viewerElements.forEach(element => {
				if (element.classList.contains(viewerCheckboxData)) {
					element.classList.toggle('viewer__active');
				}
			});

		})
	});
}

export default viewerCheckbox()