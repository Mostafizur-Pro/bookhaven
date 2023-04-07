// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4RSWi591CYT46BxgErYIq1Fg3xAfnz1w",
  authDomain: "book-haven-33621.firebaseapp.com",
  projectId: "book-haven-33621",
  storageBucket: "book-haven-33621.appspot.com",
  messagingSenderId: "592607507507",
  appId: "1:592607507507:web:ef3e5b14f470531e965f46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;