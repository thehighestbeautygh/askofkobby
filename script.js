/* =========================================================
   ASKOFKOBBY — WEBSITE JAVASCRIPT
   BATCH 1 OF 5: SETUP + JERSEYS 1–25
   ========================================================= */

"use strict";

const WHATSAPP_NUMBER = "233545292437";
const INSTAGRAM_URL = "https://instagram.com/askof.kobby";

/*
 * Original club-jersey inventory.
 * Product IDs and image filenames are preserved.
 * Prices are confirmed through WhatsApp.
 */

const jerseys = [
  {
    n: 1,
    team: "Manchester City",
    sponsor: "Etihad Airways",
    colour: "Blue",
    sleeve: "Short sleeve",
    image: "eb11e274-0814-4e8c-9ab4-8bd00791be99.jpeg"
  },
  {
    n: 2,
    team: "Arsenal",
    sponsor: "Emirates Fly Better",
    colour: "Dark blue",
    sleeve: "Short sleeve",
    image: "2e28ba78-2ef9-4ba6-95c6-792335395703.jpeg"
  },
  {
    n: 3,
    team: "Arsenal",
    sponsor: "Emirates Fly Better",
    colour: "Red and black",
    sleeve: "Short sleeve",
    image: "6ea48856-0cae-4cf6-867f-dbf2a6e96cf6.jpeg"
  },
  {
    n: 4,
    team: "Real Madrid CF",
    sponsor: "Club jersey",
    colour: "White",
    sleeve: "Long sleeve",
    image: "6d2f0736-621c-4ec0-8534-3422aa651858.jpeg"
  },
  {
    n: 5,
    team: "FC Barcelona",
    sponsor: "Club jersey",
    colour: "Blue and red",
    sleeve: "Short sleeve",
    image: "0983cd27-61aa-43a9-9140-410a949c230a.jpeg"
  },
  {
    n: 6,
    team: "Liverpool",
    sponsor: "Standard Chartered",
    colour: "White with red accents",
    sleeve: "Short sleeve",
    image: "1befe38e-1e41-4c95-a56f-b26b43f42f1b.jpeg"
  },
  {
    n: 7,
    team: "Manchester United",
    sponsor: "Snapdragon",
    colour: "Blue",
    sleeve: "Long sleeve",
    image: "ac97c46b-1a63-47f2-a391-a49757bd5600.jpeg"
  },
  {
    n: 8,
    team: "Manchester United",
    sponsor: "Snapdragon",
    colour: "Blue",
    sleeve: "Short sleeve",
    image: "3c0e0cea-a898-4fa5-93ef-1d0e99a97bb2.jpeg"
  },
  {
    n: 9,
    team: "Arsenal",
    sponsor: "Emirates Fly Better",
    colour: "White",
    sleeve: "Short sleeve",
    image: "14ddbc28-bd9f-414b-beca-0d653a4c65dd.jpeg"
  },
  {
    n: 10,
    team: "Palmeiras",
    sponsor: "Sportingbet",
    colour: "White and green",
    sleeve: "Short sleeve",
    image: "7e55202e-0c43-4754-ae9c-00361db1a46d.jpeg"
  },
  {
    n: 11,
    team: "Manchester United",
    sponsor: "Snapdragon",
    colour: "Red",
    sleeve: "Long sleeve",
    image: "de82f7b6-0abb-4e5d-a9b3-ae21bb06fb20.jpeg"
  },
  {
    n: 12,
    team: "Chelsea",
    sponsor: "Club jersey",
    colour: "Black",
    sleeve: "Short sleeve",
    image: "c09b7b78-9897-4ad1-9f38-e4e84a248ebe.jpeg"
  },
  {
    n: 13,
    team: "Liverpool",
    sponsor: "Standard Chartered",
    colour: "White",
    sleeve: "Short sleeve",
    image: "6ca8505d-f80c-4f10-9087-f97327117d0c.jpeg"
  },
  {
    n: 14,
    team: "Bayern Munich",
    sponsor: "Club jersey",
    colour: "Red",
    sleeve: "Short sleeve",
    image: "577d1962-6bf8-4c5b-9c6a-e000494956de.jpeg"
  },
  {
    n: 15,
    team: "FC Barcelona",
    sponsor: "Club jersey",
    colour: "Red and blue",
    sleeve: "Long sleeve",
    image: "a227c1df-7f86-4b44-a4d4-ca8faebbfbd3.jpeg"
  },
  {
    n: 16,
    team: "Chelsea",
    sponsor: "USDC / Bybit",
    colour: "Blue with yellow accents",
    sleeve: "Short sleeve",
    image: "b409cbcd-1c75-4407-b537-7fc134f2c901.jpeg"
  },
  {
    n: 17,
    team: "Real Madrid",
    sponsor: "Details to confirm",
    colour: "See product image",
    sleeve: "Short sleeve",
    image: "f746f646-56e9-4c64-985f-c6c48433f885.jpeg"
  },
  {
    n: 18,
    team: "FC Barcelona",
    sponsor: "Club jersey",
    colour: "Black and violet",
    sleeve: "Long sleeve",
    image: "ed422e13-1e3e-4f5b-ba8e-c9bcbf626782.jpeg"
  },
  {
    n: 19,
    team: "AC Milan",
    sponsor: "Emirates Fly Better",
    colour: "Red and black",
    sleeve: "Short sleeve",
    image: "b5922408-d817-4b25-95e3-ef590d3aa000.jpeg"
  },
  {
    n: 20,
    team: "Paris Saint-Germain",
    sponsor: "Qatar Airways",
    colour: "Blue with red and white",
    sleeve: "Short sleeve",
    image: "2e45629a-7021-4529-87f5-32278ddc2260.jpeg"
  },
  {
    n: 21,
    team: "FC Barcelona",
    sponsor: "Club jersey",
    colour: "Black and violet",
    sleeve: "Short sleeve",
    image: "844d92e1-f235-4394-8f9f-1c9fb4c4e244.jpeg"
  },
  {
    n: 22,
    team: "Juventus",
    sponsor: "Jeep",
    colour: "Dark zebra design",
    sleeve: "Short sleeve",
    image: "9ce0b8b4-6883-4aba-87f9-0cdb11d6f0fa.jpeg"
  },
  {
    n: 23,
    team: "Arsenal",
    sponsor: "Emirates Fly Better",
    colour: "Red",
    sleeve: "Short sleeve",
    image: "46e4354d-2c44-4a09-b917-dec320eca1f9.jpeg"
  },
  {
    n: 24,
    team: "Arsenal",
    sponsor: "Emirates Fly Better",
    colour: "Dark green",
    sleeve: "Short sleeve",
    image: "c99bce00-343c-40fc-9da9-e564e8b27e54.jpeg"
  },
  {
    n: 25,
    team: "Manchester City",
    sponsor: "Etihad Airways",
    colour: "White",
    sleeve: "Short sleeve",
    image: "a4212dfa-df94-4084-a39f-12aea41adc89.jpeg"
  },

  // Batch 2 continues with jerseys 26–49.
/* =========================================================
   BATCH 2 OF 5: REMAINING INVENTORY + SHARED HELPERS
   ========================================================= */

  {
    n: 26,
    team: "Athletic Club Bilbao",
    sponsor: "Kutxabank",
    colour: "Red and white stripes",
    sleeve: "Short sleeve",
    image: "6c5a9c44-8de7-448d-8589-66781de7a10f.jpeg"
  },
  {
    n: 27,
    team: "Paris Saint-Germain",
    sponsor: "Qatar Airways",
    colour: "Blue and red",
    sleeve: "Short sleeve",
    image: "2e45629a-7021-4529-87f5-32278ddc2260.jpeg"
  },
  {
    n: 28,
    team: "Arsenal",
    sponsor: "Emirates Fly Better",
    colour: "Deep blue with yellow accents",
    sleeve: "Short sleeve",
    image: "2e28ba78-2ef9-4ba6-95c6-792335395703.jpeg"
  },
  {
    n: 29,
    team: "Manchester City",
    sponsor: "Etihad Airways",
    colour: "Black and yellow",
    sleeve: "Short sleeve",
    image: "70981452-83b6-487d-b6ae-adbfefc63a7a.jpeg"
  },
  {
    n: 30,
    team: "FC Barcelona",
    sponsor: "Red Cross design",
    colour: "Off-white",
    sleeve: "Long sleeve",
    image: "82fca2c1-aa40-4bb4-8cc1-d9f2f6e57ef1.jpeg"
  },
  {
    n: 31,
    team: "Olympique de Marseille",
    sponsor: "Droit au But, CMACGMA",
    colour: "White",
    sleeve: "Short sleeve",
    image: "70d210b0-b0c0-46bb-9edd-07d9fc37f511.jpeg"
  },
  {
    n: 32,
    team: "Paris Saint-Germain",
    sponsor: "Club jersey",
    colour: "Jeans blue",
    sleeve: "Short sleeve",
    image: "9a22e1d7-9f58-4dd6-9c40-83a0d7c0eb35.jpeg"
  },
  {
    n: 33,
    team: "Liverpool",
    sponsor: "Standard Chartered",
    colour: "Deep red",
    sleeve: "Short sleeve",
    image: "e0faa0f3-b021-46fc-ad6f-6595d7890017.jpeg"
  },
  {
    n: 34,
    team: "Arsenal",
    sponsor: "Emirates Fly Better",
    colour: "Deep green",
    sleeve: "Long sleeve",
    image: "4e9f5af1-6008-41f7-9811-25ce85e25904.jpeg"
  },
  {
    n: 35,
    team: "Paris Saint-Germain",
    sponsor: "Qatar Airways",
    colour: "White",
    sleeve: "Long sleeve",
    image: "b023c6a4-491e-47b3-885d-14659fc73173.jpeg"
  },
  {
    n: 36,
    team: "Arsenal",
    sponsor: "Emirates Fly Better",
    colour: "White and grey",
    sleeve: "Short sleeve",
    image: "5c33b279-d9bf-4234-81e5-3e9586ae7bf6.jpeg"
  },
  {
    n: 37,
    team: "Manchester City",
    sponsor: "Etihad Airways",
    colour: "Light blue",
    sleeve: "Long sleeve",
    image: "7ffc5854-6590-42f7-944b-fb23a65a83c2.jpeg"
  },
  {
    n: 38,
    team: "Arsenal",
    sponsor: "Emirates Fly Better",
    colour: "White collar design",
    sleeve: "Short sleeve",
    image: "051d1582-14fe-40f4-801b-6d93e0221f3b.jpeg"
  },
  {
    n: 39,
    team: "Manchester United",
    sponsor: "Snapdragon",
    colour: "Blue",
    sleeve: "Short sleeve",
    image: "3c0e0cea-a898-4fa5-93ef-1d0e99a97bb2.jpeg"
  },
  {
    n: 40,
    team: "Chelsea",
    sponsor: "White collar design",
    colour: "See product image",
    sleeve: "Short sleeve",
    image: "6dfc5046-a9bd-4065-b6a8-f28d78393723.jpeg"
  },
  {
    n: 41,
    team: "Chelsea",
    sponsor: "Blue collar design",
    colour: "See product image",
    sleeve: "Short sleeve",
    image: "44fb28b5-7cde-46ad-97b0-f5ca4f7395b4.jpeg"
  },
  {
    n: 42,
    team: "Arsenal",
    sponsor: "Pink collar design",
    colour: "See product image",
    sleeve: "Short sleeve",
    image: "223c8086-628c-4de6-a9af-1346e55d68ff.jpeg"
  },
  {
    n: 43,
    team: "Olympique Lyonnais",
    sponsor: "Club jersey",
    colour: "White, blue and red",
    sleeve: "Short sleeve",
    image: "d964e2e3-3aa1-4f3f-82fb-1bcf9983cc84.jpeg"
  },
  {
    n: 44,
    team: "AFC Ajax",
    sponsor: "Club jersey",
    colour: "Red and white",
    sleeve: "Short sleeve",
    image: "66af712a-3135-40f0-809e-5aa46cfe21c4.jpeg"
  },
  {
    n: 45,
    team: "Arsenal",
    sponsor: "Club jersey",
    colour: "Red and white",
    sleeve: "Long sleeve",
    image: "8e1469ce-ce4d-4357-b5ed-6e07eda18dab.jpeg"
  },
  {
    n: 46,
    team: "Manchester City",
    sponsor: "Club jersey",
    colour: "Light blue",
    sleeve: "Short sleeve",
    image: "191bc2e7-f4a9-4902-8feb-fcd34c6f3044.jpeg"
  },
  {
    n: 47,
    team: "Arsenal",
    sponsor: "Club jersey",
    colour: "Deep blue and yellow",
    sleeve: "Long sleeve",
    image: "1581bff3-6551-4edc-b032-648bb01f7724.jpeg"
  },
  {
    n: 48,
    team: "FC Barcelona",
    sponsor: "Club jersey",
    colour: "Black and purple",
    sleeve: "Short sleeve",
    image: "747cba5e-f8fa-4d39-8b17-16ee3f3644db.jpeg"
  },
  {
    n: 49,
    team: "Liverpool",
    sponsor: "LFC",
    colour: "Red",
    sleeve: "Long sleeve",
    image: "12b55b8c-7b95-4a93-832a-d7edb5ae9d17.jpeg"
  }
];

