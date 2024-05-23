//----------------------burber menu---------------------------------------------//
const burgerMenuBtn = document.querySelector('.burger');
const menuLinks = document.querySelectorAll('.menu_link');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

function closeMenu() {
  burgerMenuBtn.classList.remove('open');
  menu.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = 'auto'; // Разрешаем прокрутку страницы
}

function disableScroll() {
  document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
}

function enableScroll() {
  document.body.style.overflow = 'auto'; // Разрешаем прокрутку страницы
}

burgerMenuBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  burgerMenuBtn.classList.toggle('open');
  menu.classList.toggle('open');
  overlay.classList.toggle('open');

  if (menu.classList.contains('open')) {
    disableScroll(); // Запрещаем прокрутку страницы при открытом меню
  } else {
    enableScroll(); // Разрешаем прокрутку страницы при закрытом меню
  }
});

menuLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.stopPropagation();
    closeMenu();
  });
});

document.body.addEventListener('click', function() {
  closeMenu();
});
//----------------------burber menu---------------------------------------------//
//----------------------slider---------------------------------------------//
const images = document.querySelectorAll('.photoslider1');
const controls = document.querySelectorAll('.controls');
let imageindex = 0;

function show(index) {
  images[imageindex].classList.remove('active');
  images[index].classList.add('active');
  imageindex = index;
}

controls.forEach((e) => {
  e.addEventListener('click', (event) => {
    if (event.target.classList.contains('photoleft')) {
      let index = imageindex - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      show(index);
    } else if (event.target.classList.contains('photoright')) {
      let index = imageindex + 1;
      if (index >= images.length) {
        index = 0;
      }
      show(index);
    }
  });
});

show(imageindex);
//----------------------slider---------------------------------------------//