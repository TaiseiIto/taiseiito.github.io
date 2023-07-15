// Adjust page design
const main = document.getElementsByTagName('main')[0];
const header = document.getElementsByTagName('header')[0];
const footer = document.getElementsByTagName('footer')[0];
const sectionTitle = document.getElementById('section-title');
const sectionTitleText = document.getElementById('section-title-text');
const snsLinks = Array.from(footer.getElementsByTagName('li'));
const previous = document.getElementById('previous');
const previousSectionTitle = document.getElementById('previous-section-title');
const next = document.getElementById('next');
const nextSectionTitle = document.getElementById('next-section-title');

// Resize window
function resizeWindow() {
 console.log('Resize window');
 header.style.width = main.clientWidth;
 footer.style.width = main.clientWidth;
 sectionTitle.style.width = main.clientWidth;
 snsLinks.forEach(function(snsLink) {
  snsLink.style.width = (footer.clientWidth / snsLinks.length) + 'px';
 });
}
resizeWindow();
window.addEventListener('resize', resizeWindow);

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
function scrollEnd(scrollEvent) {
 const mainRect = main.getBoundingClientRect();
 const section = Array.from(main.getElementsByTagName('section')).filter(function(section) {
  const sectionRect = section.getBoundingClientRect();
  return sectionRect.y == mainRect.y;
 })[0];
 const h2 = section.getElementsByTagName('h2')[0];
 sectionTitleText.textContent = h2.textContent;
 const previousSection = section.previousElementSibling;
 if(previousSection) {
  previous.style.display = 'flex';
  previousSectionTitle.textContent = previousSection.getElementsByTagName('h2')[0].textContent;
 } else {
  previous.style.display = 'none';
 }
 const nextSection = section.nextElementSibling;
 if(nextSection) {
  next.style.display = "flex";
  nextSectionTitle.textContent = nextSection.getElementsByTagName('h2')[0].textContent;
 } else {
  next.style.display = "none";
 }
}
scrollEnd();
main.addEventListener('scrollend', scrollEnd);

// SNS links
const footerHeight = footer.clientHeight;
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

