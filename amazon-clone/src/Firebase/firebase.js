import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDkYnheMbEp726r2cGHcqGMLZKsW_f6axo",
    authDomain: "clone-6548d.firebaseapp.com",
    databaseURL: "https://clone-6548d.firebaseio.com",
    projectId: "clone-6548d",
    storageBucket: "clone-6548d.appspot.com",
    messagingSenderId: "297273469493",
    appId: "1:297273469493:web:e8b073ba7fbdbde7775f7c"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore()
 const auth = firebase.auth()

 export {db, auth}


 