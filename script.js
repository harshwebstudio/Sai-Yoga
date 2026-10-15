
const products = [
  { id: 1, name: "Cotton Bolster", price: 1199, category: "Bolsters" },
  { id: 2, name: "Yoga Stick", price: 349, category: "Accessories" },
  { id: 3, name: "Ceramic Neti Pot", price: 449, category: "Accessories" },
  { id: 4, name: "Cork Yoga Block", price: 649, category: "Blocks" },
  { id: 5, name: "Cotton Yoga Belt", price: 179, category: "Belts" },
  { id: 6, name: "Adjustable Trataka Stand", price: 649, category: "Accessories" },
  { id: 7, name: "Sai Combo Kit 2", price: 1799, category: "Combo Kits" },
  { id: 8, name: "Sand Bag", price: 449, category: "Accessories" },
  { id: 9, name: "Foam Block", price: 249, category: "Blocks" },
  { id: 10, name: "Trataka Stand", price: 449, category: "Accessories" },
  { id: 11, name: "Sai Combo Kit 3", price: 2199, category: "Combo Kits" },
  { id: 12, name: "Buckwheat Bolster", price: 1499, category: "Bolsters" },
  { id: 13, name: "Cork Travel Mat", price: 2199, category: "Mats" },
  { id: 14, name: "Cotton Yoga Rope", price: 849, category: "Ropes" },
  { id: 15, name: "Yoga Pelvic Swing", price: 2799, category: "Ropes" },
  { id: 16, name: "Ice Bath Tube", price: 4499, category: "Accessories" },

  
  { id: 17, name: "Combo Kit 4", price: 2799, category: "Combo Kits" },
  { id: 18, name: "Yoga Rope Hook and Bolt", price: 349, category: "Ropes" },
  { id: 19, name: "Yoga Chair", price: 1199, category: "Accessories" },
  { id: 20, name: "Cork Yoga Wheel", price: 1799, category: "Accessories" },
  { id: 21, name: "TPE Yoga Mat", price: 699, category: "Mats" },
  { id: 22, name: "Cotton Yoga Blanket", price: 899, category: "Accessories" },
  { id: 23, name: "Cotton Yoga Belt 9 ft", price: 199, category: "Belts" },
  { id: 24, name: "Cotton Yoga Mat 6 mm Thick", price: 849, category: "Mats" },
  { id: 25, name: "Combo Kit", price: 1599, category: "Combo Kits" },
  { id: 26, name: "Yoga Foam Roller", price: 499, category: "Accessories" },
  { id: 27, name: "Meditation Cushion", price: 649, category: "Bolsters" },
  { id: 28, name: "Cork Mat 5 mm Thick", price: 2799, category: "Mats" },
  { id: 29, name: "Yoga Eye Pillow", price: 249, category: "Accessories" },
  { id: 30, name: "Cork Rubber Mat", price: 3199, category: "Mats" },
  { id: 31, name: "Yoga Cork Block", price: 649, category: "Blocks" },
  { id: 32, name: "Yoga Belt 11 ft", price: 249, category: "Belts" }
];

const cart = {};

const $ = (id) => document.getElementById(id);
const money = (n) => "₹" + n.toLocaleString("en-IN");

let activeCategory = "All";

function imagePath(product) {
  return "product/product-" +
    String(product.id).padStart(2, "0") + ".jpg";
}

