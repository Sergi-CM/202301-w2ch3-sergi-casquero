import global from "./global.js";

const checkWinner = (player) => {
  let isWinner = true;

  player.map((ship) => {
    if (ship.isSunk === false) {
      isWinner = false;
    }
  });

  if (isWinner) {
    document.querySelector(".bg-music").pause();
    global.gameOver = true;
    const whoWon =
      player === global.playerShips
        ? "CPU"
        : global.playerName.toLocaleUpperCase();

    setTimeout(() => {
      generateWinnerBox(whoWon);
    }, 3000);
  }
};

const generateWinnerBox = (whoWon) => {
  const winnerBox = document.createElement("div");
  winnerBox.className = "popup-box winner-box";

  const winnerTitle = document.createElement("p");
  winnerTitle.className = "welcome-title winner-title";
  winnerTitle.textContent = `${whoWon} wins the battle!`;

  const resultsButton = document.createElement("button");
  resultsButton.className = "start-button";
  resultsButton.textContent = "See Results";
  resultsButton.onclick = generateResults1;

  winnerBox.append(winnerTitle, resultsButton);

  const mainContainer = document.querySelector(".main-container");
  mainContainer.appendChild(winnerBox);

  const winnerAudio = document.createElement("audio");
  winnerAudio.src = "./sounds/winner.mp3";
  winnerAudio.play();
};

const hideAllShowResults = () => {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = "";
};

const generateResults1 = () => {
  hideAllShowResults();

  const dataAudio = document.createElement("audio");
  dataAudio.src = "./sounds/data.mp3";
  dataAudio.play();

  const resultsAudio = document.createElement("audio");
  resultsAudio.src = "./sounds/results.mp3";
  resultsAudio.volume = 0.5;
  resultsAudio.play();

  const resultsContainer = document.createElement("section");
  resultsContainer.className = "results-container";

  const resultsTitle = document.createElement("h2");
  resultsTitle.className = "results-title";
  resultsTitle.textContent = "RESULTS";

  resultsContainer.append(resultsTitle);

  const mainContainer = document.querySelector(".main-container");
  mainContainer.appendChild(resultsContainer);

  setTimeout(() => {
    generateResults2();
  }, 800);
};

const generateResults2 = () => {
  const accuracyContainer = document.createElement("div");
  accuracyContainer.className = "accuracy-container";

  const shotsContainer = document.createElement("div");
  shotsContainer.className = "shots-container";

  const totalShots = document.createElement("div");
  totalShots.className = "fade-in";
  totalShots.textContent = "Total shots:";

  const shotsOnTarget = document.createElement("div");
  shotsOnTarget.className = "fade-in";
  shotsOnTarget.textContent = "On target:";

  const shotsCounterContainer = document.createElement("div");
  shotsCounterContainer.className = "shots-counter-container";

  const totalShotsCounter = document.createElement("div");
  totalShotsCounter.className = "total-shots-counter";

  const shotsOnTargetCounter = document.createElement("div");
  shotsOnTargetCounter.className = "shots-target-counter";

  shotsContainer.append(totalShots, shotsOnTarget);
  shotsCounterContainer.append(totalShotsCounter, shotsOnTargetCounter);
  accuracyContainer.append(shotsContainer, shotsCounterContainer);

  const resultsContainer = document.querySelector(".results-container");
  resultsContainer.appendChild(accuracyContainer);

  setTimeout(() => {
    resultsCounter(global.shots, totalShotsCounter, "");
  }, 1000);

  setTimeout(() => {
    resultsCounter(global.onTarget, shotsOnTargetCounter, "");
  }, 1000);

  setTimeout(() => {
    generateResults3();
  }, 4000);
};

