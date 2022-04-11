// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXWY30MPp6rBNu_wmIuelQTeptt8cZVUQ",
  authDomain: "genius-car-services-c0f67.firebaseapp.com",
  projectId: "genius-car-services-c0f67",
  storageBucket: "genius-car-services-c0f67.appspot.com",
  messagingSenderId: "1083960596635",
  appId: "1:1083960596635:web:1e6e3630c95ffd12b90e3e",
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firbaseApp);
export default auth;
