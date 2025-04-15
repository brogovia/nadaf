// main.js - Force l'affichage de la barre de défilement pour éviter les décalages horizontaux
document.documentElement.style.overflow = 'scroll';
document.documentElement.style.overflowX = 'hidden';

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  // const navLinks = document.querySelector('.main-nav__links'); // Alternative target

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      // Toggle class on body
      document.body.classList.toggle('mobile-menu-open');

      // Toggle ARIA attributes for accessibility
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !isExpanded);

      // Optional: Change aria-label for accessibility
      if (!isExpanded) {
        menuToggle.setAttribute('aria-label', 'Fermer le menu');
      } else {
        menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
      }

      // Optional: Toggle display on navLinks directly (alternative to body class)
      // if (navLinks) {
      //   navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      // }
    });
  }

  // --- Add other JavaScript functionalities below ---

}); 