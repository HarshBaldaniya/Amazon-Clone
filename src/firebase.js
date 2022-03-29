import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmqqsR2cb5deGyY2nvoWhSfQKBfD8Tqs4",
  authDomain: "clone-c2a19.firebaseapp.com",
  projectId: "clone-c2a19",
  storageBucket: "clone-c2a19.appspot.com",
  messagingSenderId: "816400513176",
  appId: "1:816400513176:web:b81307ae176f33324578ed",
  measurementId: "G-KX0FP0SBFY",
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
