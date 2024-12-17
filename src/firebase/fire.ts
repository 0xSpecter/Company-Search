import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIaIgp__rxBFruch9LBQSuPPnpNm9zgks",
  authDomain: "company-search-26a8d.firebaseapp.com",
  projectId: "company-search-26a8d",
  storageBucket: "company-search-26a8d.firebasestorage.app",
  messagingSenderId: "769767916811",
  appId: "1:769767916811:web:bc60b24d5558428d32ce0e",
  measurementId: "G-L4K7G4D8JC"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app) 
const storage = getStorage(app)
const auth = getAuth(app)

export { app, db, auth, storage }
