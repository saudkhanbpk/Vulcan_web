
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

// const firebaseConfig = {

//   apiKey: process.env.MY_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId:process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);  
// export const storage = getStorage(app);  
// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwOCBGoaaOAblZheXi9sa1EzQ-9Y-T3RY",
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
export const auth = getAuth(app);