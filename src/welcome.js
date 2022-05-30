let name = document.querySelector(".name");
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("userID")) {
    auth = false;
  } else if (localStorage.getItem("userID")) {
    auth = true;
    welcome(localStorage.getItem("userID"));
  }
});

function welcome(user) {
  name.textContent = `Welcome ${localStorage.getItem("userID")}`;
}

function logout() {
  localStorage.removeItem("userID");
  auth = false;
  if (auth == false && window.location.href.includes("login.html") != true)
    window.location.href = "login.html";
}
