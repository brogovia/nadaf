document.documentElement.style.overflow = 'scroll';
document.documentElement.style.overflowX = 'hidden';

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.main-nav__links');

  const openLabel = menuToggle?.dataset.labelOpen || 'Open menu';
  const closeLabel = menuToggle?.dataset.labelClose || 'Close menu';

  const closeMobileMenu = () => {
    document.body.classList.remove('mobile-menu-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', openLabel);
    }
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      document.body.classList.toggle('mobile-menu-open', !isExpanded);
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      menuToggle.setAttribute('aria-label', isExpanded ? openLabel : closeLabel);
    });
  }

  if (navLinks) {
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // Location map popup (hover on desktop, tap on mobile)
  const location = document.querySelector('.top-bar__location');
  const locationTrigger = document.getElementById('location-map-trigger');
  const mapPopup = document.getElementById('location-map-popup');
  const mapFrame = mapPopup?.querySelector('.top-bar__map-frame');
  const mapIframe = mapFrame?.querySelector('iframe');

  const loadMap = () => {
    if (!mapFrame || !mapIframe || mapIframe.src) return;
    const src = mapFrame.getAttribute('data-map-src');
    if (src) {
      mapIframe.src = src;
    }
  };

  const openMap = () => {
    if (!location || !locationTrigger) return;
    loadMap();
    location.classList.add('is-map-open');
    locationTrigger.setAttribute('aria-expanded', 'true');
  };

  const closeMap = () => {
    if (!location || !locationTrigger) return;
    location.classList.remove('is-map-open');
    locationTrigger.setAttribute('aria-expanded', 'false');
  };

  if (location && locationTrigger && mapPopup) {
    location.addEventListener('mouseenter', loadMap);
    location.addEventListener('focusin', loadMap);

    locationTrigger.addEventListener('click', (event) => {
      event.preventDefault();
      if (location.classList.contains('is-map-open')) {
        closeMap();
      } else {
        openMap();
      }
    });

    document.addEventListener('click', (event) => {
      if (!location.contains(event.target)) {
        closeMap();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMap();
      }
    });
  }
});