function renderCategories() {
  const holder = $("categoryFilters");
  if (!holder) return;

  const categories = ["All", ...new Set(products.map(p => p.category))];

  holder.innerHTML = categories.map(category => `
    <button type="button"
      class="category-pill ${activeCategory === category ? "active" : ""}"
      data-category="${category}">
      ${category}
    </button>
  `).join("");

  holder.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderCategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const grid = $("productGrid");
  if (!grid) return;

  const query = ($("productSearch")?.value || "").toLowerCase();

  let filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(query);
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const sort = $("sortProducts")?.value || "default";

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "az") filtered.sort((a, b) => a.name.localeCompare(b.name));

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${imagePath(product)}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22240%22 viewBox=%220 0 300 240%22%3E%3Crect width=%22300%22 height=%22240%22 fill=%22%23e7eee7%22/%3E%3Ctext x=%22150%22 y=%22120%22 text-anchor=%22middle%22 fill=%22%23174b3e%22 font-size=%2216%22%3EProduct image%3C/text%3E%3C/svg%3E';">
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-price">${money(product.price)}</p>
        <button class="btn btn-primary full-width" type="button"
          data-add="${product.id}">Add to Cart</button>
      </div>
    </article>
  `).join("");

  const noResults = $("noResults");
  if (noResults) noResults.classList.toggle("hidden", filtered.length > 0);

  grid.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.add)));
  });
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  showToast("Product added to cart");
}

function changeQuantity(id, amount) {
  cart[id] = (cart[id] || 0) + amount;
  if (cart[id] <= 0) delete cart[id];
  renderCart();
}

function renderCart() {
  const items = products.filter(product => cart[product.id]);
  const count = items.reduce((sum, product) => sum + cart[product.id], 0);
  const subtotal = items.reduce(
    (sum, product) => sum + product.price * cart[product.id], 0
  );

  ["navCartCount", "topCartCount"].forEach(id => {
    if ($(id)) $(id).textContent = count;
  });

  if ($("drawerCartCount")) $("drawerCartCount").textContent = `(${count})`;
  if ($("cartSubtotal")) $("cartSubtotal").textContent = money(subtotal);

  if ($("cartEmpty")) $("cartEmpty").style.display = count ? "none" : "block";
  if ($("cartSummary")) $("cartSummary").style.display = count ? "block" : "none";

  if ($("cartItems")) {
    $("cartItems").innerHTML = items.map(product => `
      <div class="cart-item">
        <img src="${imagePath(product)}" alt="${product.name}"
          onerror="this.style.visibility='hidden'">
        <div class="cart-item-info">
          <h3>${product.name}</h3>
          <p>${money(product.price)} each</p>
          <div class="quantity-controls">
            <button type="button" data-change="${product.id}" data-amount="-1"
              aria-label="Decrease quantity">−</button>
            <span>${cart[product.id]}</span>
            <button type="button" data-change="${product.id}" data-amount="1"
              aria-label="Increase quantity">+</button>
          </div>
        </div>
        <strong>${money(product.price * cart[product.id])}</strong>
      </div>
    `).join("");

    $("cartItems").querySelectorAll("[data-change]").forEach(button => {
      button.addEventListener("click", () => {
        changeQuantity(
          Number(button.dataset.change),
          Number(button.dataset.amount)
        );
      });
    });
  }
}

function openCart() {
  $("cartDrawer")?.classList.add("open");
  $("cartOverlay")?.classList.add("open");
  $("cartDrawer")?.setAttribute("aria-hidden", "false");
}

function closeCart() {
  $("cartDrawer")?.classList.remove("open");
  $("cartOverlay")?.classList.remove("open");
  $("cartDrawer")?.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function checkoutWhatsApp(number) {
  const items = products.filter(product => cart[product.id]);
  if (!items.length) {
    showToast("Please add a product first");
    return;
  }

  const name = $("customerName")?.value.trim() || "Not provided";
  const notes = $("orderNotes")?.value.trim() || "None";
  const subtotal = items.reduce(
    (sum, product) => sum + product.price * cart[product.id], 0
  );

  const lines = items.map(product =>
    `${product.name} x ${cart[product.id]} = ${money(product.price * cart[product.id])}`
  );

  const message = [
    "Hello Sai Yoga Shop, I would like to enquire about this order:",
    "",
    ...lines,
    "",
    `Estimated subtotal: ${money(subtotal)}`,
    `Customer name: ${name}`,
    `Notes / delivery city: ${notes}`,
    "",
    "Please confirm stock, final prices, shipping and payment details."
  ].join("\n");

  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts();
  renderCart();

  if ($("year")) $("year").textContent = new Date().getFullYear();

  $("productSearch")?.addEventListener("input", renderProducts);
  $("sortProducts")?.addEventListener("change", renderProducts);

  ["openCartNav", "openCartTop"].forEach(id =>
    $(id)?.addEventListener("click", openCart)
  );

  $("closeCart")?.addEventListener("click", closeCart);
  $("cartOverlay")?.addEventListener("click", closeCart);
  $("continueShopping")?.addEventListener("click", closeCart);

  $("checkoutWhatsApp")?.addEventListener("click", () =>
    checkoutWhatsApp("918169767623")
  );

  $("whatsappSecond")?.addEventListener("click", event => {
    event.preventDefault();
    checkoutWhatsApp("919920706386");
  });

  $("menuToggle")?.addEventListener("click", () => {
    const nav = $("mainNav");
    if (!nav) return;
    const isOpen = nav.classList.toggle("open");
    $("menuToggle").setAttribute("aria-expanded", String(isOpen));
  });
});
  
