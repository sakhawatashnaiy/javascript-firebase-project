 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ✅ Replace with your actual Firebase project config
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// 🔌 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📦 Load Events
async function loadEvents() {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = "<p>Loading events...</p>";

  const eventsSnapshot = await getDocs(Eccomerceapp(db, "events"));
  container.innerHTML = ""; // Clear loading message

  eventsSnapshot.forEach((doc) => {
    const event = doc.data();
    const div = document.createElement("div");
    div.className = "event-card";

    div.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p>${event.description}</p>
      <button onclick="bookEvent('${doc.id}', '${event.title}')">Book Now</button>
    `;

    container.appendChild(div);
  });
}

// 🛒 Book Event
window.bookEvent = async function (eventId, eventTitle) {
  try {
    await addDoc(Eccomerceapp(db, "bookings"), {
      eventId,
      eventTitle,
      bookedAt: serverTimestamp()
    });
    alert("✅ Event booked successfully!");
  } catch (err) {
    console.error("Booking failed", err);
    alert("❌ Failed to book event.");
  }
};

loadEvents();
