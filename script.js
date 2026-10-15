
/* =========================================================
   SAI YOGA SHOP — COMPLETE WEBSITE JAVASCRIPT
   PART 1/3: SETTINGS, 32 PRODUCTS, HELPERS, NAVIGATION
========================================================= */

"use strict";

/* OWNER WHATSAPP */
const WHATSAPP_NUMBER = "918169767623";
const CART_STORAGE_KEY = "saiYogaShopCart";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80";

/*
  Add actual product images in:
  images/products/product-01.jpg
  ...
  images/products/product-32.jpg
*/

const products = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    category: "Yoga Mats",
    price: 899,
    description: "A comfortable non-slip mat for daily yoga and stretching.",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Eco-Friendly Yoga Mat",
    category: "Yoga Mats",
    price: 1299,
    description: "A versatile yoga mat for a mindful everyday practice.",
    tag: "Eco Choice"
  },
  {
    id: 3,
    name: "Travel Yoga Mat",
    category: "Yoga Mats",
    price: 749,
    description: "A lightweight mat for home, studio and travel sessions.",
    tag: "Lightweight"
  },
  {
    id: 4,
    name: "Extra Grip Yoga Mat",
    category: "Yoga Mats",
    price: 1499,
    description: "A supportive mat designed for stability during practice.",
    tag: "Premium"
  },
  {
    id: 5,
    name: "TPE Yoga Mat",
    category: "Yoga Mats",
    price: 1199,
    description: "A practical yoga mat for regular home workouts.",
    tag: "Popular"
  },
  {
    id: 6,
    name: "Cork Yoga Mat",
    category: "Yoga Mats",
    price: 1899,
    description: "A cork-style mat option for a natural-looking practice space.",
    tag: "Natural Style"
  },

  {
    id: 7,
    name: "Yoga Block Set",
    category: "Accessories",
    price: 499,
    description: "Yoga blocks to help support alignment and selected poses.",
    tag: "Essential"
  },
  {
    id: 8,
    name: "Yoga Stretching Belt",
    category: "Accessories",
    price: 299,
    description: "A useful strap for stretching and supported yoga movements.",
    tag: "Everyday"
  },
  {
    id: 9,
    name: "Yoga Mat Carry Bag",
    category: "Accessories",
    price: 399,
    description: "Carry your yoga mat conveniently between home and studio.",
    tag: "Convenient"
  },
  {
    id: 10,
    name: "Yoga Wheel",
    category: "Fitness",
    price: 899,
    description: "A yoga accessory for supported stretching and balance practice.",
    tag: "Practice"
  },
  {
    id: 11,
    name: "Yoga Bolster",
    category: "Accessories",
    price: 1299,
    description: "A supportive bolster for restorative yoga and relaxation.",
    tag: "Comfort"
  },
  {
    id: 12,
    name: "Meditation Cushion",
    category: "Meditation",
    price: 999,
    description: "A supportive cushion for comfortable seated meditation.",
    tag: "Mindfulness"
  },
  {
    id: 13,
    name: "Meditation Mat",
    category: "Meditation",
    price: 1199,
    description: "Create a dedicated and comfortable meditation space.",
    tag: "Calm Living"
  },
  {
    id: 14,
    name: "Relaxation Eye Pillow",
    category: "Meditation",
    price: 349,
    description: "A soft eye pillow to complement your relaxation routine.",
    tag: "Relax"
  },
  {
    id: 15,
    name: "Mindfulness Journal",
    category: "Meditation",
    price: 299,
    description: "A journal for daily reflections, intentions and gratitude.",
    tag: "Daily Ritual"
  },
  {
    id: 16,
    name: "Meditation Floor Cushion",
    category: "Meditation",
    price: 799,
    description: "A floor cushion for a dedicated meditation corner.",
    tag: "Peaceful Space"
  },

  {
    id: 17,
    name: "Comfort Yoga Leggings",
    category: "Clothing",
    price: 999,
    description: "Comfortable activewear for movement and everyday wear.",
    tag: "Comfort"
  },
  {
    id: 18,
    name: "Yoga Training Top",
    category: "Clothing",
    price: 699,
    description: "A versatile training top for yoga and stretching.",
    tag: "Everyday"
  },
  {
    id: 19,
    name: "Relaxed Fit T-Shirt",
    category: "Clothing",
    price: 549,
    description: "A relaxed T-shirt suitable for warm-ups and casual wear.",
    tag: "Casual"
  },
  {
    id: 20,
    name: "Activewear Shorts",
    category: "Clothing",
    price: 599,
    description: "Lightweight shorts for movement and general fitness.",
    tag: "Active"
  },

  {
    id: 21,
    name: "Foam Roller",
    category: "Fitness",
    price: 699,
    description: "A fitness accessory for mobility and recovery routines.",
    tag: "Recovery"
  },
  {
    id: 22,
    name: "Resistance Bands Set",
    category: "Fitness",
    price: 449,
    description: "A versatile set for mobility and fitness exercises.",
    tag: "Workout"
  },
  {
    id: 23,
    name: "Balance Cushion",
    category: "Fitness",
    price: 799,
    description: "Add variety to suitable balance and stability exercises.",
    tag: "Balance"
  },
  {
    id: 24,
    name: "Exercise Ball",
    category: "Fitness",
    price: 1099,
    description: "A versatile ball for selected mobility and fitness activities.",
    tag: "Fitness"
  },

  {
    id: 25,
    name: "Yoga Rope Set",
    category: "Accessories",
    price: 599,
    description: "Yoga ropes for selected supported stretching practices.",
    tag: "Studio Essential"
  },
  {
    id: 26,
    name: "Yoga Eye Pillow",
    category: "Meditation",
    price: 349,
    description: "A soft accessory for relaxation and quiet moments.",
    tag: "Relaxation"
  },
  {
    id: 27,
    name: "Tratak Meditation Stand",
    category: "Meditation",
    price: 499,
    description: "A meditation accessory for a dedicated practice area.",
    tag: "Meditation"
  },
  {
    id: 28,
    name: "Neti Pot",
    category: "Accessories",
    price: 399,
    description: "A traditional wellness accessory; follow safe-use guidance.",
    tag: "Wellness"
  },
  {
    id: 29,
    name: "Yoga Knee Support Pair",
    category: "Accessories",
    price: 499,
    description: "Padded supports for additional comfort during floor exercises.",
    tag: "Comfort"
  },
  {
    id: 30,
    name: "Cork Yoga Block",
    category: "Accessories",
    price: 399,
    description: "A single cork-style block for support during yoga practice.",
    tag: "Natural Style"
  },
  {
    id: 31,
    name: "Yoga Strap and Block Kit",
    category: "Accessories",
    price: 699,
    description: "A convenient combination of two common yoga accessories.",
    tag: "Value Set"
  },
  {
    id: 32,
    name: "Meditation Starter Kit",
    category: "Meditation",
    price: 1499,
    description: "A sample meditation kit for creating a dedicated quiet space.",
    tag: "Starter Kit"
  }
];