const resultsCounter = (stat, container, symbol) => {
  const counterAudio = document.createElement("audio");
  counterAudio.src = "./sounds/loader.mp3";
  counterAudio.play();

  const counter = (i) => {
    setTimeout(() => {
      container.innerText = i + symbol;

      if (i === stat) {
        const stopCounterAudio = document.createElement("audio");
        stopCounterAudio.src = "./sounds/placedship.mp3";
        stopCounterAudio.play();
      }
    }, 50 * i);
  };

  for (let i = 0; i <= stat; i++) {
    counter(i);
  }
};

const generateResults3 = () => {
  const separator = document.createElement("div");
  separator.className = "separator";

  const accuracyContainer = document.querySelector(".accuracy-container");
  accuracyContainer.appendChild(separator);

  setTimeout(() => {
    generateResults4();
  }, 1100);
};

const generateResults4 = () => {
  const accuracyText = document.createElement("div");
  accuracyText.textContent = "Accuracy:";
  accuracyText.className = "accuracy-text fade-in";

  const accuracyContainer = document.querySelector(".accuracy-container");
  accuracyContainer.appendChild(accuracyText);

  setTimeout(() => {
    generateResults5();
  }, 1100);
};

const generateResults5 = () => {
  const accuracyCounter = document.createElement("div");
  accuracyCounter.className = "accuracy-counter";

  const accuracyContainer = document.querySelector(".accuracy-container");
  accuracyContainer.append(accuracyCounter);

  resultsCounter(
    Math.floor((global.onTarget / global.shots) * 100),
    accuracyCounter,
    "%"
  );

  setTimeout(() => {
    generateResultsShips();
  }, 4000);
};

const generateResultsButtons = () => {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-container";

  const playAgainButton = document.createElement("button");
  playAgainButton.className = "start-button play-again fade-in";
  playAgainButton.textContent = "Play Again";
  playAgainButton.onclick = () => location.reload();

  const quitGameButton = document.createElement("button");
  quitGameButton.className = "start-button quit-game fade-in";
  quitGameButton.textContent = "Quit Game";
  quitGameButton.onclick = () => {
    const disconnectingAudio = document.createElement("audio");
    disconnectingAudio.src = "./sounds/disconnecting.mp3";
    disconnectingAudio.play();

    setTimeout(() => {
      window.close();
    }, 1400);
  };

  buttonsContainer.append(playAgainButton, quitGameButton);

  const resultsContainer = document.querySelector(".results-container");
  resultsContainer.appendChild(buttonsContainer);
};

const generateResultsShips = () => {
  const shipsMainContainer = document.createElement("section");
  shipsMainContainer.className = "ships-main-container";

  const shipsTitle = document.createElement("h2");
  shipsTitle.className = "ships-title";
  shipsTitle.textContent = "YOUR FLEET";

  const shipsImgContainer = document.createElement("div");
  shipsImgContainer.className = "ships-img-container fade-in";

  shipsMainContainer.append(shipsTitle, shipsImgContainer);

  const resultsContainer = document.querySelector(".results-container");
  resultsContainer.appendChild(shipsMainContainer);

  global.playerShips.map((ship) => {
    const shipMinicontainer = document.createElement("div");
    shipMinicontainer.className = "ship-mini-container";

    const shipImg = document.createElement("img");
    shipImg.src = ship.isSunk
      ? `./assets/${ship.shipName}2.png`
      : `./assets/${ship.shipName}.png`;
    shipImg.className = `${ship.shipName} ship-img`;

    shipMinicontainer.appendChild(shipImg);
    shipsImgContainer.appendChild(shipMinicontainer);

    for (let i = 0; i < ship.totalHealth; i++) {
      const healthPoint = document.createElement("div");

      if (i < ship.hits) {
        healthPoint.className = "hit results-point";
        shipMinicontainer.appendChild(healthPoint);
      } else {
        healthPoint.className = "no-hit results-point";
        shipMinicontainer.appendChild(healthPoint);
      }
    }
  });

  setTimeout(() => {
    generateResultsButtons();
  }, 2000);
};

export default checkWinner;
