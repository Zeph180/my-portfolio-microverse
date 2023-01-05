function validate() {
  const emailInputValue = document.getElementById('email').value;
  const emailTest = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  document.forms[0].onsubmit = function (e) {
    if (emailTest.test(emailInputValue)) {
      document.getElementById('emailError').innerHTML = 'Valid';
      document.getElementById('emailError').style.visibility = 'visible';
      document.getElementById('emailError').style.color = 'white';
      document.getElementById('emailError').style.background = 'green';
    } else {
      document.getElementById('emailError').innerHTML = 'Emails are case sensitive!! please enter the email in lower case';
      document.getElementById('emailError').style.visibility = 'visible';
      document.getElementById('emailError').style.color = 'white';
      document.getElementById('emailError').style.background = 'red';
      e.preventDefault();
    }
  };
}

validate();