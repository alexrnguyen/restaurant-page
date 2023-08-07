const createMenu = () => {
  const menuContent = document.createElement("div");
  menuContent.className = "menu";

  const test = document.createElement("h1");
  test.textContent = "Success: Menu";

  menuContent.appendChild(test);
  return menuContent;
};

export default createMenu;
