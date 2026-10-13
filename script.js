
/* =====================================================
   YOGA LIFE — COMPLETE WEBSITE JAVASCRIPT
   PART 1 OF 2
===================================================== */

"use strict";

const WHATSAPP_NUMBER = "919987475783";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80";

/* -------------------- PRODUCT CATALOGUE -------------------- */

const products = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    category: "Yoga Mats",
    price: 899,
    description: "A comfortable, non-slip yoga mat for everyday yoga and stretching.",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=900&q=80",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Eco-Friendly Yoga Mat",
    category: "Yoga Mats",
    price: 1299,
    description: "A versatile yoga mat for a comfortable and mindful practice.",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=80",
    tag: "Eco Choice"
  },
  {
    id: 3,
    name: "Travel Yoga Mat",
    category: "Yoga Mats",
    price: 749,
    description: "A lightweight mat for home, outdoor and travel yoga sessions.",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=900&q=80",
    tag: "Lightweight"
  },
  {
    id: 4,
    name: "Extra Grip Yoga Mat",
    category: "Yoga Mats",
    price: 1499,
    description: "A supportive mat designed to help with stability during practice.",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=900&q=80",
    tag: "Premium"
  },
  {
    id: 5,
    name: "Yoga Block Set",
    category: "Accessories",
    price: 499,
    description: "Support alignment and make selected yoga poses more accessible.",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=80",
    tag: "Essential"
  },
  {
    id: 6,
    name: "Stretching Strap",
    category: "Accessories",
    price: 299,
    description: "A useful accessory for stretching and flexibility exercises.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    tag: "Everyday"
  },
  {
    id: 7,
    name: "Yoga Mat Carry Bag",
    category: "Accessories",
    price: 399,
    description: "Carry your yoga mat conveniently between home and studio.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    tag: "Convenient"
  },
  {
    id: 8,
    name: "Resistance Bands",
    category: "Accessories",
    price: 449,
    description: "A versatile set for mobility exercises and fitness routines.",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=900&q=80",
    tag: "Workout"
  },
  {
    id: 9,
    name: "Meditation Cushion",
    category: "Meditation",
    price: 999,
    description: "A supportive cushion for comfortable seated meditation.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    tag: "Mindfulness"
  },
  {
    id: 10,
    name: "Meditation Mat",
    category: "Meditation",
    price: 1199,
    description: "Create a dedicated, comfortable space for meditation.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    tag: "Calm Living"
  },
  {
    id: 11,
    name: "Relaxation Eye Pillow",
    category: "Meditation",
    price: 349,
    description: "A soft eye pillow to complement your relaxation routine.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80",
    tag: "Relax"
  },
  {
    id: 12,
    name: "Mindfulness Journal",
    category: "Meditation",
    price: 299,
    description: "A journal for reflections, intentions and daily gratitude.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
    tag: "Daily Ritual"
  },
  {
    id: 13,
    name: "Comfort Yoga Leggings",
    category: "Clothing",
    price: 999,
    description: "Comfortable activewear designed for movement and everyday wear.",
    image: "https://images.unsplash.com/photo-1506629905607-d9c297d2e4c4?auto=format&fit=crop&w=900&q=80",
    tag: "Comfort"
  },
  {
    id: 14,
    name: "Yoga Training Top",
    category: "Clothing",
    price: 699,
    description: "A versatile training top for yoga and stretching.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
    tag: "Everyday"
  },
  {
    id: 15,
    name: "Relaxed Fit T-Shirt",
    category: "Clothing",
    price: 549,
    description: "A relaxed T-shirt suitable for warm-ups and casual wear.",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
    tag: "Casual"
  },
  {
    id: 16,
    name: "Activewear Shorts",
    category: "Clothing",
    price: 599,
    description: "Lightweight shorts for movement and general fitness.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
    tag: "Active"
  },
  {
    id: 17,
    name: "Yoga Wheel",
    category: "Fitness",
    price: 899,
    description: "A yoga accessory for supported stretching and balance practice.",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=900&q=80",
    tag: "Practice"
  },
  {
    id: 18,
    name: "Foam Roller",
    category: "Fitness",
    price: 699,
    description: "A fitness accessory for gentle self-massage and mobility routines.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    tag: "Recovery"
  },
  {
    id: 19,
    name: "Balance Cushion",
    category: "Fitness",
    price: 799,
    description: "Add variety to suitable balance and stability exercises.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    tag: "Balance"
  },
  {
    id: 20,
    name: "Fitness Exercise Ball",
    category: "Fitness",
    price: 1099,
    description: "A versatile ball for selected mobility and fitness activities.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    tag: "Fitness"
  }
];

