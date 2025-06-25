document.addEventListener('DOMContentLoaded', function() {

    // 1. Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Functionality
    const hamburger = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav-menu');
    const body = document.body;

    hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('is-active');
        // Optional: prevent body scroll when mobile menu is open
        body.style.overflow = mobileNav.classList.contains('is-active') ? 'hidden' : '';
    });

    // 3. Animation on Scroll
    // This is a more robust way that resets animations if you scroll back up
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Instead of adding a class, we can set a data attribute
                entry.target.dataset.visible = true;
            } else {
                // Optional: remove if you want animations to re-trigger on scroll up
                // entry.target.dataset.visible = false; 
            }
        });
    }, {
        threshold: 0.1
    });

    // Apply animation classes based on data attribute
    // This prevents re-triggering animation on every small scroll movement
    // and keeps the animation logic in CSS where it belongs.
    const elementsToAnimate = document.querySelectorAll('.slide-up, .fade-in');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});