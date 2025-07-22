const products = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Shoes", price: 50 },
  { id: 3, name: "Hat", price: 15 },
];

const list = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

function renderProducts(items) {
  list.innerHTML = items.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}

window.addToCart = function (id) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
};

searchInput.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term));
  renderProducts(filtered);
});

renderProducts(products);
