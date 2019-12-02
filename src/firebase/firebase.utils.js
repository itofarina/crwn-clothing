import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD17zZEFIBsNagqJzUkDoarxfFjiUXus-w",
    authDomain: "crown-db-ccb73.firebaseapp.com",
    databaseURL: "https://crown-db-ccb73.firebaseio.com",
    projectId: "crown-db-ccb73",
    storageBucket: "crown-db-ccb73.appspot.com",
    messagingSenderId: "70809317709",
    appId: "1:70809317709:web:7080e91ea4880a97f48704"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
