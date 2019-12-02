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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(`Error creating user: ${error.nmessage}`);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
