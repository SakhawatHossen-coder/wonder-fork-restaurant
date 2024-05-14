// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDERID,
  appId: import.meta.env.VITE_APPID,
  // apiKey: "AIzaSyBf5_18czGE_b8RALtLKf_P46bTOKsr4SY",

  // authDomain: "restaurant-app-b72b2.firebaseapp.com",

  // projectId: "restaurant-app-b72b2",

  // storageBucket: "restaurant-app-b72b2.appspot.com",

  // messagingSenderId: "356717875629",

  // appId: "1:356717875629:web:0a327bd81fdf8024bb5124",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
