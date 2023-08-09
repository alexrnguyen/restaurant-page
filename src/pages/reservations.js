const createReservations = () => {
  const reservationsContent = document.createElement("div");
  reservationsContent.className = "reservation-page";

  const header = document.createElement("h1");
  header.textContent = "Make a Reservation";

  const reservationContainer = document.createElement("div");
  reservationContainer.className = "reservation-container";
  reservationContainer.appendChild(createForm());

  reservationsContent.appendChild(header);
  reservationsContent.appendChild(reservationContainer);
  return reservationsContent;
};

const createForm = () => {
  const reservationForm = document.createElement("form");
  reservationForm.id = "reservation-form";
  reservationForm.action = "/";
  reservationForm.method = "post";

  // Name
  const nameInputContainer = document.createElement("div");
  const nameInputLabel = document.createElement("label");
  nameInputLabel.for = "name";
  nameInputLabel.textContent = "Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.id = "name";
  nameInput.required = true;

  nameInputContainer.appendChild(nameInputLabel);
  nameInputContainer.appendChild(nameInput);

  // Date
  const dateInputContainer = document.createElement("div");
  const dateInputLabel = document.createElement("label");
  dateInputLabel.for = "date";
  dateInputLabel.textContent = "Date";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "date";
  dateInput.id = "date";
  dateInput.required = true;
  dateInput.min = new Date()
    .toISOString()
    .replace(/T.*/, "")
    .split("-")
    .join("-");

  dateInputContainer.appendChild(dateInputLabel);
  dateInputContainer.appendChild(dateInput);

  // Time
  const timeInputContainer = document.createElement("div");
  const timeInputLabel = document.createElement("label");
  timeInputLabel.for = "time";
  timeInputLabel.textContent = "Time";

  const timeInput = document.createElement("select");
  timeInput.name = "time";
  timeInput.id = "time";
  timeInput.required = true;

  timeInput.add(addPlaceholder());

  dateInput.onchange = () => {
    timeInput.innerHTML = "";
    // Add placeholder back if date input is cleared
    if (dateInput.valueAsDate === null) {
      timeInput.add(addPlaceholder());
      return;
    }
    const dayOfWeek = dateInput.valueAsDate.getDay();
    let closingHour;
    // Monday - Thursday (close at 8pm -> 20:00)
    if (dayOfWeek < 4) {
      closingHour = 20;
    } else {
      closingHour = 23;
    }
    for (let time = 8; time < closingHour; time = time + 0.5) {
      const option = document.createElement("option");
      // Determine text content based on whether the time ends in :00 or :30
      option.text = `${time % 1 === 0 ? time : time - 0.5}:${
        time % 1 === 0 ? "00" : "30"
      }`;
      if (time === 8) {
        option.selected = "selected";
      }
      timeInput.add(option);
    }
  };

  timeInputContainer.appendChild(timeInputLabel);
  timeInputContainer.appendChild(timeInput);

  // Number of People
  const numPeopleContainer = document.createElement("div");
  const numPeopleLabel = document.createElement("label");
  numPeopleLabel.for = "num-people";
  numPeopleLabel.textContent = "Number of Guests (up to 10)";

  const numPeopleInput = document.createElement("select");
  numPeopleInput.name = "num-people";
  numPeopleInput.id = "num-people";
  numPeopleInput.required = true;

  for (let i = 1; i < 11; i++) {
    const option = document.createElement("option");
    option.text = i;

    // Select 2 guests by default
    if (i === 2) {
      option.selected = "selected";
    }
    numPeopleInput.add(option);
  }

  numPeopleContainer.appendChild(numPeopleLabel);
  numPeopleContainer.appendChild(numPeopleInput);
  // Submit Button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "submit-button";
  submitButton.textContent = "Submit";

  // Add components to form element
  reservationForm.appendChild(nameInputContainer);
  reservationForm.appendChild(dateInputContainer);
  reservationForm.appendChild(timeInputContainer);
  reservationForm.appendChild(numPeopleContainer);
  reservationForm.appendChild(submitButton);

  reservationForm.onsubmit = (event) => {
    event.preventDefault();
  };
  return reservationForm;
};

const addPlaceholder = () => {
  const placeholder = document.createElement("option");
  placeholder.textContent = "Please choose the date first!";
  placeholder.selected = true;
  placeholder.disabled = true;
  placeholder.hidden = true;
  return placeholder;
};

export default createReservations;
