// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
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
  appId: "1:310110727640:web:2ebfa52a1e27943b3e16ad",
  measurementId: "G-9C9CCMDDDN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app)

export {auth};