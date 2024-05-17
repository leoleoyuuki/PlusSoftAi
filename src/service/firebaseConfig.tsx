// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxDNNMlRb7liBKgB4PM8qZMgGyxquETTw",
  authDomain: "hyperreach-c1a84.firebaseapp.com",
  projectId: "hyperreach-c1a84",
  storageBucket: "hyperreach-c1a84.appspot.com",
  messagingSenderId: "882382120642",
  appId: "1:882382120642:web:a42ea2a86e062c351b7d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

