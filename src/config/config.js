import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyCwOCBGoaaOAblZheXi9sa1EzQ-9Y-T3RY",
  authDomain: "vulcan-web-1a194.firebaseapp.com",
  projectId: "vulcan-web-1a194",
  storageBucket: "vulcan-web-1a194.appspot.com",
  messagingSenderId: "541964008236",
  appId: "1:541964008236:web:e542881a6083f240c00a89"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// const dataRef = ref(database, "path/to/data");
// set(dataRef, { key: "value" });

// const firebaseConfig = {
//   apiKey: "AIzaSyCdtFR-6FUJm44ak3XGSjLzST79EJxF5M0",
//   authDomain: "vulcan-v2-dev.firebaseapp.com",
//   projectId: "vulcan-v2-dev",
//   storageBucket: "vulcan-v2-dev.appspot.com",
//   messagingSenderId: "403132433922",
//   appId: "1:403132433922:web:e4a6136fda6eed4b4b891b",
//   measurementId: "G-2J4XMB2D6B",
// };
