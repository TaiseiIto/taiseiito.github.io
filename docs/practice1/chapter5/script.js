﻿const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
	menu.classList.toggle('open-menu');
	console.log('Hello, World!');
});

