// ===================================
// ADAM ATTEIA - SITE INTERACTIVITY
// ===================================

(function() {
  'use strict';

  // ===================================
  // HEADSHOT ANIMATION
  // ===================================
  
  const headshotAnimation = {
    frames: ['054', '060', '064', '060', '054', '057', '072', '057'],
    currentIndex: 0,
    interval: null,
    frameTime: 750, // 0.75s per frame for 6s total loop
    
    init: function() {
      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      
      const container = document.querySelector('.headshot-container');
      if (!container) return;
      
      const images = container.querySelectorAll('.headshot');
      if (images.length === 0) return;
      
      // Set first image active
      images[0].classList.add('active');
      
      // Start animation
      this.interval = setInterval(() => {
        // Remove active from current
        const currentImg = container.querySelector(`.headshot[data-frame="${this.frames[this.currentIndex]}"]`);
        if (currentImg) currentImg.classList.remove('active');
        
        // Move to next frame
        this.currentIndex = (this.currentIndex + 1) % this.frames.length;
        
        // Add active to new
        const nextImg = container.querySelector(`.headshot[data-frame="${this.frames[this.currentIndex]}"]`);
        if (nextImg) nextImg.classList.add('active');
      }, this.frameTime);
    }
  };

  // ===================================
  // NAVIGATION - Active Section Tracking
  // ===================================
  
  const navigation = {
    sections: [],
    navLinks: [],
    mobileNavLinks: [],
    
    init: function() {
      this.sections = document.querySelectorAll('section[id]');
      this.navLinks = document.querySelectorAll('.header__nav-link');
      this.mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
      
      if (this.sections.length === 0) return;
      
      // Set up Intersection Observer
      const options = {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.setActiveSection(entry.target.id);
          }
        });
      }, options);
      
      this.sections.forEach(section => observer.observe(section));
    },
    
    setActiveSection: function(sectionId) {
      // Update desktop nav
      this.navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      
      // Update mobile nav
      this.mobileNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
          link.classList.add('active');
          // Scroll active link into view on mobile
          if (window.innerWidth <= 768) {
            link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  // ===================================
  // MOBILE NAV - Hide/Show on Scroll
  // ===================================
  
  const mobileNav = {
    nav: null,
    lastScrollY: 0,
    threshold: 10,
    ticking: false,
    
    init: function() {
      this.nav = document.querySelector('.mobile-nav');
      if (!this.nav) return;
      
      // Only enable on mobile
      if (window.innerWidth > 768) return;
      
      window.addEventListener('scroll', () => {
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll();
            this.ticking = false;
          });
          this.ticking = true;
        }
      }, { passive: true });
      
      // Re-check on resize
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          this.nav.classList.remove('hidden');
        }
      });
    },
    
    handleScroll: function() {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - this.lastScrollY;
      
      // Scrolling down beyond threshold
      if (diff > this.threshold && currentScrollY > 100) {
        this.nav.classList.add('hidden');
      }
      // Scrolling up beyond threshold
      else if (diff < -this.threshold) {
        this.nav.classList.remove('hidden');
      }
      
      this.lastScrollY = currentScrollY;
    }
  };

  // ===================================
  // BACK TO TOP BUTTON
  // ===================================
  
  const backToTop = {
    button: null,
    threshold: 400,
    
    init: function() {
      this.button = document.querySelector('.back-to-top');
      if (!this.button) return;
      
      // Show/hide on scroll
      window.addEventListener('scroll', () => {
        if (window.scrollY > this.threshold) {
          this.button.classList.add('visible');
        } else {
          this.button.classList.remove('visible');
        }
      }, { passive: true });
      
      // Scroll to top on click
      this.button.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      });
    }
  };

  // ===================================
  // ACCORDIONS
  // ===================================
  
  const accordions = {
    init: function() {
      const triggers = document.querySelectorAll('.accordion__trigger');
      
      triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
          const accordion = trigger.closest('.accordion');
          const isOpen = accordion.classList.contains('open');
          
          // Toggle current accordion
          accordion.classList.toggle('open');
          
          // Update aria-expanded
          trigger.setAttribute('aria-expanded', !isOpen);
        });
        
        // Keyboard support
        trigger.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            trigger.click();
          }
        });
      });
    }
  };

  // ===================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ===================================
  
  const smoothScroll = {
    init: function() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === '#') return;
          
          const target = document.querySelector(href);
          if (!target) return;
          
          e.preventDefault();
          
          const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          
          target.scrollIntoView({
            behavior: reducedMotion ? 'auto' : 'smooth',
            block: 'start'
          });
          
          // Update URL without jumping
          history.pushState(null, '', href);
        });
      });
    }
  };

  // ===================================
  // INITIALIZE
  // ===================================
  
  document.addEventListener('DOMContentLoaded', function() {
    headshotAnimation.init();
    navigation.init();
    mobileNav.init();
    backToTop.init();
    accordions.init();
    smoothScroll.init();
  });

})();