/* -------------------- CART STATE -------------------- */

let cart = {};
let activeCategory = "All Products";
let searchTerm = "";

try {
  const savedCart = localStorage.getItem("yogaLifeCart");

  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);

    if (parsedCart && typeof parsedCart === "object") {
      cart = parsedCart;
    }
  }
} catch (error) {
  cart = {};
}

/* -------------------- COMMON HELPERS -------------------- */

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
    localStorage.setItem("yogaLifeCart", JSON.stringify(cart));
  } catch (error) {
    console.warn("Cart could not be saved.");
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
  const text = encodeURIComponent(
    message || "Hello Yoga Life! I would like to know more about your products."
  );

  window.open(
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text,
    "_blank",
    "noopener,noreferrer"
  );
}

/* -------------------- TOAST NOTIFICATION -------------------- */

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
    "z-index:10000;background:#243d32;color:#fff;padding:13px 20px;" +
    "border-radius:12px;max-width:90%;text-align:center;" +
    "box-shadow:0 8px 28px rgba(0,0,0,.18);display:block;";

  clearTimeout(toast.hideTimer);

  toast.hideTimer = setTimeout(function () {
    toast.style.display = "none";
  }, 2800);
}

/* -------------------- PAGE NAVIGATION -------------------- */

function showPage(pageName) {
  const pages = {
    home: document.getElementById("homePage"),
    products: document.getElementById("productsPage"),
    contact: document.getElementById("contactPage")
  };

  if (!pages[pageName]) {
    pageName = "home";
  }

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
    const isActive = link.getAttribute("data-page") === pageName;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const nav = document.getElementById("mainNav");
  const menuToggle = document.getElementById("menuToggle");

  if (nav) nav.classList.remove("open");

  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
  }

  window.scrollTo({ top: 0, behavior: "auto" });

  if (pageName === "products") {
    renderProducts();
  }

  return false;
}

/* -------------------- MOBILE NAVIGATION -------------------- */

function setupNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll("[data-page]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      showPage(link.getAttribute("data-page"));
    });
  });
}

/* -------------------- PRODUCT CARDS -------------------- */

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
          <button
            type="button"
            class="btn btn-outline"
            onclick="viewProduct(${product.id})"
          >View Product</button>

          <button
            type="button"
            class="btn btn-primary"
            onclick="addToCart(${product.id})"
          >Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function setupImageFallbacks(container) {
  if (!container) return;

  container.querySelectorAll("img[data-product-image]").forEach(function (img) {
    img.addEventListener("error", function () {
      img.src = FALLBACK_IMAGE;
    }, { once: true });
  });
}

/* -------------------- PRODUCT RENDERING -------------------- */

function renderProducts() {
  const productGrid = document.getElementById("allProducts");
  const emptyState = document.getElementById("emptyProducts");

  if (!productGrid) return;

  const filteredProducts = products.filter(function (product) {
    const matchesCategory =
      activeCategory === "All Products" ||
      product.category === activeCategory;

    const text = (
      product.name + " " +
      product.category + " " +
      product.description
    ).toLowerCase();

    return matchesCategory && text.includes(searchTerm.toLowerCase());
  });

  productGrid.innerHTML = filteredProducts.map(createProductCard).join("");

  setupImageFallbacks(productGrid);

  if (emptyState) {
    emptyState.style.display =
      filteredProducts.length ? "none" : "block";
  }

  updateFilterButtons();
}

