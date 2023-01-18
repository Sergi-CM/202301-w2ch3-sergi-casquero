import global from './global.js';
import ships from './ships.js';


const generateSidebars = (player) => {

    const sidebar = document.createElement('section');
    sidebar.className = `sidebar ${player}-sidebar fade-in`;

    const sidebarHeader = document.createElement('h2');
    sidebarHeader.className = 'sidebar-header';
    sidebarHeader.textContent = player === 'player' ? global.playerName : 'CPU';
    sidebar.appendChild(sidebarHeader);

    const shipsContainer = document.createElement('div');

    for (let i = 0; i < 5; i++) {

        const shipStats = document.createElement('div');
        shipStats.className = 'ship-stats';
        
        const shipImage = document.createElement('img');
        shipImage.className = `${ships[i].shipName} ${player}-${ships[i].shipName}`;
        shipImage.src = ships[i].source;

        const shipName = document.createElement('p');
        shipName.className = 'ship-name'
        shipName.textContent = `${ships[i].shipName} (${ships[i].letter})`;

        const shipHealth = document.createElement('div');
        shipHealth.className = `${player}-${ships[i].shipName}-health ship-health`

        shipStats.append(shipImage, shipName, shipHealth);

        shipsContainer.appendChild(shipStats);
    }

    sidebar.appendChild(shipsContainer);

    const mainContainer = document.querySelector('.main-container');
    mainContainer.appendChild(sidebar)
}


const generateTitle = () => {
    
    const mainContainer = document.querySelector('.main-container');

    const gameTitle = document.createElement('h1');
    gameTitle.textContent = 'BATTLESHIP v3';
    gameTitle.className = `game-title fade-in`;

    mainContainer.appendChild(gameTitle);
}


const generateCommentSection = () => {

    const comments = document.createElement('p');
    comments.className = 'comments';
    comments.textContent = "Click anywhere in your opponent's board";

    const mainContainer = document.querySelector('.main-container');

    mainContainer.appendChild(comments);

    console.log(global.enemyBoard);

}


export { generateSidebars, generateTitle, generateCommentSection } ;