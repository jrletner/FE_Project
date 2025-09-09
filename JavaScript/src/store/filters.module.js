import { pipe } from "../utils/pipe.module.js"

// UI state (same keys as Class 6)
export const ui = { searchText: "", onlyOpen: false, sortBy: "name-asc" };

// ---- Functional transforms (NEW: built to use with pipe) ----
const applySearch = (list) => {
    const q = ui.searchText.trim().toLowerCase();
    if (!q) return list;
    return list.filter((c) => c.name.toLowerCase().includes(q));
};

const applyOnlyOpen = (list) => {
    if (!ui.onlyOpen) return list;
    return list.filter((c) => c.seatsLeft > 0);
};

const applySort = (list) => {
    const copy = list.slice();
    copy.sort((a, b) => {
        switch (ui.sortBy) {
            case "name-asc":
                return a.name.localeCompare(b.name);
            case "name-desc":
                return b.name.localeCompare(a.name);
            case "seats-desc":
                return b.seatsLeft - a.seatsLeft;
            case "capacity-desc":
                return b.capacity - a.capacity;
            default:
                return 0;
        }
    });
    return copy;
};

// Compose into one function (NEW)
export const getVisibleClubs = pipe(
    (arr) => arr.slice(), // defensive copy
    applySearch,
    applyOnlyOpen,
    applySort
);