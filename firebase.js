import { initializeApp, getApps, getApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDDCH19iZUtdemeGoNiJR0i1at9dIqzWeg",
    authDomain: "ali-cacc5.firebaseapp.com",
    projectId: "ali-cacc5",
    storageBucket: "ali-cacc5.appspot.com",
    messagingSenderId: "605963149379",
    appId: "1:605963149379:web:5a72d17813690364e7b4f6",
    measurementId: "G-2FK7KRWTBR"
  };

  //initializing the firebase app
  const app = !getApps().length ? initializeApp(firebaseConfig) : initialize
  const auth = getAuth();
  const db = getFirestore(app);
  const storage = getStorage();

  export {db, auth, storage}