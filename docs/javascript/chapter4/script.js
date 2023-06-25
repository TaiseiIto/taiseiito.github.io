let busyCursorCounter = 0;
const busyCursorRotatePeriod = 1000;
const busyCursorFramePeriod = 10;
const loading = document.querySelector('#loading');
const busyCursor = document.querySelector('#busy-cursor');
let theme = 0;
const themeButton = document.querySelector('#theme-button');
const themeElements = document.querySelectorAll('.light-theme, .dark-theme');
setInterval(function() {
	busyCursorAngle = busyCursorCounter * 360 / busyCursorRotatePeriod;
	busyCursor.style.background = `conic-gradient(from ${busyCursorAngle}deg, white, black)`;
	busyCursorCounter = (busyCursorCounter + busyCursorFramePeriod) % busyCursorRotatePeriod;
}, busyCursorFramePeriod);
setTimeout(function() {
	loading.classList.add('loaded');
}, 3000);
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

