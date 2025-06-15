// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7fL44BMTYkkdziK3w6fp1VLxA63CiLYw",
  authDomain: "movies-gpt-f5100.firebaseapp.com",
  projectId: "movies-gpt-f5100",
  storageBucket: "movies-gpt-f5100.firebasestorage.app",
  messagingSenderId: "1010850599349",
  appId: "1:1010850599349:web:a6b00d56f9baa949ca49fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
