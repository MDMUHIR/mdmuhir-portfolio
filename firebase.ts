import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1fEZ2QbtT7amMTpAE5cL1A_SSt_X8IUM",
  authDomain: "portfolio-b1ad6.firebaseapp.com",
  projectId: "portfolio-b1ad6",
  storageBucket: "portfolio-b1ad6.firebasestorage.app",
  messagingSenderId: "601195598196",
  appId: "1:601195598196:web:20e50c18915d65f0501c21",
  measurementId: "G-PTXLXRYCVZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
