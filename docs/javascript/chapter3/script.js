const colorPicker = document.querySelector('#colorPicker');

function changeColor() {
	const colorText = document.querySelector('#colorText');
	const main = document.querySelector('main');
	const color = colorPicker.value;
	if(color === '#ffffff') {
		colorText.textContent = `カラーコード:white`;
	} else if(color === '#000000') {
		colorText.textContent = `カラーコード:black`;
	} else {
		colorText.textContent = `カラーコード:${color}`;
	}
	main.style.backgroundColor = color;
}

colorPicker.addEventListener('input', changeColor);

