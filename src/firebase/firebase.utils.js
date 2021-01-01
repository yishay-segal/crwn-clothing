import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDc1V7WRNIu8Vjf6I6DjwIwGq9tOZoeVTA',
  authDomain: 'crwn-db-3c34b.firebaseapp.com',
  projectId: 'crwn-db-3c34b',
  storageBucket: 'crwn-db-3c34b.appspot.com',
  messagingSenderId: '1016478144691',
  appId: '1:1016478144691:web:77094ee3c50011ab2f38c6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
