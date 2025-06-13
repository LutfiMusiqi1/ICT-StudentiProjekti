document.addEventListener("DOMContentLoaded", function () {
  // Create modal structure
  const modal = document.createElement('div');
  modal.id = "video-modal";
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
    <div style="
      background: #232a23;
      border-radius: 12px;
      padding: 1.5rem;
      max-width: 90vw;
      max-height: 80vh;
      position: relative;
      box-shadow: 0 4px 24px rgba(0,0,0,0.18);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    ">
      <button id="close-video-modal" style="
        background: #3B4F1B;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 2.2rem;
        height: 2.2rem;
        font-size: 1.3rem;
        cursor: pointer;
        position: absolute;
        top: 12px;
        right: 12px;
        transition: background 0.2s;
      ">&times;</button>
      <div id="video-modal-content" style="width: 100%; display: flex; justify-content: center; align-items: center;">
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Show modal on thumbnail click
  document.querySelectorAll('.video-thumbnail-btn').forEach(function(btn) {
    btn.addEventListener('click', function () {
      const videoUrl = btn.getAttribute('data-video');
      const videoContent = document.getElementById('video-modal-content');
      videoContent.innerHTML = `
        <iframe width="420" height="236" src="${videoUrl}" frameborder="0" allowfullscreen style="border-radius:8px;"></iframe>
      `;
      modal.style.display = "flex";
    });
  });

  // Close modal
  document.getElementById('close-video-modal').onclick = function() {
    modal.style.display = "none";
    document.getElementById('video-modal-content').innerHTML = "";
  };
  // Close modal when clicking outside the video
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
      document.getElementById('video-modal-content').innerHTML = "";
    }
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