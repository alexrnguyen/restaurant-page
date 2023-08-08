const createMenu = () => {
  const menuContent = document.createElement("div");
  menuContent.className = "menu";

  const header = document.createElement("h1");
  header.textContent = "Menu";

  menuContent.appendChild(header);
  return menuContent;
};

const createMenuItem = () => {};

export default createMenu;
