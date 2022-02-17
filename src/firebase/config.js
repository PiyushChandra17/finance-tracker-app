import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3eU7onA5wWxjB6_sEjimjcnVL9-FzpG8",
    authDomain: "mymoney-a2934.firebaseapp.com",
    projectId: "mymoney-a2934",
    storageBucket: "mymoney-a2934.appspot.com",
    messagingSenderId: "391403151830",
    appId: "1:391403151830:web:875575fdedc32b42a78477"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }