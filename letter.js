// Reveal each paragraph one by one (a real letter-by-letter typewriter would
// break the <br/> tags in the text, so this does a soft fade-in instead —
// same "reveal" feeling, nothing breaks)
const paragraphs = document.querySelectorAll("#typing p");
const nextBtn = document.getElementById("nextBtn");

paragraphs.forEach((p, i) => {
  setTimeout(
    () => {
      p.classList.add("show");
      if (i === paragraphs.length - 1) {
        setTimeout(() => nextBtn.classList.add("show"), 600);
      }
    },
    i * 1400,
  );
});

function showForgive() {
  nextBtn.style.display = "none";
  document.getElementById("forgiveTitle").style.display = "block";
  document.getElementById("forgiveRow").classList.add("show");
}

// Make the NO button dodge away — works with mouse AND touch (phones)
const noForgive = document.getElementById("noForgiveBtn");

function dodgeNoForgive(e) {
  e.preventDefault();
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noForgive.style.transform = `translate(${x}px, ${y}px)`;
}

noForgive.addEventListener("mouseover", dodgeNoForgive);
noForgive.addEventListener("touchstart", dodgeNoForgive, { passive: false });

// if she somehow manages to actually tap it, send her to the "why did u click no" page
noForgive.addEventListener("click", () => {
  window.location.href = "whyno.html";
});