const nationalJerseys = [
  {
    id: "gh1",
    team: "Ghana",
    sponsor: "National team",
    colour: "Ghana colours",
    sleeve: "Short sleeve",
    image: "IMG_4260.jpeg",
    tag: "GH Jollof 🇬🇭"
  },
  {
    id: "gh2",
    team: "Ghana",
    sponsor: "National team",
    colour: "Ghana colours",
    sleeve: "Short sleeve",
    image: "IMG_4261.jpeg",
    tag: "GH Jollof 🇬🇭"
  },
  {
    id: "gh3",
    team: "Ghana",
    sponsor: "National team",
    colour: "Ghana colours",
    sleeve: "Short sleeve",
    image: "IMG_4262.jpeg",
    tag: "GH Jollof 🇬🇭"
  },
  {
    id: "ng1",
    team: "Nigeria",
    sponsor: "National team",
    colour: "Nigeria colours",
    sleeve: "Short sleeve",
    image: "IMG_4263.jpeg",
    tag: "Nigeria Jollof 🇳🇬"
  },
  {
    id: "ng2",
    team: "Nigeria",
    sponsor: "National team",
    colour: "Nigeria colours",
    sleeve: "Short sleeve",
    image: "IMG_4264.jpeg",
    tag: "Nigeria Jollof 🇳🇬"
  }
];

