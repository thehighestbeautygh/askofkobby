// AskofKobby — JavaScript
// WhatsApp business number: Ghana international format, without + or spaces.
const WHATSAPP_NUMBER = "233545292437";

const jerseys = [
  {n:1,team:"Manchester City",sponsor:"Etihad Airways",colour:"Blue",sleeve:"Short sleeve",image:"eb11e274-0814-4e8c-9ab4-8bd00791be99.jpeg"},
  {n:2,team:"Arsenal",sponsor:"Emirates Fly Better",colour:"Dark blue",sleeve:"Short sleeve",image:"2e28ba78-2ef9-4ba6-95c6-792335395703.jpeg"},
  {n:3,team:"Arsenal",sponsor:"Emirates Fly Better",colour:"Red and black",sleeve:"Short sleeve",image:"6ea48856-0cae-4cf6-867f-dbf2a6e96cf6.jpeg"},
  {n:4,team:"Real Madrid CF",sponsor:"Club jersey",colour:"White",sleeve:"Long sleeve",image:"6d2f0736-621c-4ec0-8534-3422aa651858.jpeg"},
  {n:5,team:"FC Barcelona",sponsor:"Club jersey",colour:"Blue and red",sleeve:"Short sleeve",image:"0983cd27-61aa-43a9-9140-410a949c230a.jpeg"},
  {n:6,team:"Liverpool",sponsor:"Standard Chartered",colour:"White with red accents",sleeve:"Short sleeve",image:"1befe38e-1e41-4c95-a56f-b26b43f42f1b.jpeg"},
  {n:7,team:"Manchester United",sponsor:"Snapdragon",colour:"Blue",sleeve:"Long sleeve",image:"ac97c46b-1a63-47f2-a391-a49757bd5600.jpeg"},
  {n:8,team:"Manchester United",sponsor:"Snapdragon",colour:"Blue",sleeve:"Short sleeve",image:"3c0e0cea-a898-4fa5-93ef-1d0e99a97bb2.jpeg"},
  {n:9,team:"Arsenal",sponsor:"Emirates Fly Better",colour:"White",sleeve:"Short sleeve",image:"14ddbc28-bd9f-414b-beca-0d653a4c65dd.jpeg"},
  {n:10,team:"Palmeiras",sponsor:"Sportingbet",colour:"White and green",sleeve:"Short sleeve",image:"7e55202e-0c43-4754-ae9c-00361db1a46d.jpeg"},
  {n:11,team:"Manchester United",sponsor:"Snapdragon",colour:"Red",sleeve:"Long sleeve",image:"de82f7b6-0abb-4e5d-a9b3-ae21bb06fb20.jpeg"},
  {n:12,team:"Chelsea",sponsor:"Club jersey",colour:"Black",sleeve:"Short sleeve",image:"c09b7b78-9897-4ad1-9f38-e4e84a248ebe.jpeg"},
  {n:13,team:"Liverpool",sponsor:"Standard Chartered",colour:"White",sleeve:"Short sleeve",image:"6ca8505d-f80c-4f10-9087-f97327117d0c.jpeg"},
  {n:14,team:"Bayern Munich",sponsor:"Club jersey",colour:"Red",sleeve:"Short sleeve",image:"577d1962-6bf8-4c5b-9c6a-e000494956de.jpeg"},
  {n:15,team:"FC Barcelona",sponsor:"Club jersey",colour:"Red and blue",sleeve:"Long sleeve",image:"a227c1df-7f86-4b44-a4d4-ca8faebbfbd3.jpeg"},
  {n:16,team:"Chelsea",sponsor:"USDC / Bybit",colour:"Blue with yellow accents",sleeve:"Short sleeve",image:"b409cbcd-1c75-4407-b537-7fc134f2c901.jpeg"},
  {n:17,team:"Real Madrid",sponsor:"Details to confirm",colour:"See product image",sleeve:"Short sleeve",image:"f746f646-56e9-4c64-985f-c6c48433f885.jpeg"},
  {n:18,team:"FC Barcelona",sponsor:"Club jersey",colour:"Black and violet",sleeve:"Long sleeve",image:"ed422e13-1e3e-4f5b-ba8e-c9bcbf626782.jpeg"},
  {n:19,team:"AC Milan",sponsor:"Emirates Fly Better",colour:"Red and black",sleeve:"Short sleeve",image:"b5922408-d817-4b25-95e3-ef590d3aa000.jpeg"},
  {n:20,team:"Paris Saint-Germain",sponsor:"Qatar Airways",colour:"Blue with red and white",sleeve:"Short sleeve",image:"2e45629a-7021-4529-87f5-32278ddc2260.jpeg"},
  {n:21,team:"FC Barcelona",sponsor:"Club jersey",colour:"Black and violet",sleeve:"Short sleeve",image:"844d92e1-f235-4394-8f9f-1c9fb4c4e244.jpeg"},
  {n:22,team:"Juventus",sponsor:"Jeep",colour:"Dark zebra design",sleeve:"Short sleeve",image:"9ce0b8b4-6883-4aba-87f9-0cdb11d6f0fa.jpeg"},
  {n:23,team:"Arsenal",sponsor:"Emirates Fly Better",colour:"Red",sleeve:"Short sleeve",image:"46e4354d-2c44-4a09-b917-dec320eca1f9.jpeg"},
  {n:24,team:"Arsenal",sponsor:"Emirates Fly Better",colour:"Dark green",sleeve:"Short sleeve",image:"c99bce00-343c-40fc-9da9-e564e8b27e54.jpeg"},
  {n:25,team:"Manchester City",sponsor:"Etihad Airways",colour:"White",sleeve:"Short sleeve",image:"a4212dfa-df94-4084-a39f-12aea41adc89.jpeg"},
  {n:26,team:"Athletic Club Bilbao",sponsor:"Kutxabank",colour:"Red and white stripes",sleeve:"Short sleeve",image:"6c5a9c44-8de7-448d-8589-66781de7a10f.jpeg"},
  {n:27,team:"Paris Saint-Germain",sponsor:"Qatar Airways",colour:"Blue and red",sleeve:"Short sleeve",image:"2e45629a-7021-4529-87f5-32278ddc2260.jpeg"},
  {n:28,team:"Arsenal",sponsor:"Emirates Fly Better",colour:"Deep blue with yellow accents",sleeve:"Short sleeve",image:"2e28ba78-2ef9-4ba6-95c6-792335395703.jpeg"},
  {n:29,team:"Manchester City",sponsor:"Etihad Airways",colour:"Black and yellow",sleeve:"Short sleeve",image:"70981452-83b6-487d-b6ae-adbfefc63a7a.jpeg"},
  {n:30,team:"FC Barcelona",sponsor:"Red Cross design",colour:"Off-white",sleeve:"Long sleeve",image:"82fca2c1-aa40-4bb4-8cc1-d9f2f6e57ef1.jpeg"},
  {n:31,team:"Olympique de Marseille",sponsor:"Droit au But / CMA CGM",colour:"White",sleeve:"Short sleeve",image:"70d210b0-b0c0-46bb-9edd-07d9fc37f511.jpeg"},
  {n:32,team:"Paris Saint-Germain",sponsor:"Club jersey",colour:"Jeans blue",sleeve:"Short sleeve",image:"9a22e1d7-9f58-4dd6-9c40-83a0d7c0eb35.jpeg"},
  {n:33,team:"Liverpool",sponsor:"Standard Chartered",colour:"Deep red",sleeve:"Short sleeve",image:"e0faa0f3-b021-46fc-ad6f-6595d7890017.jpeg"},
  {n:34,team:"Arsenal",sponsor:"Emirates Fly Better",colour:"Deep green",sleeve:"Long sleeve",image:"4e9f5af1-6008-41f7-9811-25ce85e25904.jpeg"},
  {n:35,team:"Paris Saint-Germain",sponsor:"Qatar Airways",colour:"White",sleeve:"Long sleeve",image:"b023c6a4-491e-47b3-885d-14659fc73173.jpeg"},
  {n:36,team:"Arsenal",sponsor:"Emirates Fly Better",colour:"White and grey",sleeve:"Short sleeve",image:"5c33b279-d9bf-4234-81e5-3e9586ae7bf6.jpeg"},
  {n:37,team:"Manchester City",sponsor:"Etihad Airways",colour:"Light blue",sleeve:"Long sleeve",image:"7ffc5854-6590-42f7-944b-fb23a65a83c2.jpeg"},
  {n:38,team:"Arsenal",sponsor:"Emirates Fly Better",colour:"White collar design",sleeve:"Short sleeve",image:"051d1582-14fe-40f4-801b-6d93e0221f3b.jpeg"},
  {n:39,team:"Manchester United",sponsor:"Snapdragon",colour:"Blue",sleeve:"Short sleeve",image:"3c0e0cea-a898-4fa5-93ef-1d0e99a97bb2.jpeg"},
  {n:40,team:"Chelsea",sponsor:"White collar design",colour:"See product image",sleeve:"Short sleeve",image:"6dfc5046-a9bd-4065-b6a8-f28d78393723.jpeg"},
  {n:41,team:"Chelsea",sponsor:"Blue collar design",colour:"See product image",sleeve:"Short sleeve",image:"44fb28b5-7cde-46ad-97b0-f5ca4f7395b4.jpeg"},
  {n:42,team:"Arsenal",sponsor:"Pink collar design",colour:"See product image",sleeve:"Short sleeve",image:"223c8086-628c-4de6-a9af-1346e55d68ff.jpeg"},
  {n:43,team:"Olympique Lyonnais",sponsor:"Club jersey",colour:"White, blue and red",sleeve:"Short sleeve",image:"d964e2e3-3aa1-4f3f-82fb-1bcf9983cc84.jpeg"},
  {n:44,team:"AFC Ajax",sponsor:"Club jersey",colour:"Red and white",sleeve:"Short sleeve",image:"66af712a-3135-40f0-809e-5aa46cfe21c4.jpeg"},
  {n:45,team:"Arsenal",sponsor:"Club jersey",colour:"Red and white",sleeve:"Long sleeve",image:"8e1469ce-ce4d-4357-b5ed-6e07eda18dab.jpeg"},
  {n:46,team:"Manchester City",sponsor:"Club jersey",colour:"Light blue",sleeve:"Short sleeve",image:"191bc2e7-f4a9-4902-8feb-fcd34c6f3044.jpeg"},
  {n:47,team:"Arsenal",sponsor:"Club jersey",colour:"Deep blue and yellow",sleeve:"Long sleeve",image:"1581bff3-6551-4edc-b032-648bb01f7724.jpeg"},
  {n:48,team:"FC Barcelona",sponsor:"Club jersey",colour:"Black and purple",sleeve:"Short sleeve",image:"747cba5e-f8fa-4d39-8b17-16ee3f3644db.jpeg"},
  {n:49,team:"Liverpool",sponsor:"LFC",colour:"Red",sleeve:"Long sleeve",image:"12b55b8c-7b95-4a93-832a-d7edb5ae9d17.jpeg"}
];

