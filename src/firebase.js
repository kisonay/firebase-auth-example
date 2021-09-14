import {initializeApp} from 'firebase/app';
import {
  browserLocalPersistence,
  initializeAuth,
  signInWithEmailAndPassword,
  browserPopupRedirectResolver,
  signOut
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = initializeAuth(firebaseApp, {
  persistence: browserLocalPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});

export const firebaseSignIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => userCredential)
  .catch((error) => ({
    error: 'Invalid username or password',
  }));

export const firebaseSignOut = signOut(auth).catch((error) => console.error(error));


