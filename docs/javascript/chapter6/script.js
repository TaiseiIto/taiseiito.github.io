for(h2 of document.getElementsByTagName('h2')) {
 h2.animate({
  opacity: [0, 1],
  translate: ['0 100%', '0 0'],
 }, {
  duration: 1000,
  direction: 'alternate',
  easing: 'ease-in-out',
  iterations: Infinity,
 });
 h2.animate({
  color: ['#ff0000', '#00ff00', '#0000ff', '#ff0000'],
 }, {
  duration: 8000,
  iterations: Infinity,
 });
}

