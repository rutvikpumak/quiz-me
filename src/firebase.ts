
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1CV7vTp1azZ7Y5DxiuH-hoaxkFy3ee48",
    authDomain: "quiz-app-bd62f.firebaseapp.com",
    projectId: "quiz-app-bd62f",
    storageBucket: "quiz-app-bd62f.appspot.com",
    messagingSenderId: "299626355661",
    appId: "1:299626355661:web:cd029bc4cd5237c480c284"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    addDoc,
    query,
    getDocs,
    collection,
    where,
};