import ships from './ships.js';
import global from './global.js';
import { generateVisibleBoards } from "./boards.js";
import { generateCommentSection } from "./ui.js";



const generateShipPlacer = (visible = true) => {

    if (visible) {

        const placerContainer = document.createElement('section');
        placerContainer.className = 'placer-container fade-in';
    
        for (let i = 0; i < ships.length; i++) {

            const ship = ships[i];
            
            const shipPlacer = document.createElement('div');
            shipPlacer.className = 'ship-placer';

            const shipPlacerTitle = document.createElement('p');
            shipPlacerTitle.className = 'ship-placer-title';
            shipPlacerTitle.textContent = ships[i].shipName;

            const shipCoords = document.createElement('div');
            shipCoords.className = 'ship-coords';

            const xCoord = document.createElement('label');
            xCoord.htmlFor = `${ships[i].shipName}-X`;
            xCoord.textContent = 'X Coord';

            const xInput = document.createElement('input');
            xInput.className = `${ships[i].shipName}-X`;
            xInput.type = 'text';
            xInput.maxLength = 2;

            const yCoord = document.createElement('label');
            yCoord.htmlFor = `${ships[i].shipName}-Y`;
            yCoord.textContent = 'Y Coord';

            const yInput = document.createElement('input');
            yInput.className = `${ships[i].shipName}-Y`;
            yInput.type = 'text';
            yInput.maxLength = 2;

            const horizontalButton = document.createElement('button');
            horizontalButton.textContent = 'Horizontal';
            horizontalButton.className = `${ships[i].shipName}-horizontal ship-button ship-button-clicked`;
            horizontalButton.onclick = () => directionButtons(`${ships[i].shipName}-horizontal`, `${ships[i].shipName}-vertical`);

            const verticalButton = document.createElement('button');
            verticalButton.textContent = 'Vertical';
            verticalButton.className = `${ships[i].shipName}-vertical ship-button ship-button`;
            verticalButton.onclick = () => directionButtons(`${ships[i].shipName}-vertical`, `${ships[i].shipName}-horizontal`);

            const placeShip = document.createElement('button');
            placeShip.textContent = 'Place Ship';
            placeShip.className = `${ships[i].shipName}-place ship-button ship-submit`;
            placeShip.onclick = () => placePlayerShips(`${ships[i].shipName}-X`, `${ships[i].shipName}-Y`, `${ships[i].shipName}-horizontal`, `${ships[i].shipName}-message`, ship);

            const shipMessage = document.createElement('p');
            shipMessage.className = `${ships[i].shipName}-message ship-message`;
            shipMessage.textContent = '';

            shipCoords.append(xCoord, xInput, yCoord, yInput, horizontalButton, verticalButton, placeShip)
            shipPlacer.append(shipPlacerTitle, shipCoords, shipMessage);

            placerContainer.appendChild(shipPlacer);
            
        }

        const startButton = document.createElement('button');
        startButton.className = 'ship-button ship-submit start-game-button';
        startButton.textContent = 'Start Game';
        startButton.onclick = startGame;

        placerContainer.appendChild(startButton);

        const mainContainer = document.querySelector('.main-container');
        mainContainer.appendChild(placerContainer);

    } else {

        const placerContainer = document.querySelector('.placer-container');
        placerContainer.remove();

    }
    

}


const directionButtons = (clickedButton, notClickedButton) => {
    clickedButton = document.querySelector('.' + clickedButton);
    notClickedButton = document.querySelector('.' + notClickedButton);
    clickedButton.classList.add("ship-button-clicked");
    notClickedButton.classList.remove("ship-button-clicked");
}

const removePlayerShips = (ship) => {
    
    for (let r = 1; r <= global.rows; r++) {
        for (let c = 1; c <= global.cols; c++) {
            const visibleSquare = document.querySelector(".player-" + r + "-" + c)
            if (global.playerBoard[r][c] === ship.letter) {
                global.playerBoard[r][c] = " ";
            }

            if (visibleSquare.textContent === ship.letter) {
                visibleSquare.textContent = "";
                visibleSquare.classList.remove("player-ship");
            }
        }
    }
}

const checkEmptySpaces = (xCoordinate, yCoordinate, horizontal, ship) => {
    
    let placeableShip = true;
    
    if (horizontal) {
        for (let i = 0; i < ship.totalHealth; i++) {

            if (yCoordinate + i > 11) {
                return

            } else {

                if (global.playerBoard[xCoordinate][yCoordinate + i] != " ") {
                    placeableShip = false;
                }
            }

        }

    } else {
        for (let i = 0; i < ship.totalHealth; i++) {

            if (xCoordinate + i > 11) {
                return

            } else {

                if (global.playerBoard[xCoordinate + i][yCoordinate] != " ") {
                    placeableShip = false;
                }
            }
        }
    }

    return placeableShip
}


