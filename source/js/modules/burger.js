const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const breakpoint = window.matchMedia('(max-width: 767px)');

const checkWindowSize = () => {
  if (breakpoint.matches && header.classList.contains('is-open')) {
    document.documentElement.classList.add('scroll-lock');
  } else {
    document.documentElement.classList.remove('scroll-lock');
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

const initMenu = () => {
  burger.addEventListener('click', checkMenu);
  window.addEventListener('resize', checkWindowSize);
};


export {initMenu};
