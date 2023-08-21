import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA9h5hx3wv097258xB4KIRrJ2rnawzlaKg',
    authDomain: 'chatgpt-6fa7e.firebaseapp.com',
    projectId: 'chatgpt-6fa7e',
    storageBucket: 'chatgpt-6fa7e.appspot.com',
    messagingSenderId: '183341689862',
    appId: '1:183341689862:web:0b2ce986688fe254f3e787',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
