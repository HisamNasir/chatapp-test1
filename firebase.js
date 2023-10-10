import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCjNoHqTTMXNiFxpDEH4QIZdg1iJofEHd0",

  authDomain: "chatapp-two.firebaseapp.com",

  databaseURL: "https://chatapp-two-default-rtdb.firebaseio.com",

  projectId: "chatapp-two",

  storageBucket: "chatapp-two.appspot.com",

  messagingSenderId: "496413295627",

  appId: "1:496413295627:web:1aa4c8e4102f237882330e",

  measurementId: "G-HCT3KLDFW8"

};

// Singleton pattern to ensure Firebase is initialized only once
// let firebaseApp;

// export const getFirebaseApp = () => {
//   if (!firebaseApp) {
//     firebaseApp = initializeApp(firebaseConfig);
//   }
//   return firebaseApp;
// };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
