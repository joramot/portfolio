const menuBtn = document.querySelector('.menu-icon');
const menu = document.getElementById('theMenu');
const xBtn = document.getElementById('xBtn');
const navLinks = document.querySelectorAll('.navs');

function openMenu() {
  menu.style.display = 'block';
}

function closeMenu() {
  menu.style.display = 'none';
}

menuBtn.addEventListener('click', openMenu);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', closeMenu);
}

xBtn.addEventListener('click', closeMenu);