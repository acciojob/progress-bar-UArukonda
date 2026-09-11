//your JS code here. If required.
const circles = document.querySelectorAll(".circle");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

const progress = document.getElementById("progress");

let currentStep = 1;

next.addEventListener("click", () => {

  if (currentStep < circles.length) {
    currentStep++;

    circles[currentStep - 1].classList.add("active");

    progress.style.width =
      `${((currentStep - 1) / (circles.length - 1)) * 100}%`;
  }

  updateButtons();
});


prev.addEventListener("click", () => {

  if (currentStep > 1) {
    circles[currentStep - 1].classList.remove("active");

    currentStep--;

    progress.style.width =
      `${((currentStep - 1) / (circles.length - 1)) * 100}%`;
  }

  updateButtons();
});


function updateButtons() {

  prev.disabled = currentStep === 1;

  next.disabled = currentStep === circles.length;

}