const users = [
  { email: "mohamed@instabug.com", password: "A12345678" },
  { email: "mohamed1@instabug.com", password: "A12345678" },
  { email: "mohamed2@instabug.com", password: "A12345678" },
  { email: "mohamed3@instabug.com", password: "A12345678" },
  { email: "mohamed4@instabug.com", password: "A12345678" },
  { email: "mohamed5@instabug.com", password: "A12345678" },
  { email: "mohamed6@instabug.com", password: "A12345678" },
  { email: "mohamed7@instabug.com", password: "A12345678" },
];

let userMail = "";
let userPass = "";
let auth = false;
let currentPath = "";
let emInput = document.querySelector("#email");
let emMsg = document.querySelector(".emMsg");
let pswInput = document.querySelector("#password");
let pswMsg = document.querySelector(".pswMsg");
const btnSubmit = document.querySelector(".submit");
btnSubmit.disabled = false;

// checking user inputs and alerting

pswInput.addEventListener("keydown", () => {
  pswMsg.innerHTML = ` ${validatePassword(pswInput.value)}`;
});

pswInput.addEventListener("focusout", () => {
  pswMsg.innerHTML = ` ${validatePassword(pswInput.value)}`;
});

emInput.addEventListener("keydown", () => {
  emMsg.innerHTML = ` ${validateEmail(emInput.value)}`;
});

emInput.addEventListener("focusout", () => {
  emMsg.innerHTML = ` ${validateEmail(emInput.value)}`;
});

// redirection

function login() {
  if (currentPath != "/login.html" && currentPath != "/error.html") {
    window.location.replace("/login.html");
  }
  check();
}

function logout() {
  localStorage.removeItem("userID", userMail);
}

function check() {
  users.filter((e) => {
    if (e.email == userMail && e.password == userPass) {
      localStorage.setItem("userID", userMail);
      auth = true;
    } else {
      console.log("no matched user in the db");
    }
  });
}

function welcome(user) {
  if (auth == true && currentPath != "/") {
    window.location.replace("/");
  }
  console.log("welcome " + user);
}

document.addEventListener("DOMContentLoaded", function () {
  currentPath = window.location.pathname;
  if (!localStorage.getItem("userID")) {
    auth = false;
    login();
  } else if (localStorage.getItem("userID")) {
    auth = true;
    welcome(localStorage.getItem("userID"));
  }
});

// validating inputs and form

function validatePassword(password) {
  if (!password) return "Password is required";

  if (password.length < 6) {
    return `Please enter a password that's at least 6 characters long`;
  }

  const hasCapitalLetter = /[A-Z]/g;
  if (!hasCapitalLetter.test(password)) {
    return "Please use at least one capital letter.";
  }

  const hasNumber = /\d/g;
  if (!hasNumber.test(password)) {
    return "Please use at least one number.";
  }

  return "";
}

function validateEmail(email) {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isValidEmail.test(email)) {
    console.log(email);
    return "Please enter a valid email";
  }

  return "";
}
