import global from './global.js';
import showShipsHealth from './shipsHealth.js';
import checkWinner from './winner.js';


const shot = (square) => {

    if (global.gameOver) {
        return
    }

    if (global.playerTurn) {

        global.shots++

        const squareClass = square.target.classList[0];
        const squareCoords = squareClass.split("-");

        const row = parseInt(squareCoords[1]);
        const column = parseInt(squareCoords[2]);

        const explosionAudio = document.createElement('audio');
        explosionAudio.className = 'explosion-audio';
        explosionAudio.src = './sounds/explosion.mp3';

        switch (global.enemyBoard[row][column]) {
            case "X":
                return

            case " ":
                global.enemyBoard[row][column] = "X";
                let squareX = document.querySelector(".enemy-" + row + "-" + column);
                squareX.classList.add('missed-shot');

                splashEnemy(square);

                const splashAudio = document.createElement('audio');
                splashAudio.src = './sounds/splash.mp3';
                splashAudio.currentTime = 0;
                splashAudio.play();

                document.querySelector('.comments').textContent = "Oh! You found nothing but water!"
                break;

            case "T":
            case "D":
            case "S":
            case "B":
            case "A":
                global.onTarget++
                global.enemyShips.map((ship) => {
                    if(ship.letter === global.enemyBoard[row][column]) {
                        ship.hits++
                        let squareText = document.querySelector(".enemy-" + row + "-" + column);
                        let letterDiv = document.createElement('div');
                        letterDiv.textContent = ship.letter;
                        squareText.append(letterDiv);
                        document.querySelector(".comments").textContent = ship.hits === ship.totalHealth ? `You destroyed the ${ship.shipName}!` : `You hit your opponent's ${ship.shipName}!`
                    }
                })
                explosionEnemy(square);
                global.enemyBoard[row][column] = "X";
                showShipsHealth("enemy");

                explosionAudio.currentTime = 0;
                explosionAudio.play();
                explosionAudio.volume = 0.8

                let squareColor = document.querySelector(".enemy-" + row + "-" + column);
                squareColor.classList.add("shot");
                document.querySelector('.enemy-board').classList.add('shake');

                setTimeout(() => {
                    document.querySelector('.enemy-board').classList.remove('shake'); 
                }, 800);  
        }

        global.playerTurn = false;
        checkWinner(global.enemyShips);
        enemyShot();
    }
}


const enemyAI = () => {

    let stuckScape = Math.random() > 0.97;

    if (!stuckScape) {

        const direction = Math.floor(Math.random() * 4);
        let nextShotRow;
        let nextShotColumn;
    
        switch (direction) {
    
            case 0:
                if (global.lastHitRow === 1) return enemyAI();
                nextShotRow = global.lastHitRow - 1;
                nextShotColumn = global.lastHitColumn;
                break;
            case 1:
                if (global.lastHitColumn === 10) return enemyAI();
                nextShotRow = global.lastHitRow;
                nextShotColumn = global.lastHitColumn + 1;
                break;
            case 2:
                if (global.lastHitRow === 10) return enemyAI();
                nextShotRow = global.lastHitRow + 1;
                nextShotColumn = global.lastHitColumn;
                break;
            case 3:
                if (global.lastHitColumn === 1) return enemyAI();
                nextShotRow = global.lastHitRow;
                nextShotColumn = global.lastHitColumn - 1;
                break;
        }
    
        return [nextShotRow, nextShotColumn]

    } else {

        let stuck = true;
        let nextShotRow;
        let nextShotColumn;

        for (let i = 1; i < global.playerBoard.length; i++) {
            for (let j = 1; j < global.playerBoard[i].length; j++) {

                if (global.playerBoard[i][j] === global.lastHitLetter) {

                    stuck = false;
                    nextShotRow = i;
                    nextShotColumn = j;
                    break

                }

            }
        }

        if (stuck) {

            return [Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1)]
            
        } else {
            
            return [nextShotRow, nextShotColumn]

        }


    }

}


