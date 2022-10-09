'use strict'

let addPlayer = function(evt) {
	let buttonAdd = document.querySelectorAll('.js-add-player');
	let boxForPlayers = document.querySelector('.js-players');
	let boxForGoalkeepers = document.querySelector('.js-goalkeepers');
	let playerTemplate = document.getElementById('player-template');
	

	buttonAdd.forEach(el => {
		el.addEventListener('click', function(e) {
			let btnValue = el.getAttribute('data-btn');

			if (btnValue === "player") {
				let newPlayerField = playerTemplate.content.cloneNode(true);
				boxForPlayers.appendChild(newPlayerField);
			} else if (btnValue === "goalkeeper") {
				let newPlayerField = playerTemplate.content.cloneNode(true);
				boxForGoalkeepers.appendChild(newPlayerField);
			}

		});
	})
};

export default addPlayer()