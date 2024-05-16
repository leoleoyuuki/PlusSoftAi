// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSH-hCnwLCFf0oaq2SE6QAYQ57sBPoq0U",
  authDomain: "plussoftai.firebaseapp.com",
  projectId: "plussoftai",
  storageBucket: "plussoftai.appspot.com",
  messagingSenderId: "346561615505",
  appId: "1:346561615505:web:cca1cbf3478d44a2e1d130",
  measurementId: "G-1FK5KNGXX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);