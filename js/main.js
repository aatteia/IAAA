/**
 * Portfolio JavaScript
 * Handles interactions, animations, and mobile menu
 * =======================================================================
 */

(function() {
    'use strict';
    
    // =======================================================================
    // Mobile Menu Toggle
    // =======================================================================
    
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = mobileMenuToggle.classList.contains('active');
            
            if (isActive) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                mobileMenuToggle.classList.add('active');
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
        
        // Close mobile menu when clicking a link
        mobileMenuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // =======================================================================
    // Sticky Navigation with Shadow
    // =======================================================================
    
    const nav = document.getElementById('nav');
    
    function handleScroll() {
        if (window.scrollY > 20) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // =======================================================================
    // Active Navigation Link
    // =======================================================================
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-link');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('nav-link-active');
                    } else {
                        link.classList.remove('nav-link-active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // =======================================================================
    // Smooth Scroll for Anchor Links
    // =======================================================================
    
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty anchors and # only
            if (!href || href === '#') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navHeight = nav.offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // =======================================================================
    // Collapsible Credibility Subsections
    // =======================================================================
    
    const subsectionTitles = document.querySelectorAll('.credibility-subsection-title');
    
    subsectionTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var content = this.nextElementSibling;
            var isActive = this.classList.contains('active');

            if (isActive) {
                this.classList.remove('active');
                this.setAttribute('aria-expanded', 'false');
                content.classList.remove('active');
            } else {
                this.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
                content.classList.add('active');
            }
        });
    });
    
    // =======================================================================
    // Scroll Animations (Fade In on Scroll)
    // =======================================================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.card, .capability-card, .testimonial-card, .risk-item, .credibility-item');

    animatedElements.forEach(function(element, index) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        element.style.transitionDelay = (index % 6) * 0.1 + 's';
        observer.observe(element);
    });

    // Sequential animation for client logos (top-left to bottom-right)
    var logoElements = document.querySelectorAll('.client-logo-wrapper');

    logoElements.forEach(function(element, index) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        element.style.transitionDelay = index * 0.08 + 's';
        observer.observe(element);
    });
    
    // Add the animation in class
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // =======================================================================
    // Animated Headshot - Hard-cut Frame Animation
    // =======================================================================
    
    const heroHeadshot = document.getElementById('heroHeadshot');
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (heroHeadshot && !prefersReducedMotion) {
        // Detect WebP support via the <picture> source element
        var sourceEl = heroHeadshot.parentElement.querySelector('source[type="image/webp"]');
        var useWebP = sourceEl !== null;
        var ext = useWebP ? '.webp' : '.jpg';

        // Animation sequence: 054 → 060 → 064 → 060 → 054 → 057 → 072 → 057 → repeat
        var sequence = [
            'images/headshots/054' + ext,
            'images/headshots/060' + ext,
            'images/headshots/064' + ext,
            'images/headshots/060' + ext,
            'images/headshots/054' + ext,
            'images/headshots/057' + ext,
            'images/headshots/072' + ext,
            'images/headshots/057' + ext
        ];

        var currentFrame = 0;

        // 6s loop ÷ 8 frames = 0.75s per frame (750ms)
        setInterval(function() {
            currentFrame = (currentFrame + 1) % sequence.length;
            heroHeadshot.src = sequence[currentFrame];
            if (sourceEl) {
                sourceEl.srcset = sequence[currentFrame];
            }
        }, 750);
    }
    // If reduced motion is preferred, image stays as 054.jpg (default)
    
    // =======================================================================
    // Initialize on DOM Content Loaded
    // =======================================================================
    
    document.addEventListener('DOMContentLoaded', function() {
        // Initial check for scroll position
        handleScroll();
        highlightNavigation();
        
        // Add loaded class to body for any CSS animations
        document.body.classList.add('loaded');
    });
    
    // =======================================================================
    // Handle Window Resize
    // =======================================================================
    
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Close mobile menu on resize to desktop
            if (window.innerWidth >= 768) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }, 250);
    });
    
    // =======================================================================
    // Skip Link Functionality
    // =======================================================================
    
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const main = document.getElementById('main');
            if (main) {
                main.setAttribute('tabindex', '-1');
                main.focus();
                main.removeAttribute('tabindex');
            }
        });
    }
    
})();
