let busyCursorCounter = 0;
const busyCursorRotatePeriod = 1000;
const busyCursorFramePeriod = 10;
const loading = document.querySelector('#loading');
const busyCursor = document.querySelector('#busy-cursor');
function rotateBusyCursor() {
	busyCursorAngle = busyCursorCounter * 360 / busyCursorRotatePeriod;
	busyCursor.style.background = `conic-gradient(from ${busyCursorAngle}deg, white, black)`;
	busyCursorCounter = (busyCursorCounter + busyCursorFramePeriod) % busyCursorRotatePeriod;
}
setInterval(rotateBusyCursor, busyCursorFramePeriod);
function loaded() {
	loading.classList.add('loaded');
}
setTimeout(loaded, 3000);

