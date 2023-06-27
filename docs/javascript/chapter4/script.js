let busyCursorCounter = 0;
const busyCursorRotatePeriod = 1000;
const busyCursorFramePeriod = 10;
const loading = document.querySelector('#loading');
const busyCursor = document.querySelector('#busy-cursor');
let theme = 0;
setInterval(function() {
	busyCursorAngle = busyCursorCounter * 360 / busyCursorRotatePeriod;
	busyCursor.style.background = `conic-gradient(from ${busyCursorAngle}deg, white, black)`;
	busyCursorCounter = (busyCursorCounter + busyCursorFramePeriod) % busyCursorRotatePeriod;
}, busyCursorFramePeriod);
setTimeout(function() {
	loading.classList.add('loaded');
}, 3000);

const themeButton = document.querySelector('#theme-button');
const themeElements = document.querySelectorAll('.light-theme, .dark-theme');
themeButton.addEventListener('click', function() {
	theme = (theme + 1) % 2;
	themeElements.forEach(function(themeElement) {
		themeElement.classList.toggle('light-theme');
		themeElement.classList.toggle('dark-theme');
	});
	switch(theme) {
	case 0:
		themeButton.textContent = 'ダークモードにする';
		break;
	case 1:
		themeButton.textContent = 'ライトモードにする';
		break;
	}
});

const textBox = document.querySelector('#text-box');
const textCounter = document.querySelector('#text-counter');
textBox.addEventListener('keyup', function() {
	let length = textBox.value.length;
	textCounter.textContent = length;
	if(100 < length) {
		textBox.classList.add('alert');
		textCounter.classList.add('alert');
	} else {
		textBox.classList.remove('alert');
		textCounter.classList.remove('alert');
	}
});

const check = document.querySelector('#check');
const submitButton = document.querySelector('#submit-button');
check.addEventListener('change', function() {
	submitButton.disabled = !check.checked;
});

const main = document.querySelector('main');
const bar = document.querySelector('#bar');
main.addEventListener('scroll', function() {
	scroll = main.scrollTop;
	overallHeight = main.scrollHeight;
	visibleHeight = main.clientHeight;
	scrollPercentage = 100 * scroll / (overallHeight - visibleHeight);
	bar.style.width = `${scrollPercentage}%`;

});

