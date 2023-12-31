const email = document.querySelector("#email");
const password = document.querySelector("#password");
const username = document.querySelector("#username");
const inputName = document.querySelector("#username")
const SignUpButton = document.querySelector("#SignUp");
const Signin = document.querySelector("#Signin");
const welcomeMessage=document.querySelector('#welcom-text')
let User;

if (localStorage.getItem("user") == null) {
  User = [];
  console.log(`didn't login`);
  console.log(User);
} else {
  User = JSON.parse(localStorage.getItem("user"));
  console.log(User);
}

function SignUp() {
  if (validateAllInput() && getUser() != true) {
    let user = {
      name: inputName.value,
      email: email.value,
      password: password.value,
    };

    console.log(user);
    User.push(user);
    console.log(User);
    localStorage.setItem("user", JSON.stringify(User));

  } else {
    console.log('already exxsist')
  }


}

function validateAllInput() {
  if (validateEmail() && validatePassword()) {
    console.log("all input is valid");
    return true;
  } else {
    console.log("all input is invalid");
    return false;
  }
}
function getUser() {
  for (let i = 0; i < User.length; i++) {
    if (User[i].email == email.value) {
      console.log("founded");
      return true;
    }
  }
  console.log("notfound");
  return false;
}



function validateEmail() {
  var emptyinput = document.querySelector("#emptyinput");
  var invalidEmail = document.querySelector("#invalid-email");
  const emailPattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  //console.log(e);
  if (email.value == '') {
    emptyinput.classList.replace("d-none", "d-block")
    invalidEmail.classList.replace("d-block", "d-none")
    return false
  }
  else if (emailPattern.test(email.value)) {
    console.log("email is valid");
    emptyinput.classList.replace("d-block", "d-none")
    invalidEmail.classList.replace("d-block", "d-none")
    return true;
  } else {
    console.log("email is invalid");
    emptyinput.classList.replace("d-block", "d-none")
    invalidEmail.classList.replace("d-none", "d-block")
    return false;
  }
}

function validatePassword() {
  const passwordPattern =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;
  if (passwordPattern.test(password.value)) {
    console.log("passward is valid");
    //alert1.classList.add("is-valid");
    //alert2.classList.add("is-valid'");
    return true;
  } else {
    console.log("passward is invalid");
    //alert1.classList.replace("d-none", "d-block");
    //alert2.classList.replace("d-none", "d-block");
    return false;
  }
}

let user;
function Login(){
  for (let i = 0; i < User.length; i++) {
    if (User[i].email == email.value && User[i].password==password.value) {
      console.log("logged in");
      console.log(User[i]);
      user=User[i].name
      console.log(user)
      console.log(welcomeMessage);
      welcome();
      return true;
    }
  }
  console.log("incorrect email or password");
  return false;
}

function welcome() {
  window.location.href('welcom.html')

  welcomeMessage.textHTML=`Welcome${user}`
}




