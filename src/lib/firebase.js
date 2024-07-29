import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASEKEY,
    authDomain: "fireb1-37b1a.firebaseapp.com",
    projectId: "fireb1-37b1a",
    storageBucket: "fireb1-37b1a.appspot.com",
    messagingSenderId: "977584346133",
    appId: "1:977584346133:web:944dc511de45d5cadcea1c",
    measurementId: "G-YQ5V9YESWH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
