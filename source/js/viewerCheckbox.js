'use strict'

let viewerCheckbox = () => {
	let viewerElements = document.querySelectorAll('.viewer__block');
	let viewerChecboxes = document.querySelectorAll('.form-constructor__input--checkbox');

	let kit = {
		elShorts: "js-shorts",
		elTshirt: "js-t-shirts",
	};

	/*let menuTabs = {
		tShirt: "js-t-shirt",
		shorts: "js-shorts",
		gaiters: "js-gaiters",
	}*/

	viewerChecboxes.forEach(el => {

		el.addEventListener('change', () => {
			let selectModel = document.querySelectorAll('.js-select-model');
			let viewerCheckboxData = el.getAttribute('data-viewer');

			if (viewerCheckboxData === kit.elTshirt && kit.elTshirt.checked === false) {
				kit.elShorts.setAttribute('disabled', true);
				kit.elShorts.classList.add('form-constructor__disabled');

				selectModel.forEach(el => {
					el.setAttribute('disabled', true);
					el.classList.add('form-constructor__disabled');
				});

			} else if (viewerCheckboxData === kit.elTshirt && kit.elTshirt.checked === true) {
				kit.elShorts.removeAttribute('disabled');
				kit.elShorts.classList.remove('form-constructor__disabled');

				selectModel.forEach(el => {
					el.removeAttribute('disabled', true);
					el.classList.remove('form-constructor__disabled');
				});
			}

			if (viewerCheckboxData === kit.elShorts && kit.elShorts.checked === false) {
				kit.elTshirt.setAttribute('disabled', true);

				kit.elTshirt.classList.add('form-constructor__disabled');

			} else if (viewerCheckboxData === kit.elShorts && kit.elShorts.checked === true) {
				kit.elTshirt.removeAttribute('disabled');

				kit.elTshirt.classList.remove('form-constructor__disabled');
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