/* Add a local image path to every product. */
products.forEach(function (product) {
  const number = String(product.id).padStart(2, "0");
  product.image = "images/products/product-" + number + ".jpg";
});

/* -------------------- STATE -------------------- */

let cart = {};
let activeCategory = "All Products";
let searchTerm = "";

/* Restore cart safely. */
try {
  const savedCart = localStorage.getItem(CART_STORAGE_KEY);

  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);

    if (parsedCart && typeof parsedCart === "object" &&
        !Array.isArray(parsedCart)) {
      cart = parsedCart;
    }
  }
} catch (error) {
  cart = {};
}

/* -------------------- HELPERS -------------------- */

function formatPrice(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function getProduct(id) {
  return products.find(function (product) {
    return product.id === Number(id);
  });
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("Cart could not be saved in this browser.");
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function openWhatsApp(message) {
  const defaultMessage =
    "Hello Sai Yoga Shop! I would like to know more about your products.";

  const text = encodeURIComponent(message || defaultMessage);
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;

  const openedWindow = window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

  if (!openedWindow) {
    window.location.href = url;
  }
}

/* -------------------- TOAST -------------------- */

function showToast(message) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }

  toast.textContent = message;

  toast.style.cssText =
    "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);" +
    "z-index:15000;background:#244734;color:#fff;padding:13px 20px;" +
    "border-radius:12px;max-width:90%;text-align:center;" +
    "box-shadow:0 8px 28px rgba(0,0,0,.18);";

  clearTimeout(toast.hideTimer);

  toast.hideTimer = setTimeout(function () {
    toast.style.display = "none";
  }, 2800);
}

