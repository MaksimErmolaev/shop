function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

//http://myjsons/v/362e848
//"server/catalog.json"
fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;

    setTimeout(() => {
      spinnerPage.handleClear();
      render();
    }, 2000);
  })
  .catch((error) => {
    spinnerPage.handleClear();
    errorPage.render();
  });
