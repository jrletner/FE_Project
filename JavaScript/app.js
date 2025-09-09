import { clubs, addClub, findClubById } from "./src/store/data.js"
import { getVisibleClubs, ui } from "./src/store/filters.module.js"
import { renderClubs, setStatus } from "./src/ui/render.module.js"
import { debounce } from "./src/utils/debounce.module.js"

// ---- Footer year & initial paint ----
document.getElementById("year").textContent = new Date().getFullYear();
renderClubs();

// Render + Re-render helper
function paint() {
  const visible = getVisibleClubs(clubs)
  renderClubs(visible)
}

// ---- Event Delegation (same pattern) ----
const clubContainer = document.getElementById("club-info");

clubContainer.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const action = btn.dataset.action;
  const clubId = btn.dataset.clubId;
  const club = findClubById(clubId);
  if (!club) return;

  if (action === "add-member") {
    const input = document.getElementById(`member-name-${clubId}`);
    const name = (input?.value || "").trim();

    if (name === "") {
      setStatus(clubId, "Please enter a member name.");
      return;
    }

    const result = club.addMember(name);
    if (!result.ok) {
      const msg =
        result.reason === "full"
          ? "Club is at capacity."
          : result.reason === "duplicate"
            ? "Member name already exists."
            : "Invalid member name.";
      setStatus(clubId, msg);
      return;
    }

    setStatus(clubId, "Member added.");
    renderClubs();
  }

  if (action === "remove-member") {
    const memberId = btn.dataset.memberId;
    club.removeMember(memberId);
    renderClubs();
  }
});

// ---- Create Club form (unchanged) ----
document.getElementById("club-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("club-name");
  const capacityInput = document.getElementById("club-capacity");
  const errorMessage = document.getElementById("error-message");

  const name = nameInput.value.trim();
  const capacity = parseInt(capacityInput.value, 10);

  if (name === "" || isNaN(capacity) || capacity <= 0) {
    errorMessage.textContent =
      "Please enter a valid club name and capacity (min 1).";
    return;
  }

  const exists = clubs.some((c) => c.name.toLowerCase() === name.toLowerCase());
  if (exists) {
    errorMessage.textContent = "A club with this name already exists.";
    return;
  }

  errorMessage.textContent = "";
  addClub(name, capacity);
  paint();
  nameInput.value = "";
  capacityInput.value = "";
  nameInput.focus();
});

// Toolbar
const onSearchInput = debounce((value) => {
  ui.searchText = value;
  renderClubs();
}, 500);

document.getElementById("search").addEventListener("input", (e) => {
  onSearchInput(e.target.value);
});

// ---- Filter/sort wiring (same-day changes, no debounce) ----
document.getElementById("only-open").addEventListener("change", (e) => {
  ui.onlyOpen = e.target.checked;
  renderClubs();
});

document.getElementById("sort-by").addEventListener("change", (e) => {
  ui.sortBy = e.target.value;
  renderClubs();
});

paint();