/* -------------------- NAVIGATION -------------------- */

function showPage(pageName) {
  const pages = {
    home: document.getElementById("homePage"),
    products: document.getElementById("productsPage"),
    contact: document.getElementById("contactPage")
  };

  if (!pages[pageName]) pageName = "home";

  Object.keys(pages).forEach(function (name) {
    if (pages[name]) {
      pages[name].style.display =
        name === pageName ? "block" : "none";

      pages[name].setAttribute(
        "aria-hidden",
        name === pageName ? "false" : "true"
      );
    }
  });

  document.querySelectorAll("[data-page]").forEach(function (link) {
    const active = link.getAttribute("data-page") === pageName;

    link.classList.toggle("active", active);

    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("menuToggle");

  if (nav) nav.classList.remove("open");

  if (toggle) toggle.setAttribute("aria-expanded", "false");

  window.scrollTo({ top: 0, behavior: "auto" });

  if (pageName === "products") renderProducts();

  return false;
}

function setupNavigation() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll("[data-page]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      showPage(link.getAttribute("data-page"));
    });
  });
}

/* -------------------- IMAGE FALLBACK -------------------- */

function setupImageFallbacks(container) {
  if (!container) return;

  container.querySelectorAll("img[data-product-image]").forEach(function (img) {
    img.addEventListener("error", function () {
      if (img.dataset.fallbackUsed === "true") return;

      img.dataset.fallbackUsed = "true";
      img.src = FALLBACK_IMAGE;
    });
  });
}

/* -------------------- PRODUCT CARD -------------------- */

