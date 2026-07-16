let pass = "";

// change this to Priya's actual DD/MM if it's different — I set it to 26/02 to match the hint
const correctPass = "2602";

function press(num) {
  if (pass.length >= 4) return;

  pass += num;
  document.getElementById("password").value = "●".repeat(pass.length);

  // Automatically check once 4 digits are entered
  if (pass.length === 4) {
    setTimeout(checkPass, 300);
  }
}

function clearPass() {
  pass = pass.slice(0, -1);
  document.getElementById("password").value = "●".repeat(pass.length);
}

function checkPass() {
  const box = document.querySelector(".container");

  if (pass === correctPass) {
    box.style.transform = "scale(1.05)";
    box.style.opacity = "0.9";

    setTimeout(() => {
      window.location.href = "loading.html";
    }, 700);
  } else {
    box.classList.add("shake");
    pass = "";

    setTimeout(() => {
      window.location.href = "wrong.html";
    }, 500);
  }
}
