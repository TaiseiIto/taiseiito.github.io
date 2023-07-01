const main = document.querySelector('main');

function imageSection(imageNumber) {
	section = document.createElement('section');
	title = document.createElement('h2');
	title.innerHTML = `画像${imageNumber}`;
	section.appendChild(title);
	image = document.createElement('img');
	image.src = '../../images/myhead.jpg';
	image.alt = 'my head';
	section.appendChild(image);
	return section
}

main.appendChild(imageSection(0));

