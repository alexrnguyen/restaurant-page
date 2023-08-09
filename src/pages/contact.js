const createContact = () => {
  const contactContent = document.createElement("div");
  contactContent.className = "contact-page";

  const header = document.createElement("h1");
  header.textContent = "Contact Us";

  const contentContainer = document.createElement("div");
  contentContainer.className = "content-container";

  contentContainer.appendChild(createForm());
  contentContainer.appendChild(createMapSnapshot());

  contactContent.appendChild(header);
  contactContent.appendChild(contentContainer);
  return contactContent;
};

const createForm = () => {
  const contactForm = document.createElement("form");
  contactForm.id = "contact-form";
  contactForm.action = "/";
  contactForm.method = "post";

  const formHeader = document.createElement("h3");
  formHeader.className = "form-header";
  formHeader.textContent = "Message Us";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "name";
  nameInputLabel.textContent = "Full Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);

  // Email
  const emailInputContainer = document.createElement("div");
  const emailInputLabel = document.createElement("label");
  emailInputLabel.for = "email";
  emailInputLabel.textContent = "Email";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.required = true;
  emailInput.placeholder = "eg. johnsmith@gmail.com";

  emailInputContainer.appendChild(emailInputLabel);
  emailInputContainer.appendChild(emailInput);

  // Message
  const messageInputContainer = document.createElement("div");
  const messageInputLabel = document.createElement("label");
  messageInputLabel.for = "message";
  messageInputLabel.textContent = "Message";

  const messageInput = document.createElement("textarea");
  messageInput.name = "message";
  messageInput.id = "message";
  messageInput.required = true;
  messageInput.rows = 10;
  messageInput.cols = 50;
  messageInput.placeholder = "Type a message...";

  messageInputContainer.appendChild(messageInputLabel);
  messageInputContainer.appendChild(messageInput);

  // Send Button
  const sendButton = document.createElement("button");
  sendButton.type = "submit";
  sendButton.className = "send-button";
  sendButton.textContent = "Send";

  contactForm.appendChild(formHeader);
  contactForm.appendChild(nameInputContainer);
  contactForm.appendChild(emailInputContainer);
  contactForm.appendChild(messageInputContainer);
  contactForm.appendChild(sendButton);

  contactForm.onsubmit = (event) => {
    event.preventDefault();
  };
  return contactForm;
};

const createMapSnapshot = () => {
  const mapSnapshot = document.createElement("iframe");
  mapSnapshot.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.08040429647184!2d-113.48963308241525!3d53.57056495070463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02309c5d8aa23%3A0xf8f4a86e5afd906f!2s9570%20118%20Ave%20NW%2C%20Edmonton%2C%20AB%20T5G%200P1!5e0!3m2!1sen!2sca!4v1691552720657!5m2!1sen!2sca";
  mapSnapshot.width = "600";
  mapSnapshot.height = "450";
  return mapSnapshot;
};

export default createContact;
