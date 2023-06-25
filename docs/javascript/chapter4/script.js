let busyCursorCounter = 0;
const busyCursorRotatePeriod = 1000;
const busyCursorFramePeriod = 10;
const loading = document.querySelector('#loading');
const busyCursor = document.querySelector('#busy-cursor');
const themeButton = document.querySelector('#theme-button');
const themeElements = document.querySelectorAll('.light-theme, .dark-theme');
setInterval(function () {
	busyCursorAngle = busyCursorCounter * 360 / busyCursorRotatePeriod;
	busyCursor.style.background = `conic-gradient(from ${busyCursorAngle}deg, white, black)`;
	busyCursorCounter = (busyCursorCounter + busyCursorFramePeriod) % busyCursorRotatePeriod;
}, busyCursorFramePeriod);
setTimeout(function loaded() {
	loading.classList.add('loaded');
}, 3000);
themeButton.addEventListener('click', function changeTheme() {
	themeElements.forEach(function(themeElement) {
		themeElement.classList.toggle('light-theme');
		themeElement.classList.toggle('dark-theme');
	});
	switch(themeButton.textContent) {
	case 'ダークモードにする':
		console.log('ダークモードにします');
		themeButton.textContent = 'ライトモードにする';
		break;
	case 'ライトモードにする':
		console.log('ライトモードにします');
		themeButton.textContent = 'ダークモードにする';
		break;
	default:
		console.log('何もしません');
		break;
	}
	console.log(themeButton.textContent);
});

