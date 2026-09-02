# Master Tasks Checklist: Premium Editorial Upgrade (Phased Upgrade Pass)

## Overview & Non-Negotiable Protection Rules
This upgrade pass enhances the visual aesthetic and UX of **EDITORIAL RESORT** (pure HTML5, CSS3, vanilla JS) without regressing any existing fixes or breaking baseline functionality.

### Protect What Already Works:
- [x] **Mobile Header Overflow Fix**: `#searchBtn`, `#accountBtn` hidden on mobile (<768px), `.cart-trigger-btn` text collapsed to icon/badge, `.brand-wordmark` mobile override (`font-size: 1.05rem`, `white-space: nowrap`), global `html, body { max-width: 100%; overflow-x: hidden; -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }`.
- [x] **Base Typography Preservation**: `h1`, `h2`, `h3`, `.brand-wordmark` (`1.6rem`, `1px`), and `body` (`16px`) outside mobile media queries remain untouched.
- [x] **Core System Reuse**: Extended `js/cart.js` (localStorage cart state), `js/products.js` (independent top/bottom sizing & variant validation), and `js/form.js` (bespoke form validation) without logic rewrites.
- [x] **Zero Horizontal Overflow**: All new full-bleed and horizontal scroll elements strictly contained at 320px, 375px, 390px, and 414px viewports.

---

## Phase 1 — High Priority Checklist (COMPLETED & VERIFIED)

### 1a. Hero Redesign
- [x] Updated hero markup in `index.html` with full-bleed container, dark gradient overlay (`linear-gradient(180deg, rgba(26,22,21,0.15), rgba(26,22,21,0.6))`), eyebrow label ("HANDMADE • RESORT '26"), two-line headline ("Sculpted in Thread / Sun-Drenched by Design"), short descriptor, and two CTAs ("Shop Collection" solid + "Explore Lookbook" outline).
- [x] Added slow image zoom animation in `css/style.css` (`transform: scale(1) -> scale(1.04)` over 12s, respecting `prefers-reduced-motion`).
- [x] Added "Scroll to explore ↓" floating indicator at bottom-center of hero (`#heroScrollIndicator`), hidden on scroll via JS listener in `js/main.js`.
- [x] Verified zero horizontal overflow at 375px/390px/414px mobile widths.

### 1b. Product Card System Upgrade
- [x] Added `rating: 5.0`, `reviewsCount`, `descriptor`, and `secondaryImage` attributes to products in `data/products.json`.
- [x] Upgraded product card template in `js/products.js` with secondary image hover swap, short descriptor line ("Hand-crocheted • Organic cotton"), star rating display, favorite heart toggle icon, and "Quick Add" trigger.
- [x] Implemented `localStorage` favorite toggle handler (`editorial_resort_favorites`).
- [x] Styled desktop hover states & persistent mobile visibility for "Quick Add" & favorite icon in `css/style.css` & `css/responsive.css`.
- [x] Connected "Quick Add" button directly to existing `addToCart()` function in `js/cart.js`.

### 1c. Mobile-Specific Experience Pass
- [x] Added horizontal scroll container for product rows on mobile (<768px) with `scroll-snap-type: x mandatory` in `css/responsive.css`.
- [x] Implemented touch-swipeable testimonials section on mobile (`.testimonials-carousel`) using CSS scroll-snap.
- [x] Ensured all mobile interactive touch targets (buttons, swatches, icons) are >= 44x44px (`.swatch-btn`, `.favorite-btn`).
- [x] Re-verified header navbar overflow fix at 375px, 390px, and 414px.

### 1d. Shopping Drawer Polish
- [x] Refined line item markup & layout in `js/cart.js` for cleaner spacing (80x100px thumbnail, product title, top & bottom sizes labeled, quantity stepper, price, remove control).
- [x] Maintained slide-in right drawer CSS transition and `localStorage` cart persistence.

---

## Phase 2 — Medium-High Priority Checklist (COMPLETED & VERIFIED)

### 2a. Category Editorial Grid
- [x] Replaced 4 equal category tiles with an asymmetrical CSS Grid layout (`.category-editorial-grid`: 1 large hero tile + 3 accent tiles).
- [x] Implemented clean mobile stacked grid fallback (`aspect-ratio: 4/3`) in `css/responsive.css`.

### 2b. Scroll & Micro Animations
- [x] Implemented vanilla JS `IntersectionObserver` scroll trigger script (`initScrollReveal()`) for fade/slide-up entrance animations (`.reveal-on-scroll`).
- [x] Added quiet button hover lift (`translateY(-2px)`) in `css/style.css`.
- [x] Implemented navbar `.scrolled` state toggle in `js/main.js` (transparent over hero -> solid blurred on scroll).
- [x] Ensured all scroll animations respect `prefers-reduced-motion: reduce`.

### 2c. Product Quick-View Modal
- [x] Reused `.product-modal` & `.product-modal-backdrop` (`#productQuickViewBackdrop`) in `index.html`.
- [x] Wired product image click event in `js/products.js` to open quick-view modal with large imagery, title, price, star rating, descriptor, independent top/bottom swatches, and "Add to Bag" trigger.

### 2d. Interactive Custom-Fit Experience
- [x] Added 3-step visual fit guide section ("01 Measure" -> "02 Choose Silhouette" -> "03 We Craft Your Fit") on `index.html`.
- [x] Connected Step 3 CTA directly to bespoke inquiry form on `pages/bespoke.html`.

---

## Phase 3 — Lower Priority Checklist (COMPLETED & VERIFIED)

### 3a. Atelier Process Section
- [x] Added 01-05 numbered sequence section ("01 Yarn Selection" -> "02 Hand Knotting" -> "03 Shaping" -> "04 Lining" -> "05 Final Inspection") with copy & editorial styling on `index.html`.

### 3b. Instagram-Style Gallery & Lightbox
- [x] Added "Follow the Atelier" image grid (`.atelier-gallery-grid`) with click-to-open lightbox modal (`#galleryLightbox`) in vanilla JS (`initGalleryLightbox()`) with keyboard `Escape` dismissal.

### 3c. Floating WhatsApp Button
- [x] Added fixed bottom-right floating action button opening `https://wa.me/15551234567` pre-filled message with clear code comment to replace with real business phone number.
- [x] Positioned safely above mobile bottom drawer and iOS safe-area insets (`env(safe-area-inset-bottom)`).

---

## Phase 4 — Optional Polish Checklist (COMPLETED & VERIFIED)

- [x] **Desktop Custom Cursor (`≥1024px`)**: Interactive circle cursor with "VIEW" text on hoverable elements (`initCustomCursor()`), disabled on mobile touch devices.
- [x] **Branded Loading Screen**: Non-blocking CSS fade-out loader ("EDITORIAL RESORT ✦ ATELIER '26") (`initSiteLoader()`).
- [x] **Subtle Noise Texture Overlay**: Low-opacity (~0.025) noise overlay via fixed pointer-events-none element (`.noise-overlay`).
