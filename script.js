// Auto-reveal hero elements on load
window.addEventListener('load', () => {
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.reveal-up').forEach(el => {
    if (prefersReducedMotion) {
      el.classList.add('revealed');
    } else {
      setTimeout(() => el.classList.add('revealed'), 100);
    }
  });
});
