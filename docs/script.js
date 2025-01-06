// Adjust page design
const main = document.getElementsByTagName('main')[0];
const header = document.getElementsByTagName('header')[0];
const menu = document.getElementById('menu');
const navigation = document.getElementsByTagName('nav')[0];
const navigationList = document.getElementsByTagName('ul')[0];
const footer = document.getElementsByTagName('footer')[0];
const snsLinks = Array.from(footer.getElementsByTagName('li'));
const upArrow = document.getElementById('up-arrow');
const downArrow = document.getElementById('down-arrow');
const sections = Array.from(document.getElementsByTagName('section'));
sections.forEach(function(section, index) {
 section.id = `section${index}`;
});

// Resize window
function resizeWindow() {
 header.style.width = main.clientWidth;
 footer.style.width = main.clientWidth;
 navigation.style.right = window.innerWidth - main.clientWidth;
 snsLinks.forEach(function(snsLink) {
  snsLink.style.width = (footer.clientWidth / snsLinks.length) + 'px';
 });
}
window.addEventListener('resize', resizeWindow);
resizeWindow();

// Menu
sections.forEach(function(section) {
 const sectionTitle = section.getElementsByTagName('h2')[0];
 const navigationItem = document.createElement('li');
 navigationItem.textContent = sectionTitle.textContent;
 navigationItem.addEventListener('click', function() {
  section.scrollIntoView({behavior : 'smooth'});
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
   width: menu.riding ? ['0rem', '20rem'] : ['20rem', '0rem'],
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

// SNS links
const footerHeight = footer.clientHeight;
const magnificationRate = 1.5;
snsLinks.forEach(function(snsLink) {
 snsLink.moving = false;
 snsLink.riding = false;
 snsLink.lastRiding = false;
 function focus() {
  if(!snsLink.moving) {
   snsLink.moving = true;
   snsLink.lastRiding = snsLink.riding;
   const animationBody = {
    height: snsLink.riding ? [footerHeight + 'px', magnificationRate * footerHeight + 'px'] : [magnificationRate * footerHeight + 'px', footerHeight + 'px'],
   };
   const animationProperty = {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards',
   };
   footerRiding = snsLinks.map((snsLink) => snsLink.riding).reduce((footerRiding, snsLinkRiding) => footerRiding || snsLinkRiding, false);
   footer.animate({
    height: footerRiding ? [footer.clientHeight + 'px', magnificationRate * footerHeight + 'px'] : [footer.clientHeight + 'px', footerHeight + 'px'],
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

