//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAMuzC8CS0JPrgI8yx9Yh6QhUQoAOBUSLI",
  authDomain: "clonewhatsapp-88218.firebaseapp.com",
  projectId: "clonewhatsapp-88218",
  storageBucket: "clonewhatsapp-88218.appspot.com",
  messagingSenderId: "65056409746",
  appId: "1:65056409746:web:ae43e34818db68d9217e4b"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };