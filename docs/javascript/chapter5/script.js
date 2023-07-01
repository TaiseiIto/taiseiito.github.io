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
    callback(index)
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
 section.appendChild(image);
 return section
}

range(16).forEach(function(index) {
 main.appendChild(imageSection(index));
});

