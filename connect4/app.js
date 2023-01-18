// Variables globales

const playerRed = "R";
const playerBlue = "B";
let currentPlayer = playerRed;

let gameOver = false;

let board;
const rows = 6;
const cols = 7;

let emptyTiles;

const winnerText = document.getElementById("winner");
const soundFicha = document.getElementById("sound-ficha");
const soundVictory = document.getElementById("sound-victory");
const currentFicha = document.getElementById("current-ficha");
const currentContainer = document.getElementById("current");

// Desarrollo del juego

window.onload = function () {
  setGame();
};

const setGame = () => {
  board = [];
  emptyTiles = [5, 5, 5, 5, 5, 5, 5];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push(" ");

      const tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.addEventListener("click", setDisk);
      document.getElementById("board").append(tile);
    }

    board.push(row);
  }
};

function setDisk() {
  if (gameOver) {
    return;
  }

  soundFicha.currentTime = 0;
  soundFicha.play();

  const coords = this.id.split("-");
  let row = parseInt(coords[0]);
  const column = parseInt(coords[1]);

  row = emptyTiles[column];
  if (row < 0) {
    return;
  }

  board[row][column] = currentPlayer;

  const tile = document.getElementById(
    row.toString() + "-" + column.toString()
  );

  if (currentPlayer == playerRed) {
    tile.classList.add("red");
    currentFicha.classList.toggle("blue");
    currentPlayer = playerBlue;
  } else {
    tile.classList.add("blue");
    currentFicha.classList.toggle("blue");
    currentPlayer = playerRed;
  }

  row -= 1;
  emptyTiles[column] = row;

  checkWinner();
}

const checkWinner = () => {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols - 3; c++) {
      if (board[r][c] !== " ") {
        if (
          board[r][c] == board[r][c + 1] &&
          board[r][c + 1] == board[r][c + 2] &&
          board[r][c + 2] == board[r][c + 3]
        ) {
          winnerSideBar();
          soundVictory.play();
          blinkingHorizontal(r, c);
          gameOver = true;
          return;
        }
      }
    }
  }

  for (let r = 0; r < rows - 3; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] !== " ") {
        if (
          board[r][c] == board[r + 1][c] &&
          board[r + 1][c] == board[r + 2][c] &&
          board[r + 2][c] == board[r + 3][c]
        ) {
          blinkingVertical(r, c);
          soundVictory.play();
          winnerSideBar();
          gameOver = true;
          return;
        }
      }
    }
  }

  for (let r = 3; r < rows; r++) {
    for (let c = 0; c < cols - 3; c++) {
      if (board[r][c] !== " ") {
        if (
          board[r][c] == board[r - 1][c + 1] &&
          board[r - 1][c + 1] == board[r - 2][c + 2] &&
          board[r - 2][c + 2] == board[r - 3][c + 3]
        ) {
          blinkingDiagonal(r, c);
          soundVictory.play();
          winnerSideBar();
          gameOver = true;
          return;
        }
      }
    }
  }

  for (let r = 3; r < rows; r++) {
    for (let c = 3; c < cols; c++) {
      if (board[r][c] !== " ") {
        if (
          board[r][c] == board[r - 1][c - 1] &&
          board[r - 1][c - 1] == board[r - 2][c - 2] &&
          board[r - 2][c - 2] == board[r - 3][c - 3]
        ) {
          blinkingAntiDiagonal(r, c);
          soundVictory.play();
          winnerSideBar();
          gameOver = true;
          return;
        }
      }
    }
  }

  if (checkTie(board)) winnerText.innerHTML = "Tie!";
};

const checkTie = (board) => {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const currentTile = board[r][c];
      if (currentTile === " ") {
        return false;
      }
    }
  }

  gameOver = true;
  return true;
};

const blinkingHorizontal = (r, c) => {
  document
    .getElementById(r.toString() + "-" + c.toString())
    .classList.add("blinking");
  document
    .getElementById(r.toString() + "-" + (c + 1).toString())
    .classList.add("blinking");
  document
    .getElementById(r.toString() + "-" + (c + 2).toString())
    .classList.add("blinking");
  document
    .getElementById(r.toString() + "-" + (c + 3).toString())
    .classList.add("blinking");
};

const blinkingVertical = (r, c) => {
  document
    .getElementById(r.toString() + "-" + c.toString())
    .classList.add("blinking");
  document
    .getElementById((r + 1).toString() + "-" + c.toString())
    .classList.add("blinking");
  document
    .getElementById((r + 2).toString() + "-" + c.toString())
    .classList.add("blinking");
  document
    .getElementById((r + 3).toString() + "-" + c.toString())
    .classList.add("blinking");
};

const blinkingDiagonal = (r, c) => {
  document
    .getElementById(r.toString() + "-" + c.toString())
    .classList.add("blinking");
  document
    .getElementById((r - 1).toString() + "-" + (c + 1).toString())
    .classList.add("blinking");
  document
    .getElementById((r - 2).toString() + "-" + (c + 2).toString())
    .classList.add("blinking");
  document
    .getElementById((r - 3).toString() + "-" + (c + 3).toString())
    .classList.add("blinking");
};

const blinkingAntiDiagonal = (r, c) => {
  document
    .getElementById(r.toString() + "-" + c.toString())
    .classList.add("blinking");
  document
    .getElementById((r - 1).toString() + "-" + (c - 1).toString())
    .classList.add("blinking");
  document
    .getElementById((r - 2).toString() + "-" + (c - 2).toString())
    .classList.add("blinking");
  document
    .getElementById((r - 3).toString() + "-" + (c - 3).toString())
    .classList.add("blinking");
};

const winnerSideBar = () => {
  currentFicha.style.visibility = "hidden";
  winnerText.innerHTML =
    currentPlayer == playerRed ? "Player 2 wins!" : "Player 1 wins!";
};

const startNewGame = () => window.location.reload();
