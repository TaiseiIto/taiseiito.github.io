const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
	nav.classList.toggle('open-menu');
	console.log('Hello, World!');
});

