import global from "./global.js";

const showShipsHealth = (player) => {
  const playerToMap =
    player === "player" ? global.playerShips : global.enemyShips;

  playerToMap.map((ship) => {
    const clearHealthPoints = () => {
      document.querySelector(`.${player}-${ship.shipName}-health`).innerHTML =
        "";
    };

    clearHealthPoints();

    if (ship.hits === ship.totalHealth) {
      ship.isSunk = true;
      document
        .querySelector(`.${player}-${ship.shipName}`)
        .setAttribute("src", "./assets/" + ship.shipName + "2.png");
    }

    for (let i = 0; i < ship.totalHealth; i++) {
      const healthPoint = document.createElement("div");
      if (i < ship.hits) {
        healthPoint.className = "hit";
        document
          .querySelector(`.${player}-${ship.shipName}-health`)
          .appendChild(healthPoint);
      } else {
        healthPoint.classList.add("no-hit");
        document
          .querySelector(`.${player}-${ship.shipName}-health`)
          .appendChild(healthPoint);
      }
    }
  });
};

export default showShipsHealth;
