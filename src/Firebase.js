// import firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVDXQTsaqwJ9fwGVuxSbqJdYrZzHCjDF4",
  authDomain: "netflix-clone-83a0f.firebaseapp.com",
  projectId: "netflix-clone-83a0f",
  storageBucket: "netflix-clone-83a0f.appspot.com",
  messagingSenderId: "736753667975",
  appId: "1:736753667975:web:15e37fddae8c43f56e4d22",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
