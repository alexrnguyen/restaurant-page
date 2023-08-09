import pageLoad from "./page-load";
import createHome from "./pages/home";
import createAbout from "./pages/about";
import createMenu from "./pages/menu";
import createReservations from "./pages/reservations";
import createContact from "./pages/contact";

const loadHome = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.appendChild(createHome());

  // Add event listener for Book Table button
  const bookTableButton = document.querySelector(".book-table");
  bookTableButton.addEventListener("click", () =>
    loadReservations(mainContent)
  );
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

const setLinkActive = (link, navLinks) => {
  Array.from(navLinks).forEach((navLink) => navLink.classList.remove("active"));
  link.classList.add("active");
};

const initializeWebsite = () => {
  pageLoad();
  const content = document.getElementById("content");
  const mainContent = document.getElementById("main-content");
  loadHome(mainContent);

  // Navigation Links
  const navLinks = document.querySelectorAll(".nav-link");
  const logo = document.querySelector(".logo");
  const aboutButton = document.querySelector(".about");
  const menuButton = document.querySelector(".menu");
  const reservationsButton = document.querySelector(".reservations");
  const contactButton = document.querySelector(".contact-us");

  // Event Listeners
  logo.addEventListener("click", () => {
    Array.from(navLinks).forEach((navLink) =>
      navLink.classList.remove("active")
    );
    loadHome(mainContent);
  });
  aboutButton.addEventListener("click", () => {
    setLinkActive(aboutButton, navLinks);
    loadAbout(mainContent);
  });
  menuButton.addEventListener("click", () => {
    setLinkActive(menuButton, navLinks);
    loadMenu(mainContent);
  });
  reservationsButton.addEventListener("click", () => {
    setLinkActive(reservationsButton, navLinks);
    loadReservations(mainContent);
  });
  contactButton.addEventListener("click", () => {
    setLinkActive(contactButton, navLinks);
    loadContact(mainContent);
  });
};

initializeWebsite();
