// redirection
let auth = false;

document.addEventListener("DOMContentLoaded", function () {
  currentPath = window.location.pathname;
  console.log(window.location.hostname + "/login.html");
  if (!localStorage.getItem("userID")) {
    auth = false;
    login();
  } else if (localStorage.getItem("userID")) {
    auth = true;
    welcome(localStorage.getItem("userID"));
  }
});

function login() {
  if (currentPath != "/login.html" && currentPath != "/error.html") {
    window.location.replace(window.location.hostname + "/login.html");
    console.log(window.location.hostname + "/login.html");
  }
}

function welcome(user) {
  if (auth == true && currentPath != "/") {
    window.location.replace(window.location.hostname + "/");
  }
  console.log("welcome " + user);
}
