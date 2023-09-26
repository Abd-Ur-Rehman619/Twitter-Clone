// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8_N9K3Q23EvGenh_FoD3L6KJMwVzckB4",
  authDomain: "twitter-clone-aad12.firebaseapp.com",
  projectId: "twitter-clone-aad12",
  storageBucket: "twitter-clone-aad12.appspot.com",
  messagingSenderId: "193638580853",
  appId: "1:193638580853:web:1a9bd15a73e564bb06ae3c",
  measurementId: "G-Z3XT6T1BNZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStore = getAnalytics(app);
export const storage = getStorage(app);

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyA8_N9K3Q23EvGenh_FoD3L6KJMwVzckB4",
//   authDomain: "twitter-clone-aad12.firebaseapp.com",
//   projectId: "twitter-clone-aad12",
//   storageBucket: "twitter-clone-aad12.appspot.com",
//   messagingSenderId: "193638580853",
//   appId: "1:193638580853:web:1a9bd15a73e564bb06ae3c",
//   measurementId: "G-Z3XT6T1BNZ",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebaseApp.storage();

// export { auth, db, storage, firebaseApp };
