//Const variables selected through DOM
const killers = document.querySelectorAll(".killer");
const body = document.querySelector("body");
const killerContainer = document.querySelector("killerContainer");
const overlay = document.querySelector(".overlay");
const killerPopup = document.querySelector(".killerPopup");
const killerTitle = document.querySelector(".killerTitle");
const killerQuote = document.querySelector(".killerQuote");

//A variable to determine if the overlay is working.
let isOverlayOn = false;

//The overlay click event listener that allows you to click the outside of the enlarged box to return to selection.
overlay.addEventListener("click", () => {
  killers.forEach((killer) => {
    activatePopup();
    removeLoadouts();
  });
  isOverlayOn = false;
});

//The killer box event listener that checks if the overlay is on. If overlay isn't on, it can be clicked to enlarge and turns makes isOverlayOn true.
//Also takes in information about which killer was clicked and sends it across functions.
killers.forEach((killer) => {
  killer.addEventListener("click", () => {
    if (!isOverlayOn) {
      activatePopup();
      createLoadouts();
      selectedKillerName = killer.getAttribute("alt");
      killerSelected(selectedKillerName);
      isOverlayOn = true;
    }
  });
});

//Toggles CSS after clicking a killer portrait.
function activatePopup() {
  killerQuote.innerHTML = "";
  killerTitle.innerHTML = "";
  killerPopup.classList.toggle("active");
  overlay.classList.toggle("active");
  killerTitle.classList.toggle("active");
  killerQuote.classList.toggle("active");
}

//Two bottom functions creates and removes the loadouts.
function createLoadouts() {
  for (let i = 1; i <= 3; i++) {
    let loadoutTitle = document.createElement("div");
    let loadout = document.createElement("div"); 
    loadout.className = "loadout";
    loadout.id = "loadout" + i;
    loadoutTitle.className = "loadoutTitle";
    loadoutTitle.id = "loadoutTitle" + i;
    killerPopup.appendChild(loadoutTitle);
    killerPopup.appendChild(loadout);
  }
  const loadouts = document.querySelectorAll(".loadout");
  const loadoutTitles = document.querySelectorAll(".loadoutTitles");
  loadouts.forEach(loadout => {
    for (let i = 1; i <= 4; i++) {
      let perk = document.createElement("div");
      perk.className = "perk";
      perk.id = "perk" + i;
      loadout.appendChild(perk);
    }
  })
}

function removeLoadouts() {
  const loadouts = document.querySelectorAll(".loadout");
  const loadoutTitles = document.querySelectorAll(".loadoutTitle");
  loadouts.forEach(loadout => {
    loadout.remove();
  })
  loadoutTitles.forEach(loadoutTitle => {
    loadoutTitle.remove();
  })
}

//Gives information based on killer portrait clicked.
function killerSelected(selectedKillerName) {
  switch (selectedKillerName) {
    case "trapper":
      killerQuote.innerHTML =
        "There is a vast monster of a man with a hideous grin torn across the mask that keeps stalking my every move. Similar to a hunter, he tracks us, priming devastating traps amongst the greenery. Extreme vigilance and a light step is essential.";
      killerQuote.innerHTML += "<br>" .repeat(2) + "- Benedict Baker's Journal, Nov. 1896 on The Trapper";
      killerTitle.innerHTML = "The " + selectedKillerName;
      break;
    case "wraith":
      break;
    case "hillbilly":
      break;
    case "nurse":
      break;
    case "shape":
      break;
    case "hag":
      break;
    case "doctor":
      break;
    case "huntress":
      break;
    case "cannibal":
      break;
    case "nightmare":
      break;
    case "pig":
      break;
    case "clown":
      break;
    case "spirit":
      break;
    case "legion":
      break;
    case "plague":
      break;
    case "ghostface":
      break;
    case "demogorgon":
      break;
    case "oni":
      break;
    case "deathslinger":
      break;
    case "executioner":
      break;
    case "blight":
      break;
    case "twins":
      break;
    case "trickster":
      break;
    case "nemesis":
      break;
    case "cenobite":
      break;
    case "artist":
      break;
    case "onryo":
      break;
    case "dredge":
      break;
    case "mastermind":
      break;
    case "knight":
      break;
    case "skull merchant":
      break;
  }
}
