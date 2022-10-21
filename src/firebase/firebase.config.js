// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVL769c61GJK0xl4V55scAMuRCF5gVK2Q",
  authDomain: "dragon-news-338ea.firebaseapp.com",
  projectId: "dragon-news-338ea",
  storageBucket: "dragon-news-338ea.appspot.com",
  messagingSenderId: "625467830163",
  appId: "1:625467830163:web:deea2ed8f393922dc5c266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;