function createProductCard(product) {
  return `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          data-product-image
        >
        <span class="product-tag">${escapeHTML(product.tag)}</span>
      </div>

      <div class="product-info">
        <span class="product-category">
          ${escapeHTML(product.category)}
        </span>

        <h3>${escapeHTML(product.name)}</h3>
        <p>${escapeHTML(product.description)}</p>

        <div class="product-price">${formatPrice(product.price)}</div>

        <div class="product-actions">
          <button type="button" class="btn btn-outline"
            onclick="viewProduct(${product.id})">
            View Product
          </button>

          <button type="button" class="btn btn-primary"
            onclick="addToCart(${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;
}

/* -------------------- PRODUCT DISPLAY -------------------- */

function renderProducts() {
  const grid = document.getElementById("allProducts");
  const emptyState = document.getElementById("emptyProducts");

  if (!grid) return;

  const filtered = products.filter(function (product) {
    const categoryMatches =
      activeCategory === "All Products" ||
      product.category === activeCategory;

    const searchableText = (
      product.name + " " +
      product.category + " " +
      product.description + " " +
      product.tag
    ).toLowerCase();

    return categoryMatches &&
      searchableText.includes(searchTerm.toLowerCase());
  });

  grid.innerHTML = filtered.map(createProductCard).join("");
  setupImageFallbacks(grid);

  if (emptyState) {
    emptyState.style.display = filtered.length ? "none" : "block";
  }

  updateFilterButtons();
}

function renderFeaturedProducts() {
  const grid =
    document.getElementById("featuredProducts") ||
    document.getElementById("featuredGrid") ||
    document.getElementById("featuredProductGrid");

  if (!grid) return;

  grid.innerHTML = products.slice(0, 4).map(createProductCard).join("");
  setupImageFallbacks(grid);
}

/* -------------------- FILTERS AND SEARCH -------------------- */

function filterProducts(category) {
  activeCategory = category || "All Products";
  searchTerm = "";

  const input = document.getElementById("productSearch");
  if (input) input.value = "";

  showPage("products");
  renderProducts();

  return false;
}

function resetProductFilters() {
  activeCategory = "All Products";
  searchTerm = "";

  const input = document.getElementById("productSearch");
  if (input) input.value = "";

  renderProducts();
}

function updateFilterButtons() {
  document.querySelectorAll("[data-category]").forEach(function (button) {
    button.classList.toggle(
      "active",
      button.getAttribute("data-category") === activeCategory
    );
  });

  document.querySelectorAll(".filter-btn").forEach(function (button) {
    button.classList.toggle(
      "active",
      button.textContent.trim() === activeCategory
    );
  });
}

function setupProductSearch() {
  const input = document.getElementById("productSearch");

  if (input) {
    input.addEventListener("input", function () {
      searchTerm = input.value.trim();
      renderProducts();
    });
  }

  document.querySelectorAll("[data-category]").forEach(function (button) {
    button.addEventListener("click", function () {
      activeCategory = button.getAttribute("data-category");
      renderProducts();
    });
  });
     }
     
/* =========================================================
   PART 2/3: PRODUCT MODAL + CART OPERATIONS
========================================================= */

/* -------------------- PRODUCT MODAL STYLES -------------------- */

function ensureProductModalStyles() {
  if (document.getElementById("productModalStyles")) return;

  const style = document.createElement("style");
  style.id = "productModalStyles";

  style.textContent = `
    .yl-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 12000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px;
      background: rgba(20, 40, 27, .68);
    }

    .yl-modal {
      position: relative;
      width: min(680px, 100%);
      max-height: 90vh;
      overflow-y: auto;
      padding: 22px;
      border: 1px solid #e3e7dc;
      border-radius: 20px;
      background: #fffdf7;
      color: #26372c;
      box-shadow: 0 20px 70px rgba(0, 0, 0, .25);
    }

    .yl-modal img {
      display: block;
      width: 100%;
      max-height: 300px;
      object-fit: contain;
      border-radius: 14px;
      margin-bottom: 18px;
      background: #f7f7f0;
    }

    .yl-modal h2 {
      margin: 8px 0;
      color: #203f30;
    }

    .yl-modal p {
      line-height: 1.7;
    }

    .yl-modal-close {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 2;
      width: 40px;
      height: 40px;
      border: 1px solid #e3e7dc;
      border-radius: 50%;
      background: #fff;
      color: #203f30;
      font-size: 24px;
      cursor: pointer;
    }

    .yl-modal-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 18px;
    }

    .yl-modal-actions button {
      flex: 1;
      min-width: 130px;
      padding: 13px 16px;
      border: 0;
      border-radius: 999px;
      font-weight: 700;
      cursor: pointer;
    }

    .yl-modal-add {
      background: #315b43;
      color: #fff;
    }

    .yl-modal-enquire {
      background: #e6efe5;
      color: #203f30;
    }

    @media (max-width: 480px) {
      .yl-modal {
        padding: 16px;
      }

      .yl-modal-actions {
        flex-direction: column;
      }
    }
  `;

  document.head.appendChild(style);
}

/* -------------------- VIEW PRODUCT -------------------- */

function viewProduct(id) {
  const product = getProduct(id);
  if (!product) return;

  ensureProductModalStyles();

  const existingModal = document.getElementById("productModal");
  if (existingModal) existingModal.remove();

  const backdrop = document.createElement("div");
  backdrop.id = "productModal";
  backdrop.className = "yl-modal-backdrop";

  backdrop.innerHTML = `
    <section class="yl-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ylProductTitle">

      <button type="button" class="yl-modal-close"
        aria-label="Close product details">×</button>

      <img
        src="${escapeHTML(product.image)}"
        alt="${escapeHTML(product.name)}"
        data-product-image
      >

      <span>${escapeHTML(product.category)}</span>
      <h2 id="ylProductTitle">${escapeHTML(product.name)}</h2>
      <p>${escapeHTML(product.description)}</p>
      <h3>${formatPrice(product.price)}</h3>

      <div class="yl-modal-actions">
        <button type="button" class="yl-modal-add">Add to Cart</button>
        <button type="button" class="yl-modal-enquire">
          Enquire on WhatsApp
        </button>
      </div>
    </section>
  `;

  document.body.appendChild(backdrop);
  setupImageFallbacks(backdrop);

  const closeButton = backdrop.querySelector(".yl-modal-close");

  closeButton.addEventListener("click", function () {
    backdrop.remove();
  });

  backdrop.addEventListener("click", function (event) {
    if (event.target === backdrop) backdrop.remove();
  });

  backdrop.querySelector(".yl-modal-add").addEventListener("click", function () {
    addToCart(product.id);
    backdrop.remove();
  });

  backdrop.querySelector(".yl-modal-enquire").addEventListener("click", function () {
    openWhatsApp(
      "Hello Sai Yoga Shop!\n\n" +
      "I am interested in: " + product.name +
      "\nCategory: " + product.category +
      "\nListed Price: " + formatPrice(product.price) +
      "\n\nPlease confirm availability, final price and delivery details."
    );
  });
}

/* -------------------- CART OPERATIONS -------------------- */

function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;

  const key = String(product.id);
  cart[key] = (Number(cart[key]) || 0) + 1;

  saveCart();
  renderCart();
  showToast(product.name + " added to cart.");
}

function changeQuantity(id, change) {
  const key = String(id);

  if (!cart[key]) return;

  const newQuantity = Number(cart[key]) + Number(change);

  if (newQuantity <= 0) {
    delete cart[key];
  } else {
    cart[key] = newQuantity;
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  const product = getProduct(id);

  delete cart[String(id)];

  saveCart();
  renderCart();

  if (product) {
    showToast(product.name + " removed from cart.");
  }
}

function getCartItems() {
  return Object.keys(cart)
    .map(function (id) {
      const product = getProduct(id);
      const quantity = Number(cart[id]);

      if (!product || !Number.isFinite(quantity) || quantity <= 0) {
        return null;
      }

      return {
        product: product,
        quantity: quantity,
        lineTotal: product.price * quantity
      };
    })
    .filter(Boolean);
}

function getCartCount() {
  return getCartItems().reduce(function (total, item) {
    return total + item.quantity;
  }, 0);
}

function getCartTotal() {
  return getCartItems().reduce(function (total, item) {
    return total + item.lineTotal;
  }, 0);
}

/* -------------------- RENDER CART -------------------- */

function renderCart() {
  const container = document.getElementById("cartItems");
  const countElement = document.getElementById("cartCount");
  const titleCount = document.getElementById("cartTitleCount");
  const totalElement = document.getElementById("cartTotal");
  const checkoutButton = document.getElementById("checkoutWhatsApp");

  const items = getCartItems();
  const count = getCartCount();
  const total = getCartTotal();

  if (countElement) {
    countElement.textContent = count;
    countElement.style.display = count > 0 ? "" : "none";
  }

  if (titleCount) titleCount.textContent = count;
  if (totalElement) totalElement.textContent = formatPrice(total);

  if (checkoutButton) {
    checkoutButton.disabled = items.length === 0;
    checkoutButton.setAttribute(
      "aria-disabled",
      items.length === 0 ? "true" : "false"
    );
  }

  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon" aria-hidden="true">🛍️</div>
        <h3>Your cart is empty</h3>
        <p>Discover products for your wellness journey.</p>
        <button type="button" class="btn btn-primary" id="continueShopping">
          Explore Products
        </button>
      </div>
    `;

    const continueButton = document.getElementById("continueShopping");

    if (continueButton) {
      continueButton.addEventListener("click", function () {
        closeCart();
        showPage("products");
      });
    }

    return;
  }

  container.innerHTML = items.map(function (item) {
    const product = item.product;

    return `
      <article class="cart-item">
        <img
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          data-product-image
        >

        <div class="cart-item-info">
          <h4>${escapeHTML(product.name)}</h4>
          <p>${formatPrice(product.price)} each</p>

          <div class="cart-item-controls">
            <button type="button"
              aria-label="Decrease quantity of ${escapeHTML(product.name)}"
              onclick="changeQuantity(${product.id}, -1)">−</button>

            <span>${item.quantity}</span>

            <button type="button"
              aria-label="Increase quantity of ${escapeHTML(product.name)}"
              onclick="changeQuantity(${product.id}, 1)">+</button>
          </div>

          <button type="button" class="cart-remove"
            onclick="removeFromCart(${product.id})">
            Remove
          </button>
        </div>

        <strong class="cart-line-total">
          ${formatPrice(item.lineTotal)}
        </strong>
      </article>
    `;
  }).join("");

  setupImageFallbacks(container);
}

