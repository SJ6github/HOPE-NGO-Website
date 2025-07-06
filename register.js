import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// This is a public version. Keys are masked for security.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
// NOTE: Replace these with your actual Firebase credentials

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('registerForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      alert("Account created successfully!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });

})