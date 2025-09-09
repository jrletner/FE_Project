/**
 * pipe: compose functions left-to-right. pipe(f,g,h)(x) = h(g(f(x)))
 */
export function pipe(...fns) {
    return (input) => fns.reduce((val, fn) => fn(val), input);
}