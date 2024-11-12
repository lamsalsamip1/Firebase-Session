/*
Ex: Make the necessary import to initialize the firebase app
---------------YOUR CODE HERE----------------------- 
*/

/*
Ex: Make imports of other services you require from firebase
---------------YOUR CODE HERE----------------------- 
*/

// Ex: Paste your firebase configuration here and initialize the app.
const firebaseConfig = {};

/* Initialize Firebase App
---------------YOUR CODE HERE----------------------- 
*/

/* Ex: Initialize Firebase Auth Service, and any auth providers you need
---------------YOUR CODE HERE----------------------- 
*/

// Code to read buttons and forms
const signupButton = document.getElementById("signup-button");
const googleButton = document.getElementById("google-login");
const loginForm = document.querySelector("form");
const pageTitle = document.querySelector(".page-title");
const loggedInContent = document.getElementById("logged-in-content");
const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");

//Implement user registration feature
signupButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  /*
  Ex: Call the Firebase API to sign up a new user

  ---------------YOUR CODE HERE----------------------- 

  */
});

// Implement login via email and password feature
loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  /*
  Ex: Call the Firebase API to sign in a user with email and password
    ---------------YOUR CODE HERE----------------------- 
  */
});

//Implement login with google feature
googleButton.addEventListener("click", () => {
  /*
  Ex: Call the Firebase API to sign in with Google
  ---------------YOUR CODE HERE----------------------- 
  */
});

// Update UI based on user status
function updateUI(user) {
  if (user) {
    const displayName = user.displayName || user.email.split("@")[0];
    console.log("hello");
    loginForm.classList.add("hidden");
    loggedInContent.classList.remove("hidden");
    pageTitle.textContent = "Welcome, " + displayName;
  } else {
    loginForm.classList.remove("hidden");
    loggedInContent.classList.add("hidden");
    pageTitle.textContent = "Authentication Demo";
    emailInput.value = "";
    passwordInput.value = "";
  }
}

// Check login status and update UI on change
auth.onAuthStateChanged((user) => {
  updateUI(user);
});

// Implement logout feature
logoutButton.addEventListener("click", () => {
  /*
  Ex: Call the sign out method on the auth object to log the user out
  ---------------YOUR CODE HERE----------------------- 
  */
  // setTimeout(() => {
  //   alert("You have been signed out.");
  // }, 500);
});