const nationalJerseys = [
  {id:"gh1",team:"Ghana",sponsor:"National team",colour:"Ghana colours",sleeve:"Short sleeve",image:"IMG_4260.jpeg",tag:"GH Jollof 🇬🇭"},
  {id:"gh2",team:"Ghana",sponsor:"National team",colour:"Ghana colours",sleeve:"Short sleeve",image:"IMG_4261.jpeg",tag:"GH Jollof 🇬🇭"},
  {id:"gh3",team:"Ghana",sponsor:"National team",colour:"Ghana colours",sleeve:"Short sleeve",image:"IMG_4262.jpeg",tag:"GH Jollof 🇬🇭"},
  {id:"ng1",team:"Nigeria",sponsor:"National team",colour:"Nigeria colours",sleeve:"Short sleeve",image:"IMG_4263.jpeg",tag:"Nigeria Jollof 🇳🇬"},
  {id:"ng2",team:"Nigeria",sponsor:"National team",colour:"Nigeria colours",sleeve:"Short sleeve",image:"IMG_4264.jpeg",tag:"Nigeria Jollof 🇳🇬"}
];

const allProducts = [
  ...jerseys.map(j => ({...j,id:String(j.n),tag:`Jersey #${j.n}`})),
  ...nationalJerseys
];

