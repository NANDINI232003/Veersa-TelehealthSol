import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//STORED THE FIREBASE DETAILS IN .env.local FILE

const firebaseConfig = {
  apiKey: "AIzaSyAXabKWN5IvoF77aIs7xI0ZmnHrBVOkZV0",
  authDomain: "telehealth-76492.firebaseapp.com",
  projectId: "telehealth-76492",
  storageBucket: "telehealth-76492.appspot.com",
  messagingSenderId: "1027063975405",
  appId: "1:1027063975405:web:6d14a29582fb2d7a0bebe4"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