const enemyShot = () => {

    if (global.gameOver) {
        return
    }

    let nextShotCoords;
    let nextShotRow;
    let nextShotColumn;
    
    
    if (global.lastHitShip !== '' && !global.playerShips[global.lastHitShip].isSunk) {
        
        nextShotCoords = enemyAI();
        nextShotRow = nextShotCoords[0];
        nextShotColumn = nextShotCoords[1];
        
    } else {
        
        nextShotRow = Math.floor((Math.random() * 10) + 1);
        nextShotColumn = Math.floor((Math.random() * 10) + 1);
        
    }
    
    let nextEnemyShot = global.playerBoard[nextShotRow][nextShotColumn];

    const explosionAudio = document.createElement('audio');
    explosionAudio.className = 'explosion-audio';
    explosionAudio.src = './sounds/explosion.mp3';
    
    if (nextEnemyShot === "X") {
        
        return enemyShot()
        
    } else {
        
        setTimeout(function() {
            
            global.playerTurn = true;

            switch (nextEnemyShot) {
                case " ":
                    let squareSplash = document.querySelector(".player-" + nextShotRow + "-" + nextShotColumn);
                    splashPlayer(squareSplash);
                    
                    global.playerBoard[nextShotRow][nextShotColumn] = "X";
                    
                    let squareShot = document.querySelector(".player-" + nextShotRow + "-" + nextShotColumn);
                    squareShot.classList.add("missed-shot");
                    
                    const splashAudio = document.createElement('audio');
                    splashAudio.src = './sounds/splash.mp3';
                    splashAudio.currentTime = 0;
                    splashAudio.play();
                    
                    document.querySelector(".comments").textContent = "Good! Your opponent missed!"
                    break;
                    
                case "T":
                case "D":
                case "S":
                case "B":
                case "A":
                    global.playerShips.map((ship) => {
                        if(ship.letter === nextEnemyShot) {
                            ship.hits++
                            global.lastHitRow = nextShotRow;
                            global.lastHitColumn = nextShotColumn;
                            global.lastHitLetter = ship.letter;
                            global.lastHitShip = ship.index;
                            let squareText = document.querySelector(".player-" + nextShotRow + "-" + nextShotColumn);
                            squareText.textContent = ship.letter;
                            document.querySelector(".comments").textContent = ship.hits === ship.totalHealth ? `Your ${ship.shipName} has been destroyed!` : `Your ${ship.shipName} has been hit!`
                        }
                    })
                    
                    global.playerBoard[nextShotRow][nextShotColumn] = "X";
                    showShipsHealth("player");
                    
                    explosionAudio.play();
                    
                    let squareColor = document.querySelector(".player-" + nextShotRow + "-" + nextShotColumn);
                    squareColor.classList.add("shot");
                    explosionPlayer(squareColor);
                    
                    document.querySelector('.player-board').classList.add('shake');
                    
                    setTimeout(() => {
                        document.querySelector('.player-board').classList.remove('shake'); 
                    }, 800);
            }
            
        checkWinner(global.playerShips);
                    
        }, 2500)
    }
}
        
        
const explosionEnemy = (square) => {
            
    let clicked = square.target;
    let explosionOrigin = document.createElement('div');
    explosionOrigin.className = 'explosion';
            
    clicked.appendChild(explosionOrigin);
            
    setTimeout(() => {
        explosionOrigin.remove();
    }, 1500);
            
}
        
const explosionPlayer = (square) => {
            
    let explosionOrigin = document.createElement('div');
    explosionOrigin.classList.add('explosion');
    square.append(explosionOrigin);
            
    setTimeout(() => {
        explosionOrigin.remove();
    }, 1500);
}
            
        
        
const splashEnemy = (square) => {
    
    let clicked = square.target;
    let splashOrigin1 = document.createElement('div');
    splashOrigin1.className = 'splash splash-effect1';

    let splashOrigin2 = document.createElement('div');
    splashOrigin2.className = 'splash splash-effect2';

    clicked.append(splashOrigin1, splashOrigin2);

    setTimeout(() => {
        splashOrigin1.remove();
        splashOrigin2.remove();
    }, 2500);

}


const splashPlayer = (square) => {
    
    let splashOrigin1 = document.createElement('div');
    splashOrigin1.className = 'splash splash-effect1';

    let splashOrigin2 = document.createElement('div');
    splashOrigin2.className = 'splash splash-effect2';

    square.append(splashOrigin1, splashOrigin2);

    setTimeout(() => {
        splashOrigin1.remove();
        splashOrigin2.remove();
    }, 2500);

}


export default shot;