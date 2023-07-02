const loading = document.getElementById('loading');
const curtain = document.getElementById('curtain');
console.log(curtain);
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

