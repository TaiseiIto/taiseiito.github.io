const colorPicker = document.querySelector('#colorPicker');

function changeColor() {
	const colorText = document.querySelector('#colorText');
	const main = document.querySelector('main');
	const color = colorPicker.value;
	switch(color) {
	case '#ffffff':
		colorText.textContent = `カラーコード:white`;
		break;
	case '#000000':
		colorText.textContent = `カラーコード:black`;
		break;
	default:
		colorText.textContent = `カラーコード:${color}`;
		break;
	}
	main.style.backgroundColor = color;
}

colorPicker.addEventListener('input', changeColor);

