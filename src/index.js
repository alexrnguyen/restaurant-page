import pageLoad from "./page-load";
import createHome from "./pages/home";
import createAbout from "./pages/about";
import createMenu from "./pages/menu";
import createReservations from "./pages/reservations";
import createContact from "./pages/contact";

const loadHome = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild(createHome());
};

const loadAbout = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild(createAbout());
};

const loadMenu = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild(createMenu());
};

const loadReservations = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild(createReservations());
};

const loadContact = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild(createContact());
};

const initializeWebsite = () => {
  pageLoad();
  const content = document.getElementById("content");
  const mainContent = document.getElementById("main-content");
  loadHome(mainContent);

  // Navigation Links
  const logo = document.querySelector(".logo");
  const aboutButton = document.querySelector(".about");
  const menuButton = document.querySelector(".menu");
  const reservationsButton = document.querySelector(".reservations");
  const contactButton = document.querySelector(".contact-us");

  // Event Listeners
  logo.addEventListener("click", () => loadHome(mainContent));
  aboutButton.addEventListener("click", () => loadAbout(mainContent));
  menuButton.addEventListener("click", () => loadMenu(mainContent));
  reservationsButton.addEventListener("click", () =>
    loadReservations(mainContent)
  );
  contactButton.addEventListener("click", () => loadContact(mainContent));
};

initializeWebsite();
