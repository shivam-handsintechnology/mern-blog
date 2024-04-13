// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD4E3qkP9WGxQznYxWB6f52G_1PPnaQ95U",
  authDomain: "securityforhandsin.firebaseapp.com",
  databaseURL: "https://securityforhandsin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "securityforhandsin",
  storageBucket: "securityforhandsin.appspot.com",
  messagingSenderId: "200245150083",
  appId: "1:200245150083:web:d27082352a5efa5f4f76b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