function renderFeaturedProducts() {
  const featuredGrid =
    document.getElementById("featuredProducts") ||
    document.getElementById("featuredGrid") ||
    document.getElementById("featuredProductGrid");

  if (!featuredGrid) return;

  featuredGrid.innerHTML = products.slice(0, 4).map(createProductCard).join("");

  setupImageFallbacks(featuredGrid);
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
    const label = button.textContent.trim();

    const validCategories = [
      "All Products",
      "Yoga Mats",
      "Accessories",
      "Meditation",
      "Clothing",
      "Fitness"
    ];

    if (validCategories.includes(label)) {
      button.classList.toggle("active", label === activeCategory);
    }
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

/* -------------------- PRODUCT MODAL STYLES -------------------- */

function ensureProductModalStyles() {
  if (document.getElementById("productModalStyles")) return;

  const style = document.createElement("style");
  style.id = "productModalStyles";

  style.textContent = `
    .yl-modal-backdrop {
      position:fixed;
      inset:0;
      z-index:12000;
      background:rgba(15,25,20,.68);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:18px;
    }

    .yl-modal {
      width:min(680px,100%);
      max-height:90vh;
      overflow-y:auto;
      background:#fffdf7;
      color:#263b30;
      border-radius:20px;
      position:relative;
      padding:22px;
      box-shadow:0 20px 70px rgba(0,0,0,.25);
    }

    .yl-modal img {
      display:block;
      width:100%;
      max-height:300px;
      object-fit:cover;
      border-radius:14px;
      margin-bottom:18px;
    }

    .yl-modal h2 { margin:8px 0; }
    .yl-modal p { line-height:1.7; }

    .yl-modal-close {
      position:absolute;
      top:12px;
      right:12px;
      width:38px;
      height:38px;
      border:0;
      border-radius:50%;
      font-size:23px;
      cursor:pointer;
      background:#fff;
      color:#263b30;
    }

    .yl-modal-actions {
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:18px;
    }

    .yl-modal-actions button {
      flex:1;
      min-width:130px;
      border:0;
      border-radius:10px;
      padding:13px 16px;
      cursor:pointer;
      font-weight:600;
    }

    .yl-modal-add {
      background:#385b47;
      color:#fff;
    }

    .yl-modal-enquire {
      background:#e9eee6;
      color:#263b30;
    }
  `;

  document.head.appendChild(style);
}


/* =====================================================
   YOGA LIFE — COMPLETE WEBSITE JAVASCRIPT
   PART 2 OF 2
===================================================== */

/* -------------------- VIEW PRODUCT -------------------- */

function viewProduct(id) {
  const product = getProduct(id);

  if (!product) return;

  ensureProductModalStyles();

  const oldModal = document.getElementById("productModal");

  if (oldModal) oldModal.remove();

  const backdrop = document.createElement("div");
  backdrop.id = "productModal";
  backdrop.className = "yl-modal-backdrop";

  backdrop.innerHTML = `
    <section class="yl-modal" role="dialog" aria-modal="true"
      aria-labelledby="ylProductTitle">

      <button type="button" class="yl-modal-close"
        aria-label="Close product details">×</button>

      <img src="${escapeHTML(product.image)}"
        alt="${escapeHTML(product.name)}" data-product-image>

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

  backdrop.querySelector(".yl-modal-close").addEventListener("click", function () {
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
      "Hello Yoga Life! I am interested in:\n\n" +
      product.name +
      "\nPrice: " + formatPrice(product.price) +
      "\n\nPlease share availability and delivery details."
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

  cart[key] = Number(cart[key]) + Number(change);

  if (cart[key] <= 0) {
    delete cart[key];
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
        <img src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy" data-product-image>

        <div class="cart-item-info">
          <h4>${escapeHTML(product.name)}</h4>
          <p>${formatPrice(product.price)}</p>

          <div class="cart-item-controls">
            <button type="button"
              aria-label="Decrease quantity"
              onclick="changeQuantity(${product.id}, -1)">−</button>

            <span>${item.quantity}</span>

            <button type="button"
              aria-label="Increase quantity"
              onclick="changeQuantity(${product.id}, 1)">+</button>
          </div>

          <button type="button" class="cart-remove"
            onclick="removeFromCart(${product.id})">Remove</button>
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

/* -------------------- WHATSAPP CHECKOUT -------------------- */

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
    "Hello Yoga Life! I would like to place an order.\n\n" +
    "MY ORDER\n------------------------------\n" +
    orderLines.join("\n\n") +
    "\n\n------------------------------\n" +
    "Estimated Total: " + formatPrice(getCartTotal()) +
    "\n\nPlease confirm availability, final price and delivery charges before confirming my order.\n\nThank you!";

  openWhatsApp(message);
}

/* -------------------- GENERAL BUTTONS -------------------- */

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
        "Hello Yoga Life! I would like to know more about your products.";

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

/* -------------------- INITIALIZE WEBSITE -------------------- */

function initYogaLife() {
  setupNavigation();
  setupProductSearch();
  setupCartControls();
  setupGeneralButtons();
  setupFooterYear();

  renderFeaturedProducts();
  renderProducts();
  renderCart();

  showPage("home");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initYogaLife);
} else {
  initYogaLife();
  }
