import { Button } from "@mui/material";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const SignIn = () => {
    
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }; //googleでログインする機能！！！

  return (
    <div>
      <Button onClick={signInWithGoogle}>Googleでログイン</Button>
    </div>
  );
};

export default SignIn;
