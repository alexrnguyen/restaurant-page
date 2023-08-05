import HomeImage from "../src/assets/img/image.jpg";

/**
 *
 */
const pageLoad = () => {
  const content = document.getElementById("content");

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

  content.appendChild(header);
  content.appendChild(image);
  content.appendChild(description);
};

export default pageLoad;
