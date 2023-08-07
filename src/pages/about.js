const createAbout = () => {
  const aboutContent = document.createElement("div");
  aboutContent.className = "about";

  const header = document.createElement("h1");
  header.textContent = "About Us";

  aboutContent.appendChild(header);
  return aboutContent;
};

export default createAbout;
