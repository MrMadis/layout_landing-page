'use strict';

const headerTop = document.querySelector('.header__top');
const phoneIcon = document.querySelector('.icon--phone');
const phoneMenu = document.querySelector('.phone-numbers');
const menuID = document.getElementById('phone-menu');

window.addEventListener('hashchange', () => {
  if (menuID.matches(':target')) {
    headerTop.classList.add('header__top--hidden');
  } else {
    headerTop.classList.remove('header__top--hidden');
  }
});

phoneIcon.addEventListener('mouseenter', () => {
  if (window.innerWidth >= 576) {
    phoneMenu.classList.remove('top-bar__phone-numbers--hidden');
  }
});

phoneIcon.addEventListener('mouseleave', () => {
  phoneMenu.classList.add('top-bar__phone-numbers--hidden');
});
