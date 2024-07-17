import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2r5YedfsPQZl44yBknNh4Is9PR3cgsHw",
  authDomain: "todo-app-b5df9.firebaseapp.com",
  projectId: "todo-app-b5df9",
  storageBucket: "todo-app-b5df9.appspot.com",
  messagingSenderId: "538134567405",
  appId: "1:538134567405:web:be1cf56f773c36e49aefe4"
};

  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  const auth=firebase.auth();

  export {db,auth};

