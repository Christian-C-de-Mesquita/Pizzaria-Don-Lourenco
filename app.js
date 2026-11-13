const promotionalFallbackImage = "stitch_pizzaria_don_louren_o_delivery/pizzaria2.png/screen.png";
const specialFallbackImage = "stitch_pizzaria_don_louren_o_delivery/pizzaria.png/screen.png";
const pizzas = [
  { id: "meia-calabresa-mussarela", name: "Meia Calabresa e Meia Mussarela", category: "promocionais", tag: "Promocional", description: "Calabresa com cebola e azeitonas de um lado; mussarela derretida com orégano do outro.", price: 38.99, originalPrice: 48, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80", fallbackImage: promotionalFallbackImage },
  { id: "bauru", name: "Bauru", category: "promocionais", tag: "Promocional", description: "Presunto fatiado, tomate fresco, mussarela e orégano da casa.", price: 38.99, originalPrice: 48, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80", fallbackImage: promotionalFallbackImage },
  { id: "toscana", name: "Toscana", category: "promocionais", tag: "Promocional", description: "Calabresa moída temperada, cebola em rodelas e mussarela gratinada.", price: 38.99, originalPrice: 48, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80", fallbackImage: promotionalFallbackImage },
  { id: "baiana", name: "Baiana", category: "promocionais", tag: "Promocional", description: "Calabresa apimentada, ovos fatiados, cebola e orégano.", price: 38.99, originalPrice: 48, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80", fallbackImage: promotionalFallbackImage },
  { id: "atum-palmito", name: "Atum com Palmito", category: "especiais", tag: "Especial", description: "Atum, cebola, palmito e azeitonas verdes sobre molho de tomate.", price: 45, image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80", fallbackImage: specialFallbackImage },
  { id: "peperoni", name: "Peperoni Artesanal", category: "especiais", tag: "Especial", description: "Pepperoni italiano, mussarela derretida e um toque de páprica.", price: 45, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80", fallbackImage: specialFallbackImage },
  { id: "frango-catupiry", name: "Frango com Catupiry", category: "especiais", tag: "Especial", description: "Frango desfiado, Catupiry e cheiro-verde.", price: 45, image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80", fallbackImage: specialFallbackImage },
  { id: "tres-queijos", name: "3 Queijos Especial", category: "especiais", tag: "Especial", description: "Mussarela, provolone defumado, Catupiry e orégano.", price: 45, image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80", fallbackImage: specialFallbackImage },
  { id: "lombo", name: "Lombo Especial", category: "especiais", tag: "Especial", description: "Lombo canadense defumado, cebola e mussarela gratinada.", price: 45, image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=80", fallbackImage: specialFallbackImage },
  { id: "mussarela", name: "Mussarela Tradicional", category: "especiais", tag: "Especial", description: "Mussarela, tomate maduro e manjericão fresco.", price: 45, image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80", fallbackImage: specialFallbackImage }
];

const cart = new Map();
const pizzaGrid = document.querySelector("#pizza-grid");
const cartPanel = document.querySelector("#cart-panel");
const cartBackdrop = document.querySelector("#cart-backdrop");
const addConfirmation = document.querySelector("#add-confirmation");
let addConfirmationTimeout;
let activeCategory = "todas";

const formatPrice = (price) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price);

function renderPizzas(category = "todas", direction = 1, animate = false) {
  const visiblePizzas = category === "todas" ? pizzas : pizzas.filter((pizza) => pizza.category === category);
  const cards = visiblePizzas.map((pizza) => {
    const card = document.createElement("article");
    card.className = "pizza-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "pizza-card__image-wrap";
    const image = document.createElement("img");
    image.className = "pizza-card__image";
    image.addEventListener("error", () => {
      image.src = pizza.fallbackImage;
    }, { once: true });
    image.alt = `Pizza ${pizza.name}`;
    image.loading = "lazy";
    image.src = pizza.image;
    const tag = document.createElement("span");
    tag.className = "pizza-card__tag";
    tag.textContent = pizza.tag;
    imageWrap.append(image, tag);

    const body = document.createElement("div");
    body.className = "pizza-card__body";
    const titleRow = document.createElement("div");
    titleRow.className = "pizza-card__title-row";
    const title = document.createElement("h3");
    title.textContent = pizza.name;
    const prices = document.createElement("span");
    prices.className = "pizza-card__prices";
    if (pizza.originalPrice) {
      const originalPrice = document.createElement("del");
      originalPrice.textContent = formatPrice(pizza.originalPrice);
      prices.append(originalPrice);
    }
    const price = document.createElement("span");
    price.className = "pizza-card__price";
    price.textContent = formatPrice(pizza.price);
    prices.append(price);
    titleRow.append(title, prices);

    const description = document.createElement("p");
    description.className = "pizza-card__description";
    description.textContent = pizza.description;
    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.type = "button";
    addButton.dataset.add = pizza.id;
    addButton.setAttribute("aria-label", `Adicionar ${pizza.name} à sacola`);
    const addLabel = document.createElement("span");
    addLabel.textContent = "Adicionar à sacola";
    const plus = document.createElement("span");
    plus.setAttribute("aria-hidden", "true");
    plus.textContent = "+";
    addButton.append(addLabel, plus);
    body.append(titleRow, description, addButton);
    card.append(imageWrap, body);
    return card;
  });
  pizzaGrid.replaceChildren(...cards);
  if (animate) {
    pizzaGrid.classList.remove("is-entering-forward", "is-entering-backward");
    void pizzaGrid.offsetWidth;
    pizzaGrid.classList.add(direction > 0 ? "is-entering-forward" : "is-entering-backward");
  }
}

function renderCart() {
  const cartItems = [...cart.values()];
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.pizza.price * item.quantity, 0);
  document.querySelector("#cart-count").textContent = itemCount;
  document.querySelector("#cart-title-count").textContent = itemCount ? `(${itemCount})` : "";
  document.querySelector("#cart-subtotal").textContent = formatPrice(subtotal);
  const orderLines = cartItems.map(({ pizza, quantity }) => {
    const quantityLabel = quantity > 1 ? ` (quantidade: ${quantity})` : "";
    return `° Pizza ${pizza.name}${quantityLabel} no valor de ${formatPrice(pizza.price)}!`;
  });
  const orderMessage = [
    "Olá, pizzaiolo!",
    "Após verificar o cardápio, vou querer pedir o seguinte:",
    ...orderLines
  ].join("\n");
  document.querySelector("#place-order").href = `https://wa.me/5511945743922?text=${encodeURIComponent(orderMessage)}`;
  document.querySelector("#cart-delivery-note").textContent = subtotal > 60 ? "Você ganhou frete grátis." : "Frete grátis acima de R$ 60.";
  document.querySelector("#cart-empty").hidden = itemCount > 0;
  document.querySelector("#cart-footer").hidden = itemCount === 0;
  const itemElements = cartItems.map(({ pizza, quantity }) => {
    const item = document.createElement("article");
    item.className = "cart-item";
    const image = document.createElement("img");
    image.addEventListener("error", () => {
      image.src = pizza.fallbackImage;
    }, { once: true });
    image.alt = "";
    image.src = pizza.image;
    const details = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = pizza.name;
    const unitPrice = document.createElement("p");
    unitPrice.textContent = `${formatPrice(pizza.price)} cada`;
    const quantityControl = document.createElement("div");
    quantityControl.className = "quantity-control";
    quantityControl.setAttribute("aria-label", `Quantidade de ${pizza.name}`);
    for (const [change, label, text] of [[-1, `Remover uma ${pizza.name}`, "−"], [1, `Adicionar uma ${pizza.name}`, "+"]]) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.quantity = pizza.id;
      button.dataset.change = change;
      button.setAttribute("aria-label", label);
      button.textContent = text;
      if (change === 1) {
        const count = document.createElement("span");
        count.textContent = quantity;
        quantityControl.append(button);
        quantityControl.insertBefore(count, button);
      } else {
        quantityControl.append(button);
      }
    }
    details.append(title, unitPrice, quantityControl);
    const total = document.createElement("span");
    total.className = "cart-item__price";
    total.textContent = formatPrice(pizza.price * quantity);
    item.append(image, details, total);
    return item;
  });
  document.querySelector("#cart-items").replaceChildren(...itemElements);
}

function showAddConfirmation(pizzaName) {
  addConfirmation.textContent = `${pizzaName} adicionada à sacola.`;
  addConfirmation.hidden = false;
  clearTimeout(addConfirmationTimeout);
  addConfirmationTimeout = setTimeout(() => {
    addConfirmation.hidden = true;
  }, 3000);
}

function setCartOpen(isOpen) {
  cartPanel.classList.toggle("is-open", isOpen);
  cartPanel.setAttribute("aria-hidden", String(!isOpen));
  cartPanel.inert = !isOpen;
  cartBackdrop.hidden = !isOpen;
  document.body.style.overflow = isOpen ? "hidden" : "";
  if (isOpen) document.querySelector("#close-cart").focus();
  else document.querySelector("#open-cart").focus();
}

document.querySelector(".category-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button || button.dataset.category === activeCategory) return;
  const categories = [...document.querySelectorAll(".category-tab")].map((tab) => tab.dataset.category);
  const direction = categories.indexOf(button.dataset.category) > categories.indexOf(activeCategory) ? 1 : -1;
  document.querySelectorAll(".category-tab").forEach((tab) => {
    const isActive = tab === button;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
  activeCategory = button.dataset.category;
  renderPizzas(activeCategory, direction, true);
});

pizzaGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const pizza = pizzas.find((item) => item.id === button.dataset.add);
  const current = cart.get(pizza.id);
  cart.set(pizza.id, { pizza, quantity: (current?.quantity ?? 0) + 1 });
  renderCart();
  showAddConfirmation(pizza.name);
});

document.querySelector("#cart-items").addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (!button) return;
  const item = cart.get(button.dataset.quantity);
  const quantity = item.quantity + Number(button.dataset.change);
  if (quantity <= 0) cart.delete(button.dataset.quantity);
  else cart.set(button.dataset.quantity, { ...item, quantity });
  renderCart();
});

document.querySelector("#open-cart").addEventListener("click", () => setCartOpen(true));
document.querySelector("#close-cart").addEventListener("click", () => setCartOpen(false));
document.querySelector("#browse-menu").addEventListener("click", () => setCartOpen(false));
cartBackdrop.addEventListener("click", () => setCartOpen(false));
document.addEventListener("keydown", (event) => {
  if (!cartPanel.classList.contains("is-open")) return;
  if (event.key === "Escape") {
    setCartOpen(false);
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = [...cartPanel.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter((element) => !element.closest("[hidden]"));
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

renderPizzas();
renderCart();