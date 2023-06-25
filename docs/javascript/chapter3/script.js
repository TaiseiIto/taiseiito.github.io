const colorPicker = document.querySelector('#colorPicker');
const colorText = document.querySelector('#colorText');

function changeColor() {
	const color = colorPicker.value;
	colorText.textContent = `カラーコード:${color}`;
}

colorPicker.addEventListener('input', changeColor);

