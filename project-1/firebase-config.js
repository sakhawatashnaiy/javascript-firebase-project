import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKqYLKWSQW2dbuBSwKIwu_eDzq9vGhTLI",
  authDomain: "aichatbot-a303c.firebaseapp.com",
  projectId: "aichatbot-a303c",
  storageBucket: "aichatbot-a303c.firebasestorage.app",
  messagingSenderId: "176892817210",
  appId: "1:176892817210:web:d3f6741e3931ae12e52a03",
  measurementId: "G-EGTCGCS36E"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export { db, collection, addDoc };