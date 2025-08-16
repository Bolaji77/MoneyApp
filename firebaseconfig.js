// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDznSwugP9y3QO-p9iLMtHG8EoRONHC8uc",
  authDomain: "vipfans-a3f6f.firebaseapp.com",
  projectId: "vipfans-a3f6f",
  storageBucket: "vipfans-a3f6f.firebasestorage.app",
  messagingSenderId: "1014844082011",
  appId: "1:1014844082011:web:c5654b570c7255bcc1bc7e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;