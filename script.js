const products = [
  { id: 1, name: "Yoga Belt 11 ft", price: 249, category: "Belts", image: "product-01.jpg" },
  { id: 2, name: "Yoga Cork Block", price: 649, category: "Blocks", image: "product-02.jpg" },
  { id: 3, name: "Cork Rubber Mat", price: 3199, category: "Mats", image: "product-03.jpg" },
  { id: 4, name: "Yoga Eye Pillow", price: 249, category: "Accessories", image: "product-04.jpg" },
  { id: 5, name: "Cork Mat 5 mm Thick", price: 2799, category: "Mats", image: "product-05.jpg" },
  { id: 6, name: "Meditation Cushion", price: 649, category: "Bolsters", image: "product-06.jpg" },
  { id: 7, name: "Yoga Foam Roller", price: 499, category: "Accessories", image: "product-07.jpg" },
  { id: 8, name: "Combo Kit", price: 1599, category: "Combo Kits", image: "product-08.jpg" },
  { id: 9, name: "Cotton Yoga Mat 6 mm Thick", price: 849, category: "Mats", image: "product-09.jpg" },
  { id: 10, name: "Cotton Yoga Belt 9 ft", price: 199, category: "Belts", image: "product-10.jpg" },
  { id: 11, name: "Cotton Yoga Blanket", price: 899, category: "Accessories", image: "product-11.jpg" },
  { id: 12, name: "TPE Yoga Mat", price: 699, category: "Mats", image: "product-12.jpg" },
  { id: 13, name: "Cork Yoga Wheel", price: 1799, category: "Accessories", image: "product-13.jpg" },
  { id: 14, name: "Yoga Chair", price: 1199, category: "Accessories", image: "product-14.jpg" },
  { id: 15, name: "Yoga Rope Hook and Bolt", price: 349, category: "Ropes", image: "product-15.jpg" },
  { id: 16, name: "Combo Kit 4", price: 2799, category: "Combo Kits", image: "product-16.jpg" },
  { id: 17, name: "Ice Bath Tube", price: 4499, category: "Accessories", image: "product-17.jpg" },
  { id: 18, name: "Yoga Pelvic Swing", price: 2799, category: "Ropes", image: "product-18.jpg" },
  { id: 19, name: "Cotton Yoga Rope", price: 849, category: "Ropes", image: "product-19.jpg" },
  { id: 20, name: "Cork Travel Mat", price: 2199, category: "Mats", image: "product-20.jpg" },
  { id: 21, name: "Buckwheat Bolster", price: 1499, category: "Bolsters", image: "product-21.jpg" },
  { id: 22, name: "Sai Combo Kit 3", price: 2199, category: "Combo Kits", image: "product-22.jpg" },
  { id: 23, name: "Trataka Stand", price: 449, category: "Accessories", image: "product-23.jpg" },
  { id: 24, name: "Foam Block", price: 249, category: "Blocks", image: "product-24.jpg" },
  { id: 25, name: "Sand Bag", price: 449, category: "Accessories", image: "product-25.jpg" },
  { id: 26, name: "Sai Combo Kit 2", price: 1799, category: "Combo Kits", image: "product-26.jpg" },
  { id: 27, name: "Adjustable Trataka Stand", price: 649, category: "Accessories", image: "product-27.jpg" },
  { id: 28, name: "Cotton Yoga Belt", price: 179, category: "Belts", image: "product-28.jpg" },
  { id: 29, name: "Cork Yoga Block", price: 649, category: "Blocks", image: "product-29.jpg" },
  { id: 30, name: "Ceramic Neti Pot", price: 449, category: "Accessories", image: "product-30.jpg" },
  { id: 31, name: "Yoga Stick", price: 349, category: "Accessories", image: "product-31.jpg" },
  { id: 32, name: "Cotton Bolster", price: 1199, category: "Bolsters", image: "product-32.jpg" }
];

const cart = {};

const $ = id => document.getElementById(id);
const money = n => "₹" + n.toLocaleString("en-IN");

let activeCategory = "All";

// FIX: Product photos are stored directly inside images/
function imagePath(product) {
  return new URL(
    "images/" + product.image,
    document.baseURI
  ).href;
}

