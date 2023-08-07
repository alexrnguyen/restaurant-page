const createReservations = () => {
  const reservationsContent = document.createElement("div");
  reservationsContent.className = "reservations";

  const header = document.createElement("h1");
  header.textContent = "Make a Reservation";

  reservationsContent.appendChild(header);
  return reservationsContent;
};

export default createReservations;
