// Adjust page design
const main = document.getElementsByTagName('main')[0];
const header = document.getElementsByTagName('header')[0];
header.style.width = main.clientWidth;
const footer = document.getElementsByTagName('footer')[0];
footer.style.width = main.clientWidth;
const shadow = document.getElementById('shadow');
shadow.style.width = main.clientWidth;
const snsLinks = Array.from(footer.getElementsByTagName('li'));
snsLinks.forEach(function(snsLink) {
 snsLink.style.width = (footer.clientWidth / snsLinks.length) + 'px';
});

// Resize window
window.addEventListener('resize', function(resizeEvent) {
 console.log('Resize window');
 header.style.width = main.clientWidth;
 footer.style.width = main.clientWidth;
 shadow.style.width = main.clientWidth;
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

// Scroll
main.addEventListener('scrollend', function(scrollEvent) {
 const mainRect = main.getBoundingClientRect();
 const section = Array.from(main.getElementsByTagName('section')).filter(function(section) {
  const sectionRect = section.getBoundingClientRect();
  return sectionRect.y == mainRect.y;
 })[0];
 const h2 = section.getElementsByTagName('h2')[0];
 console.log(h2.textContent);
});

// SNS links
const footerHeight = footer.clientHeight;
const shadowHeight = shadow.clientHeight;
const next = document.getElementById('next');
snsLinks.forEach(function(snsLink) {
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
   footerRiding = snsLinks.map((snsLink) => snsLink.riding).reduce((footerRiding, snsLinkRiding) => footerRiding || snsLinkRiding, false);
   footer.animate({
    height: footerRiding ? [footer.clientHeight + 'px', 2 * footerHeight + 'px'] : [footer.clientHeight + 'px', footerHeight + 'px'],
   }, animationProperty);
   shadow.animate({
    height: footerRiding ? [shadow.clientHeight + 'px', (shadowHeight - footerHeight) + 'px'] : [shadow.clientHeight + 'px', shadowHeight + 'px'],
   }, animationProperty);
   next.animate({
    bottom: footerRiding ? [footer.clientHeight + 'px', 2 * footerHeight + 'px'] : [footer.clientHeight + 'px', footerHeight + 'px'],
   }, animationProperty);
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

