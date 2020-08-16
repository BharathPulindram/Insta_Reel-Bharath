import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9pEj6cLRJG2qArOCFLuoI2BUMuG8xpwk",
  authDomain: "insta-reel-bharath.firebaseapp.com",
  databaseURL: "https://insta-reel-bharath.firebaseio.com",
  projectId: "insta-reel-bharath",
  storageBucket: "insta-reel-bharath.appspot.com",
  messagingSenderId: "710771065485",
  appId: "1:710771065485:web:6bde094514c6bdb928d8c4",
  measurementId: "G-08GZV2B89S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
