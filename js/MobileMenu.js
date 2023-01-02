const menu = document.getElementById('mobile-menu');
const hamburger = document.getElementById('hamburger');

menu.style.cssText = `
  font-style: poppins, sans-serif;
  margin-top: 30px;
  list-style: none;
  padding-left: 28px;
  display: none;
`;

function toggleMenu() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);