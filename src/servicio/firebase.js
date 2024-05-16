// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAda4DP9MPT_lR8y4LtitKIlzcLJ6whK8c",
  authDomain: "utnreactoff.firebaseapp.com",
  projectId: "utnreactoff",
  storageBucket: "utnreactoff.appspot.com",
  messagingSenderId: "593158043552",
  appId: "1:593158043552:web:376ce8fc8656c27dfc56c5",
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
export const auth = getAuth(App);
//Set persistence to Local Storage
setPersistence(auth,browserLocalPersistence)
.then(()=>{
    console.log('auth persistence set to local');
})
.catch(err=>{
    console.error('error setting persistence',err);
})