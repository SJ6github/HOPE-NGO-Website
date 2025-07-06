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

To learn more about the tools used in these projects, take a look at the following resources:

- [OpenCV Python Documentation](https://docs.opencv.org/master/d6/d00/tutorial_py_root.html) – learn about OpenCV’s Python features and tutorials.
- [MediaPipe Solutions](https://developers.google.com/mediapipe/solutions) – official MediaPipe documentation and examples.
- [MediaPipe GitHub Repository](https://github.com/google/mediapipe) – the open-source codebase of MediaPipe.
