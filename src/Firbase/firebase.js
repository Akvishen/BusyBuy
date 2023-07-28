// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASUX1ggNQLTMmp3JhYBbBQpABZgUJkt7k",
  authDomain: "busybye-3a0f2.firebaseapp.com",
  projectId: "busybye-3a0f2",
  storageBucket: "busybye-3a0f2.appspot.com",
  messagingSenderId: "395142683204",
  appId: "1:395142683204:web:87dda46311db38679eba11",
  measurementId: "G-KWM162M7WY"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
