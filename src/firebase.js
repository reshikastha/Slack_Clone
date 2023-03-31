// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj442eIdgSIJg-0-IM3_KAWwzOY6X_uvY",
  authDomain: "slack-clone-56851.firebaseapp.com",
  projectId: "slack-clone-56851",
  storageBucket: "slack-clone-56851.appspot.com",
  messagingSenderId: "471895189914",
  appId: "1:471895189914:web:d14e41e6419a9ea10a3223",
  measurementId: "G-XPXCG2TWT4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
