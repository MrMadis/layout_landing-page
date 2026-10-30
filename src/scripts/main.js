'use strict';

const headerTop = document.querySelector('.header__top');
const phoneIcon = document.querySelector('.icon--phone');
const phoneMenu = document.querySelector('.phone-menu');
const menuID = document.getElementById('phone-menu-mobile');

window.addEventListener('hashchange', () => {
  if (menuID.matches(':target') && window.innerWidth < 576) {
    headerTop.classList.add('header__top--hidden');
  } else {
    headerTop.classList.remove('header__top--hidden');
  }
});

phoneIcon.addEventListener('click', () => {
  if (window.innerWidth >= 576) {
    if (phoneMenu.classList.contains('page__phone-menu--hidden')) {
      phoneMenu.classList.remove('page__phone-menu--hidden');
    } else {
      phoneMenu.classList.add('page__phone-menu--hidden');
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 576) {
    phoneMenu.classList.add('page__phone-menu--hidden');
  }
});
