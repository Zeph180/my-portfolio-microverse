const menu = document.getElementById('mobile-menu');
const hamburger = document.getElementById('hamburger');
const menuOptions = document.querySelectorAll('.menu-option')

menu.style.cssText = `
  font-style: poppins, sans-serif;
  margin-top: 30px;
  list-style: none;
  padding-left: 28px;
  display: none;
  position: fixed;
`;

function toggleMenu() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

for(let i = 0; i < menuOptions.length; i++){
  menuOptions[i].addEventListener('click', toggleMenu);
}

hamburger.addEventListener('click', toggleMenu);