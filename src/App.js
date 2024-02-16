import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignIn from './signin';
firebase.initializeApp({
  apiKey: "AIzaSyAFceZqmoUvdBj7Lf2EAQJqC-8BqftxVDM",
  authDomain: "superchat-31ca7.firebaseapp.com",
  projectId: "superchat-31ca7",
  storageBucket: "superchat-31ca7.appspot.com",
  messagingSenderId: "277638366391",
  appId: "1:277638366391:web:d363ce68bcb3cde534f932",
  measurementId: "G-Z3RNR5QW26"
})
const auth=firebase.auth();
const firestore=firebase.firestore();

const[user]=useAuthState(auth);//if user is logged in it returns an object with it info,if loggedout object is null


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <section>
        {user? <ChatRoom/>:<SignIn/>}
      </section>
    </div>
  );
}

export default App;
