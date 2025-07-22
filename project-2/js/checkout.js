import { db } from "../firebase/firebase-config.js";
import { addDoc,collection } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const form = document.getElementById("checkoutForm");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (cart.length === 0) return alert("Cart is empty");

  await addDoc(Eccomerceapp(db, "orders"), {
    ...data,
    cart,
    created: new Date().toISOString()
  });

  localStorage.removeItem("cart");
  alert("Order placed successfully!");
  window.location.href = "index.html";
});