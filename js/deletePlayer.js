'use strict'

let deletePlayer = function() {
	let playerFields = document.querySelectorAll('.form-constructor__team-inner');
	let buttonAdd = document.querySelector('.js-add-player');

	playerFields.forEach(el => {
		el.addEventListener('mouseover', (e) => {

			if (e.target.classList.contains('js-del-player')) {
				let buttonDelPlayer = e.target;
				let parent = buttonDelPlayer.parentElement;

				buttonDelPlayer.addEventListener('click', (e) => {
					setTimeout(() => parent.remove(), 125);
				})
			}
		});
	});
};

export default deletePlayer()