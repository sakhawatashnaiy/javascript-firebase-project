const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
const cartDiv = document.getElementById("cartItems");

if (cartItems.length === 0) {
  cartDiv.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cartDiv.innerHTML = cartItems.map((item, i) => `
    <div class="cart-item">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
    </div>
  `).join("");
}

document.getElementById("checkoutBtn").onclick = () => {
  window.location.href = "checkout.html";
};