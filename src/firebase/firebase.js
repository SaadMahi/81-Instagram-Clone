// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZeB4SYFy6iFeC3AyvEi8bgYZ5TB4OO34",
  authDomain: "instagram-clone-fire.firebaseapp.com",
  projectId: "instagram-clone-fire",
  storageBucket: "instagram-clone-fire.appspot.com",
  messagingSenderId: "993510922148",
  appId: "1:993510922148:web:0020071cd53254455e5331",
  measurementId: "G-HNRS67J8HB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
