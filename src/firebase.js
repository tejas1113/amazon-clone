// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkOoWx21UUTRJXRQXDWja-iDa3-9nWYxU",
  authDomain: "amzclone-tejas.firebaseapp.com",
  projectId: "amzclone-tejas",
  storageBucket: "amzclone-tejas.appspot.com",
  messagingSenderId: "924621372512",
  appId: "1:924621372512:web:734832923838af71711705",
  measurementId: "G-EL47J0HMKE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
