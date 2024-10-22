// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP3tOV42hc9iZyr6OnLB00kiCLlITblfo",
  authDomain: "tiendaappreact.firebaseapp.com",
  projectId: "tiendaappreact",
  storageBucket: "tiendaappreact.appspot.com",
  messagingSenderId: "367361870098",
  appId: "1:367361870098:web:08dbcd011db26be490cbcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);