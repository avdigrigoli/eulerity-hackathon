import Lenis from "lenis";

export const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});