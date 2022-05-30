// redirection
let auth = false;
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("userID")) {
    auth = false;
    login();
  } else if (localStorage.getItem("userID")) {
    auth = true;
    welcome(localStorage.getItem("userID"));
  }
});

function login() {
  if (auth == false && window.location.href.includes("login.html") != true)
    window.location.href = "login.html";
  console.log("login function");
}

function welcome(user) {
  if (auth == true && window.location.href.includes("index.html") != true)
    window.location.href = "index.html";
}
