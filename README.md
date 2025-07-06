# HOPE NGO

This is a responsive NGO website built using **HTML**, **CSS**, and **JavaScript**, showcasing a clean and functional interface for login, registration, dashboard, and gallery features.

**Note**: This version is GitHub-safe — Firebase API keys have been removed for security reasons.

---

[View Live Site on Vercel](https://ngo-website.vercel.app)

---

## Firebase Integration (for Local Testing)

Firebase setup is excluded from this public version. To test login/register locally:

1. Create a Firebase project: [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication > Email/Password**
3. In `login.js` and `register.js`, replace the config block with:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

---
