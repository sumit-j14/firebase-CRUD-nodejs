const firebase = require("firebase");
// this is the firebase configuration object
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// firebase spin up code 
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("");// write database name here


module.exports = User;
