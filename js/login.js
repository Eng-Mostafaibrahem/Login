const email = document.querySelector("#email");
const password = document.querySelector("#password");
const username = document.querySelector("#username");
const inputName=document.querySelector("#username")
const SignUp = document.querySelector("#SignUp");
const Signin = document.querySelector("#Signin");
let User;

if (localStorage.getItem("user") == null) {
  User = [];
  console.log(`didn't login`);
  console.log(User);
} else {
  User = JSON.parse(localStorage.getItem("user"));
  console.log(User);
}

function Login() {
  //
  if (validateAllInput() && getUser() != true) {
    let user = {
      name:inputName.value,
      email: email.value,
      password: password.value,
    };

    console.log(user);
    User.push(user);
    console.log(User);
    localStorage.setItem("user", JSON.stringify(User));

  }else {
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
  var emptyinput=document.querySelector("#emptyinput");
  console.log(emptyinput);
  if(emptyinput.value==''){
    emptyinput.classList.replace("d-none","d-block")
  }
  const emailPattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  if (emailPattern.test(email.value)) {
    console.log("email is valid");
    return true;
  } else {
    console.log("email is invalid");
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
