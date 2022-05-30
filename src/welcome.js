document.addEventListener("DOMContentLoaded", function () {
  currentPath = window.location.pathname;
  if (!localStorage.getItem("userID")) {
    auth = false;
  } else if (localStorage.getItem("userID")) {
    auth = true;
    welcome(localStorage.getItem("userID"));
  }
});

function welcome(user) {
  if (auth == true && currentPath != "/") {
    window.location.replace("/");
  }
  console.log("welcome " + user);
}

function logout() {
  localStorage.removeItem("userID");
  window.location.replace("/login.html");
}
