// Class 2 — Variables, Numbers, Strings
// Goal: seed a couple of clubs, do simple math, and render to the page.

// 1) Seed data (arrays/objects)
let clubs = [
  { name: "Coding Club", current: 12, capacity: 25 },
  { name: "Art Club", current: 8, capacity: 15 },
];

// 2) Helpers (numbers & math)
function seatsLeft(club) {
  return club.capacity - club.current; // subtraction
}

function percentFull(club) {
  if (club.capacity <= 0) return 0;
  const ratio = club.current / club.capacity; // division
  return Math.round(ratio * 100);             // multiply + round
}

// 3) Render to the DOM (strings + template literals)
function renderClubs() {
  const container = document.getElementById("club-info");
  container.innerHTML = ""; // clear any previous content

  if (clubs.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No clubs yet. Add one above to get started."
    container.appendChild(p)
    return;
  }

  clubs.forEach((club) => {
    const card = document.createElement("div");
    card.className = "club-card";

    // Build a message with template literals and string interpolation
    const message = `${club.name}: ${club.current}/${club.capacity} seats filled (${seatsLeft(club)} left, ${percentFull(club)}% full)`;

    card.textContent = message;
    container.appendChild(card);
  });
}

function addClub(name, capacity) {
  clubs.push({ name, current: 0, capacity });
  console.log(clubs);

  renderClubs();
}

document.getElementById("club-form").addEventListener("submit", function (e) {
  // stop the page from automatically refreshing when submit clicked
  e.preventDefault();
  // grab form controls
  const nameInput = document.getElementById("club-name");
  const capacityInput = document.getElementById("club-capacity")
  const errorMessage = document.getElementById('error-message')

  // grab data from the inputs
  const name = nameInput.value.trim()
  const capacity = parseInt(capacityInput.value, 10)

  // validate the data
  if (name === '' || isNaN(capacity) || capacity <= 0) {
    errorMessage.textContent = "Please enter a valid club name and capacity (min 1)."
    return;
  }

  // check for duplicate club name
  const exists = clubs.some((club) => club.name.toLowerCase() === name.toLowerCase());

  if (exists) {
    errorMessage.textContent = "A club with this name already exists."
    return;
  }

  // IF no errors, the program continues
  // validation passed, clear error, submit data
  errorMessage.textContent = '';
  addClub(name, capacity)

  // reset the form
  nameInput.value = '';
  capacityInput.value = '';
  nameInput.focus();
});

// Initial paint
renderClubs();
