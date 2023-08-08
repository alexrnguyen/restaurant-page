import HomeImage from "../../src/assets/img/image.jpg";
import createReservations from "./reservations";

const createHome = () => {
  const homeContent = document.createElement("div");
  homeContent.className = "home";

  const header = document.createElement("h1");
  header.textContent = "Odin Restaurant";

  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";

  const image = new Image();
  image.src = HomeImage;
  image.classList.add("home-img");
  imageContainer.appendChild(image);

  const bookTableButton = document.createElement("button");
  bookTableButton.className = "book-table";
  bookTableButton.textContent = "Book a Table";
  imageContainer.appendChild(bookTableButton);

  const description = document.createElement("p");
  description.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
    software like Aldus PageMaker including versions of Lorem Ipsum.`;
  description.classList.add("description");

  const locationHoursContainer = document.createElement("div");
  locationHoursContainer.className = "location-hours-container";

  homeContent.appendChild(header);
  homeContent.appendChild(imageContainer);
  homeContent.appendChild(description);

  return homeContent;
};

const createLocationContainer = () => {};

const createHoursContainer = () => {};

export default createHome;
