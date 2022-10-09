'use strict'

let addPlayer = function(evt) {
	let buttonAdd = document.querySelectorAll('.js-add-player');
	let boxForTemplate = document.querySelector('.js-players');
	let playerTemplate = document.getElementById('player-template');
	

	buttonAdd.forEach(el => {
		el.addEventListener('click', function(e) {
			let newPlayerField = playerTemplate.content.cloneNode(true);
			boxForTemplate.appendChild(newPlayerField);
		});
	})
};

export default addPlayer()