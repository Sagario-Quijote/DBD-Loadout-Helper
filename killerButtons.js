//Const variables selected through DOM
const killers = document.querySelectorAll(".killer");
const body = document.querySelector("body");
const killerContainer = document.querySelector("killerContainer");
const overlay = document.querySelector(".overlay");

//A variable to determine if the overlay is working.
let isOverlayOn = false;

//The overlay click event listener that allows you to click the outside of the enlarged box to return to selection.
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  killers.forEach((killer) => {
    if (killer.classList.contains("enlarge")) {
      killer.classList.remove("enlarge");
    }
  });
  isOverlayOn = false;
});

//The killer box event listener that checks if the overlay is on. If overlay isn't on, it can be clicked to enlarge and turns makes isOverlayOn true.
killers.forEach((killer) => {
  killer.addEventListener("click", () => {
    if (!isOverlayOn) {
      killer.classList.toggle("enlarge");
      overlay.classList.toggle("active");
      isOverlayOn = true;
    }
  });
});
