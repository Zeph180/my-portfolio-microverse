const contactForm = document.querySelector('form');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('user-msg');

contactForm.addEventListener('input', () => {
  const formData = {
    username: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('userData', JSON.stringify(formData));
});

const GetDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
userName.value = GetDataFromLocalStorage.username;
userMessage.value = GetDataFromLocalStorage.message;
userEmail.value = GetDataFromLocalStorage.email;