
/* ==========================================
   SAI YOGA SHOP — SCRIPT.JS
   PART 1 OF 2
========================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* SHOP CONFIGURATION */
  const SHOP_NAME = "SAI YOGA SHOP";
  const WHATSAPP_NUMBER = "919876543210";

  /* SELECTORS */
  const menuToggle = document.querySelector(
    ".menu-toggle"
  );

  const mainNav = document.querySelector(
    ".main-nav"
  );

  const cartButtons = document.querySelectorAll(
    ".cart-button"
  );

  const cartDrawer = document.querySelector(
    ".cart-drawer"
  );

  const cartCount = document.querySelector(
    "#cartCount"
  );

  const cartItemsContainer = document.querySelector(
    ".cart-items"
  );

  const cartTotal = document.querySelector(
    ".cart-total"
  );

  const searchInput = document.querySelector(
    "#productSearch, .product-search"
  );

  const categoryFilters = document.querySelectorAll(
    ".filter-chip"
  );

  const sortSelect = document.querySelector(
    "#sortProducts, .sort-box select"
  );

  const productGrid = document.querySelector(
    ".product-grid"
  );

  let cart = [];
  let activeCategory = "all";

  /* MOBILE NAVIGATION */
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");

      mainNav.classList.toggle("active", isOpen);

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove(
          "open",
          "active",
          "show"
        );

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
  }

  /* CART DRAWER */
  function openCart() {
    if (cartDrawer) {
      cartDrawer.classList.add("open");
      cartDrawer.setAttribute("aria-hidden", "false");
    }
  }

  function closeCart() {
    if (cartDrawer) {
      cartDrawer.classList.remove("open");
      cartDrawer.setAttribute("aria-hidden", "true");
    }
  }

  cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (cartDrawer) {
        if (cartDrawer.classList.contains("open")) {
          closeCart();
        } else {
          openCart();
        }
      }
    });
  });

  document.querySelectorAll(
    ".cart-close, .close-cart, .cart-overlay"
  ).forEach(function (element) {
    element.addEventListener("click", closeCart);
  });

  /* PRODUCT HELPERS */
  function getProductCards() {
    return document.querySelectorAll(
      ".product-card"
    );
  }

  function getProductName(card) {
    const title = card.querySelector(
      "h3, .product-name"
    );

    return title
      ? title.textContent.trim()
      : "Shop Product";
  }

  function getProductPrice(card) {
    const priceElement = card.querySelector(
      ".product-price, .price"
    );

    if (!priceElement) return 0;

    const priceText = priceElement.textContent
      .replace(/,/g, "")
      .replace(/[^\d.]/g, "");

    return Number(priceText) || 0;
  }

  function getProductImage(card) {
    const image = card.querySelector("img");

    return image ? image.src : "";
  }

  function formatPrice(amount) {
    return "₹" + amount.toLocaleString("en-IN");
  }

  /* ADD PRODUCT TO CART */
  function addToCart(card) {
    const name = getProductName(card);
    const price = getProductPrice(card);
    const image = getProductImage(card);

    const existingItem = cart.find(function (item) {
      return item.name === name;
    });

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        name: name,
        price: price,
        image: image,
        quantity: 1
      });
    }

    renderCart();
    openCart();
  }

  /* PRODUCT BUTTONS */
  document.addEventListener("click", function (event) {
    const addButton = event.target.closest(
      ".add-to-cart-btn, .add-to-cart, [data-add-to-cart]"
    );

    if (addButton) {
      const card = addButton.closest(".product-card");

      if (card) {
        event.preventDefault();
        addToCart(card);
      }
    }
  });

  /* UPDATE CART DISPLAY */
  function renderCart() {
    const totalQuantity = cart.reduce(
      function (sum, item) {
        return sum + item.quantity;
      },
      0
    );

    const totalPrice = cart.reduce(
      function (sum, item) {
        return sum + item.price * item.quantity;
      },
      0
    );

    if (cartCount) {
      cartCount.textContent = totalQuantity;
    }

    if (cartTotal) {
      cartTotal.textContent = formatPrice(totalPrice);
    }

    if (!cartItemsContainer) return;

    cartItemsContainer.replaceChildren();

    if (cart.length === 0) {
      const emptyMessage = document.createElement("p");

      emptyMessage.textContent = "Your cart is empty.";
      emptyMessage.className = "empty-cart-message";

      cartItemsContainer.appendChild(emptyMessage);
      return;
    }

    cart.forEach(function (item, index) {
      const row = document.createElement("div");
      row.className = "cart-item";

      const details = document.createElement("div");
      details.className = "cart-item-details";

      const title = document.createElement("h4");
      title.textContent = item.name;

      const price = document.createElement("p");
      price.textContent =
        formatPrice(item.price) +
        " × " +
        item.quantity;

      const controls = document.createElement("div");
      controls.className = "cart-item-controls";

      const minusButton = document.createElement("button");
      minusButton.type = "button";
      minusButton.textContent = "−";
      minusButton.setAttribute(
        "aria-label",
        "Decrease quantity"
      );
      minusButton.dataset.cartAction = "decrease";
      minusButton.dataset.index = index;

      const quantity = document.createElement("span");
      quantity.textContent = item.quantity;

      const plusButton = document.createElement("button");
      plusButton.type = "button";
      plusButton.textContent = "+";
      plusButton.setAttribute(
        "aria-label",
        "Increase quantity"
      );
      plusButton.dataset.cartAction = "increase";
      plusButton.dataset.index = index;

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.textContent = "Remove";
      removeButton.dataset.cartAction = "remove";
      removeButton.dataset.index = index;

      controls.append(
        minusButton,
        quantity,
        plusButton,
        removeButton
      );

      details.append(title, price, controls);
      row.appendChild(details);

      cartItemsContainer.appendChild(row);
    });
  }

  /* CART QUANTITY CONTROLS */
  document.addEventListener("click", function (event) {
    const button = event.target.closest(
      "[data-cart-action]"
    );

    if (!button) return;

    const index = Number(button.dataset.index);
    const action = button.dataset.cartAction;

    if (!Number.isInteger(index) || !cart[index]) {
      return;
    }

    if (action === "increase") {
      cart[index].quantity += 1;
    }

    if (action === "decrease") {
      cart[index].quantity -= 1;

      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }
    }

    if (action === "remove") {
      cart.splice(index, 1);
    }

    renderCart();
  });

  /* INITIAL CART RENDER */
  renderCart();

  /* PART 2 WILL CONTINUE BELOW */
   
  /* ==========================================
     PRODUCT SEARCH
  ========================================== */

  function filterProducts() {
    const searchTerm = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";

    getProductCards().forEach(function (card) {
      const name = getProductName(card).toLowerCase();
      const description = card.textContent.toLowerCase();

      const matchesSearch =
        name.includes(searchTerm) ||
        description.includes(searchTerm);

      const category = (
        card.dataset.category ||
        card.getAttribute("data-category") ||
        "all"
      ).toLowerCase();

      const matchesCategory =
        activeCategory === "all" ||
        category === activeCategory;

      card.hidden = !(matchesSearch && matchesCategory);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }

  /* ==========================================
     CATEGORY FILTERS
  ========================================== */

  categoryFilters.forEach(function (button) {
    button.addEventListener("click", function () {
      categoryFilters.forEach(function (item) {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      activeCategory = (
        button.dataset.category ||
        button.dataset.filter ||
        button.textContent.trim()
      ).toLowerCase();

      if (
        activeCategory === "all products" ||
        activeCategory === "all categories"
      ) {
        activeCategory = "all";
      }

      filterProducts();
    });
  });

  /* ==========================================
     PRODUCT SORTING
  ========================================== */

  if (sortSelect && productGrid) {
    sortSelect.addEventListener("change", function () {
      const cards = Array.from(getProductCards());

      const sortValue = sortSelect.value.toLowerCase();

      cards.sort(function (a, b) {
        const priceA = getProductPrice(a);
        const priceB = getProductPrice(b);

        const nameA = getProductName(a);
        const nameB = getProductName(b);

        if (
          sortValue.includes("low") ||
          sortValue.includes("ascending")
        ) {
          return priceA - priceB;
        }

        if (
          sortValue.includes("high") ||
          sortValue.includes("descending")
        ) {
          return priceB - priceA;
        }

        if (sortValue.includes("name")) {
          return nameA.localeCompare(nameB);
        }

        return 0;
      });

      cards.forEach(function (card) {
        productGrid.appendChild(card);
      });

      filterProducts();
    });
  }

  /* ==========================================
     PRODUCT DETAILS MODAL
  ========================================== */

  const productModal = document.querySelector(
    ".product-modal, .product-modal-overlay"
  );

  function closeProductModal() {
    if (productModal) {
      productModal.hidden = true;
      productModal.classList.remove("open", "active");
      document.body.style.overflow = "";
    }
  }

  function showProductDetails(card) {
    if (!productModal || !card) return;

    const name = getProductName(card);
    const price = getProductPrice(card);
    const image = getProductImage(card);

    const titleElement = productModal.querySelector(
      ".product-modal-title, .modal-title, h2"
    );

    const priceElement = productModal.querySelector(
      ".product-modal-price, .modal-price"
    );

    const imageElement = productModal.querySelector(
      "img"
    );

    if (titleElement) {
      titleElement.textContent = name;
    }

    if (priceElement) {
      priceElement.textContent = formatPrice(price);
    }

    if (imageElement && image) {
      imageElement.src = image;
      imageElement.alt = name;
    }

    productModal.hidden = false;
    productModal.classList.add("open", "active");
    document.body.style.overflow = "hidden";
  }

  document.addEventListener("click", function (event) {
    const viewButton = event.target.closest(
      ".view-product-btn, .view-details, [data-view-product]"
    );

    if (viewButton) {
      const card = viewButton.closest(".product-card");

      if (card) {
        event.preventDefault();
        showProductDetails(card);
      }
    }

    if (
      event.target.closest(
        ".product-modal-close, .modal-close"
      )
    ) {
      closeProductModal();
    }

    if (
      productModal &&
      event.target === productModal
    ) {
      closeProductModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeProductModal();
      closeCart();
    }
  });

  /* ==========================================
     WHATSAPP ORDER
  ========================================== */

  function openWhatsApp(message) {
    const number = WHATSAPP_NUMBER.replace(/\D/g, "");

    if (!number || number === "919876543210") {
      alert(
        "Please set your shop's correct WhatsApp number in script.js."
      );
      return;
    }

    const url =
      "https://wa.me/" +
      number +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  }

  document.addEventListener("click", function (event) {
    const orderButton = event.target.closest(
      ".whatsapp-order, .order-whatsapp, [data-whatsapp-order]"
    );

    if (orderButton) {
      event.preventDefault();

      const card = orderButton.closest(".product-card");

      if (card) {
        const name = getProductName(card);
        const price = getProductPrice(card);

        openWhatsApp(
          "Hello " + SHOP_NAME +
          ", I want to enquire about:\n" +
          "Product: " + name + "\n" +
          "Listed price: " + formatPrice(price)
        );
      } else if (cart.length > 0) {
        let message = "Hello " + SHOP_NAME +
          ", I would like to order:\n\n";

        cart.forEach(function (item) {
          message +=
            item.name +
            " × " + item.quantity +
            " — " +
            formatPrice(item.price * item.quantity) +
            "\n";
        });

        const total = cart.reduce(function (sum, item) {
          return sum + item.price * item.quantity;
        }, 0);

        message +=
          "\nEstimated total: " + formatPrice(total) +
          "\nPlease confirm availability and delivery.";

        openWhatsApp(message);
      } else {
        openWhatsApp(
          "Hello " + SHOP_NAME +
          ", I would like to enquire about your products."
        );
      }
    }
  });

  /* ==========================================
     GENERAL WHATSAPP LINKS
  ========================================== */

  document.querySelectorAll(
    ".floating-whatsapp, .hero-whatsapp, .contact-whatsapp"
  ).forEach(function (button) {
    button.addEventListener("click", function (event) {
      const href = button.getAttribute("href");

      if (href && href.includes("wa.me/")) {
        return;
      }

      event.preventDefault();

      openWhatsApp(
        "Hello " + SHOP_NAME +
        ", I would like to know more about your products."
      );
    });
  });

  /* ==========================================
     NEWSLETTER / ENQUIRY FORM FEEDBACK
  ========================================== */

  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      const isEnquiryForm = form.matches(
        ".wholesale-form, .contact-form, [data-whatsapp-form]"
      );

      if (!isEnquiryForm) return;

      event.preventDefault();

      const formData = new FormData(form);
      let message = "Hello " + SHOP_NAME +
        ", I have a new enquiry:\n\n";

      formData.forEach(function (value, key) {
        if (String(value).trim()) {
          message +=
            key + ": " + String(value).trim() + "\n";
        }
      });

      openWhatsApp(message);
    });
  });

  /* ==========================================
     FOOTER YEAR
  ========================================== */

  document.querySelectorAll(
    "#currentYear, .current-year"
  ).forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  /* ==========================================
     END OF SCRIPT
  ========================================== */
});
       
