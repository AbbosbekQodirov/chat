import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLKEUcBZJ5m78BZ0RuPvNh_D7MrFdhZ8s",
  authDomain: "firechat-b53c0.firebaseapp.com",
  projectId: "firechat-b53c0",
  storageBucket: "firechat-b53c0.appspot.com",
  messagingSenderId: "1067656927924",
  appId: "1:1067656927924:web:cc3b19451212a6806ad5e1",
  measurementId: "G-F72QRG0862",
});

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }