const createHome = () => {};

const loadHome = () => {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createHome());
};

export default loadHome;
