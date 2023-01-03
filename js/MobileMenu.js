const menu = document.getElementById('mobile-menu');
const hamburger = document.getElementById('hamburger');
const menuOptions = document.querySelectorAll('.menu-option');
const closeBtn = document.getElementById('close-btn');
const nav = document.querySelector('nav');

menu.style.cssText = `
  font-style: poppins, sans-serif;
  list-style: none;
  background-color: rgba(100,130,225,.7);
  display: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  backdrop-filter: blur(4px)
`;

function openMenu() {
  menu.style.display = 'block';
  nav.style.visibility = 'hidden';
}

function closeMenu() {
  menu.style.display = 'none';
  nav.style.visibility = 'visible';
}

for (let i = 0; i < menuOptions.length; i += 1) {
  menuOptions[i].addEventListener('click', closeMenu);
}

closeBtn.addEventListener('click', closeMenu);
hamburger.addEventListener('click', openMenu);