import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9mnOLyFbWGtdmCEBiExE-EmkGHJG4e4Y",
  authDomain: "ama-zon-clonee.firebaseapp.com",
  databaseURL: "https://ama-zon-clonee.firebaseio.com",
  projectId: "ama-zon-clonee",
  storageBucket: "ama-zon-clonee.appspot.com",
  messagingSenderId: "696422425469",
  appId: "1:696422425469:web:2bbbf48ce1ecab7643e214",
});

const auth = firebase.auth();

export { auth };
