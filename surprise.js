function showGift() {
  const box = document.getElementById("giftBox");
  box.classList.add("show");
}

function openLetter() {
  const gift = document.querySelector("#giftBox .gift");
  gift.classList.add("open");

  setTimeout(() => {
    window.location.href = "letter.html";
  }, 900);
}

// Make the NO button dodge away — works with mouse AND touch (phones)
const no = document.getElementById("noBtn");

function dodgeNo(e) {
  e.preventDefault();
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  no.style.transform = `translate(${x}px, ${y}px)`;
}

no.addEventListener("mouseover", dodgeNo);
no.addEventListener("touchstart", dodgeNo, { passive: false });
