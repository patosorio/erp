// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF3fzCSyvOtbU4xlxFBHcGssXAJiQ3OPk",
  authDomain: "erp-marqfoix.firebaseapp.com",
  projectId: "erp-marqfoix",
  storageBucket: "erp-marqfoix.appspot.com",
  messagingSenderId: "970131269327",
  appId: "1:970131269327:web:f2c3cc75aa1d6fbeff39ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };