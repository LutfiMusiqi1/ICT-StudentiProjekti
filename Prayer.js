document.addEventListener("DOMContentLoaded", function () {
  // Option 1: Reveal hidden content inside the card
  document.querySelectorAll('.prayer-card').forEach(function(card) {
    card.addEventListener('click', function () {
      const hidden = card.querySelector('.prayer-hidden');
      if (hidden) {
        hidden.style.display = (hidden.style.display === "block") ? "none" : "block";
      }
    });
  });

  // Option 2: Display content in a modal (basic example)
  // Create modal elements
  let modal = document.createElement('div');
  modal.id = "prayer-modal";
  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100vw";
  modal.style.height = "100vh";
  modal.style.background = "rgba(0,0,0,0.7)";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "9999";
  modal.innerHTML = `
    <div id="prayer-modal-content" style="
      background: #2e362e;
      color: #F3E9D2;
      padding: 2rem 1.5rem;
      border-radius: 14px;
      max-width: 400px;
      width: 90%;
      position: relative;
      text-align: left;
    ">
      <button id="prayer-modal-close" style="
        position: absolute;
        top: 10px;
        right: 18px;
        background: none;
        border: none;
        color: #b6d47a;
        font-size: 1.5rem;
        cursor: pointer;
      ">&times;</button>
      <div id="prayer-modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  // Modal close handler
  document.getElementById('prayer-modal-close').onclick = function() {
    modal.style.display = "none";
  };
  modal.onclick = function(e) {
    if (e.target === modal) modal.style.display = "none";
  };

  // Attach modal event to each card
  document.querySelectorAll('.prayer-card').forEach(function(card) {
    card.addEventListener('dblclick', function (e) {
      const hidden = card.querySelector('.prayer-hidden');
      if (hidden) {
        document.getElementById('prayer-modal-body').innerHTML = hidden.innerHTML;
        modal.style.display = "flex";
      }
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
});