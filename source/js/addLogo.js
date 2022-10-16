'use strict'

let addLogo = () => {
	let shirt = document.querySelector('.js-shirt');
	let imageEl = shirt.querySelector('.viewer__logo');
	let wrapperShirts = shirt.getElementById('wrapper-logo');
	let inputLogo = document.getElementById('logo-t-shirt');

	let decoderFile = function() {
		let thisImage = inputLogo.files[0];
		let reader = new FileReader();

		let imageAsBase = reader.readAsDataURL(thisImage);

		reader.onloadend = function() {
			let decodeImg = reader.result;
			imageEl.setAttribute('xlink:href', decodeImg);
		};
	};

	inputLogo.addEventListener('change', decoderFile);
}

export default addLogo()