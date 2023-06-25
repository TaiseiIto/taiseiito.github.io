let busyCursorCounter = 0;
const busyCursorRotatePeriod = 1000;
const busyCursorFramePeriod = 10;
function rotateBusyCursor() {
	busyCursor = document.querySelector('#busy-cursor');
	console.log(busyCursor);
	busyCursorAngle = busyCursorCounter * 360 / busyCursorRotatePeriod;
	busyCursor.style.background = `conic-gradient(from ${busyCursorAngle}deg, white, black)`;
	busyCursorCounter = (busyCursorCounter + busyCursorFramePeriod) % busyCursorRotatePeriod;
}
setInterval(rotateBusyCursor, busyCursorFramePeriod);