/* -------------------- CART DRAWER -------------------- */

function openCart() {
  const overlay = document.getElementById("cartOverlay");
  if (!overlay) return;

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");

  renderCart();
}

function closeCart() {
  const overlay = document.getElementById("cartOverlay");
  if (!overlay) return;

  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}

function setupCartControls() {
  const openButton = document.getElementById("openCart");
  const closeButton = document.getElementById("closeCart");
  const overlay = document.getElementById("cartOverlay");
  const checkoutButton = document.getElementById("checkoutWhatsApp");

  if (openButton) {
    openButton.addEventListener("click", openCart);
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeCart);
  }

  if (overlay) {
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) closeCart();
    });
  }

  if (checkoutButton) {
    checkoutButton.addEventListener("click", checkoutOnWhatsApp);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeCart();

      const modal = document.getElementById("productModal");
      if (modal) modal.remove();
    }
  });
}

/* =========================================================
   PART 3/3: WHATSAPP CHECKOUT + BUTTONS + INITIALIZATION
========================================================= */

/* -------------------- WHATSAPP ORDER CHECKOUT -------------------- */

function checkoutOnWhatsApp() {
  const items = getCartItems();

  if (items.length === 0) {
    showToast("Your cart is empty. Add a product first.");
    return;
  }

  const orderLines = items.map(function (item, index) {
    return (
      (index + 1) + ". " + item.product.name +
      "\nQuantity: " + item.quantity +
      "\nPrice: " + formatPrice(item.product.price) + " each" +
      "\nSubtotal: " + formatPrice(item.lineTotal)
    );
  });

  const message =
    "Namaste Sai Yoga Shop!\n\n" +
    "I would like to enquire about the following order:\n\n" +
    "MY ORDER\n" +
    "--------------------------------\n" +
    orderLines.join("\n\n") +
    "\n\n--------------------------------\n" +
    "Estimated Product Total: " + formatPrice(getCartTotal()) +
    "\n\nPlease confirm product availability, final prices, " +
    "delivery charges and delivery time before confirming my order." +
    "\n\nThank you!";

  openWhatsApp(message);
}

