// redirection
let auth = false;

document.addEventListener("DOMContentLoaded", function () {
  currentPath = window.location.pathname;
  currentHost = window.location.host;
  currentLoc = currentHost + currentPath;
  console.log(window.location);
  console.log(currentLoc);
  window.location.replace("Instabug" + "/login.html");
  // console.log("/login.html");
  // if (!localStorage.getItem("userID")) {
  //   auth = false;
  //   login();
  // } else if (localStorage.getItem("userID")) {
  //   auth = true;
  //   welcome(localStorage.getItem("userID"));
  // }
});

// function login() {
//   if (currentPath != "/login.html" && currentPath != "/error.html") {
//     window.location.replace("/login.html");
//     console.log("/login.html");
//   }
// }

// function welcome(user) {
//   if (auth == true && currentPath != "/") {
//     window.location.replace("/");
//   }
//   console.log("welcome " + user);
// }
