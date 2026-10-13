
/* =========================================
   SAI YOGA SHOP — PART 1
   Products, Search, Cart and Rendering
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* OWNER WHATSAPP NUMBER */
  const OWNER_WHATSAPP = "91XXXXXXXXXX";

  /* PRODUCT CATALOGUE
     Prices are sample prices. Confirm them
     with the shop owner before publishing.
  */
  

const products = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    category: "Yoga Mats",
    price: 699,
    description: "Comfortable, non-slip yoga mat.",
    image: "images/01-premium-yoga-mat.jpg"
  },
  {
    id: 2,
    name: "Extra Thick Yoga Mat",
    category: "Yoga Mats",
    price: 999,
    description: "Extra cushioning for yoga practice.",
    image: "images/02-extra-thick-yoga-mat.jpg"
  },
  {
    id: 3,
    name: "Yoga Block",
    category: "Yoga Accessories",
    price: 299,
    description: "Support and balance for yoga poses.",
    image: "images/03-yoga-block.jpg"
  },
  {
    id: 4,
    name: "Yoga Strap",
    category: "Yoga Accessories",
    price: 199,
    description: "Stretching and flexibility accessory.",
    image: "images/04-yoga-strap.jpg"
  },
  {
    id: 5,
    name: "Meditation Cushion",
    category: "Meditation",
    price: 799,
    description: "Comfortable cushion for meditation.",
    image: "images/05-meditation-cushion.jpg"
  },
  {
    id: 6,
    name: "Yoga Bolster",
    category: "Yoga Accessories",
    price: 1199,
    description: "Support cushion for restorative yoga.",
    image: "images/06-yoga-bolster.jpg"
  },
  {
    id: 7,
    name: "Resistance Bands Set",
    category: "Fitness",
    price: 499,
    description: "A versatile set for mobility exercises.",
    image: "images/07-resistance-bands-set.jpg"
  },
  {
    id: 8,
    name: "Meditation Eye Pillow",
    category: "Meditation",
    price: 249,
    description: "Soft eye pillow for relaxation.",
    image: "images/08-meditation-eye-pillow.jpg"
  },
  {
    id: 9,
    name: "Yoga Mat Bag",
    category: "Yoga Accessories",
    price: 349,
    description: "Carry your yoga mat conveniently.",
    image: "images/09-yoga-mat-bag.jpg"
  },
  {
    id: 10,
    name: "Cork Yoga Block",
    category: "Yoga Accessories",
    price: 449,
    description: "Firm cork support for yoga practice.",
    image: "images/10-cork-yoga-block.jpg"
  },
  {
    id: 11,
    name: "Pilates Ring",
    category: "Fitness",
    price: 599,
    description: "Resistance ring for Pilates workouts.",
    image: "images/11-pilates-ring.jpg"
  },
  {
    id: 12,
    name: "Meditation Mat",
    category: "Meditation",
    price: 899,
    description: "Comfortable mat for meditation sessions.",
    image: "images/12-meditation-mat.jpg"
  }
];
     

  const cart = [];

  const money = value =>
    "₹" + value.toLocaleString("en-IN");

  const $ = selector => document.querySelector(selector);

  /* CREATE PRODUCT SECTION IF MISSING */
  let productSection = $(
    "#products, #shop, .shop-section"
  );

  if (!productSection) {
    productSection = document.createElement("section");
    productSection.id = "products";
    productSection.className = "section";

    const main = $("main") || document.body;
    main.appendChild(productSection);
  }

  productSection.innerHTML = `
    <div class="container">
      <h2>Our Yoga Products</h2>
      <p>Explore our yoga and meditation collection.</p>

      <input
        id="shopSearch"
        type="search"
        placeholder="Search products..."
        aria-label="Search products"
      >

      <div id="shopCategories"></div>
      <div id="shopProductGrid"
           class="product-grid"></div>

      <h2>Your Shopping Cart</h2>
      <div id="shopCartItems"></div>

      <p>
        Total:
        <strong id="shopCartTotal">₹0</strong>
      </p>

      <button id="shopCheckout" type="button">
        Send Order to WhatsApp
      </button>
    </div>
  `;

  const grid = $("#shopProductGrid");
  const categories = $("#shopCategories");
  const search = $("#shopSearch");
  const cartItems = $("#shopCartItems");
  const cartTotal = $("#shopCartTotal");

  let activeCategory = "All";

  /* CATEGORY FILTERS */
  const categoryNames = [
    "All",
    ...new Set(products.map(product => product.category))
  ];

  categories.innerHTML = categoryNames.map(category => `
    <button
      type="button"
      class="shop-category-button"
      data-category="${category}"
    >${category}</button>
  `).join("");

  /* PRODUCT LIST */
  function renderProducts() {
    const term = search.value.trim().toLowerCase();

    const filtered = products.filter(product => {
      const matchesSearch =
        (product.name + " " + product.description)
          .toLowerCase().includes(term);

      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });

    grid.innerHTML = filtered.length
      ? filtered.map(product => `
        <article class="product-card">
          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >

          <div class="product-info">
            <small>${product.category}</small>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong class="product-price">
              ${money(product.price)}
            </strong>

            <button
              type="button"
              data-add="${product.id}"
            >Add to Cart</button>

            <button
              type="button"
              data-inquire="${product.id}"
            >Enquire on WhatsApp</button>
          </div>
        </article>
      `).join("")
      : "<p>No products found.</p>";
  }

  categories.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;
    renderProducts();
  });

  search.addEventListener("input", renderProducts);

  /* CART DISPLAY */
  function renderCart() {
    cartItems.innerHTML = cart.length
      ? cart.map(item => `
        <div class="cart-item">
          <span>${item.name}</span>
          <span>${money(item.price)} × ${item.quantity}</span>

          <button
            type="button"
            data-minus="${item.id}"
          >−</button>

          <button
            type="button"
            data-plus="${item.id}"
          >+</button>

          <button
            type="button"
            data-remove="${item.id}"
          >Remove</button>
        </div>
      `).join("")
      : "<p>Your cart is empty.</p>";

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    cartTotal.textContent = money(total);
  }

  grid.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add]");
    const inquireButton = event.target.closest("[data-inquire]");

    if (addButton) {
      const product = products.find(
        item => item.id === Number(addButton.dataset.add)
      );

      if (!product) return;

      const existing = cart.find(
        item => item.id === product.id
      );

      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      renderCart();
      addButton.textContent = "Added ✓";

      setTimeout(() => {
        addButton.textContent = "Add to Cart";
      }, 1000);
    }

    if (inquireButton) {
      const product = products.find(
        item => item.id === Number(inquireButton.dataset.inquire)
      );

      if (product) {
        sendWhatsApp(
          "Hello SAI YOGA SHOP, I want to enquire about:\n" +
          product.name + "\nPrice: " + money(product.price)
        );
      }
    }
  });

  cartItems.addEventListener("click", event => {
    const button = event.target.closest(
      "[data-minus], [data-plus], [data-remove]"
    );

    if (!button) return;

    const id = Number(
      button.dataset.minus ||
      button.dataset.plus ||
      button.dataset.remove
    );

    const index = cart.findIndex(item => item.id === id);

    if (index < 0) return;

    if (button.hasAttribute("data-plus")) {
      cart[index].quantity++;
    } else if (button.hasAttribute("data-minus")) {
      cart[index].quantity--;

      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }
    } else {
      cart.splice(index, 1);
    }

    renderCart();
  });

  /* WHATSAPP HELPER */
  function sendWhatsApp(message) {
    const number = OWNER_WHATSAPP.replace(/\D/g, "");

    if (!number || number.includes("XXXXXXXXXX")) {
      alert("Please enter the shop owner's WhatsApp number in script.js.");
      return;
    }

    window.open(
      "https://wa.me/" + number +
      "?text=" + encodeURIComponent(message),
      "_blank"
    );
  }

  renderProducts();
  renderCart();

  /* PART 2 CONTINUES BELOW */

  /* =========================================
     SAI YOGA SHOP — PART 2
     Checkout and Inquiry Forms
  ========================================= */

  /* CART ORDER */
  $("#shopCheckout").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Please add at least one product to your cart.");
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    let message = "SAI YOGA SHOP — NEW ORDER\n\n";

    cart.forEach(item => {
      message +=
        item.name + "\n" +
        "Quantity: " + item.quantity + "\n" +
        "Price: " + money(item.price) + "\n" +
        "Subtotal: " +
        money(item.price * item.quantity) + "\n\n";
    });

    message +=
      "Estimated Total: " + money(total) + "\n\n" +
      "Please confirm availability and send payment instructions.";

    sendWhatsApp(message);
  });

  /* CONNECT EXISTING INQUIRY FORMS */
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", event => {
      const fields = Array.from(
        form.querySelectorAll("input, select, textarea")
      ).filter(field => {
        return field.name &&
          field.type !== "submit" &&
          field.type !== "button" &&
          field.type !== "hidden";
      });

      if (fields.length === 0) return;

      event.preventDefault();

      const lines = [];

      fields.forEach(field => {
        if (
          (field.type === "checkbox" ||
           field.type === "radio") &&
          !field.checked
        ) {
          return;
        }

        const value = field.value.trim();

        if (value) {
          const label = form.querySelector(
            'label[for="' + field.id + '"]'
          );

          const fieldName =
            label?.textContent.trim() ||
            field.name ||
            field.placeholder ||
            "Details";

          lines.push(fieldName + ": " + value);
        }
      });

      const message =
        "SAI YOGA SHOP — NEW INQUIRY\n\n" +
        lines.join("\n") +
        "\n\nPlease contact me regarding this inquiry.";

      sendWhatsApp(message);
    });
  });

  /* END OF SCRIPT */
});
   
                          
