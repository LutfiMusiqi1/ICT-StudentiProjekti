document.addEventListener("DOMContentLoaded", function () {
  const ayahs = [
    {
      text: "Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater. And Allah knows that which you do.",
      ref: "Qur’an 29:45"
    },
    {
      text: "And He found you lost and guided [you].",
      ref: "Qur’an 93:7"
    },
    {
      text: "So remember Me; I will remember you.",
      ref: "Qur’an 2:152"
    },
    {
      text: "And your Lord is going to give you, and you will be satisfied.",
      ref: "Qur’an 93:5"
    },
    {
      text: "Allah does not burden a soul beyond that it can bear.",
      ref: "Qur’an 2:286"
    }
    // Add more ayahs as you wish
  ];

  const btn = document.getElementById('random-ayah-btn');
  const box = document.getElementById('random-ayah-box');

  btn.addEventListener('click', function () {
    const ayah = ayahs[Math.floor(Math.random() * ayahs.length)];
    box.innerHTML = `<blockquote>${ayah.text}</blockquote><div class="ayah-ref">${ayah.ref}</div>`;
    box.style.display = "block";
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