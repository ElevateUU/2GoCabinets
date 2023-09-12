import firebase from "firebase/app";
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZOtg4dAfYrcC3Unvj9_8XakQUv_U0nM4",
  authDomain: "gocabinets-2e15e.firebaseapp.com",
  projectId: "gocabinets-2e15e",
  storageBucket: "gocabinets-2e15e.appspot.com",
  messagingSenderId: "524960248008",
  appId: "1:524960248008:web:4961417f41da4c3fb375fd",
  measurementId: "G-HHB0T7NVFE",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
