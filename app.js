import Store from "./services/Store";
import API from "./services/API";
import { loadData } from "./services/Order";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
