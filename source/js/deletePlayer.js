'use strict'

let deletePlayer = function() {
	let playerField = document.querySelector('.form-constructor__team-inner');
	let buttonAdd = document.querySelector('.js-add-player');

	playerField.addEventListener('mouseover', (e) => {

		if (e.target.classList.contains('js-del-player')) {
			let buttonDelPlayer = e.target;
			let parent = buttonDelPlayer.parentElement;

			buttonDelPlayer.addEventListener('click', (e) => {
				setTimeout(() => parent.remove(), 125);
			})
		}
	});
};

export default deletePlayer()