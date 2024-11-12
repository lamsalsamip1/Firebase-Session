import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqC84HeM73KE8kkmCxLwJZsX2IntIOPU8",
  authDomain: "auth-test-22a40.firebaseapp.com",
  projectId: "auth-test-22a40",
  storageBucket: "auth-test-22a40.firebasestorage.app",
  messagingSenderId: "563242760383",
  appId: "1:563242760383:web:37c1bbf25d06b60c6eae0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// read buttons
const signupButton = document.getElementById("signup-button");
const googleButton = document.getElementById("google-login");
const loginForm = document.querySelector("form");
const pageTitle = document.querySelector(".page-title");
const loggedInContent = document.getElementById("logged-in-content");
const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");

//Implement register feature
signupButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      setTimeout(() => {
        alert("Signed up successfully, welcome " + user.email);
      }, 500);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
      // ..
    });
});

// Implement regular login
loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setTimeout(() => {
        alert("Logged in successfully, welcome " + user.email.split("@")[0]);
      }, 500);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
      // ..
    });
});

//Implement login with google feature
googleButton.addEventListener("click", () => {
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      //   updateUI(result.user);
      alert("Logged in successfully, welcome " + result.user.displayName);
    })
    .catch((error) => {
      console.log(error);
    });
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
  }
}

// Check login status
auth.onAuthStateChanged((user) => {
  updateUI(user);
});

// Implement logout feature
logoutButton.addEventListener("click", () => {
  auth.signOut().then(() => {
    // updateUI(null);
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";
  });
  setTimeout(() => {
    alert("You have been signed out.");
  }, 500);
});
