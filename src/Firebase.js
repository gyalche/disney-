
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getProvider} from 'firebase/provider';

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
  const firebaseApp = initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const auth=getAuth(firebaseApp);
  const provider=new getProvider(auth.GoogleAuthProvider());
  const storage=getStorage(firebaseApp);

  export {auth, provider, storage};
  export default db;