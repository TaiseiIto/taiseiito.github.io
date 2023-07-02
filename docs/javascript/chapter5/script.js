const main = document.querySelector('main');

function range(end) {
 return {
  [Symbol.iterator]: function() {
   let count = 0;
   return {
    next: function() {
     if(count < end) {
      return {
       value: count++,
       done: false
      };
     } else {
      return {
       value: count,
       done: true
      };
     }
    },
   };
  },
  forEach: function(callback) {
   for(index of this) {
    callback(index);
   }
  },
 };
}

function imageSection(imageNumber) {
 section = document.createElement('section');
 title = document.createElement('h2');
 title.innerHTML = `画像${imageNumber}`;
 section.appendChild(title);
 image = document.createElement('img');
 image.src = '../../images/myhead.jpg';
 image.alt = 'my head';
 image.animate({
  opacity: [0, 1],
  rotate: ['360deg', '0deg'],
  scale: [0, 1],
 }, {
  delay: imageNumber * 100,
  direction: 'alternate',
  duration: 1000,
  easing: 'ease-in-out',
  fill: 'both',
  iterations: Infinity,
 });
 image.onload = function() {
  scale = image.width / image.naturalWidth;
  height = scale * image.naturalHeight;
  main.style.gridTemplateRows = `repeat(var(--rows), ${height}px)`;
 };
 section.appendChild(image);
 new IntersectionObserver(function() {
  console.log(`画像${imageNumber}が表示されました`);
 }).observe(section);
 return section;
}

range(16).forEach(function(index) {
 main.appendChild(imageSection(index));
});

