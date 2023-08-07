const createReservations = () => {
  const reservationsContent = document.createElement("div");
  reservationsContent.className = "reservations";

  const test = document.createElement("h1");
  test.textContent = "Success: Reservations";

  reservationsContent.appendChild(test);
  return reservationsContent;
};

export default createReservations;