const placePlayerShips = (xCoordinate, yCoordinate, horizontal, comment, ship) => {
    
    removePlayerShips (ship);

    let shipxCoordinate = parseInt(document.querySelector('.' + yCoordinate).value);
    let shipyCoordinate = parseInt(document.querySelector('.' + xCoordinate).value);
    let horizontalDirection = document.querySelector('.' + horizontal).classList.contains("ship-button-clicked") ? true : false;
    let shipComment = document.querySelector('.' + comment);
    let isPlaceable;
    
    if (isNaN(shipxCoordinate) || isNaN(shipyCoordinate)) {
        shipComment.textContent = "Please enter numeric values."
        ship.isPlaced = false;
        return

    } else {

        if (horizontalDirection && shipyCoordinate > (11 - ship.totalHealth)) {
            shipComment.textContent = "Can't place the ship outside the grid."
            ship.isPlaced = false;
            return
            
        } else if (!horizontalDirection && shipxCoordinate > (11 - ship.totalHealth)) {
            shipComment.textContent = "Can't place the ship outside the grid."
            ship.isPlaced = false;
            return
            
        } else if (shipxCoordinate === 0 || shipyCoordinate === 0) {
                
            shipComment.textContent = "Please enter values from 1 to 10."
            ship.isPlaced = false;
            return

        } else {

            isPlaceable = checkEmptySpaces(shipxCoordinate, shipyCoordinate, horizontalDirection, ship);
            
            if (!isPlaceable) {
                shipComment.textContent = "Another ship interferes with the placement."
                ship.isPlaced = false;
                return
            }
        }
    }
        

    if (horizontalDirection) {
        for (let i = 0; i < ship.totalHealth; i++) {
            global.playerBoard[shipxCoordinate][shipyCoordinate + i] = ship.letter;
            document.querySelector(".player-" + shipxCoordinate + "-" + (shipyCoordinate + i)).classList.add("player-ship");
            document.querySelector(".player-" + shipxCoordinate + "-" + (shipyCoordinate + i)).textContent = ship.letter;
            const placedShipAudio = document.createElement('audio');
            placedShipAudio.src = './sounds/placedship.mp3';
            placedShipAudio.play();
        }

            shipComment.textContent = "Ship placed correctly!"
            ship.isPlaced = true;

    } else {

        for (let i = 0; i < ship.totalHealth; i++) {
            global.playerBoard[shipxCoordinate + i][shipyCoordinate] = ship.letter;
            document.querySelector(".player-" + (shipxCoordinate + i) + "-" + shipyCoordinate).classList.add("player-ship");
            document.querySelector(".player-" + (shipxCoordinate + i) + "-" + shipyCoordinate).textContent = ship.letter;
            const placedShipAudio = document.createElement('audio');
            placedShipAudio.src = './sounds/placedship.mp3';
            placedShipAudio.play();
        }

        shipComment.textContent = "Ship placed correctly!"
        ship.isPlaced = true;   

    }

}


const checkIfAllPlaced = () => {

    let allPlaced = true;

    ships.map((ship) => {
        if (ship.isPlaced === false) {
            allPlaced = false;
        }
    })

    return allPlaced
}

const startGame = () => {

    let allPlaced = checkIfAllPlaced();

    if (allPlaced) {

        const countdowndAudio = document.createElement('audio');
        countdowndAudio.src = './sounds/countdown.mp3';
        countdowndAudio.play();
        
        setTimeout (function() {

            const placingAudio = document.querySelector('.placing-audio');
            placingAudio.pause();

            const bgAudio = document.createElement('audio');
            bgAudio.className = 'bg-music';
            bgAudio.src = './sounds/bgmusic.mp3';
            bgAudio.volume = 0.6;
            bgAudio.play();
            bgAudio.loop = 'true';

            const mainContainer = document.querySelector('.main-container');
            mainContainer.appendChild(bgAudio);

            generateShipPlacer(false);
            generateVisibleBoards('enemy');
            generateCommentSection();
            
        }, 2300);

    } else {

        const accessDeniedAudio = document.createElement('audio');
        accessDeniedAudio.src = './sounds/denied.mp3';
        accessDeniedAudio.play();

    }
}


export default generateShipPlacer;