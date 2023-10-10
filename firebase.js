
import 'firebase/auth';
import 'firebase/firestore';
import {getStorage} from 'firebase/storage'
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firestore } from 'firebase/app'; // Import firestore from Firebase
import "firebase/compat/firestore"; // Import Firestore
import { getFirestore } from 'firebase/firestore';

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
const app=firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Firestore= getStorage(app);
export const db=getFirestore();
export default firebase;