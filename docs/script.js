// Adjust page design
const footer = document.getElementsByTagName('footer')[0];
const snsLinks = footer.getElementsByTagName('li');
Array.from(snsLinks).forEach(function(snsLink) {
 snsLink.style.width = (footer.clientWidth / snsLinks.length) + 'px';
});

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
const footerHeight = footer.clientHeight;
Array.from(snsLinks).forEach(function(snsLink) {
 snsLink.addEventListener('mouseover', function() {
  animation = {
   height: [footerHeight + 'px', 2 * footerHeight + 'px'],
  };
  animationProperty = {
   duration: 300,
   easing: 'ease-in-out',
   fill: 'both',
  };
  footer.animate(animation, animationProperty);
  snsLink.animate(animation, animationProperty);
 });
});

