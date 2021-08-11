import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDH_NINzMek8Wgductg0CPpdzX3LhuzBKs",
    authDomain: "bd-es-2021.firebaseapp.com",
    databaseURL: "https://bd-es-2021-default-rtdb.firebaseio.com",
    projectId: "bd-es-2021",
    storageBucket: "bd-es-2021.appspot.com",
    messagingSenderId: "353621573659",
    appId: "1:353621573659:web:dee6d11a9cf2925f97f8be",
    measurementId: "G-T1GSVPKPCB"
};

const firebaseConnection = firebase.initializeApp(firebaseConfig);
export default firebaseConnection

export const db = firebase.firestore(); // firestore