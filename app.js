const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const showPass = document.querySelector(".showPass");
const hidePass = document.querySelector(".hidePass");
const firstNameError = document.querySelectorAll('.firstName-errors');
const lastNameError = document.querySelectorAll('.lastName-errors');
const emailError = document.querySelectorAll('.email-errors');
const passwordError = document.querySelectorAll('.password-errors');

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    firstName.classList.add("error");
    firstName.placeholder = ''
    firstNameError.forEach(error =>{
      error.style.display = 'block'
    })
  } else {
    firstName.classList.remove("error");
    firstNameError.forEach(error =>{
      error.style.display = 'none'
    })
  }
  // Check last name

  if (lName === "") {
    lastName.classList.add("error");
    lastName.placeholder = ''
    lastNameError.forEach(error =>{
      error.style.display = 'block'
    })
  } else {
    lastName.classList.remove("error");
    lastNameError.forEach(error =>{
      error.style.display = 'none'
    })
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    email.classList.add("error");
    email.classList.add("text");
    email.placeholder = 'email@example/com';
    emailError.forEach(error =>{
      error.style.display = 'block'
    })
  } else {
    email.classList.remove("error");
    emailError.forEach(error =>{
      error.style.display = 'none'
    })
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add("error");
    password.placeholder = ''
    passwordError.forEach(error =>{
      error.style.display = 'block'
    })
  } else {
    password.classList.remove("error");
    passwordError.forEach(error =>{
      error.style.display = 'none'
    })
  }
});

//  show password

showPass.addEventListener("click", () => {
  password.setAttribute("type", "text");
  showPass.style.display = "none";
  hidePass.style.display = "block";
});

//hide password

hidePass.addEventListener("click", () => {
  password.setAttribute("type", "password");
  hidePass.style.display = "none";
  showPass.style.display = "block";
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
