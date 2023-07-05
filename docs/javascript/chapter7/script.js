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

Array.from(galleryImages).forEach(function(galleryImage) {
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
});

const menu = document.getElementsByTagName('nav')[0];
const menuItems = menu.getElementsByTagName('li');
const menuButton = document.getElementById('menu-button');
let menuIsOpened = false;
menuButton.addEventListener('click', function() {
 if(menuIsOpened) {
  menu.animate({
   transform: ['translate(0%)', 'translate(100%)'],
  }, {
   duration: 1000,
   easing: 'ease-in-out',
   fill: 'forwards',
  });
  Array.from(menuItems).forEach(function(menuItem, index) {
   menuItem.animate({
    opacity: [1, 0],
    transform: ['translate(0, 0)', 'translate(0, 3rem)'],
   }, {
    delay: 200 * (menuItems.length - (index + 1)),
    duration: 500,
    easing: 'ease-in-out',
    fill: 'forwards',
   });
  });
  menuButton.textContent = 'メニューを開く';
  menuIsOpened = false;
 } else {
  menu.animate({
   transform: ['translate(100%)', 'translate(0)'],
  }, {
   duration: 1000,
   easing: 'ease-in-out',
   fill: 'forwards',
  });
  Array.from(menuItems).forEach(function(menuItem, index) {
   menuItem.animate({
    opacity: [0, 1],
    transform: ['translate(0, 3rem)', 'translate(0, 0)'],
   }, {
    delay: 300 * index,
    duration: 1000,
    easing: 'ease-in-out',
    fill: 'forwards',
   });
  });
  menuButton.textContent = 'メニューを閉じる';
  menuIsOpened = true;
 }
});

