import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoAl09B3D94tRpFzEqJ_E3b2LsFGiTiC0",
  authDomain: "roketmine-4f19b.firebaseapp.com",
  projectId: "roketmine-4f19b",
  storageBucket: "roketmine-4f19b.appspot.com",
  messagingSenderId: "777482505460",
  appId: "1:777482505460:web:7fc0bb097ac6a5572062a1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);