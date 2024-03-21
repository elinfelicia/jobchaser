// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcPQbwfIksODgXMtpVEQnqhZKhbYSajBc",
  authDomain: "jobchaser-acfc8.firebaseapp.com",
  projectId: "jobchaser-acfc8",
  storageBucket: "jobchaser-acfc8.appspot.com",
  messagingSenderId: "310110727640",
  appId: "1:310110727640:web:d39cb0bc481aba613e16ad",
  measurementId: "G-04X1CHMN5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

