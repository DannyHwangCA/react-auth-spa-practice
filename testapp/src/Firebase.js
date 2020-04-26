import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBxZARUsRA3yxzwMjnaaZZNlVSIUxPeSUk",
    authDomain: "react-spas-820df.firebaseapp.com",
    databaseURL: "https://react-spas-820df.firebaseio.com",
    projectId: "react-spas-820df",
    storageBucket: "react-spas-820df.appspot.com",
    messagingSenderId: "404797110143",
    appId: "1:404797110143:web:594ea5e396af11d8c18c4a",
    measurementId: "G-7ELGMRMZ9P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;