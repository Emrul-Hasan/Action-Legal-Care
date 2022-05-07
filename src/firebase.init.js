// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq6uj6TMVj9HQACvlfVhnGhQ37WhCs2BY",
  authDomain: "genius-car-services-ac87e.firebaseapp.com",
  projectId: "genius-car-services-ac87e",
  storageBucket: "genius-car-services-ac87e.appspot.com",
  messagingSenderId: "325068323039",
  appId: "1:325068323039:web:07ef021e9bb8f22a57116a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;