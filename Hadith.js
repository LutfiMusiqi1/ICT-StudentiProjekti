document.addEventListener("DOMContentLoaded", function () {
  const filter = document.getElementById('hadithFilter');
  const cards = document.querySelectorAll('.hadith-card');

  if (filter) {
    filter.addEventListener('change', function () {
      const selected = filter.value;
      cards.forEach(card => {
        if (selected === "all" || card.getAttribute('data-category') === selected) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // Scroll-to-top button logic
  const scrollBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});