import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp8SFy-cYqcsSNWR6QkFZtA2NTa9coGRs",
  authDomain: "minieccommerce.firebaseapp.com",
  projectId: "minieccommerce",
  storageBucket: "minieccommerce.firebasestorage.app",
  messagingSenderId: "1066955693535",
  appId: "1:1066955693535:web:093e1e1d27ef4944ec386a",
  measurementId: "G-R60KJTQV44"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };