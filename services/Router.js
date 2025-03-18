const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        Router.go(location.pathname);
      });
    });

    go: (route, addToHistory = true) => {
      if (addToHistory) {
        history.pushState({ route }, "", route);
      }
      let pageElement = null;
      switch (route) {
        case "/":
          pageElement = document.createElement("menu-page");
          pageElement.textContent = "Menu";
          break;
        case "/order":
          pageElement = document.createElement("order-page");
          pageElement.textContent = "Your Order";
          break;
        default:
          if (route.startsWith("/product-")) {
            pageElement = document.createElement("details-page");
            pageElement.textContent = "Details";
            pageElement.dataset.productId = route.substring(
              route.lastIndexOf("-") + 1
            );
          }
          break;
      }
      if (pageElement) {
        document.querySelector("main").innerHTML = "";
        document.querySelector("main").appendChild(pageElement);
      }

      window.scrollX = 0;
      window.scrolly = 0;
    };
  },
};

export default Router;
