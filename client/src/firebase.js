// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-580dc.firebaseapp.com",
  projectId: "mern-estate-580dc",
  storageBucket: "mern-estate-580dc.appspot.com",
  messagingSenderId: "563138344807",
  appId: "1:563138344807:web:3f4ba90fdd30c08b2461c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);