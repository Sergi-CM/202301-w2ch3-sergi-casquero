import ships from "./ships.js";

const global = {
  playerBoard: [],
  enemyBoard: [],
  shipCounter: 0,
  gameOver: false,
  playerTurn: true,
  playerName: "",

  rows: 10,
  cols: 10,

  shots: 0,
  onTarget: 0,

  lastHitRow: "",
  lastHitColumn: "",
  lastHitLetter: "",
  lastHitShip: "",

  playerShips: structuredClone(ships),
  enemyShips: structuredClone(ships),
};

export default global;
