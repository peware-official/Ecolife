document.addEventListener("DOMContentLoaded", function() {

    // 1. Initialize Animation On Scroll (AOS) library
    AOS.init({
        once: true, // Animation runs only once while scrolling down
        offset: 100 // Trigger animation 100px before the element
    });

    // 2. Handle Navbar background color change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Handle Hamburger Menu for mobile devices
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon from burger to X
        const icon = hamburger.querySelector('i');
        if(navLinks.classList.contains('active')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking any nav link (on mobile)
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

});