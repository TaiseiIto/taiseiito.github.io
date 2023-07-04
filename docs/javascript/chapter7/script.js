const loading = document.getElementById('loading');
const curtain = document.getElementById('curtain');
const images = document.getElementsByTagName('img');
window.addEventListener('load', function() {
 loading.animate({
  opacity: [1, 0],
  visibility: 'hidden',
 }, {
  duration: 2000,
  easing: 'ease-in-out',
  fill: 'forwards',
 });
 curtain.animate({
  translate: ['0 100vh', '0 -100vh'],
 }, {
  duration: 2000,
  easing: 'ease-in-out',
  fill: 'forwards',
 });
});

const galleryImages = document.getElementById('gallery-images').getElementsByTagName('img');
const galleryMainImage = document.getElementById('gallery-main-image').getElementsByTagName('img')[0];

for(galleryImage of galleryImages) {
 let image = galleryImage;
 image.addEventListener('mouseover', function() {
  const duration = 300;
  galleryMainImage.animate({
   opacity: [1, 0],
  }, {
   duration: duration,
  });
  setTimeout(function() {
   galleryMainImage.className = image.className
  }, duration);
  galleryMainImage.animate({
   opacity: [0, 1],
  }, {
   delay: duration,
   duration: duration,
  });
 });
}

const menu = document.getElementsByTagName('nav')[0];
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', function() {
 console.log(menu);
 menu.animate({
  transform: ['translate(100%)', 'translate(0)'],
 }, {
  duration: 1000,
  easing: 'ease-in-out',
  fill: 'forwards',
 });
});

