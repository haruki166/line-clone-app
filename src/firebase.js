import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCu8kyq71sdyh8Vjd-WXIgc8hZuv3NjFo8",
  authDomain: "line-clone-app-47225.firebaseapp.com",
  projectId: "line-clone-app-47225",
  storageBucket: "line-clone-app-47225.appspot.com",
  messagingSenderId: "841108651223",
  appId: "1:841108651223:web:7803026cc2172e035dc492",
  measurementId: "G-6KKF80PFD9",
});

const db = firebaseApp.firestore(); //データベース。保存する場所

const auth = firebase.auth(); //認証の情報。どのユーザーがログインしているか。

export { db, auth };
