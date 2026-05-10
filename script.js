const starsContainer = document.querySelector(".stars");
for (let i = 0; i < 167; i++) {
  let star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDuration = Math.random() * 3 + 2 + "s";
  starsContainer.appendChild(star);
}

function searchNames() {
  const query = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const name = card.textContent.toLowerCase();
    card.style.display = name.includes(query) ? "block" : "none";
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
});
document
  .querySelectorAll(".card, .gallery img")
  .forEach((el) => observer.observe(el));
