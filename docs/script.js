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
let animationPermission = true;
Array.from(snsLinks).forEach(function(snsLink) {
 snsLink.addEventListener('mouseover', function() {
  if(animationPermission) {
   animationPermission = false;
   const animation = {
    height: [footerHeight + 'px', 2 * footerHeight + 'px'],
   };
   const animationProperty = {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'both',
   };
   footerAnimation = footer.animate(animation, animationProperty);
   console.log(footerAnimation);
   snsLinkAnimation = snsLink.animate(animation, animationProperty);
   console.log(snsLinkAnimation);
   snsLinkAnimation.onfinish = function () {
    animationPermission = true;
   }
  }
 });
 snsLink.addEventListener('mouseout', function() {
  if(animationPermission) {
   animationPermission = false;
   const animation = {
    height: [2 * footerHeight + 'px', footerHeight + 'px'],
   };
   const animationProperty = {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'both',
   };
   footerAnimation = footer.animate(animation, animationProperty);
   console.log(footerAnimation);
   snsLinkAnimation = snsLink.animate(animation, animationProperty);
   console.log(snsLinkAnimation);
   snsLinkAnimation.onfinish = function () {
    animationPermission = true;
   }
  }
 });
});

