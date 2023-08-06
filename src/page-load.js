import HomeImage from "../src/assets/img/image.jpg";
import "../src/css/style.css";

/**
 *
 */
const pageLoad = () => {
  const content = document.getElementById("content");

  content.appendChild(createNavBar());

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  const header = document.createElement("h1");
  header.textContent = "Odin Restaurant";

  const image = new Image();
  image.src = HomeImage;

  const description = document.createElement("p");
  description.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
    software like Aldus PageMaker including versions of Lorem Ipsum.`;

  mainContent.appendChild(header);
  mainContent.appendChild(image);
  mainContent.appendChild(description);

  content.appendChild(mainContent);
};

const createNavBar = () => {
  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "Odin Restaurant";

  const navLinks = document.createElement("ul");
  navLinks.classList.add("nav-links");

  const linkNames = ["About", "Menu", "Reservations", "Contact Us"];

  for (const linkName of linkNames) {
    const link = document.createElement("a");
    link.classList.add("nav-link");
    link.textContent = linkName;
    navLinks.appendChild(link);
  }

  navBar.appendChild(logo);
  navBar.appendChild(navLinks);

  return navBar;
};

const createFooter = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");
};

export default pageLoad;
