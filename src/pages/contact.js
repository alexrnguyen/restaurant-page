const createContact = () => {
  const contactContent = document.createElement("div");
  contactContent.className = "contact-us";

  const test = document.createElement("h1");
  test.textContent = "Success: Contact Us";

  contactContent.appendChild(test);
  return contactContent;
};

export default createContact;
