// Usage: Add class="collapsible-section" to any long section in your HTML.
// Add a button with class="toggle-btn" after the section.

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.collapsible-section').forEach(function(section) {
    // Hide all collapsible content by default
    section.querySelectorAll('.collapsible-content').forEach(function(content) {
      content.style.display = 'none';
    });

    const btn = section.querySelector('.toggle-btn');
    if (!btn) return;

    let expanded = false;
    btn.addEventListener('click', function () {
      expanded = !expanded;
      section.querySelectorAll('.collapsible-content').forEach(function(content) {
        content.style.display = expanded ? '' : 'none';
      });
      btn.textContent = expanded ? "Show Less" : "Show More";
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
