import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAK7Gb1XCpVVzo4c_tsttehf_4v4D0UVQs",
    authDomain: "deevesoft-assignment.firebaseapp.com",
    databaseURL: "https://deevesoft-assignment.firebaseio.com",
    projectId: "deevesoft-assignment",
    storageBucket: "deevesoft-assignment.appspot.com",
    messagingSenderId: "593812968059",
    appId: "1:593812968059:web:f118a8c60a5e483c71c8de",
    measurementId: "G-TZ48CTPNB6"
};

const fire = firebase.initializeApp(config);

export default fire;