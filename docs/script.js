// Adjust page design
const main = document.getElementsByTagName('main')[0];
const header = document.getElementsByTagName('header')[0];
const menu = document.getElementById('menu');
const navigation = document.getElementsByTagName('nav')[0];
const navigationList = document.getElementsByTagName('ul')[0];
const footer = document.getElementsByTagName('footer')[0];
const sectionTitle = document.getElementById('section-title');
const sectionTitleText = document.getElementById('section-title-text');
const snsLinks = Array.from(footer.getElementsByTagName('li'));
const previous = document.getElementById('previous');
const previousSectionTitle = document.getElementById('previous-section-title');
const upArrow = document.getElementById('up-arrow');
const next = document.getElementById('next');
const nextSectionTitle = document.getElementById('next-section-title');
const downArrow = document.getElementById('down-arrow');
const sections = Array.from(document.getElementsByTagName('section'));
sections.forEach(function(section, index) {
 section.id = `section${index}`;
});

// Resize window
function resizeWindow() {
 header.style.width = main.clientWidth;
 footer.style.width = main.clientWidth;
 sectionTitle.style.width = main.clientWidth;
 navigation.style.right = window.innerWidth - main.clientWidth;
 snsLinks.forEach(function(snsLink) {
  snsLink.style.width = (footer.clientWidth / snsLinks.length) + 'px';
 });
}
window.addEventListener('resize', resizeWindow);
resizeWindow();

// Menu
let sectionMove = false;
sections.forEach(function(section) {
 const sectionTitle = section.getElementsByTagName('h2')[0];
 const navigationItem = document.createElement('li');
 navigationItem.textContent = sectionTitle.textContent;
 navigationItem.addEventListener('click', function() {
  if(!sectionMove) {
   sectionMove = true;
   section.scrollIntoView({behavior : 'smooth'});
  }
 });
 navigationList.appendChild(navigationItem);
});
menu.moving = false;
menu.riding = false;
function menuFocus() {
 if(!menu.moving) {
  menu.moving = true;
  menu.lastRiding = menu.riding;
  const menuAnimation = navigation.animate({
   width: menu.riding ? ['0rem', '15rem'] : ['15rem', '0rem'],
  }, {
   duration: 300,
   easing: 'ease-in-out',
   fill: 'forwards',
  });
  menuAnimation.oncancel = menuAnimation.onfinish = function() {
   menu.moving = false;
   if(menu.riding != menu.lastRiding) {
     menuFocus();
   }
  }
 }
}
menu.addEventListener('mouseenter', function() {
 if(!menu.riding) {
  menu.riding = true;
  menuFocus();
 }
});
header.addEventListener('mouseleave', function(event) {
 const navigationRect = navigation.getBoundingClientRect();
 const mouseX = event.x;
 const mouseY = event.y;
 const mouseInNavigation = navigationRect.left <= mouseX && mouseX <= navigationRect.right && navigationRect.top <= mouseY && mouseY <= navigationRect.bottom;
 if(menu.riding && !mouseInNavigation) {
  menu.riding = false;
  menuFocus();
 }
});
navigation.addEventListener('mouseleave', function() {
 if(menu.riding) {
  menu.riding = false;
  menuFocus();
 }
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
let previousSection;
let nextSection;
function scrollEnd(scrollEvent) {
 const mainRect = main.getBoundingClientRect();
 const section = Array.from(main.getElementsByTagName('section')).filter(function(section) {
  const sectionRect = section.getBoundingClientRect();
  return sectionRect.y == mainRect.y;
 })[0];
 const h2 = section.getElementsByTagName('h2')[0];
 sectionTitleText.textContent = h2.textContent;
 previousSection = section.previousElementSibling;
 if(previousSection) {
  previous.style.display = 'flex';
  previousSectionTitle.textContent = previousSection.getElementsByTagName('h2')[0].textContent;
 } else {
  previous.style.display = 'none';
 }
 nextSection = section.nextElementSibling;
 if(nextSection) {
  next.style.display = "flex";
  nextSectionTitle.textContent = nextSection.getElementsByTagName('h2')[0].textContent;
 } else {
  next.style.display = "none";
 }
 sectionMove = false;
}
main.addEventListener('scrollend', scrollEnd);
scrollEnd();

// Previous link
function moveToPreviousSection() {
 if(!sectionMove) {
  sectionMove = true;
  previousSection.scrollIntoView({behavior : 'smooth'});
 }
}
previousSectionTitle.addEventListener('click', moveToPreviousSection);
upArrow.addEventListener('click', moveToPreviousSection);

// Next link
function moveToNextSection() {
 if(!sectionMove) {
  sectionMove = true;
  nextSection.scrollIntoView({behavior : 'smooth'});
 }
}
nextSectionTitle.addEventListener('click', moveToNextSection);
downArrow.addEventListener('click', moveToNextSection);

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

