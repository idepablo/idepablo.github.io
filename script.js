document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  document.querySelectorAll('#home .fade-up').forEach(el => {
    setTimeout(() => el.classList.add('visible'), 200);
  });

  document.querySelectorAll('.project-card').forEach(card => {
    const url = card.dataset.href;
    if (!url) return;

    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
});