const allProducts = [
  ...jerseys.map(jersey => ({
    ...jersey,
    id: String(jersey.n),
    tag: `Jersey #${jersey.n}`
  })),
  ...nationalJerseys
];

const cart = new Map();

const esc = value =>
  String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

const byId = id => document.getElementById(id);

function openWhatsApp(message) {
  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${esc(product.image)}"
          alt="${esc(product.team)} football jersey"
          loading="lazy"
        >
        <span class="product-tag">${esc(product.tag || product.sleeve)}</span>
      </div>

      <div class="product-info">
        <div class="product-team">${esc(product.team)}</div>
        <h3>${esc(product.team)}${product.n ? ` #${product.n}` : ""}</h3>
        <p class="product-sponsor">${esc(product.sponsor)}</p>
        <div class="product-meta">
          ${esc(product.colour)} · ${esc(product.sleeve)}
        </div>
        <div class="product-actions">
          <span class="product-price">Price on request</span>
          <button
            class="primary"
            type="button"
            data-add="${esc(product.id)}"
            aria-label="Add ${esc(product.team)} to cart"
          >Add</button>
        </div>
      </div>
    </article>
  `;
}

document.addEventListener("error", event => {
  const image = event.target;

  if (image.tagName !== "IMG") return;

  if (
    image.classList.contains("product-image") ||
    image.closest(".product-image-wrap")
  ) {
    image.classList.add("image-error");
    image.alt = "Jersey image unavailable";
  }
}, true);

function showToast(message) {
  const toast = byId("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}
/* =========================================================
   BATCH 3 OF 5: CART + WHATSAPP CHECKOUT
   ========================================================= */

function updateCart() {
  const countElement = byId("cartCount");
  const itemsElement = byId("cartItems");
  const totalElement = byId("cartTotal");

  if (!countElement || !itemsElement || !totalElement) return;

  const quantity = [...cart.values()].reduce(
    (total, item) => total + item.qty,
    0
  );

  countElement.textContent = quantity;

  if (cart.size === 0) {
    itemsElement.innerHTML = `
      <div class="empty-state">
        <p>Your cart is empty.</p>
        <p>Add a jersey to get started.</p>
      </div>
    `;

    totalElement.textContent = "Price to confirm";
    return;
  }

  itemsElement.innerHTML = [...cart.entries()].map(([id, item]) => `
    <article class="cart-item">
      <img
        class="cart-item-image"
        src="${esc(item.product.image)}"
        alt="${esc(item.product.team)} jersey"
      >

      <div class="cart-item-info">
        <h4>
          ${esc(item.product.team)}
          ${item.product.n ? `#${item.product.n}` : ""}
        </h4>

        <p>${esc(item.product.colour)}</p>
        <p>${esc(item.product.sleeve)}</p>

        <div class="cart-item-quantity">
          <button
            type="button"
            data-qty="${esc(id)}"
            data-change="-1"
            aria-label="Decrease quantity"
          >−</button>

          <span>${item.qty}</span>

          <button
            type="button"
            data-qty="${esc(id)}"
            data-change="1"
            aria-label="Increase quantity"
          >+</button>
        </div>

        <button
          class="cart-item-remove"
          type="button"
          data-remove="${esc(id)}"
        >Remove</button>
      </div>

      <div class="cart-item-price">Price on request</div>
    </article>
  `).join("");

  totalElement.textContent = "Confirm total on WhatsApp";
}

function addToCart(id) {
  const product = allProducts.find(
    item => String(item.id) === String(id)
  );

  if (!product) {
    showToast("This jersey could not be found.");
    return;
  }

  const key = String(id);
  const existing = cart.get(key);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.set(key, {
      product,
      qty: 1,
      size: "",
      version: "",
      personalization: ""
    });
  }

  updateCart();
  showToast("Jersey added to your cart.");
}

function openCart() {
  const panel = byId("cartPanel");
  const backdrop = byId("cartBackdrop");

  if (!panel) return;

  panel.classList.add("is-open");
  backdrop?.classList.add("is-visible");

  panel.setAttribute("aria-hidden", "false");
  panel.removeAttribute("inert");

  document.body.style.overflow = "hidden";
}

function closeCart() {
  const panel = byId("cartPanel");
  const backdrop = byId("cartBackdrop");

  if (!panel) return;

  panel.classList.remove("is-open");
  backdrop?.classList.remove("is-visible");

  panel.setAttribute("aria-hidden", "true");
  panel.setAttribute("inert", "");

  document.body.style.overflow = "";
}

function checkoutCart() {
  if (cart.size === 0) {
    showToast("Add a jersey before checking out.");
    return;
  }

  let message =
    "Hi AskofKobby! I'd like to enquire about these jerseys:\n\n";

  for (const item of cart.values()) {
    const product = item.product;

    message +=
      `• ${product.team}` +
      `${product.n ? ` #${product.n}` : ""}\n` +
      `  Colour: ${product.colour}\n` +
      `  Sleeve: ${product.sleeve}\n` +
      `  Quantity: ${item.qty}\n` +
      `  Size: ${item.size || "Please advise"}\n` +
      `  Version: ${item.version || "Please confirm"}\n` +
      (
        item.personalization
          ? `  Personalization: ${item.personalization}\n`
          : ""
      ) +
      "\n";
  }

  message +=
    "Please confirm availability, sizes, versions, delivery charges " +
    "and the total price before I place my order. Thank you.";

  openWhatsApp(message);
}

function bindCart() {
  byId("openCart")?.addEventListener("click", openCart);
  byId("closeCart")?.addEventListener("click", closeCart);
  byId("cartBackdrop")?.addEventListener("click", closeCart);

  byId("cartItems")?.addEventListener("click", event => {
    const quantityButton = event.target.closest("[data-qty]");
    const removeButton = event.target.closest("[data-remove]");

    if (quantityButton) {
      const id = quantityButton.dataset.qty;
      const item = cart.get(id);

      if (!item) return;

      item.qty += Number(quantityButton.dataset.change);

      if (item.qty <= 0) {
        cart.delete(id);
      }

      updateCart();
    }

    if (removeButton) {
      cart.delete(removeButton.dataset.remove);
      updateCart();
    }
  });

  byId("checkoutButton")?.addEventListener("click", checkoutCart);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeCart();
    }
  });

  updateCart();
}
/* =========================================================

   BATCH 4 OF 5: HOMEPAGE + COLLECTIONS + FINDER

   ========================================================= */

function initHome() {

  const clubGrid = byId("clubGrid");

  const productGrid = byId("productGrid");

  if (!clubGrid) return;

  let activeTeam = "";

  const teams = [

    ...new Set(jerseys.map(product => product.team))

  ].sort((a, b) => a.localeCompare(b));

  function renderClubs() {

    clubGrid.innerHTML = teams.map(team => {

      const products = jerseys

        .filter(product => product.team === team)

        .sort((a, b) => a.n - b.n);

      const sample = products[0];

      return `

        <article class="club-card">

          <img

            src="${esc(sample.image)}"

            alt="${esc(team)} jersey"

            loading="lazy"

          >

          <div class="club-card-content">

            <div class="club-card-kicker">

              ${products.length}

              ${products.length === 1 ? "jersey" : "jerseys"} listed

            </div>

            <h3>${esc(team)}</h3>

            <p>Explore the available colours and sleeve styles.</p>

            <div class="club-card-count">

              ${products.length} available option(s)

            </div>

            <button

              class="primary"

              type="button"

              data-open-team="${esc(team)}"

            >

              Browse collection

            </button>

          </div>

        </article>

      `;

    }).join("");

  }

  function openTeam(team) {

    activeTeam = team;

    const collection = byId("clubCollection");

    const title = byId("collectionTitle");

    const intro = byId("collectionIntro");

    if (!collection || !title || !intro) return;

    collection.hidden = false;

    title.textContent = team;

    const count = jerseys.filter(

      product => product.team === team

    ).length;

    intro.textContent =

      `${count} jersey option(s) listed for ${team}. ` +

      "Choose a jersey and add it to your cart to enquire.";

    if (byId("searchInput")) {

      byId("searchInput").value = "";

    }

    if (byId("sleeveFilter")) {

      byId("sleeveFilter").value = "all";

    }

    if (byId("sortFilter")) {

      byId("sortFilter").value = "default";

    }

    renderCollection();

    collection.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  }

  function renderCollection() {

    if (!productGrid || !activeTeam) return;

    const search = (

      byId("searchInput")?.value || ""

    ).trim().toLowerCase();

    const sleeve = byId("sleeveFilter")?.value || "all";

    const sort = byId("sortFilter")?.value || "default";

    let filtered = jerseys.filter(product => {

      const matchesTeam = product.team === activeTeam;

      const matchesSleeve =

        sleeve === "all" ||

        (sleeve === "short" && product.sleeve === "Short sleeve") ||

        (sleeve === "long" && product.sleeve === "Long sleeve");

      const searchable = [

        product.team,

        product.sponsor,

        product.colour,

        product.sleeve,

        product.n

      ].join(" ").toLowerCase();

      return (

        matchesTeam &&

        matchesSleeve &&

        searchable.includes(search)

      );

    });

    if (sort === "name") {

      filtered.sort((a, b) =>

        a.colour.localeCompare(b.colour) || a.n - b.n

      );

    } else {

      filtered.sort((a, b) => a.n - b.n);

    }

    productGrid.innerHTML = filtered.length

      ? filtered.map(productCardWithId).join("")

      : `

        <div class="empty-state">

          No jerseys match these filters.

          Try another search or sleeve style.

        </div>

      `;

  }

  function productCardWithId(product) {

    return productCard({

      ...product,

      id: String(product.n),

      tag: `Jersey #${product.n}`

    });

  }

  clubGrid.addEventListener("click", event => {

    const button = event.target.closest("[data-open-team]");

    if (button) {

      openTeam(button.dataset.openTeam);

    }

  });

  productGrid?.addEventListener("click", event => {

    const button = event.target.closest("[data-add]");

    if (button) {

      addToCart(button.dataset.add);

    }

  });

  byId("searchInput")?.addEventListener("input", renderCollection);

  byId("sleeveFilter")?.addEventListener("change", renderCollection);

  byId("sortFilter")?.addEventListener("change", renderCollection);

  byId("closeCollection")?.addEventListener("click", () => {

    const collection = byId("clubCollection");

    if (collection) collection.hidden = true;

    activeTeam = "";

    byId("shop")?.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  });

  renderClubs();

  /* National-team product cards, where present. */

  ["Ghana", "Nigeria"].forEach(country => {

    const countryGrid = byId(

      country === "Ghana" ? "ghanaProducts" : "nigeriaProducts"

    );

    if (!countryGrid) return;

    countryGrid.innerHTML = nationalJerseys

      .filter(product => product.team === country)

      .map(productCard)

      .join("");

    countryGrid.addEventListener("click", event => {

      const button = event.target.closest("[data-add]");

      if (button) addToCart(button.dataset.add);

    });

  });

  /* Jersey finder. */

  byId("finderForm")?.addEventListener("submit", event => {

    event.preventDefault();

    const team = byId("finderTeam")?.value || "any";

    const sleeve = byId("finderSleeve")?.value || "either";

    const colour = (

      byId("finderColour")?.value || ""

    ).trim().toLowerCase();

    const result = byId("finderResult");

    if (!result) return;

    const matches = allProducts.filter(product => {

      const matchesTeam =

        team === "any" ||

        team === "Other" ||

        product.team.toLowerCase().includes(team.toLowerCase());

      const matchesSleeve =

        sleeve === "either" ||

        sleeve === "any" ||

        product.sleeve.toLowerCase().includes(sleeve.toLowerCase());

      const matchesColour =

        !colour || product.colour.toLowerCase().includes(colour);

      return matchesTeam && matchesSleeve && matchesColour;

    }).slice(0, 6);

    if (!matches.length) {

      result.innerHTML = `

        <p class="empty-state">

          No exact match found. Try a different team or colour,

          or ask us to help you find one.

        </p>

        <a

          class="primary"

          target="_blank"

          rel="noopener noreferrer"

          href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(

            "Hi AskofKobby! Please help me find a jersey. " +

            `Team: ${team}; sleeve: ${sleeve}; colour: ${colour || "Any"}.`

          )}"

        >Ask on WhatsApp</a>

      `;

      return;

    }

    result.innerHTML = `

      <p class="finder-result-heading">Here are some options:</p>

      <div class="finder-results-grid">

        ${matches.map(product => productCard(product)).join("")}

      </div>

    `;

    result.querySelectorAll("[data-add]").forEach(button => {

      button.addEventListener("click", () => {

        addToCart(button.dataset.add);

      });

    });

  });

  /* Newsletter: no backend is connected, so do not claim a subscription. */

  byId("newsletterForm")?.addEventListener("submit", event => {

    event.preventDefault();

    const emailInput = byId("newsletterEmail");

    const message = byId("newsletterMessage");

    if (!emailInput || !message) return;

    const email = emailInput.value.trim();

    if (!emailInput.checkValidity() || !email) {

      message.textContent = "Please enter a valid email address.";

      message.className = "error";

      return;

    }

    const emailSubject = encodeURIComponent(

      "AskofKobby newsletter enquiry"

    );

    const emailBody = encodeURIComponent(

      "Hello AskofKobby,\n\n" +

      "I would like to receive updates about new jerseys and offers.\n\n" +

      `My email address: ${email}\n\n` +

      "Please let me know how to subscribe. Thank you."

    );

    message.textContent =

      "Your email app will open with a request. Send the email to complete it.";

    message.className = "success";

    window.location.href =

      `mailto:askofkobby@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  });

  /* Mobile navigation. */

  const menuToggle = byId("menuToggle");

  const navLinks = byId("navLinks");

  menuToggle?.addEventListener("click", () => {

    const isOpen = navLinks?.classList.toggle("is-open") || false;

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(

      "aria-label",

      isOpen ? "Close navigation" : "Open navigation"

    );

  });

  navLinks?.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("is-open");

      menuToggle?.setAttribute("aria-expanded", "false");

      menuToggle?.setAttribute("aria-label", "Open navigation");

    });

  });

  /* Footer year. */

  const year = byId("year");

  if (year) {

    year.textContent = new Date().getFullYear();

  }

  /* Footer back-to-top link. */

  document.querySelectorAll('a[href="#top"]').forEach(link => {

    link.addEventListener("click", event => {

      event.preventDefault();

      window.scrollTo({

        top: 0,

        behavior: "smooth"

      });

    });

  });

  /* Video playback: browsers may block autoplay, so fail quietly. */

  document.querySelectorAll("video[autoplay]").forEach(video => {

    video.muted = true;

    const playback = video.play();

    if (playback && typeof playback.catch === "function") {

      playback.catch(() => {

        /* User can start the video manually if autoplay is blocked. */

      });

    }

  });

}
/* =========================================================
   BATCH 5 OF 5: PROMOTIONS + COUNTRY PAGES + INITIALIZATION
   ========================================================= */

function initPromotions() {
  const modal = byId("promoModal");

  if (!modal) return;

  let activePromoUrl = "";

  const promotions = {
    bonanza: {
      kicker: "Saturday offer",
      title: "Saturday Bonanza",
      body: `
        <p><strong>Offer hours:</strong> Saturdays, 9:00 a.m.–12:00 noon.</p>
        <ul>
          <li>Limited to the first five eligible customers each Saturday.</li>
          <li>Applies to short-sleeved supporters' jerseys.</li>
          <li>Regular price: GH₵130.</li>
          <li>Discount: 15% (GH₵19.50).</li>
          <li><strong>Offer price: GH₵110.50.</strong></li>
        </ul>
        <p>
          Availability, size and eligibility must be confirmed by AskofKobby.
          The offer is not confirmed until we respond.
        </p>
      `,
      message:
        "Hi AskofKobby! I'd like to enquire about the Saturday Bonanza. " +
        "Please confirm eligibility, sizes and available short-sleeved jerseys."
    },

    referral: {
      kicker: "Referral challenge",
      title: "Refer Two, Win a Jersey",
      body: `
        <ol>
          <li>Contact AskofKobby before starting so your referrals can be tracked.</li>
          <li>Refer two people who each complete a confirmed purchase.</li>
          <li>Submit the required names and screenshots as instructed.</li>
          <li>Complete the campaign terms form and short quiz.</li>
          <li>Choose your preferred club, subject to availability.</li>
        </ol>
        <p>
          Both purchases must be confirmed before the referral qualifies.
          AskofKobby will review your submission and confirm eligibility.
        </p>
      `,
      message:
        "Hi AskofKobby! I'd like to join Refer Two, Win a Jersey. " +
        "Please send the terms form and quiz and explain how to submit referrals."
    },

    share: {
      kicker: "Weekly challenge",
      title: "Follow, Share and Win 30%",
      body: `
        <ol>
          <li>Follow AskofKobby on Instagram.</li>
          <li>Share the campaign post and engage with it during the campaign week.</li>
          <li>Bring at least ten people to follow or engage with the campaign.</li>
          <li>Submit evidence of your participation as instructed.</li>
          <li>Eligible entries enter the weekly draw for a 30% discount.</li>
        </ol>
        <p>
          Contact AskofKobby to register for the current round and confirm
          the campaign post, evidence requirements and applicable terms.
        </p>
      `,
      message:
        "Hi AskofKobby! I'd like to join Follow, Share and Win 30%. " +
        "Please confirm the current campaign post and how to submit evidence."
    }
  };

  function closePromo() {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-promo]").forEach(button => {
    button.addEventListener("click", () => {
      const promo = promotions[button.dataset.promo];

      if (!promo) return;

      const kicker = byId("promoModalKicker");
      const title = byId("promoModalTitle");
      const body = byId("promoModalBody");

      if (kicker) kicker.textContent = promo.kicker;
      if (title) title.textContent = promo.title;
      if (body) body.innerHTML = promo.body;

      activePromoUrl =
        `https://wa.me/${WHATSAPP_NUMBER}?text=` +
        encodeURIComponent(promo.message);

      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      byId("closePromoModal")?.focus();
    });
  });

  byId("closePromoModal")?.addEventListener("click", closePromo);

  modal.querySelectorAll("[data-close-promo]").forEach(button => {
    button.addEventListener("click", closePromo);
  });

  byId("promoApply")?.addEventListener("click", () => {
    if (!activePromoUrl) return;

    window.open(
      activePromoUrl,
      "_blank",
      "noopener,noreferrer"
    );
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) {
      closePromo();
    }
  });
}

