// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhAlKyYpI4hDc2P6e0K5CjYdOPFjrcXbI",
  authDomain: "movies-store-front.firebaseapp.com",
  projectId: "movies-store-front",
  storageBucket: "movies-store-front.appspot.com",
  messagingSenderId: "963433014813",
  appId: "1:963433014813:web:b5a623e5447d24ca2748f4",
  measurementId: "G-00MNLX4TPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();