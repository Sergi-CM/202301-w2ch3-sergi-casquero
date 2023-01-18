import global from "./global.js";
import showShipsHealth from "./shipsHealth.js";
import checkWinner from "./winner.js";

const shot = (square) => {
  if (global.gameOver) {
    return;
  }

  if (global.playerTurn) {
    global.shots++;

    const squareClass = square.target.classList[0];
    const squareCoords = squareClass.split("-");

    const row = parseInt(squareCoords[1]);
    const column = parseInt(squareCoords[2]);

    const explosionAudio = document.createElement("audio");
    explosionAudio.className = "explosion-audio";
    explosionAudio.src = "./sounds/explosion.mp3";

    switch (global.enemyBoard[row][column]) {
      case "X":
        return;

      case " ":
        global.enemyBoard[row][column] = "X";
        const squareX = document.querySelector(".enemy-" + row + "-" + column);
        squareX.classList.add("missed-shot");

        splashEnemy(square);

        const splashAudio = document.createElement("audio");
        splashAudio.src = "./sounds/splash.mp3";
        splashAudio.currentTime = 0;
        splashAudio.play();

        document.querySelector(".comments").textContent =
          "Oh! You found nothing but water!";
        break;

      case "T":
      case "D":
      case "S":
      case "B":
      case "A":
        global.onTarget++;
        global.enemyShips.map((ship) => {
          if (ship.letter === global.enemyBoard[row][column]) {
            ship.hits++;
            const squareText = document.querySelector(
              ".enemy-" + row + "-" + column
            );
            const letterDiv = document.createElement("div");
            letterDiv.textContent = ship.letter;
            squareText.append(letterDiv);
            document.querySelector(".comments").textContent =
              ship.hits === ship.totalHealth
                ? `You destroyed the ${ship.shipName}!`
                : `You hit your opponent's ${ship.shipName}!`;
          }
        });
        explosionEnemy(square);
        global.enemyBoard[row][column] = "X";
        showShipsHealth("enemy");

        explosionAudio.currentTime = 0;
        explosionAudio.play();
        explosionAudio.volume = 0.8;

        const squareColor = document.querySelector(
          ".enemy-" + row + "-" + column
        );
        squareColor.classList.add("shot");
        document.querySelector(".enemy-board").classList.add("shake");

        setTimeout(() => {
          document.querySelector(".enemy-board").classList.remove("shake");
        }, 800);
    }

    global.playerTurn = false;
    checkWinner(global.enemyShips);
    enemyShot();
  }
};

const enemyShot = () => {
  if (global.gameOver) {
    return;
  }

  const randomRow = Math.floor(Math.random() * 10 + 1);
  const randomColumn = Math.floor(Math.random() * 10 + 1);
  const randomShot = global.playerBoard[randomRow][randomColumn];

  const explosionAudio = document.createElement("audio");
  explosionAudio.className = "explosion-audio";
  explosionAudio.src = "./sounds/explosion.mp3";

  if (randomShot === "X") {
    return enemyShot();
  }

  setTimeout(() => {
    global.playerTurn = true;
    switch (randomShot) {
      case " ":
        const squareSplash = document.querySelector(
          ".player-" + randomRow + "-" + randomColumn
        );
        splashPlayer(squareSplash);

        global.playerBoard[randomRow][randomColumn] = "X";
        const squareShot = document.querySelector(
          ".player-" + randomRow + "-" + randomColumn
        );
        squareShot.classList.add("missed-shot");

        const splashAudio = document.createElement("audio");
        splashAudio.src = "./sounds/splash.mp3";
        splashAudio.currentTime = 0;
        splashAudio.play();

        document.querySelector(".comments").textContent =
          "Good! Your opponent missed!";
        break;

      case "T":
      case "D":
      case "S":
      case "B":
      case "A":
        global.playerShips.map((ship) => {
          if (ship.letter === randomShot) {
            ship.hits++;
            const squareText = document.querySelector(
              ".player-" + randomRow + "-" + randomColumn
            );
            squareText.textContent = ship.letter;
            document.querySelector(".comments").textContent =
              ship.hits === ship.totalHealth
                ? `Your ${ship.shipName} has been destroyed!`
                : `Your ${ship.shipName} has been hit!`;
          }
        });

        global.playerBoard[randomRow][randomColumn] = "X";
        showShipsHealth("player");

        explosionAudio.play();

        const squareColor = document.querySelector(
          ".player-" + randomRow + "-" + randomColumn
        );
        squareColor.classList.add("shot");
        explosionPlayer(squareColor);

        document.querySelector(".player-board").classList.add("shake");

        setTimeout(() => {
          document.querySelector(".player-board").classList.remove("shake");
        }, 800);
    }

    checkWinner(global.playerShips);
  }, 2500);
};

const explosionEnemy = (square) => {
  const clicked = square.target;
  const explosionOrigin = document.createElement("div");
  explosionOrigin.className = "explosion";

  clicked.appendChild(explosionOrigin);

  setTimeout(() => {
    explosionOrigin.remove();
  }, 1500);
};

const explosionPlayer = (square) => {
  const explosionOrigin = document.createElement("div");
  explosionOrigin.classList.add("explosion");
  square.append(explosionOrigin);

  setTimeout(() => {
    explosionOrigin.remove();
  }, 1500);
};

const splashEnemy = (square) => {
  const clicked = square.target;
  const splashOrigin1 = document.createElement("div");
  splashOrigin1.className = "splash splash-effect1";

  const splashOrigin2 = document.createElement("div");
  splashOrigin2.className = "splash splash-effect2";

  clicked.append(splashOrigin1, splashOrigin2);

  setTimeout(() => {
    splashOrigin1.remove();
    splashOrigin2.remove();
  }, 2500);
};

const splashPlayer = (square) => {
  const splashOrigin1 = document.createElement("div");
  splashOrigin1.className = "splash splash-effect1";

  const splashOrigin2 = document.createElement("div");
  splashOrigin2.className = "splash splash-effect2";

  square.append(splashOrigin1, splashOrigin2);

  setTimeout(() => {
    splashOrigin1.remove();
    splashOrigin2.remove();
  }, 2500);
};

export default shot;