function initCountry() {
  const countryPage = byId("countryPage");
  if (!countryPage) return;

  const country = countryPage.dataset.country;
  if (!country) return;

  const isGhana = country.toLowerCase() === "ghana";

  // Render the national jerseys for the current country.
  const products = nationalJerseys.filter(
    product => product.team.toLowerCase() === country.toLowerCase()
  );

  const grid = byId("countryGrid");

  if (grid) {
    grid.innerHTML = products.map(productCard).join("");

    grid.querySelectorAll("[data-add-to-cart]").forEach(button => {
      button.addEventListener("click", () => {
        addToCart(button.dataset.addToCart);
      });
    });
  }

  // Update the footer year.
  const year = byId("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Scroll to the national jersey collection.
  byId("shopShortcut")?.addEventListener("click", () => {
    byId("countryShop")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  // Country quiz questions.
  const rounds = isGhana
    ? [
        {
          question: "What are Ghana's national flag colours?",
          answers: ["Red, gold and green", "Red, white and blue", "Green, black and white"],
          correct: 0
        },
        {
          question: "What is Ghana's national football team nicknamed?",
          answers: ["The Black Stars", "The Super Eagles", "The Lions"],
          correct: 0
        },
        {
          question: "Which Ghanaian footballer plays as an attacking midfielder?",
          answers: ["Mohammed Kudus", "Victor Osimhen", "Alex Iwobi"],
          correct: 0
        },
        {
          question: "What is the capital of Ghana?",
          answers: ["Kumasi", "Accra", "Tamale"],
          correct: 1
        }
      ]
    : [
        {
          question: "Which dish is commonly eaten with egusi soup?",
          answers: ["Eba", "Waakye", "Banku with okro stew"],
          correct: 0
        },
        {
          question: "What is Nigeria's national football team nicknamed?",
          answers: ["The Black Stars", "The Super Eagles", "The Pharaohs"],
          correct: 1
        },
        {
          question: "Which Nigerian club is known as the People's Elephant?",
          answers: ["Enyimba FC", "Accra Hearts of Oak", "Asante Kotoko"],
          correct: 0
        },
        {
          question: "Which Nigerian striker won the 2023 African Footballer of the Year award?",
          answers: ["Victor Osimhen", "Mohammed Kudus", "Thomas Partey"],
          correct: 0
        }
      ];

  // Shuffle questions for a fresh order on each page visit.
  const shuffledRounds = [...rounds].sort(() => Math.random() - 0.5);

  const quiz = byId("countryQuiz");
  const legacyFlagGame = byId("flagGame");
  const legacyPlayerAnswer = byId("playerAnswer");
  const legacyFoodAnswer = byId("foodAnswer");

  // Keep the existing legacy game markup functional.
  if (!quiz) {
    const legacyAnswers = isGhana
      ? legacyPlayerAnswer
      : legacyFoodAnswer;

    if (legacyAnswers) {
      const round = shuffledRounds[0];
      const message = byId(
        isGhana ? "playerMessage" : "foodMessage"
      );

      const buttons = [...legacyAnswers.querySelectorAll("button")];

      buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
          if (legacyAnswers.dataset.answered === "true") return;

          legacyAnswers.dataset.answered = "true";

          const correct = button.dataset.answer === "correct";

          if (message) {
            message.textContent = correct
              ? "Correct! You know your football. ⚽"
              : "Not quite! Try another round next time.";
          }

          buttons.forEach(item => {
            item.disabled = true;
          });
        });
      });

      // Keep the flag game visible and interactive where present.
      if (legacyFlagGame) {
        const flagMessage = byId("flagMessage");
        const flagClaim = byId("flagClaim");

        flagClaim?.addEventListener("click", () => {
          openWhatsApp(
            "Hello AskofKobby! I'd like to confirm whether the Ghana flag game discount is available."
          );
        });

        if (flagMessage && !flagMessage.textContent.trim()) {
          flagMessage.textContent =
            "Play the game and test your Ghana football knowledge!";
        }
      }
    }

    return;
  }

  // New quiz markup: #countryQuiz and its child elements.
  const progress = byId("quizProgress");
  const question = byId("quizQuestion");
  const prompt = byId("quizPrompt");
  const answers = byId("quizAnswers");
  const message = byId("quizMessage");
  const next = byId("quizNext");
  const flagClaim = byId("flagClaim");

  let currentRound = 0;
  let score = 0;

  function renderRound() {
    const round = shuffledRounds[currentRound];

    if (progress) {
      progress.textContent =
        `Question ${currentRound + 1} of ${shuffledRounds.length}`;
    }

    if (question) {
      question.textContent = `Round ${currentRound + 1}`;
    }

    if (prompt) {
      prompt.textContent = round.question;
    }

    if (message) {
      message.textContent = "";
    }

    if (next) {
      next.hidden = true;
    }

    if (answers) {
      answers.innerHTML = round.answers
        .map((answer, index) => `
          <button type="button" data-answer-index="${index}">
            ${esc(answer)}
          </button>
        `)
        .join("");

      answers.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          if (answers.dataset.answered === "true") return;

          answers.dataset.answered = "true";

          const selected = Number(button.dataset.answerIndex);
          const correct = selected === round.correct;

          if (correct) score++;

          answers.querySelectorAll("button").forEach(item => {
            item.disabled = true;
          });

          if (message) {
            message.textContent = correct
              ? "Correct! ⚽"
              : `Not quite! The correct answer is ${round.answers[round.correct]}.`;
          }

          if (next) {
            next.hidden = false;
            next.textContent =
              currentRound === shuffledRounds.length - 1
                ? "See my score"
                : "Next question";
          }
        });
      });

      delete answers.dataset.answered;
    }

    if (flagClaim) {
      flagClaim.hidden = true;
    }
  }

  next?.addEventListener("click", () => {
    if (currentRound < shuffledRounds.length - 1) {
      currentRound++;
      renderRound();
      return;
    }

    if (prompt) {
      prompt.textContent =
        `You scored ${score} out of ${shuffledRounds.length}!`;
    }

    if (message) {
      message.textContent = score === shuffledRounds.length
        ? "Perfect score! You really know your football!"
        : "Thanks for playing! Come back and try again.";
    }

    if (answers) answers.innerHTML = "";

    next.textContent = "Play again";

    next.onclick = () => {
      currentRound = 0;
      score = 0;
      shuffledRounds.sort(() => Math.random() - 0.5);
      renderRound();
      next.onclick = null;
    };

    if (flagClaim && isGhana && score === shuffledRounds.length) {
      flagClaim.hidden = false;
    }
  });

  renderRound();
}
/* ========================================
   COUNTRY GAME BUTTONS + VIDEO REPAIR
======================================== */

