import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx_nvfoMrWALtTJWuG6pvMzt2pqJiGZxw",
  authDomain: "clone-7f2db.firebaseapp.com",
  projectId: "clone-7f2db",
  storageBucket: "clone-7f2db.appspot.com",
  messagingSenderId: "416095232702",
  appId: "1:416095232702:web:9547d3e6f96006c8f6b4ef",
  measurementId: "G-FSMNBVMJFH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };