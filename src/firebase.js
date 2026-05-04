// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 1. Import Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FIRE_API = import.meta.env.VITE_FIREBASE;
const firebaseConfig = {
  apiKey: FIRE_API,
  authDomain: "ecosort-1e92b.firebaseapp.com",
  databaseURL:
    "https://ecosort-1e92b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecosort-1e92b",
  storageBucket: "ecosort-1e92b.firebasestorage.app",
  messagingSenderId: "819728623734",
  appId: "1:819728623734:web:e2da14dcc19b12f30a9757",
  measurementId: "G-HF5NK19HJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
