// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMjT8-2q_gPop4prkUvXh7OoP9uN2SjN4",
  authDomain: "aiplanner-92d78.firebaseapp.com",
  projectId: "aiplanner-92d78",
  storageBucket: "aiplanner-92d78.firebasestorage.app",
  messagingSenderId: "420876661928",
  appId: "1:420876661928:web:c72fc1ed3e12af03de7e9d",
  measurementId: "G-LW9YJGNH1K"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export default app;
