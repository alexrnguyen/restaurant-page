const createContact = () => {
  const contactContent = document.createElement("div");
  contactContent.className = "contact-us";

  const header = document.createElement("h1");
  header.textContent = "Contact Us";

  contactContent.appendChild(header);
  return contactContent;
};

const createForm = () => {
  const contactForm = document.createElement("form");
  return contactForm;
};

export default createContact;
