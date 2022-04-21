import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz6mSbTm5_NcUYDATmM1OfHmQjl0HHf0Q",
  authDomain: "disneyplus-clone-7371a.firebaseapp.com",
  projectId: "disneyplus-clone-7371a",
  storageBucket: "disneyplus-clone-7371a.appspot.com",
  messagingSenderId: "535552713671",
  appId: "1:535552713671:web:bafcca6c97a14fda552fe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db=getFirestore(app);

export {app, auth, db};











// import { initializeApp } from 'firebase/app';
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';
// import {getStorage} from 'firebase/storage';
// import {getProvider} from 'firebase/provider';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { initializeApp, } from "firebase/app";
// import {getAuth} from 'firebase/auth';

// import {
//   GoogleAuthProvider,
//   // getAuth,
  
// } from "firebase/auth";
// import {
//   getFirestore,
  
// } from "firebase/firestore";

// // Your web app's Firebase configuration
//  const firebaseConfig = {
//   apiKey: "AIzaSyAz6mSbTm5_NcUYDATmM1OfHmQjl0HHf0Q",
//   authDomain: "disneyplus-clone-7371a.firebaseapp.com",
//   projectId: "disneyplus-clone-7371a",
//   storageBucket: "disneyplus-clone-7371a.appspot.com",
//   messagingSenderId: "535552713671",
//   appId: "1:535552713671:web:bafcca6c97a14fda552fe2"
// };

//   // Initialize Firebase

//   const app = initializeApp(firebaseConfig);
//   const auth = firebase.auth();
//   const db = app.firestore(app);
//   const provider = new firebase.auth.GoogleAuthProvider();

// export {
//   auth,
//   provider,
 
// };

// export default db;

