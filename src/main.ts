import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Cursor Logic
const crsr = document.querySelector(".cursor") as HTMLElement;

if (crsr) {
    document.addEventListener("mousemove", (dets) => {
        gsap.to(crsr, {
            x: dets.x,
            y: dets.y,
            duration: 0.2,
            ease: "power2.out"
        });
    });
}

// Page 1 Animations
gsap.from(".page1 h1, .page1 h2", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".hero-content p", {
    y: 30,
    opacity: 0,
    delay: 1,
    duration: 0.8
});

// Page 2 Animations
gsap.from(".page2 h1", {
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8
});

gsap.from(".page2-left h2", {
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        start: "top 70%",
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
});

gsap.from(".page2-right p", {
    scrollTrigger: {
        trigger: ".page2",
        scroller: ".main",
        start: "top 60%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    delay: 0.3
});

// Product Cards Animation
gsap.from(".product-card", {
    scrollTrigger: {
        trigger: ".products-grid",
        scroller: ".main",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
});

// Work Cards Animation
gsap.from(".work-card", {
    scrollTrigger: {
        trigger: ".work-grid",
        scroller: ".main",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
});

// Skill Categories Animation
gsap.from(".skill-category", {
    scrollTrigger: {
        trigger: ".skills-grid",
        scroller: ".main",
        start: "top 80%",
    },
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
});

// Footer Animation
gsap.from(".footer-content", {
    scrollTrigger: {
        trigger: "footer",
        scroller: ".main",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8
});

// Hover effects on cards
document.querySelectorAll('.product-card, .work-card, .skill-category').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(crsr, {
            scale: 1.5,
            duration: 0.3
        });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(crsr, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Nav link hover
document.querySelectorAll('#nav-part2 a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(crsr, {
            scale: 2,
            duration: 0.3
        });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(crsr, {
            scale: 1,
            duration: 0.3
        });
    });
});
