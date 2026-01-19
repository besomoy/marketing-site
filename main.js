import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows immediately
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with slight delay (handled by CSS transition mostly, but position update here)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor hover effects
document.querySelectorAll('a, button, .service-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.borderColor = '#FF4D00';
        cursorOutline.style.backgroundColor = 'rgba(255, 77, 0, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.borderColor = 'rgba(255, 77, 0, 0.5)';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});


// Navbar Blur on Scroll
gsap.to("#navbar", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=100",
        scrub: true
    },
    backgroundColor: "rgba(3, 3, 3, 0.8)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)"
});


// Hero Animations
const tlHero = gsap.timeline();

tlHero.from(".hero-text-wrapper h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
})
    .from(".hero-text-wrapper p", {
        y: 20,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from(".hero-text-wrapper div a, .hero-text-wrapper div button", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
    }, "-=0.6")
    .to(".skew-card", {
        opacity: 1,
        x: 0,
        y: (i) => i === 0 ? 40 : -40, // slight offset adjustment
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=1");

// Interactive 3D Card Effect in Hero
const heroSection = document.querySelector('section');
const cards = document.querySelectorAll('.skew-card');

heroSection.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    gsap.to(cards, {
        rotateY: -10 + x,
        rotateX: 5 - y,
        duration: 0.5,
        ease: "power1.out"
    });
});


// Marquee Animation
gsap.to(".marquee-track", {
    xPercent: -50,
    ease: "none",
    duration: 20,
    repeat: -1
});


// Founder Section Parallax
gsap.utils.toArray('.founder-panel').forEach((panel, i) => {
    gsap.from(panel, {
        scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});


// Service Items Reveal
gsap.utils.toArray('.service-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1
    });
});

// Contact Form Input Animation
const inputs = document.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input.parentElement, { scale: 1.02, duration: 0.3 });
    });
    input.addEventListener('blur', () => {
        gsap.to(input.parentElement, { scale: 1, duration: 0.3 });
    });
});
