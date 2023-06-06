
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBA0YBVsgPb5HMRtU8znxMYRDaU5WpI9ng",
  authDomain: "house-marketplace-app-d8d98.firebaseapp.com",
  projectId: "house-marketplace-app-d8d98",
  storageBucket: "house-marketplace-app-d8d98.appspot.com",
  messagingSenderId: "61287358051",
  appId: "1:61287358051:web:374a56e38350cd84976256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);