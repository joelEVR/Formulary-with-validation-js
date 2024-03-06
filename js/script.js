// Function to validate form data
function validate() {
    // Retrieve form elements
    var email = document.getElementById("email");
    var login = document.getElementById("login");
    var pass = document.getElementById("pass");
    var pass2 = document.getElementById("pass2");
    var terms = document.getElementById("terms");
  
    // Retrieve error message elements
    var emailError = document.getElementById("emailError");
    var userError = document.getElementById("userError");
    var passwordError = document.getElementById("passwordError");
    var password2Error = document.getElementById("password2Error");
    var termsError = document.getElementById("termsError");
  
    // Initially hide all error messages
    emailError.style.display = "none";
    userError.style.display = "none";
    passwordError.style.display = "none";
    password2Error.style.display = "none";
    termsError.style.display = "none";
  
    // Flag to track form validity
    var isValid = true;
  
    // Email validation using regex
    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      emailError.style.display = "block";
      email.style.border = "2px solid red";
      isValid = false;
    }
  
    // Login name validation
    if (login.value === "" || login.value.length > 30) {
      userError.style.display = "block";
      login.style.border = "2px solid red";
      isValid = false;
    } else {
      login.value = login.value.toLowerCase();
    }
  
    // Password length validation
    if (pass.value.length < 8) {
      passwordError.style.display = "block";
      pass.style.border = "2px solid red";
      isValid = false;
    }
  
    // Password confirmation validation
    if (pass.value !== pass2.value || pass2.value === "") {
      password2Error.style.display = "block";
      pass2.style.border = "2px solid red";
      isValid = false;
    }
  
    // Terms and conditions checkbox validation
    if (!terms.checked) {
      termsError.style.display = "block";
      isValid = false;
    }
  
    // Return the validity status of the form
    return isValid;
  }
  
  // Event listener for newsletter checkbox
  newsletter.addEventListener("change", function () {
    if (newsletter.checked) {
      alert("Please note that you may receive additional emails that could be considered spam.");
    }
  });
  
  // Real-time validation for email field
  email.addEventListener("input", function () {
    if (email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      emailError.style.display = "none";
      email.style.border = "1px solid #ccc";
    }
  });
  
  // Real-time validation for login field
  login.addEventListener("input", function () {
    if (login.value !== "" && login.value.length <= 30) {
      userError.style.display = "none";
      login.style.border = "1px solid #ccc";
    }
  });
  
  // Real-time validation for password field
  pass.addEventListener("input", function () {
    if (pass.value.length >= 8) {
      passwordError.style.display = "none";
      pass.style.border = "1px solid #ccc";
    }
  });
  
  // Real-time validation for password confirmation field
  pass2.addEventListener("input", function () {
    if (pass.value === pass2.value && pass2.value !== "") {
      password2Error.style.display = "none";
      pass2.style.border = "1px solid #ccc";
    }
  });
  
  // Real-time validation for terms checkbox
  terms.addEventListener("change", function () {
    if (terms.checked) {
      termsError.style.display = "none";
    }
  });
  
  // Event listener for form reset
  document.querySelector('form').addEventListener('reset', function() {
    // Hide error messages
    emailError.style.display = "none";
    userError.style.display = "none";
    passwordError.style.display = "none";
    password2Error.style.display = "none";
    termsError.style.display = "none";
  
    // Reset form field styles
    email.style.border = "1px solid #ccc";
    login.style.border = "1px solid #ccc";
    pass.style.border = "1px solid #ccc";
    pass2.style.border = "1px solid #ccc";
  });
  