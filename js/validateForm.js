/* eslint-disable no-unused-vars */
function validate() {
  const emailInputValue = document.getElementById('email').value;
  const emailTest = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  /* eslint-disable no-unused-vars */
  document.forms[0].onsubmit = function testEmail(e) {
    if (emailTest.test(emailInputValue)) {
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
