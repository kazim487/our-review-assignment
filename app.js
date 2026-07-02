document.addEventListener("DOMContentLoaded", () => {

  const reviews = [
    {
      name: "Kazim",
      role: "WEB DEVELOPER",
      text: "Saylani helped me build strong fundamentals in HTML, CSS and JavaScript. Now I love building real projects from scratch."
    },
    {
      name: "Fahad",
      role: "FRONT-END DEVELOPER",
      text: "I love turning ideas into clean, user-friendly designs. Saylani gave me the platform to explore my creativity every single day."
    },
    {
      name: "Sohaib",
      role: "UI/UX DESIGNER",
      text: "The training here gave me confidence to work on real client projects. Every day I learn something new."
    },
    {
      name: "Ayan",
      role: "APP DEVELOPER",
      text: "Best part of Saylani is the hands-on practice. I went from zero to building my own apps."
    },
    {
      name: "Rehan",
      role: "BACKEND DEVELOPER",
      text: "Saylani gave me strong logic building skills and hands-on experience with real backend projects."
    },
    {
      name: "Mustajab",
      role: "GRAPHIC DESIGNER",
      text: "I learned to turn simple ideas into powerful visuals. Saylani polished my creative and technical skills both."
    }
  ];

  let currentIndex = 0;

  const nameEl = document.getElementById("name");
  const roleEl = document.getElementById("role");
  const textEl = document.getElementById("reviewText");

  function showReview(index) {
    const r = reviews[index];
    nameEl.textContent = r.name;
    roleEl.textContent = r.role;
    textEl.textContent = r.text;
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
  });

  document.getElementById("surpriseBtn").addEventListener("click", () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * reviews.length);
    } while (randomIndex === currentIndex);
    currentIndex = randomIndex;
    showReview(currentIndex);
  });

});