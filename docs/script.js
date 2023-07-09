// Switch between light mode and dark mode
const modeObserver = document.getElementById('mode-observer');
const modeObserverObserver = new IntersectionObserver(function() {
 const githubLogo = document.getElementById('github-logo');
 const twitterLogo = document.getElementById('twitter-logo');
 if(getComputedStyle(modeObserver).display === 'block') {
  githubLogo.src = 'images/github-dark.svg';
  twitterLogo.src = 'images/twitter-dark.svg';
 } else {
  githubLogo.src = 'images/github-light.svg';
  twitterLogo.src = 'images/twitter-light.svg';
 }
});
modeObserverObserver.observe(modeObserver);

// SNS links
const address = document.getElementsByTagName('address')[0];
const addressHeight = address.clientHeight;
console.log(address);
const links = address.getElementsByTagName('a');
Array.from(links).forEach(function(link) {
 console.log(link);
 link.addEventListener('mouseover', function() {
  console.log('mouseover');
  address.animate({
   height: [addressHeight + 'px', 2 * addressHeight + 'px'],
  }, {
   duration: 300,
   easing: 'ease-in-out',
   fill: 'both',
  });
 });
});

