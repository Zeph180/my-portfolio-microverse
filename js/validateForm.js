/* eslint-disable no-unused-vars */
function validate() {
  const emailInputValue = document.getElementById('email').value;
  const emailTest = /^[a-z0-9_!#$%&'*+=?`{|}~^.-]+@[a-z0-9.-]+$/gm;

  document.forms[0].onsubmit = function submitForm(e) {
    if (emailInputValue.match(emailTest)) {
      document.getElementById('emailError').innerHTML = 'Expect amazing projects';
      document.getElementById('emailError').style.visibility = 'visible';
      document.getElementById('emailError').style.color = 'blue';
    } else {
      document.getElementById('emailError').innerHTML = 'Emails are case sensitive! please enter the email in lowercase';
      document.getElementById('emailError').style.visibility = 'visible';
      document.getElementById('emailError').style.color = 'red';
      e.preventDefault();
    }
  };
}
