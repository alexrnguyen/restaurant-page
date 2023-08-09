import { MenuItem } from "../models/MenuItem";

// Images
import PokeBowl from "../assets/img/menu-items/poke-bowl.jpg";
import Salad from "../assets/img/menu-items/salad.jpg";
import SirloinSteak from "../assets/img/menu-items/sirloinsteak.jpg";
import Ribs from "../assets/img/menu-items/ribs.jpg";
import Sushi from "../assets/img/menu-items/sushi.jpg";
import Burger from "../assets/img/menu-items/burger.jpg";

const createMenu = () => {
  const menuContent = document.createElement("div");
  menuContent.className = "menu-page";

  const header = document.createElement("h1");
  header.textContent = "Menu";

  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";

  generateMenuItems(menuGrid);

  menuContent.appendChild(header);
  menuContent.appendChild(menuGrid);
  return menuContent;
};

const generateMenuItems = (menuGrid) => {
  const pokeBowlDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const pokeBowl = new MenuItem("Poke Bowl", PokeBowl, pokeBowlDescription, 15);
  menuGrid.appendChild(createMenuItem(pokeBowl));

  const saladDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const salad = new MenuItem("Salad", Salad, saladDescription, 12);
  menuGrid.appendChild(createMenuItem(salad));

  const sirloinSteakDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const sirloinSteak = new MenuItem(
    "Sirloin Steak",
    SirloinSteak,
    sirloinSteakDescription,
    27
  );
  menuGrid.appendChild(createMenuItem(sirloinSteak));

  const ribsDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const ribs = new MenuItem("Ribs", Ribs, ribsDescription, 23);
  menuGrid.appendChild(createMenuItem(ribs));

  const sushiDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const sushi = new MenuItem("Sushi", Sushi, sushiDescription, 25);
  menuGrid.appendChild(createMenuItem(sushi));

  const burgerDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const burger = new MenuItem("Burger", Burger, burgerDescription, 18);
  menuGrid.appendChild(createMenuItem(burger));
};

const createMenuItem = ({ name, img, description, price }) => {
  const menuItemContainer = document.createElement("div");
  menuItemContainer.className = "menu-item-container";

  // Create menu item components (name, image, description, price)
  const itemName = document.createElement("h3");
  itemName.className = "item-name";
  itemName.textContent = name;

  const itemImage = new Image();
  itemImage.classList = "item-img";
  itemImage.src = img;

  const itemDescription = document.createElement("p");
  itemDescription.className = "item-description";
  itemDescription.textContent = description;

  const itemPrice = document.createElement("div");
  itemPrice.className = "item-price";
  itemPrice.textContent = `\$${price}`;

  // Add menu item components to container
  menuItemContainer.appendChild(itemName);
  menuItemContainer.appendChild(itemImage);
  menuItemContainer.appendChild(itemDescription);
  menuItemContainer.appendChild(itemPrice);

  return menuItemContainer;
};

export default createMenu;
