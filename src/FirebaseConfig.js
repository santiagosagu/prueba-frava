import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCX6uK7xS90SLUoGOraMZ93ytAFv6eaL9c",
    authDomain: "prueba-frava.firebaseapp.com",
    projectId: "prueba-frava",
    storageBucket: "prueba-frava.appspot.com",
    messagingSenderId: "130916863920",
    appId: "1:130916863920:web:2f1afbdd299529ba351075",
    measurementId: "G-N95PPGBKEH"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
fire.analytics();

const auth = fire.auth()
const db = fire.firestore()
const storage = firebase.storage()

export { db, storage, auth, firebase }