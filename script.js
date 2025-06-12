/**
 * Science Sue Website - JavaScript Functionality
 * Handles navigation, mobile menu, form submission, and page switching
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== NAVIGATION FUNCTIONALITY =====
    
    const navbar = document.getElementById('navbar');
    const navbarBurger = document.getElementById('navbar-burger');
    const navbarMenu = document.getElementById('navbar-menu');
    const navbarItems = document.querySelectorAll('.navbar-item');
    const pageSections = document.querySelectorAll('.page-section');
    
    // Handle scroll effect for navbar background
    let isScrolled = false;
    
    function handleScroll() {
        const scrolled = window.scrollY > 20;
        if (scrolled !== isScrolled) {
            isScrolled = scrolled;
            if (isScrolled) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // ===== MOBILE MENU FUNCTIONALITY =====
    
    let isMenuOpen = false;
    
    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            navbarBurger.classList.add('navbar-burger-active');
            navbarMenu.classList.add('navbar-menu-active');
        } else {
            navbarBurger.classList.remove('navbar-burger-active');
            navbarMenu.classList.remove('navbar-menu-active');
        }
    }
    
    function closeMobileMenu() {
        isMenuOpen = false;
        navbarBurger.classList.remove('navbar-burger-active');
        navbarMenu.classList.remove('navbar-menu-active');
    }
    
    // Mobile menu toggle
    navbarBurger.addEventListener('click', toggleMobileMenu);
    
    // ===== PAGE NAVIGATION =====
    
    function showPage(targetPageId) {
        // Hide all pages
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target page
        const targetPage = document.getElementById(targetPageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Update active navbar item
        navbarItems.forEach(item => {
            item.classList.remove('navbar-item-active');
            if (item.getAttribute('data-page') === targetPageId) {
                item.classList.add('navbar-item-active');
            }
        });
        
        // Close mobile menu
        closeMobileMenu();
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Update URL hash
        if (targetPageId !== 'home') {
            window.history.pushState(null, null, '#' + targetPageId);
        } else {
            window.history.pushState(null, null, window.location.pathname);
        }
    }
    
    // Handle navigation clicks
    navbarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            showPage(targetPage);
        });
    });
    
    // Handle hash-based navigation (direct links)
    function handleHashNavigation() {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            showPage(hash);
        } else {
            showPage('home');
        }
    }
    
    // Handle browser back/forward
    window.addEventListener('popstate', handleHashNavigation);
    
    // Initialize page based on current hash
    handleHashNavigation();
    
    // ===== BUTTON NAVIGATION =====
    
    // Handle all anchor links that start with #
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            const targetPage = href.substring(1);
            
            if (targetPage && document.getElementById(targetPage)) {
                showPage(targetPage);
            }
        }
    });
    
    // ===== CONTACT FORM FUNCTIONALITY =====
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Basic validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // ===== SMOOTH SCROLLING FOR INTERNAL LINKS =====
    
    function smoothScrollTo(element) {
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // ===== ACCESSIBILITY ENHANCEMENTS =====
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && isMenuOpen) {
            closeMobileMenu();
        }
    });
    
    // Focus management for mobile menu
    navbarBurger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileMenu();
        }
    });
    
    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Throttle scroll events
    let scrollTimeout;
    function throttledScroll() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                handleScroll();
                scrollTimeout = null;
            }, 16); // ~60fps
        }
    }
    
    // Replace the scroll event listener with throttled version
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // ===== ANIMATION HELPERS =====
    
    function addPageTransition() {
        // Add subtle page transition effects
        pageSections.forEach(section => {
            section.style.transition = 'opacity 0.3s ease-in-out';
        });
    }
    
    // Initialize page transitions
    addPageTransition();
    
    // ===== UTILITY FUNCTIONS =====
    
    // Get current active page
    function getCurrentPage() {
        const activePage = document.querySelector('.page-section.active');
        return activePage ? activePage.id : 'home';
    }
    
    // Check if mobile device
    function isMobileDevice() {
        return window.innerWidth <= 768;
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Close mobile menu on desktop
        if (!isMobileDevice() && isMenuOpen) {
            closeMobileMenu();
        }
    });
    
    // ===== INITIALIZATION =====
    
    console.log('Science Sue Website initialized successfully');
    
    // Set initial page if no hash
    if (!window.location.hash) {
        showPage('home');
    }
    
    // Add loading complete class to body
    document.body.classList.add('loaded');
});

// ===== GLOBAL FUNCTIONS =====

// Function to navigate programmatically
window.navigateToPage = function(pageId) {
    const event = new CustomEvent('navigate', {
        detail: { page: pageId }
    });
    document.dispatchEvent(event);
};

// Handle custom navigation events
document.addEventListener('navigate', function(e) {
    const pageId = e.detail.page;
    if (document.getElementById(pageId)) {
        showPage(pageId);
    }
});

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        navigateToPage: window.navigateToPage
    };
} 