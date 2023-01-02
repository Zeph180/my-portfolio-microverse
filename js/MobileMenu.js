const menu = document.getElementById('mobile-menu');
const hamburger = document.getElementById('hamburger');
const menuOptions = document.querySelectorAll('.menu-option');

menu.style.cssText = `
  font-style: poppins, sans-serif;
  list-style: none;
  background-color: white;
  display: none;
  // padding-left: 7%;
  width: 100%;
  position: fixed;
`;

function toggleMenu() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    hamburger.classList.remove('fa-bars', 'fas');
    hamburger.classList.add('fa-close', 'fa');
  } else {
    menu.style.display = 'none';
    hamburger.classList.add('fa-bars', 'fas');
    hamburger.classList.remove('fa-close', 'fa');
  }
}

for (let i = 0; i < menuOptions.length; i += 1) {
  menuOptions[i].addEventListener('click', toggleMenu);
}

hamburger.addEventListener('click', toggleMenu);