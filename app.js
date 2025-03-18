import Store from "./services/Store";
import API from "./services/API";
import { loadData } from "./services/Order";
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { ProcuctItem } from "./components/ProductItem.js";
import { CartItem } from "./components/ProductItem.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("appcartchange", (event) => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
