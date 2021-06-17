import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCVuvyE1JZ9tUXWDIkD0O7PlDfs1lrBwnM",
    authDomain: "todo-app2-327bb.firebaseapp.com",
    projectId: "todo-app2-327bb",
    storageBucket: "todo-app2-327bb.appspot.com",
    messagingSenderId: "399926761461",
    appId: "1:399926761461:web:0fc8546f01fd15d99cb2bc",
    measurementId: "G-X1HJ46PGMG"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;