function renderCategories() {
  const holder = $("categoryFilters");
  if (!holder) return;

  const categories = [
    "All",
    ...new Set(products.map(product => product.category))
  ];

  holder.innerHTML = categories.map(category => `
    <button
      type="button"
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

  const query = ($("productSearch")?.value || "")
    .trim()
    .toLowerCase();

  let filtered = products.filter(product =>
    product.name.toLowerCase().includes(query) &&
    (
      activeCategory === "All" ||
      product.category === activeCategory
    )
  );

  const sort = $("sortProducts")?.value || "default";

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (sort === "az") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${imagePath(product)}"
          alt="${product.name}"
          loading="lazy">

        <div class="image-error hidden">Photo unavailable</div>
      </div>

      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-price">${money(product.price)}</p>

        <button
          class="btn btn-primary full-width"
          type="button"
          data-add="${product.id}">
          Add to Cart
        </button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".product-image").forEach(img => {
    img.addEventListener("error", () => {
      img.classList.add("hidden");

      const error = img.parentElement.querySelector(".image-error");
      if (error) error.classList.remove("hidden");
    });

    img.addEventListener("load", () => {
      img.classList.remove("hidden");

      const error = img.parentElement.querySelector(".image-error");
      if (error) error.classList.add("hidden");
    });
  });

  const noResults = $("noResults");

  if (noResults) {
    noResults.classList.toggle("hidden", filtered.length > 0);
  }

  grid.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.add));
    });
  });
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
  showToast("Product added to cart");
}

function changeQuantity(id, amount) {
  cart[id] = (cart[id] || 0) + amount;

  if (cart[id] <= 0) {
    delete cart[id];
  }

  renderCart();
}

function renderCart() {
  const items = products.filter(product => cart[product.id]);

  const count = items.reduce(
    (sum, product) => sum + cart[product.id],
    0
  );

  const subtotal = items.reduce(
    (sum, product) => sum + product.price * cart[product.id],
    0
  );

  ["navCartCount", "topCartCount"].forEach(id => {
    if ($(id)) {
      $(id).textContent = count;
    }
  });

  // FIX: Display the actual cart item count
  if ($("drawerCartCount")) {
    $("drawerCartCount").textContent = `(${count})`;
  }

  if ($("cartSubtotal")) {
    $("cartSubtotal").textContent = money(subtotal);
  }

  if ($("cartEmpty")) {
    $("cartEmpty").style.display = count ? "none" : "block";
  }

  if ($("cartSummary")) {
    $("cartSummary").style.display = count ? "block" : "none";
  }

  if ($("cartItems")) {
    $("cartItems").innerHTML = items.map(product => `
      <div class="cart-item">
        <img
          src="${imagePath(product)}"
          alt="${product.name}">

        <div class="cart-item-info">
          <h3>${product.name}</h3>
          <p>${money(product.price)} each</p>

          <div class="quantity-controls">
            <button
              type="button"
              data-change="${product.id}"
              data-amount="-1">−</button>

            <span>${cart[product.id]}</span>

            <button
              type="button"
              data-change="${product.id}"
              data-amount="1">+</button>
          </div>
        </div>

        <strong>
          ${money(product.price * cart[product.id])}
        </strong>
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

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
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
    (sum, product) => sum + product.price * cart[product.id],
    0
  );

  // FIX: Use template literals so product details are inserted
  const lines = items.map(product =>
    `${product.name} x ${cart[product.id]} = ${money(
      product.price * cart[product.id]
    )}`
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

  const whatsappURL =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts();
  renderCart();

  if ($("year")) {
    $("year").textContent = new Date().getFullYear();
  }

  $("productSearch")?.addEventListener("input", renderProducts);
  $("sortProducts")?.addEventListener("change", renderProducts);

  ["openCartNav", "openCartTop"].forEach(id => {
    $(id)?.addEventListener("click", openCart);
  });

  $("closeCart")?.addEventListener("click", closeCart);
  $("cartOverlay")?.addEventListener("click", closeCart);
  $("continueShopping")?.addEventListener("click", closeCart);

  $("checkoutWhatsApp")?.addEventListener("click", () => {
    checkoutWhatsApp("918169767623");
  });

  $("whatsappSecond")?.addEventListener("click", event => {
    event.preventDefault();
    checkoutWhatsApp("919920706386");
  });

  $("menuToggle")?.addEventListener("click", () => {
    const nav = $("mainNav");
    if (!nav) return;

    const isOpen = nav.classList.toggle("open");

    $("menuToggle").setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });
});
