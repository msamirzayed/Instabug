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

let emInput = document.querySelector("#email");
let emMsg = document.querySelector(".emMsg");
let pswInput = document.querySelector("#password");
let pswMsg = document.querySelector(".pswMsg");
const btnSubmit = document.querySelector(".submit");
const form = document.querySelector("form");
const hidden = document.querySelector(".hidden");

// checking user inputs and alerting
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs(emInput.value, pswInput.value);
  check(emInput.value, pswInput.value);
});

checkInputs(emInput.value, pswInput.value);

// check on every keyup listner

pswInput.addEventListener("keyup", () => {
  pswMsg.innerHTML = ` ${validatePassword(pswInput.value)}`;
  checkInputs(emInput.value, pswInput.value);
});

pswInput.addEventListener("focusout", () => {
  pswMsg.innerHTML = ` ${validatePassword(pswInput.value)}`;
  checkInputs(emInput.value, pswInput.value);
});

emInput.addEventListener("keyup", () => {
  emMsg.innerHTML = ` ${validateEmail(emInput.value)}`;
  checkInputs(emInput.value, pswInput.value);
});

emInput.addEventListener("focusout", () => {
  emMsg.innerHTML = ` ${validateEmail(emInput.value)}`;
  checkInputs(emInput.value, pswInput.value);
});

// validating inputs and form

function validatePassword(password) {
  if (!password) return "Password is required";
  if (password.length < 6) {
    return `Please enter a password that's at least 6 characters long`;
  }

  const hasCapitalLetter = /[A-Z]/g;
  if (!hasCapitalLetter.test(password)) {
    return "Please use at least one capital letter.";
  }

  const hasNumber = /\d/g;
  if (!hasNumber.test(password)) {
    return "Please use at least one number.";
  }

  return "";
}

function validateEmail(email) {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isValidEmail.test(email)) {
    return "Please enter a valid email";
  }

  return "";
}

function checkInputs(email, password) {
  if (validateEmail(email) == "" && validatePassword(password) == "") {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

function check(mail, pass) {
  users.forEach((e) => {
    if (e.email == mail && e.password == pass) {
      localStorage.setItem("userID", mail);
      console.log("added");
      hidden.style.display = "none";
    } else if (e.email != mail && e.password != pass) {
      console.log("no matched user in the db");
      hidden.style.display = "block";
    }
  });
}
