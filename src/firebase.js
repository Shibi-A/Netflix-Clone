import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAL_iUNlANwZVG0K_T0H9vJtBMNpIYHiaw",
    authDomain: "netflix-clone-f2640.firebaseapp.com",
    projectId: "netflix-clone-f2640",
    storageBucket: "netflix-clone-f2640.appspot.com",
    messagingSenderId: "648522114214",
    appId: "1:648522114214:web:f4cb446be1d64222d18067"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export  { auth };
  export default db;