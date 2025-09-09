// ---- Small utilities (NEW in Class 7) ----
/**
 * debounce: returns a function that delays calling `fn`
 * until there has been no new call for `delay` ms.
 */
export function debounce(fn, delay = 250) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}