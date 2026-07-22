document.documentElement.style.overflow = 'scroll';
document.documentElement.style.overflowX = 'hidden';

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.main-nav__links');

  const closeMobileMenu = () => {
    document.body.classList.remove('mobile-menu-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
    }
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      document.body.classList.toggle('mobile-menu-open', !isExpanded);
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      menuToggle.setAttribute('aria-label', isExpanded ? 'Ouvrir le menu' : 'Fermer le menu');
    });
  }

  if (navLinks) {
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });
  }
});
