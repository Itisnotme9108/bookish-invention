/**
 * Editorial Resort & Intimates - Main JavaScript (Vanilla JS)
 * Handles navigation bar drawer toggle, header scroll elevation & transparency,
 * hero scroll indicator auto-hide, scroll reveal entrance animations, and copyright year update.
 */

document.addEventListener('DOMContentLoaded', () => {
  initSiteLoader();
  initMobileNav();
  initHeaderScroll();
  initHeroScrollIndicator();
  initScrollReveal();
  initGalleryLightbox();
  initCustomCursor();
  updateYear();
});

/**
 * Mobile Navigation Menu Toggle
 */
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('is-open')) {
        navLinks.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/**
 * Header Background opacity on scroll
 */
function initHeaderScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/**
 * Hero Scroll Indicator Auto-Hide
 */
function initHeroScrollIndicator() {
  const indicator = document.getElementById('heroScrollIndicator');
  if (!indicator) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
      indicator.style.opacity = '0';
      indicator.style.pointerEvents = 'none';
    } else {
      indicator.style.opacity = '1';
      indicator.style.pointerEvents = 'auto';
    }
  });
}

/**
 * Phase 3b: Gallery Lightbox Modal
 */
function initGalleryLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  const imgEl = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');

  if (!lightbox || !imgEl || !captionEl) return;

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-img');
      const captionText = item.getAttribute('data-caption');

      imgEl.src = imgSrc;
      captionEl.textContent = captionText || 'Editorial Resort Atelier';

      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.onclick = closeLightbox;

  lightbox.onclick = (e) => {
    if (e.target === lightbox) closeLightbox();
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
}

/**
 * Phase 4: Site Loader Dismissal (<1s fade)
 */
function initSiteLoader() {
  const loader = document.getElementById('siteLoader');
  if (!loader) return;
  loader.classList.add('loaded');
}

if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initSiteLoader();
}

/**
 * Phase 4: Desktop Custom Cursor (>=1024px)
 */
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  if (!cursor || window.innerWidth < 1024) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }

  requestAnimationFrame(animateCursor);

  const hoverableSelector = 'a, button, .product-card, .category-tile, .gallery-item, .swatch-btn, .favorite-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverableSelector)) {
      cursor.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverableSelector)) {
      cursor.classList.remove('hovering');
    }
  });
}

function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  revealEls.forEach(el => el.classList.add('is-revealed'));

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, { threshold: 0.01 });

  revealEls.forEach(el => observer.observe(el));
}

function updateYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