const cart = new Map();

const grid = document.getElementById("productGrid");
const nationalGrid = document.getElementById("nationalGrid");

const esc = value =>
  String(value).replace(/[&<>"']/g, character => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[character]));

function card(product) {
  return `
    <article class="product-card">
      <div class="product-image">
        <span class="tag">${esc(product.tag || product.sleeve)}</span>
        <img
          src="${esc(product.image)}"
          alt="${esc(product.team)} football jersey"
          loading="lazy"
          onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<span style=&quot;color:#777;font-size:.8rem;padding:15px;text-align:center&quot;>Image unavailable<br>Check filename</span>')"
        >
      </div>

      <div class="product-info">
        <div class="product-team">${esc(product.team)}</div>
        <h3>${esc(product.team)} ${product.n ? `#${product.n}` : ""}</h3>
        <div class="product-detail">
          ${esc(product.colour)} · ${esc(product.sleeve)}
        </div>

        <div class="product-bottom">
          <span class="price">Price on request</span>
          <button
            class="add-btn"
            data-add="${esc(product.id)}"
            aria-label="Add ${esc(product.team)} to cart"
          >+</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const team = document.getElementById("teamFilter").value;
  const sleeve = document.getElementById("sleeveFilter").value;
  const sort = document.getElementById("sortFilter").value;

  let list = jerseys.filter(product =>
    (team === "all" || product.team === team) &&
    (sleeve === "all" || product.sleeve === sleeve) &&
    [product.team, product.sponsor, product.colour, String(product.n)]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );

  if (sort === "team") {
    list.sort((a, b) => a.team.localeCompare(b.team) || a.n - b.n);
  } else {
    list.sort((a, b) => a.n - b.n);
  }

  grid.innerHTML = list.length
    ? list.map(product => card({
        ...product,
        id: String(product.n),
        tag: `Jersey #${product.n}`
      })).join("")
    : '<div class="empty">No jerseys match that search. Try another team or filter.</div>';
}

function renderNational() {
  nationalGrid.innerHTML = nationalJerseys.map(card).join("");
}

function addToCart(id) {
  const product = allProducts.find(item => String(item.id) === String(id));

  if (!product) return;

  const key = String(id);
  const existing = cart.get(key);

  cart.set(key, {
    product,
    qty: existing ? existing.qty + 1 : 1,
    size: existing?.size || "Not selected",
    version: existing?.version || "Not specified",
    personalization: existing?.personalization || ""
  });

  updateCart();
  showToast("Added to your cart ⚽");
}

function updateCart() {
  const quantity = [...cart.values()]
    .reduce((total, item) => total + item.qty, 0);

  document.getElementById("cartCount").textContent = quantity;

  const items = document.getElementById("cartItems");

  if (!cart.size) {
    items.innerHTML = `
      <div class="empty">
        Your cart is empty.<br>
        Add a jersey to get started.
      </div>
    `;

    document.getElementById("cartTotal").textContent = "Price to confirm";
    return;
  }

  items.innerHTML = [...cart.entries()].map(([id, item]) => `
    <div class="cart-line">
      <img src="${esc(item.product.image)}" alt="">

      <div>
        <h4>
          ${esc(item.product.team)}
          ${item.product.n ? `#${item.product.n}` : ""}
        </h4>

        <p>
          ${esc(item.product.sleeve)} · ${esc(item.product.colour)}
        </p>

        <div class="qty-controls">
          <button data-qty="${esc(id)}" data-change="-1" aria-label="Decrease quantity">−</button>
          <span>${item.qty}</span>
          <button data-qty="${esc(id)}" data-change="1" aria-label="Increase quantity">+</button>
        </div>

        <button class="remove" data-remove="${esc(id)}">Remove</button>
      </div>
    </div>
  `).join("");

  document.getElementById("cartTotal").textContent = "Confirm on WhatsApp";
}

function openCart() {
  const panel = document.getElementById("cartPanel");
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  const panel = document.getElementById("cartPanel");
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => toast.classList.remove("show"), 2200);
}

// Add-to-cart buttons
grid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});

nationalGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});

// Quantity controls and remove buttons
document.getElementById("cartItems").addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-qty]");
  const removeButton = event.target.closest("[data-remove]");

  if (quantityButton) {
    const id = quantityButton.dataset.qty;
    const item = cart.get(id);

    if (item) {
      item.qty += Number(quantityButton.dataset.change);

      if (item.qty <= 0) cart.delete(id);

      updateCart();
    }
  }

  if (removeButton) {
    cart.delete(removeButton.dataset.remove);
    updateCart();
  }
});

// Open and close cart
document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("cartBackdrop").addEventListener("click", closeCart);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeCart();
});

// WhatsApp checkout
document.getElementById("checkoutButton").addEventListener("click", () => {
  if (!cart.size) {
    showToast("Add a jersey to your cart first.");
    return;
  }

  let message = "Hi AskofKobby! I would like to enquire about these jerseys:\n\n";

  [...cart.values()].forEach(item => {
    message +=
      `• ${item.product.team}${item.product.n ? ` #${item.product.n}` : ""}` +
      ` — Quantity: ${item.qty}` +
      `; Size: ${item.size}` +
      `; Version: ${item.version}` +
      `${item.personalization ? `; Name/number: ${item.personalization}` : ""}\n`;
  });

  message += "\nPlease confirm sizes, availability and prices. Thank you!";

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

// Search, filters and sorting
["searchInput", "teamFilter", "sleeveFilter", "sortFilter"].forEach(id => {
  const element = document.getElementById(id);

  element.addEventListener(
    id === "searchInput" ? "input" : "change",
    renderProducts
  );
});

// National-team navigation
document.querySelectorAll("[data-national]").forEach(link => {
  link.addEventListener("click", () => {
    const target = link.dataset.national;

    document.getElementById("searchInput").value = "";
    document.getElementById("teamFilter").value = "all";
    document.getElementById("sleeveFilter").value = "all";

    renderProducts();

    setTimeout(() => {
      nationalGrid.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      showToast(`${target} jerseys are below.`);
    }, 100);
  });
});

// Jersey Finder
document.getElementById("finderForm").addEventListener("submit", event => {
  event.preventDefault();

  const team = document.getElementById("finderTeam").value;
  const sleeve = document.getElementById("finderSleeve").value;

  const found = allProducts.filter(product =>
    (team === "any" || product.team.toLowerCase().includes(team.toLowerCase())) &&
    (sleeve === "any" || product.sleeve === sleeve)
  ).slice(0, 3);

  const result = document.getElementById("finderResult");

  if (!found.length) {
    result.textContent =
      "No exact match yet. Try “Any team” or another sleeve style.";
    return;
  }

  result.innerHTML = "Try: " + found.map(product => `
    <a
      href="#shop"
      data-finder-pick="${esc(product.id)}"
      style="text-decoration:underline;font-weight:900"
    >
      ${esc(product.team)}${product.n ? ` #${product.n}` : ""}
    </a>
  `).join(" · ");

  result.querySelectorAll("[data-finder-pick]").forEach(link => {
    link.addEventListener("click", () => {
      const id = link.dataset.finderPick;

      if (jerseys.some(product => String(product.n) === id)) {
        document.getElementById("searchInput").value = id;
        document.getElementById("teamFilter").value = "all";
        document.getElementById("sleeveFilter").value = "all";
        renderProducts();
      } else {
        nationalGrid.scrollIntoView({behavior:"smooth"});
      }
    });
  });
});

// Newsletter demo
document.getElementById("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();

  document.getElementById("newsletterMessage").textContent =
    "Thanks! The newsletter form needs a mailing-list service before it can collect or save email addresses.";

  showToast("Newsletter setup is still needed.");
});

// Mobile menu
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("open");

  document.getElementById("menuToggle").setAttribute(
    "aria-expanded",
    nav.classList.contains("open") ? "true" : "false"
  );
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
    document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
  });
});

// Populate the team filter
const teamSelect = document.getElementById("teamFilter");

[...new Set(jerseys.map(product => product.team))]
  .sort()
  .forEach(team => {
    const option = document.createElement("option");
    option.value = team;
    option.textContent = team;
    teamSelect.appendChild(option);
  });

// Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Initial page rendering
renderProducts();
renderNational();
updateCart();
