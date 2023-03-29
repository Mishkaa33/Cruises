const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const breakpoint = window.matchMedia('(max-width: 767px)');
const headerLink = document.querySelectorAll('[data-menu-close]');


const checkWindowSize = () => {
  if (breakpoint.matches && header.classList.contains('is-open')) {
    document.documentElement.classList.add('scroll-lock');
  } else {
    document.documentElement.classList.remove('scroll-lock');
  }
};

const closeMenu = () => {
  if (header.classList.contains('is-open')) {
    header.classList.remove('is-open');
    document.documentElement.classList.remove('scroll-lock');
  } else {
    return;
  }
};

const clickOutsideMenu = (evt) => {
  if (evt.target === header || header.contains(evt.target)) {
    return;
  } else {
    header.classList.remove('is-open');
    removeListeners();
  }
};

const checkMenu = () => {
  if (header.classList.contains('is-open') && document.documentElement.classList.contains('scroll-lock')) {
    header.classList.remove('is-open');
    document.documentElement.classList.remove('scroll-lock');
  } else {
    header.classList.add('is-open');
    document.documentElement.classList.add('scroll-lock');
  }
};

const removeListeners = () => {
  document.addEventListener('click', clickOutsideMenu);
};

const addListeners = () =>{
  window.addEventListener('resize', checkWindowSize);
  document.addEventListener('click', clickOutsideMenu);
};

const initMenu = () => {
  if (header && burger) {
    burger.addEventListener('click', checkMenu);
    headerLink.forEach((link) => link.addEventListener('click', closeMenu));
    addListeners();
  } else {
    return;
  }
};


export {initMenu};
