
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlgd9RDzD3j48d6KHmfPErFw_qCu8HHUE",
  authDomain: "osfiir-6f5d8.firebaseapp.com",
  projectId: "osfiir-6f5d8",
  storageBucket: "osfiir-6f5d8.firebasestorage.app",
  messagingSenderId: "615978371854",
  appId: "1:615978371854:web:1c0adbb6525f9c0586a55f",
  measurementId: "G-NZNJL41W9P"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();