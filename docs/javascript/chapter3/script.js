colorPicker = document.querySelector('#colorPicker');
color = colorPicker.value;
console.log(color);
colorText = document.querySelector('#colorText');
console.log(colorText);
colorText.textContent = `カラーコード:${color}`;

