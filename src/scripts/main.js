const container = document.querySelector(".app-room");
const seats = document.querySelectorAll(
  ".seats-row__seat:not(.seats-row__seat--occupied)"
);
const count = document.querySelector(".app-summary__places");
const price = document.querySelector(".app-summary__price");
const movieSelect = document.getElementById("movie-select");

let ticketPrice = parseInt(movieSelect.value);

//Selecting seats
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seats-row__seat") &&
    !e.target.classList.contains("seats-row__seat--occupied")
  ) {
    e.target.classList.toggle("seats-row__seat--selected");
  }
});
