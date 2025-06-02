import gsap from 'gsap';

export const fadeIn = (target) => gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 1 });
