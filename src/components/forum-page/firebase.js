import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCo1OxXlhzGxusGsYLMCvUTq4ZanTv9eRs",
  authDomain: "forum-usf.firebaseapp.com",
  projectId: "forum-usf",
  storageBucket: "forum-usf.appspot.com",
  messagingSenderId: "147364894858",
  appId: "1:147364894858:web:76b15351cccec1f80f3573",
  measurementId: "G-LMSTDRDT0H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

export default db;