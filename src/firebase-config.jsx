import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdSg0gINLH3fhB4JTkXCRfxwu2BnzlZpw",
  authDomain: "upraisertech-76da9.firebaseapp.com",
  projectId: "upraisertech-76da9",
  storageBucket: "upraisertech-76da9.appspot.com",
  messagingSenderId: "789472579651",
  appId: "1:789472579651:web:c9d0904a6dcf42f61b44f6",
  measurementId: "G-N77S9FBZN9"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);
  export const firebase =getAuth(app);
export const provider = new GoogleAuthProvider();
