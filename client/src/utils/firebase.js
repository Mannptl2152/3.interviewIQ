
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-b7f3c.firebaseapp.com",

  projectId: "interviewiq-b7f3c",

  storageBucket: "interviewiq-b7f3c.firebasestorage.app",

  messagingSenderId: "157341204552",

  appId: "1:157341204552:web:630d9f1762cecff6a5187d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }