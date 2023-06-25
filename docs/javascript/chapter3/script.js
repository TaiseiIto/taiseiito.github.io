const colorPicker = document.querySelector('#colorPicker');

function changeColor() {
	const colorText = document.querySelector('#colorText');
	const main = document.querySelector('main');
	const color = colorPicker.value;
	colorText.textContent = `カラーコード:${color}`;
	main.style.backgroundColor = color;
}

colorPicker.addEventListener('input', changeColor);

