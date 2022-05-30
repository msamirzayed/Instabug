// redirection

// document.addEventListener("DOMContentLoaded", function () {
//   currentPath = window.location.pathname;
//   if (!localStorage.getItem("userID")) {
//     auth = false;
//     login();
//   } else if (localStorage.getItem("userID")) {
//     auth = true;
//     welcome(localStorage.getItem("userID"));
//   }
// });

// function login() {
//   if (currentPath != "/login.html" && currentPath != "/error.html") {
//     window.location.replace("/login.html");
//   }
// }

// function logout() {
//   localStorage.removeItem("userID", userMail);
// }

// function welcome(user) {
//   if (auth == true && currentPath != "/") {
//     window.location.replace("/");
//   }
//   console.log("welcome " + user);
// }