function repairCountryInteractions() {
  const countryPage = document.getElementById("countryPage");

  if (!countryPage) return;

  // Connect the answer buttons for the simple games.
  function connectGame(containerId, messageId) {
    const container = document.getElementById(containerId);
    const message = document.getElementById(messageId);

    if (!container || container.dataset.gameBound === "true") return;

    const buttons = container.querySelectorAll("button[data-answer]");

    if (!buttons.length) return;

    container.dataset.gameBound = "true";

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        if (container.dataset.answered === "true") return;

        container.dataset.answered = "true";

        const correct = button.dataset.answer === "correct";

        if (message) {
          message.textContent = correct
            ? "Correct! ⚽ Well played!"
            : "Not quite! Better luck next time. ⚽";
        }

        buttons.forEach(item => {
          item.disabled = true;
        });
      });
    });
  }

  connectGame("flagAnswers", "flagMessage");
  connectGame("playerAnswer", "playerMessage");
  connectGame("foodAnswer", "foodMessage");
  connectGame("eaglesAnswer", "eaglesMessage");

  // Attempt muted autoplay on country hero videos.
  document.querySelectorAll(".country-video").forEach(video => {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("autoplay", "");

    const attemptPlayback = () => {
      const result = video.play();

      if (result && typeof result.catch === "function") {
        result.catch(() => {
          // Some browsers block autoplay or cannot decode the video.
          // Keep the video controls available as a manual fallback.
          video.controls = true;
        });
      }
    };

    video.addEventListener("canplay", attemptPlayback, { once: true });

    if (video.readyState >= 2) {
      attemptPlayback();
    } else {
      video.load();
    }

    video.addEventListener("error", () => {
      video.controls = false;
      console.error(
        "Country video could not load. Check its filename and format:",
        video.currentSrc
      );
    });
  });
}
/* =========================================================
   INITIALIZE THE WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  bindCart();
  initHome();
  initPromotions();
  initCountry();
   repairCountryInteractions();
});
