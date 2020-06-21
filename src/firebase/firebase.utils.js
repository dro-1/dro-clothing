import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAt-XGam8oN7xkDEuAY64TmzQ3oC-El0RM",
  authDomain: "dro-clothing.firebaseapp.com",
  databaseURL: "https://dro-clothing.firebaseio.com",
  projectId: "dro-clothing",
  storageBucket: "dro-clothing.appspot.com",
  messagingSenderId: "724338768916",
  appId: "1:724338768916:web:0439308063e33ea60d7b01",
  measurementId: "G-EVYBYPHMN5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;