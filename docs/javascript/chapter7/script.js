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
 setTimeout(function() {
  for(image of images) {
   image.style.zIndex = 2;
  }
 }, 2000);
});

const galleryImages = document.getElementById('gallery-images').getElementsByTagName('img');
console.log(galleryImages);
const galleryMainImage = document.getElementById('gallery-main-image').getElementsByTagName('img')[0];
console.log(galleryMainImage);

for(galleryImage of galleryImages) {
 galleryImage.addEventListener('mouseover', function() {
  console.log('galleryImageにマウスカーソルが重なりました');
 });
}