/* -------------------- GENERAL WEBSITE BUTTONS -------------------- */

function setupGeneralButtons() {
  document.querySelectorAll("[data-open-products]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      showPage("products");
    });
  });

  document.querySelectorAll("[data-open-contact]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      showPage("contact");
    });
  });

  document.querySelectorAll("[data-whatsapp]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const message =
        button.getAttribute("data-whatsapp") ||
        "Namaste Sai Yoga Shop! I would like to know more about your products.";

      openWhatsApp(message);
    });
  });

  document.querySelectorAll('a[href="#products"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      showPage("products");
    });
  });

  document.querySelectorAll('a[href="#contact"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      showPage("contact");
    });
  });
}

/* -------------------- FOOTER YEAR -------------------- */

function setupFooterYear() {
  const yearElement = document.getElementById("currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* -------------------- OPTIONAL CONTACT FORM -------------------- */

function setupContactForm() {
  const form =
    document.getElementById("contactForm") ||
    document.getElementById("enquiryForm");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const name = String(
      formData.get("name") ||
      formData.get("fullName") ||
      ""
    ).trim();

    const phone = String(
      formData.get("phone") ||
      formData.get("mobile") ||
      ""
    ).trim();

    const email = String(formData.get("email") || "").trim();

    const subject = String(
      formData.get("subject") ||
      formData.get("product") ||
      "General Enquiry"
    ).trim();

    const enquiry = String(
      formData.get("message") ||
      formData.get("enquiry") ||
      ""
    ).trim();

    if (!name) {
      showToast("Please enter your name.");
      return;
    }

    const message =
      "Namaste Sai Yoga Shop!\n\n" +
      "I have a website enquiry.\n\n" +
      "Name: " + name +
      "\nPhone: " + (phone || "Not provided") +
      "\nEmail: " + (email || "Not provided") +
      "\nSubject: " + subject +
      "\nMessage: " + (enquiry || "Please contact me with more details.") +
      "\n\nPlease get in touch with me.";

    openWhatsApp(message);
  });
}

/* -------------------- GLOBAL ERROR SAFETY -------------------- */

window.addEventListener("error", function (event) {
  console.error("Website error:", event.message);
});

/* -------------------- INITIALIZE WEBSITE -------------------- */

function initSaiYogaShop() {
  setupNavigation();
  setupProductSearch();
  setupCartControls();
  setupGeneralButtons();
  setupFooterYear();
  setupContactForm();

  renderFeaturedProducts();
  renderProducts();
  renderCart();

  showPage("home");

  console.info("Sai Yoga Shop initialized. Products:", products.length);
}

/* Avoid running initialization before HTML is ready. */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSaiYogaShop, {
    once: true
  });
} else {
  initSaiYogaShop();
       }

