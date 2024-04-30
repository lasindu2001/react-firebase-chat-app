import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-da303.firebaseapp.com",
  projectId: "react-chat-app-da303",
  storageBucket: "react-chat-app-da303.appspot.com",
  messagingSenderId: "186451519475",
  appId: "1:186451519475:web:5ab6662a89d669f5f1d486"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()