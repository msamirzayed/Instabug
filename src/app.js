// redirection
let auth = false;

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

function login() {}

function welcome(user) {}
