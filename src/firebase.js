// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSaUBiw2iNBqUGSLi9MkuUJI0Hwcuz0-I",
  authDomain: "todo-e75f6.firebaseapp.com",
  projectId: "todo-e75f6",
  storageBucket: "todo-e75f6.appspot.com",
  messagingSenderId: "50581404389",
  appId: "1:50581404389:web:a310a1a67de8c5d20b320c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)