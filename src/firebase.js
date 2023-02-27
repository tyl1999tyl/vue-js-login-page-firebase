// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_VALUE",
  authDomain: "YOUR_VALUE",
  projectId: "YOUR_VALUE",
  storageBucket: "YOUR_VALUE",
  messagingSenderId: "YOUR_VALUE",
  appId: "YOUR_VALUE",
  measurementId: "YOUR_VALUE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}