// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw7wzY3AjaVGl_ctbiuYmUkc5dV_gV1_4",
  authDomain: "action-legal-care.firebaseapp.com",
  projectId: "action-legal-care",
  storageBucket: "action-legal-care.appspot.com",
  messagingSenderId: "656294670135",
  appId: "1:656294670135:web:c2192140f23ca2cf2474b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;