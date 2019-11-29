import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "/Users/George/react-study-group/src/components/Sensitive";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
function Login(props) {
  return (
    <div className="App">
      <header className="App-header">
        {props.user ? (
          <p>Hello, {props.user.displayName}</p>
        ) : (
          <p>Please sign in.</p>
        )}
        {props.user ? (
          <button onClick={props.signOut}>Sign out</button>
        ) : (
          <button onClick={props.signInWithGoogle}>Sign in with Google</button>
        )}
      </header>
    </div>
  );
}
