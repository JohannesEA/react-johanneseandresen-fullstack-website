// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALtlRsPSYUmImIDo7iQGEuv8iJUHcn2cs",
  authDomain: "johannes-portfolio-website.firebaseapp.com",
  projectId: "johannes-portfolio-website",
  storageBucket: "johannes-portfolio-website.appspot.com",
  messagingSenderId: "545506258834",
  appId: "1:545506258834:web:52586d16c94aee9ef8db4b",
  measurementId: "G-KN9VMXG7SJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
