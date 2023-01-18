import global from "./global.js";
import ships from "./ships.js";
import generateShipPlacer from "./shipPlacer.js";
import shot from "./shot.js";

const generateEngineBoards = (boardToGenerate) => {
  for (let r = 0; r <= global.rows; r++) {
    const row = [];
    for (let c = 0; c <= global.cols; c++) {
      row.push(" ");
    }

    boardToGenerate.push(row);
  }
};

const generateRandomShips = (ship) => {
  const direction = Math.random() < 0.5;
  const randomRow = direction
    ? Math.floor(Math.random() * global.rows + 1)
    : Math.floor(Math.random() * (global.rows - ship.totalHealth) + 1);
  const randomCol = direction
    ? Math.floor(Math.random() * (global.cols - ship.totalHealth) + 1)
    : Math.floor(Math.random() * global.cols + 1);

  if (direction) {
    for (let i = 0; i < ship.totalHealth; i++) {
      if (global.enemyBoard[randomRow][randomCol + i] !== " ") {
        global.shipCounter = 0;
        global.enemyBoard = [];
        generateEngineBoards(global.enemyBoard);
        placeEnemyShips();
        break;
      } else {
        global.enemyBoard[randomRow][randomCol + i] = ship.letter;
      }
    }

    global.shipCounter++;
  } else {
    for (let i = 0; i < ship.totalHealth; i++) {
      if (global.enemyBoard[randomRow + i][randomCol] !== " ") {
        global.shipCounter = 0;
        global.enemyBoard = [];
        generateEngineBoards(global.enemyBoard);
        placeEnemyShips();
        break;
      } else {
        global.enemyBoard[randomRow + i][randomCol] = ship.letter;
      }
    }

    global.shipCounter++;
  }
};

const placeEnemyShips = () => {
  for (let i = 0; i < ships.length; i++) {
    if (global.shipCounter >= 5) {
      break;
    } else {
      generateRandomShips(ships[i]);
    }
  }
};

const generateVisibleBoards = (player) => {
  const board = document.createElement("div");
  board.className = `${player}-board fade-in`;

  const whosBoardWeCreate = player === "player" ? player : "enemy";

  for (let r = 0; r <= global.rows; r++) {
    for (let c = 0; c <= global.cols; c++) {
      if (r === 0 && c != 0) {
        const columnNumber = document.createElement("div");
        columnNumber.textContent = c;
        columnNumber.className = "grid-header";
        board.appendChild(columnNumber);
      } else if (c === 0 && r != 0) {
        const rowNumber = document.createElement("div");
        rowNumber.textContent = r;
        rowNumber.className = "grid-header";
        board.appendChild(rowNumber);
      } else if (r === 0 && c === 0) {
        const headerNull = document.createElement("p");
        headerNull.className = "grid-header";
        board.appendChild(headerNull);
      } else {
        const square = document.createElement("div");
        square.className = `${whosBoardWeCreate}-${r.toString()}-${c.toString()} square`;

        if (whosBoardWeCreate === "enemy") {
          square.classList.add("enemy-square");
          square.onclick = shot;
        }

        board.append(square);
      }
    }
  }

  const mainContainer = document.querySelector(".main-container");

  if (player === "enemy") {
    mainContainer.insertBefore(board, document.querySelector(".enemy-sidebar"));

    setTimeout(() => {
      document.querySelector(".enemy-board").classList.remove("fade-in");
    }, 1000);
  } else {
    mainContainer.appendChild(board);

    setTimeout(() => {
      document.querySelector(".player-board").classList.remove("fade-in");
    }, 1000);
  }
};

const generateBoards = () => {
  generateEngineBoards(global.playerBoard);
  generateEngineBoards(global.enemyBoard);
  placeEnemyShips();
  generateVisibleBoards("player");
  generateShipPlacer();
};

export { generateBoards, generateVisibleBoards };
