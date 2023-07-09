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
 snsLink.moving = false;
 snsLink.riding = false;
 snsLink.lastRiding = false;
 function focus() {
  if(!snsLink.moving) {
   snsLink.moving = true;
   snsLink.lastRiding = snsLink.riding;
   const animationBody = {
    height: snsLink.riding ? [footerHeight + 'px', 2 * footerHeight + 'px'] : [2 * footerHeight + 'px', footerHeight + 'px'],
   };
   const animationProperty = {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards',
   };
   footer.animate(animationBody, animationProperty);
   const animation = snsLink.animate(animationBody, animationProperty);
   animation.oncancel = animation.onfinish = function() {
    snsLink.moving = false;
    if(snsLink.riding != snsLink.lastRiding) {
     focus();
    }
   }
  }
 }
 snsLink.addEventListener('mouseover', function() {
  snsLink.riding = true;
  focus();
 });
 snsLink.addEventListener('mouseout', function() {
  snsLink.riding = false;
  focus();
 });
});

