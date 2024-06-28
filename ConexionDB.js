

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDQEE3_oqZWg_cX-GmSOjFxUOri_wyDua8",
  authDomain: "db-vidamarina.firebaseapp.com",
  projectId: "db-vidamarina",
  storageBucket: "db-vidamarina.appspot.com",
  messagingSenderId: "246698494086",
  appId: "1:246698494086:web:b453401d34ba6b3b426907"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
