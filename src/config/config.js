
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";

const firebaseConfig = {

  apiKey: process.env.MY_API_KEY,
  authDomain: "vulcan-web-1a194.firebaseapp.com",
  projectId: "vulcan-web-1a194",
  storageBucket: "vulcan-web-1a194.appspot.com",
  messagingSenderId: "541964008236",
  appId: "1:541964008236:web:e542881a6083f240c00a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  
export const storage = getStorage(app);  