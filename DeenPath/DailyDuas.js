document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.copy-dua-btn').forEach(function(btn) {
    btn.addEventListener('click', function () {
      const arabicText = btn.closest('.dua-block').querySelector('.dua-arabic').innerText;
      navigator.clipboard.writeText(arabicText).then(function () {
        const original = btn.innerHTML;
        btn.innerHTML = "&#10003; Copied!";
        btn.disabled = true;
        setTimeout(function () {
          btn.innerHTML = original;
          btn.disabled = false;
        }, 1200);
      });
    });
  });
});

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