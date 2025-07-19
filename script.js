// ==========================================
// PORTFOLIO JAVASCRIPT FILE
// ==========================================
// This file contains all JavaScript functionality for the portfolio website
// Author: Mukhtar Sayyed
// Date: 2025

// ==========================================
// 1. TYPED.JS ANIMATION SETUP
// ==========================================
// Creates typewriter effect for the hero section text
// Displays rotating text like "Web Developer..." and "Web Designer..."
var typed = new Typed('#element', {
    strings: ['Web Developer...', '&amp; Web Designer...'], // Array of strings to display
    typeSpeed: 50, // Speed of typing animation (milliseconds per character)
});

// ==========================================
// 2. MOBILE NAVIGATION TOGGLE
// ==========================================
// Toggles the mobile hamburger menu open/closed
// Called when user clicks the hamburger icon
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links'); // Get navigation menu
    navLinks.classList.toggle('active'); // Add/remove 'active' class to show/hide menu
}

// ==========================================
// 3. AUTO-CLOSE MOBILE MENU ON LINK CLICK
// ==========================================
// Automatically closes mobile menu when user clicks any navigation link
// Improves UX by preventing manual menu closing
document.addEventListener('DOMContentLoaded', function() {
    // Wait for DOM to fully load before executing
    
    const navLinks = document.querySelectorAll('.nav-links a'); // Get all navigation links
    const mobileMenu = document.querySelector('.nav-links'); // Get mobile menu container
    
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Check if mobile menu is currently open
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active'); // Close the menu
            }
        });
    });
});

// ==========================================
// FUTURE ENHANCEMENTS (Optional)
// ==========================================
// Additional functionality that can be added:


// Smooth scroll behavior for navigation links
function smoothScrollTo(targetId) {
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Form validation for contact form
function validateContactForm() {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return false;
    }
    return true;
}

// Scroll-triggered animations
function handleScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, options);
    
    sections.forEach(section => observer.observe(section));
}

