import {initializeApp} from 'firebase/app';
import {browserLocalPersistence, getAuth, setPersistence, signInWithEmailAndPassword} from 'firebase/auth';

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

export const auth = getAuth(firebaseApp);

export const firebaseSignIn = (email, password) => {
  return setPersistence(auth, browserLocalPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          return {...userCredential};
        })
        .catch((error) => ({
          error: 'Invalid username or password',
        }));
    })
    .catch((error) => ({
      error: 'Problem with authentication persistence.',
    }));
};
