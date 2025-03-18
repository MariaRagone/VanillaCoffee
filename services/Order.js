import API from "./API.js";

export async function loadData() {
  const data = await API.fetchMenu();
  app.store.menu = data;
}
window.addEventListener("DOMContentLoaded", () => {
  loadData();
});
