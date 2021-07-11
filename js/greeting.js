const inputForm = document.querySelector("#login-form");
const inputLogin = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
  event.preventDefault();
  inputForm.classList.add(HIDDEN_CLASSNAME);
  const username = inputLogin.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
};

function paintGreeting (username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  inputForm.classList.remove(HIDDEN_CLASSNAME);
  inputForm.addEventListener("submit", onLoginSubmit);
} else {
  inputForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(savedUsername);
};