const container = document.querySelector(".app-room");
const seats = document.querySelectorAll(
  ".seats-row__seat:not(.seats-row__seat--occupied)"
);
const count = document.querySelector(".app-summary__places");
const price = document.querySelector(".app-summary__price");
const movieSelect = document.getElementById("movie-select");

const ticketPrice = parseInt(movieSelect.value);

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seats-row__seat")) {
    console.log("seat clicked");
  }
});
