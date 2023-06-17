const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
	menu.classList.toggle('open-menu');
	if (button.innerHTML === 'Menu') {
		button.innerHTML = 'Close';
	} else {
		button.innerHTML = 'Menu';
	}
});

