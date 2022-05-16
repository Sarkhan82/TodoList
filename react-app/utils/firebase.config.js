import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "todolist-872cf.firebaseapp.com",
  projectId: "todolist-872cf",
  storageBucket: "todolist-872cf.appspot.com",
  messagingSenderId: "168667606198",
  appId: "1:168667606198:web:beee33f252e7b830068a17",
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
