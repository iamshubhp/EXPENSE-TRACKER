// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlTdMWA1QwrBe5Hpm6vr8Y5a9HHEF0Row",
  authDomain: "expense-tracker-53cc9.firebaseapp.com",
  projectId: "expense-tracker-53cc9",
  storageBucket: "expense-tracker-53cc9.appspot.com",
  messagingSenderId: "820000929288",
  appId: "1:820000929288:web:33514a6bd72cd8b59743bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
