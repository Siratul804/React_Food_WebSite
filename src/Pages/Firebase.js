import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE8uuA_PZOvQGZvk6_8xJP6pNKoKHAq60",
    authDomain: "esha-s-studio.firebaseapp.com",
    databaseURL: "https://esha-s-studio.firebaseio.com",
    projectId: "esha-s-studio",
    storageBucket: "esha-s-studio.appspot.com",
    messagingSenderId: "866695450206",
    appId: "1:866695450206:web:06981f483306c459cd2ecf",
    measurementId: "G-JH9BZXFTYZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebase;
