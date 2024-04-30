// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-da303.firebaseapp.com",
  projectId: "react-chat-app-da303",
  storageBucket: "react-chat-app-da303.appspot.com",
  messagingSenderId: "186451519475",
  appId: "1:186451519475:web:5ab6662a89d669f5f1d486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);