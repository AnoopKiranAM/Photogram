import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpXM6rN7Y2Ux85mMMlKUwkC_F-XR7Atag",
  authDomain: "firegram-bf16e.firebaseapp.com",
  databaseURL: "https://firegram-bf16e.firebaseio.com",
  projectId: "firegram-bf16e",
  storageBucket: "firegram-bf16e.appspot.com",
  messagingSenderId: "524567398033",
  appId: "1:524567398033:web:7718469b5bcdcf20ec6130"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };