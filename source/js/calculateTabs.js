'use strict'

let calculateTabs = function() {

	let tabsButton = document.querySelectorAll('.constructor-tabs__button');
	let formFieldsetOptions = document.querySelectorAll('.form-constructor__fieldset-wrapper');
	let dataValue;

	tabsButton.forEach(el => {

		el.addEventListener('click', function() {

			tabsButton.forEach(btn => {
				btn.classList.remove('constructor-tabs__button--active');
			})

			this.classList.add('constructor-tabs__button--active');

			dataValue = el.getAttribute('data-tab');

			
			formFieldsetOptions.forEach(elem => {
				elem.classList.remove('form-constructor__fieldset-wrapper--active');

				if (elem.classList.contains(dataValue)) {
					elem.classList.add('form-constructor__fieldset-wrapper--active');
				}

			});

		});
	});
}

export default calculateTabs()