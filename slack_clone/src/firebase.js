// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import firebase from "firebase"
// import {initializeApp} from "firebase/app"
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyC-K8eutHB1d8qEwh0MSg7uYN5UfIbYx8g",
    authDomain: "slack-clone-8c4ca.firebaseapp.com",
    projectId: "slack-clone-8c4ca",
    storageBucket: "slack-clone-8c4ca.appspot.com",
    messagingSenderId: "954707558460",
    appId: "1:954707558460:web:7818992a549bff863c4339"
  };

  const firebaseApp =initializeApp(firebaseConfig)
  const db=getFirestore()

  //google auth 
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  export {auth,provider,db}