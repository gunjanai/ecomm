// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPuqLEPjqvFi-8Wz_48uXN4ug56-y2YBg",
  authDomain: "ecomm-d1b6a.firebaseapp.com",
  projectId: "ecomm-d1b6a",
  storageBucket: "ecomm-d1b6a.appspot.com",
  messagingSenderId: "137303719286",
  appId: "1:137303719286:web:3b2f1be19ca79840c08e57",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();

export { db, auth };
