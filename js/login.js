const email = document.querySelector("#email");
const password = document.querySelector("#password");
const username = document.querySelector("#username");
const inputName = document.querySelector("#username");
const SignUpButton = document.querySelector("#SignUp");
const Signin = document.querySelector("#Signin");
const welcomeMessage = document.querySelector(".welcom-text");
let User;

if (localStorage.getItem("user") == null) {
  User = [];
} else {
  User = JSON.parse(localStorage.getItem("user"));
}

function SignUp() {
  if (validateAllInput() && getUser() != true) {
    let user = {
      name: inputName.value,
      email: email.value,
      password: password.value,
    };

    User.push(user);
    localStorage.setItem("user", JSON.stringify(User));
    window.location.href = "index.html";
  } else {
  }
}

function validateAllInput() {
  if (validateEmail() && validatePassword()) {
    return true;
  } else {
    return false;
  }
}
function getUser() {
  for (let i = 0; i < User.length; i++) {
    if (User[i].email == email.value) {
      return true;
    }
  }
  return false;
}

function validateEmail() {
  var emptyinput = document.querySelector("#emptyinput");
  var invalidEmail = document.querySelector("#invalid-email");
  const emailPattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  if (email.value == "") {
    emptyinput.classList.replace("d-none", "d-block");
    invalidEmail.classList.replace("d-block", "d-none");
    return false;
  } else if (emailPattern.test(email.value)) {
    emptyinput.classList.replace("d-block", "d-none");
    invalidEmail.classList.replace("d-block", "d-none");
    return true;
  } else {
    emptyinput.classList.replace("d-block", "d-none");
    invalidEmail.classList.replace("d-none", "d-block");
    return false;
  }
}

function validatePassword() {
  const emptyPassword = document.querySelector("#empty-password");
  const invalidPassword = document.querySelector("#invalid-password");
  const passwordPattern =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;
  if (password.value == "") {
    emptyPassword.classList.replace("d-none", "d-block");
    return true;
  } else if (passwordPattern.test(password.value)) {
    return true;
  } else {
    invalidPassword.classList.replace("d-none", "d-block");
    return false;
  }
}

var usersesion = JSON.parse(localStorage.getItem("username"));

function Login() {
  const invalidLogin = document.querySelector(".invalid-login");
  for (let i = 0; i < User.length; i++) {
    if (User[i].email == email.value && User[i].password == password.value) {
      usersesion = User[i].name;
      localStorage.setItem("username", JSON.stringify(usersesion));
      window.location.href = "welcom.html";
      return true;
    }
  }
  invalidLogin.classList.replace("d-none", "d-block");
  return false;
}

welcomeMessage.innerHTML = `Welcome ${usersesion}`;
