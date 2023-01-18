import global from './global.js';
import { generateSidebars, generateTitle } from "./ui.js";
import generatePopup from "./popup.js";
import { generateBoards } from "./boards.js";
import showShipsHealth from './shipsHealth.js';



const generateWelcome = ( visible = true ) => {

    if ( visible ) {

        const welcomeContainer = document.createElement('div');
        welcomeContainer.className = 'welcome-container';

        const welcomeBox = document.createElement('div');
        welcomeBox.className = 'welcome-box scale-up';

        const welcomeTitle = document.createElement('p');
        welcomeTitle.className = 'welcome-title';
        welcomeTitle.textContent = 'Welcome to Battleship!';

        const welcomeText = document.createElement('p');
        welcomeText.className = 'welcome-text';
        welcomeText.textContent = "What's your name?";

        const nameInput = document.createElement('input');
        nameInput.autofocus = 'true';
        nameInput.className = 'name-input';
        nameInput.placeholder = 'Your name here';
        nameInput.addEventListener('keyup', (event) => {
            event.preventDefault();
            if (event.key === 'Enter') {
                enterSystem();
            }
        })

        const startButton = document.createElement('input');
        startButton.type = 'button';
        startButton.value = 'Enter System';
        startButton.className = 'start-button';
        startButton.textContent = 'Enter System';
        startButton.onclick = enterSystem; loader;

        welcomeBox.append(welcomeTitle, welcomeText, nameInput, startButton);
        welcomeContainer.appendChild(welcomeBox);

        const mainContainer = document.querySelector('.main-container');
        mainContainer.appendChild(welcomeContainer);

    } else {

        const welcomeContainer = document.querySelector('.welcome-container');
        welcomeContainer.remove();

    }

}


const enterSystem = () => {

    const playerName = document.querySelector('.name-input').value;

    const identifyAudio = document.createElement('audio');
    identifyAudio.src = './sounds/identify.mp3';

    const accessingAudio = document.createElement('audio');
    accessingAudio.src = './sounds/accessing.mp3';

    if (playerName && playerName != " ") {
        accessingAudio.play();
        global.playerName = playerName;
        generateWelcome(false);
        loader(true);

    } else {
        identifyAudio.play();
    }
}


const loader = () => {

    const loaderAudio = document.createElement('audio');
    loaderAudio.src = './sounds/loader.mp3';
    loaderAudio.play();

    const completeAudio = document.createElement('audio');
    completeAudio.src = './sounds/complete.mp3';

    const loaderContainer = document.createElement('div');
    loaderContainer.className = ('loader-container')

    const loader = document.createElement('div');
    loader.className = ('loader');

    loaderContainer.appendChild(loader);

    
    const placingAudio = document.createElement('audio');
    placingAudio.className = 'placing-audio';
    placingAudio.src = './sounds/placing.mp3';
    placingAudio.loop = true;
    
    const mainContainer = document.querySelector('.main-container');
    mainContainer.append(loaderContainer, placingAudio);

    setTimeout(() => {
        completeAudio.play();
        hideLoader();
        generateSidebars('player');
        generateBoards();
        generateSidebars('enemy');
        generateTitle();
        showShipsHealth('player');
        showShipsHealth('enemy');
        generatePopup();
        placingAudio.play();
    }, 3300)

}


const hideLoader = () => {

    const loader = document.querySelector('.loader-container');
    loader.remove();

}

export default generateWelcome