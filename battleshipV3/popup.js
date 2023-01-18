const generatePopup = () => {
  const popupBox = document.createElement("div");
  popupBox.className = "popup-box scale-up";

  const popupTitle = document.createElement("p");
  popupTitle.className = "popup-title";
  popupTitle.textContent = "Placing your ships";

  const popupText = document.createElement("p");
  popupText.className = "popup-text";
  popupText.textContent =
    "Use the coordinates to set the ship starting point and the direction buttons to set its direction. Be careful not to intersect two ships nor to place it outside the grid. Once you've placed them all, click on Start Game.";

  const startButton = document.createElement("button");
  startButton.className = "start-button";
  startButton.textContent = "Start Placing";
  startButton.onclick = hidePopup;

  popupBox.append(popupTitle, popupText, startButton);

  const mainContainer = document.querySelector(".main-container");
  mainContainer.appendChild(popupBox);
};

const hidePopup = () => {
  const awaitingAudio = document.createElement("audio");
  awaitingAudio.src = "./sounds/awaiting.mp3";
  awaitingAudio.play();

  const popupBox = document.querySelector(".popup-box");
  popupBox.remove();
};

export default generatePopup;
