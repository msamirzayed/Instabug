// redirection
let auth = false;
document.addEventListener("DOMContentLoaded", function () {
  const userId = localStorage.getItem("userID");
  if (!userId) {
    auth = false;
    login();
  } else if (userId) {
    auth = true;
    welcome(userId);
  }
});

function login() {
  const loginUri = "login.html";
  const errorUri = "error.html";
  const notAuth = auth === false;
  const isLoginPage = window.location.href.includes(loginUri);
  const errorPage = window.location.href.includes(errorUri);
  if (notAuth && !isLoginPage && !errorPage) window.location.href = loginUri;
}

function welcome(user) {
  const loginUri = "index.html";
  const errorUri = "error.html";
  const notAuth = auth === false;
  const isLoginPage = window.location.href.includes(loginUri);
  const errorPage = window.location.href.includes(errorUri);

  if (!notAuth && !isLoginPage && !errorPage) window.location.href = loginUri;
}
