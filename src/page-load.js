import "../src/css/style.css";

/**
 *
 */
const pageLoad = () => {
  const content = document.getElementById("content");
  const mainContent = document.createElement("div");
  mainContent.id = "main-content";
  content.appendChild(createNavBar());
  content.appendChild(mainContent);
  content.appendChild(createFooter());
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
    const link = document.createElement("button");
    link.classList.add("nav-link");
    link.classList.add(linkName.replace(" ", "-").toLowerCase());
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

  const copyright = document.createElement("span");
  copyright.textContent = "Copyright © Odin Restaurant 2023";

  footer.appendChild(copyright);
  return footer;
};

export default pageLoad;
