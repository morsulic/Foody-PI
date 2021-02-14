import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC1feaW7_fztUVJ5QaP3xapqJvayvuOsvM",
  authDomain: "foody-f39ce.firebaseapp.com",
  projectId: "foody-f39ce",
  storageBucket: "foody-f39ce.appspot.com",
  messagingSenderId: "1067360764921",
  appId: "1:1067360764921:web:45eaa937cfd5c278437328",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };
