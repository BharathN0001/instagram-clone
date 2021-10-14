// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2mD1Q0U8LyQ2nP0EJQcfbvVQc40XjkBQ",
  authDomain: "insta-clone-ee264.firebaseapp.com",
  projectId: "insta-clone-ee264",
  storageBucket: "insta-clone-ee264.appspot.com",
  messagingSenderId: "285757235123",
  appId: "1:285757235123:web:affbea4ab5fcdbe5c635c6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export {app , db, storage}