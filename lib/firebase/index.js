// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALOBS7hQlBZh_RATVB4czX94aqe7BFx7E",
  authDomain: "finance-tracking-app-a06f3.firebaseapp.com",
  projectId: "finance-tracking-app-a06f3",
  storageBucket: "finance-tracking-app-a06f3.firebasestorage.app",
  messagingSenderId: "176512596342",
  appId: "1:176512596342:web:3460caf573be87dffc2257",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth}