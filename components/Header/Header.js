class Header {
  handlerOpenShoppingpage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
    <div class="header-container">
        <div class="header-counter" onclick="headerPage.handlerOpenShoppingpage();">
        👉🏼 ${count}
        </div>
    </div>
    `;

    ROOT_HEADER.innerHTML = html;
  }
}
const headerPage = new Header();
