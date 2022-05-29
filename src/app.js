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

if (!localStorage.getItem("userID")) {
  auth = false;
  login();
} else {
  auth = true;
  welcome(localStorage.getItem("userID"));
}

function login() {
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
  console.log("welcome " + user);
}
