import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBjJPHCYmhEe7tMtOfcOfDv4TreoGF0qlY",
    authDomain: "login-a1dcf.firebaseapp.com",
    projectId: "login-a1dcf",
    storageBucket: "login-a1dcf.appspot.com",
    messagingSenderId: "475680526810",
    appId: "1:475680526810:web:00696e64c5fab44222b0e3"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;