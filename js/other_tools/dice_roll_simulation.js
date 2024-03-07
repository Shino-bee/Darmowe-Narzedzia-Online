// Adds dots to the dice depending on the random number (from 1 to 6)
function addDotsOnTheDice(randomNumber) {
  const diceDotContainer = document.getElementById("dice-dot-container");
  diceDotContainer.removeChild(diceDotContainer.lastElementChild);
  switch (randomNumber) {
    case 1:
      const dot1 = `<div class="dot1">
            <div class="dot"></div>
          </div>`;
      diceDotContainer.insertAdjacentHTML("beforeend", dot1);
      break;
    case 2:
      const dot2 = `<div class="dot2">
          <div class="empty"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="empty"></div>
          </div>`;
      diceDotContainer.insertAdjacentHTML("beforeend", dot2);
      break;
    case 3:
      const dot3 = `<div class="dot3">
            <div class="empty"></div>
            <div class="empty"></div>
            <div class="dot"></div>
            <div class="empty"></div>
            <div class="dot"></div>
            <div class="empty"></div>
            <div class="dot"></div>
            <div class="empty"></div>
            <div class="empty"></div>
          </div>`;
      diceDotContainer.insertAdjacentHTML("beforeend", dot3);
      break;
    case 4:
      const dot4 = `<div class="dot4">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>`;
      diceDotContainer.insertAdjacentHTML("beforeend", dot4);
      break;
    case 5:
      const dot5 = `<div class="dot5">
            <div class="dot"></div>
            <div class="empty"></div>
            <div class="dot"></div>
            <div class="empty"></div>
            <div class="dot"></div>
            <div class="empty"></div>
            <div class="dot"></div>
            <div class="empty"></div>
            <div class="dot"></div>
          </div>`;
      diceDotContainer.insertAdjacentHTML("beforeend", dot5);
      break;
    case 6:
      const dot6 = `<div class="dot6">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>`;
      diceDotContainer.insertAdjacentHTML("beforeend", dot6);
      break;
  }
}
// Initialize a random number of dots on the dice
addDotsOnTheDice(Math.floor(Math.random() * 6) + 1);

// Direction of throwing the dice
let leftOrRight = "left";

/* -------- BUTTON --------- */
/* "Roll dice" button */
const rollDiceButton = document.getElementById("rollDiceBtn");
rollDiceButton.addEventListener("click", () => {
  // Random number between 1 and 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  // Random Y direction of the thrown dice
  const randomDirectionY = Math.floor(Math.random() * 2)
    ? randomNumber * randomNumber
    : -(randomNumber * randomNumber);
  // Dice & dice container
  const diceContainer = document.getElementById("dice-container");
  const dice = document.getElementById("dice");

  // Roll the dice
  switch (leftOrRight) {
    // Animation of a dice thrown from left to right (using GSAP)
    case "left":
      gsap.to(dice, {
        duration: 1,
        rotation: 360 + randomNumber * randomNumber,
        x: diceContainer.offsetWidth - dice.offsetWidth,
        y: randomDirectionY,
      });
      leftOrRight = "right";
      break;

    // Animation of a dice thrown from right to left (using GSAP)
    case "right":
      gsap.to(dice, {
        duration: 1,
        rotation: -(360 - randomNumber * randomNumber),
        x: 0,
        y: randomDirectionY,
      });
      leftOrRight = "left";
      break;
  }

  // Adds dots on the dice with a delay after rolling the dice
  setTimeout(() => {
    addDotsOnTheDice(randomNumber);
  }, 200);
});
