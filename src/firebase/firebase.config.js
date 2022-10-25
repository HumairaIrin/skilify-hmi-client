// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-q-qmRRO-IfZYV1RRhuk182M9tmrnpZI",
    authDomain: "skilify-hmi.firebaseapp.com",
    projectId: "skilify-hmi",
    storageBucket: "skilify-hmi.appspot.com",
    messagingSenderId: "416484012288",
    appId: "1:416484012288:web:a134f507dee4a5d16803e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;