const container = document.querySelector(".app-room");
const seats = document.querySelectorAll(
  ".seats-row__seat:not(.seats-row__seat--occupied)"
);
const count = document.querySelector(".app-summary__places");
const price = document.querySelector(".app-summary__price");
const movieSelect = document.getElementById("movie-select");

printLocalData();

let ticketPrice = parseInt(movieSelect.value);

//Save selected movie index and ticket price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

//Change seat count and price value
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".seats-row__seat--selected");

  const seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  price.innerText = `$${selectedSeatsCount * ticketPrice}`;
}

//Change movie
movieSelect.addEventListener("change", (e) => {
  ticketPrice = parseInt(e.target.value);
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

//Collect data from localStorage and print in UI
function printLocalData() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  console.log(selectedSeats);

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("seats-row__seat--selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

//Selecting seats
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seats-row__seat") &&
    !e.target.classList.contains("seats-row__seat--occupied")
  ) {
    e.target.classList.toggle("seats-row__seat--selected");
    updateSelectedCount();
  }
});

//Initial set
updateSelectedCount();
