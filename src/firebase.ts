import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1T0ZLMX34g-I55kIfsJFBeDYBYFjxSQM",
  authDomain: "woomo-cf8eb.firebaseapp.com",
  projectId: "woomo-cf8eb",
  storageBucket: "woomo-cf8eb.appspot.com", // был ошибочный домен
  messagingSenderId: "303674300060",
  appId: "1:303674300060:web:c61348c230dbc26f377f59",
  measurementId: "G-Q4EYGEFLY9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
