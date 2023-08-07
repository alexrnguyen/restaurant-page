const createAbout = () => {
  const aboutContent = document.createElement("div");
  aboutContent.className = "about";

  const test = document.createElement("h1");
  test.textContent = "Success: About";

  aboutContent.appendChild(test);
  return aboutContent;
};

export default createAbout;
