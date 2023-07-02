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
}

