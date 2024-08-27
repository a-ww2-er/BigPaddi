// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAl_luE4ZxZm44uczBGMuAO_9zEkT26790",
    authDomain: "bigpaddi-c0365.firebaseapp.com",
    projectId: "bigpaddi-c0365",
    storageBucket: "bigpaddi-c0365.appspot.com",
    messagingSenderId: "960649085803",
    appId: "1:960649085803:web:37519d6d5a31bef58dc22e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)