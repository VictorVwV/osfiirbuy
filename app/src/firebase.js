
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBlgd9RDzD3j48d6KHmfPrFw_qCu8HHUE",
  authDomain: "osfiir-6f5d8.firebaseapp.com",
  projectId: "osfiir-6f5d8",
  storageBucket: "osfiir-6f5d8.appspot.com",
  messagingSenderId: "615978371854",
  appId: "1:615978371854:web:1c0adbb6525f9c0586a55f",
  measurementId: "G-NZNJL41W9P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);