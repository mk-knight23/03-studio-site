import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Cursor Logic
const crsr = document.querySelector('.cursor') as HTMLElement;

if (crsr) {
    document.addEventListener('mousemove', (dets) => {
        gsap.to(crsr, {
            x: dets.clientX - 10,
            y: dets.clientY - 10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    // Cursor hover effects
    document.querySelectorAll('a, button, .product-item, .work-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(crsr, { scale: 2.5, duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(crsr, { scale: 1, duration: 0.3 });
        });
    });
}

// Hero animations
gsap.from('.hero-label', {
    y: 30,
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
    ease: 'power3.out'
});

gsap.from('.page1 h1', {
    y: 60,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.hero-desc', {
    y: 30,
    opacity: 0,
    delay: 0.8,
    duration: 0.8
});

gsap.from('.hero-stats .stat', {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    delay: 1,
    duration: 0.6
});

// Section headers
gsap.utils.toArray<HTMLElement>('.section-header').forEach(header => {
    gsap.from(header, {
        scrollTrigger: { trigger: header, start: 'top 85%' },
        y: 40,
        opacity: 0,
        duration: 0.8
    });
});

// About
gsap.from('.about-text p', {
    scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6
});

gsap.from('.about-featured', {
    scrollTrigger: { trigger: '.about-featured', start: 'top 80%' },
    y: 40,
    opacity: 0,
    duration: 0.8
});

// Products
gsap.from('.product-item', {
    scrollTrigger: { trigger: '.products-list', start: 'top 80%' },
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
});

// Work cards
gsap.from('.work-card', {
    scrollTrigger: { trigger: '.work-grid', start: 'top 80%' },
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
});

// Skills
gsap.from('.skill-col', {
    scrollTrigger: { trigger: '.skills-container', start: 'top 80%' },
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6
});

// Footer
gsap.from('.footer-content', {
    scrollTrigger: { trigger: 'footer', start: 'top 80%' },
    y: 40,
    opacity: 0,
    duration: 0.8
});
