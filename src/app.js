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

let url = window.location.href;

xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.onloadend = function () {
  if (this.status == 404) throw new Error(url + " ssssssssssssssssss 404");
};
