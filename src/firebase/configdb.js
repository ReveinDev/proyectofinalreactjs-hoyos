// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWHowD5W0dzWtCW_qjFJIqrgvrKq-UFcQ",
  authDomain: "lodelgordofallen.firebaseapp.com",
  projectId: "lodelgordofallen",
  storageBucket: "lodelgordofallen.appspot.com",
  messagingSenderId: "375454236641",
  appId: "1:375454236641:web:17334b614db6a4adf61ca0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);