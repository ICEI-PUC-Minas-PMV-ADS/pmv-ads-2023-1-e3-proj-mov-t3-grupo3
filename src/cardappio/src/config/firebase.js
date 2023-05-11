import "firebase/storage"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAURzWwikoYVsnYd1uODq-lsQsHNpA0g70",
  authDomain: "cardappiopuc.firebaseapp.com",
  projectId: "cardappiopuc",
  storageBucket: "cardappiopuc.appspot.com",
  messagingSenderId: "425754112880",
  appId: "1:425754112880:web:13ea861b97955c56dad5b5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth();

export {
  db,
  storage,
  auth
}