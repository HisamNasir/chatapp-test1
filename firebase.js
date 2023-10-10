import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

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


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);