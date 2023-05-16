
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdtFR-6FUJm44ak3XGSjLzST79EJxF5M0",
  authDomain: "vulcan-v2-dev.firebaseapp.com",
  projectId: "vulcan-v2-dev",
  storageBucket: "vulcan-v2-dev.appspot.com",
  messagingSenderId: "403132433922",
  appId: "1:403132433922:web:e4a6136fda6eed4b4b891b",
  measurementId: "G-2J4XMB2D6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  
export const storage = getStorage(app);  
export const auth = getAuth(app);