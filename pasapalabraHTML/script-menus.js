// Conjuntos de preguntas
const questions1 = [
  {
    letter: "a",
    answer: "arteria",
    status: 0,
    question:
      "Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo.",
  },
  {
    letter: "b",
    answer: "bitacora",
    status: 0,
    question:
      "En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula.",
  },
  {
    letter: "c",
    answer: "cicerone",
    status: 0,
    question:
      "Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes.",
  },
  {
    letter: "d",
    answer: "diplomacia",
    status: 0,
    question:
      "Actividad que realiza un país para mantener buenas relaciones con el resto de países.",
  },
  {
    letter: "e",
    answer: "equinoccio",
    status: 0,
    question:
      "Cada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra.",
  },
  {
    letter: "f",
    answer: "fisiologia",
    status: 0,
    question:
      "Ciencia que estudia las funciones de los órganos de los seres vivos.",
  },
  {
    letter: "g",
    answer: "glaciacion",
    status: 0,
    question:
      "Cada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo.",
  },
  {
    letter: "h",
    answer: "hinojo",
    status: 0,
    question:
      "Planta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís.",
  },
  {
    letter: "i",
    answer: "ingenio",
    status: 0,
    question:
      "Capacidad para inventar cosas o para pensar y hablar con gracia.",
  },
  {
    letter: "j",
    answer: "jade",
    status: 0,
    question:
      "Mineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno.",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "Piloto japonés que se lanzaba en su avión contra un barco u otro objetivo enemigo para destruirlo, aunque muriera al hacerlo.",
  },
  {
    letter: "l",
    answer: "lema",
    status: 0,
    question: "Frase que expresa la forma en que debe actuar una persona.",
  },
  {
    letter: "m",
    answer: "miriñaque",
    status: 0,
    question:
      "Prenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo.",
  },
  {
    letter: "n",
    answer: "ninfa",
    status: 0,
    question:
      "En las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos.",
  },
  {
    letter: "o",
    answer: "onomatopeya",
    status: 0,
    question: "Palabra que imita el sonido que hace un animal o una cosa.",
  },
  {
    letter: "p",
    answer: "pabellon",
    status: 0,
    question:
      "Edificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él.",
  },
  {
    letter: "q",
    answer: "quimera",
    status: 0,
    question:
      "Cosa que, sin ser real, alguien la imagina como posible o verdadera.",
  },
  {
    letter: "r",
    answer: "remora",
    status: 0,
    question:
      "Pez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes.",
  },
  {
    letter: "s",
    answer: "sotana",
    status: 0,
    question:
      "Traje negro y largo parecido a una túnica que llevan algunos curas y religiosos",
  },
  {
    letter: "t",
    answer: "testamento",
    status: 0,
    question:
      "Escrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias.",
  },
  {
    letter: "u",
    answer: "urbanizacion",
    status: 0,
    question:
      "Conjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven.",
  },
  {
    letter: "v",
    answer: "vencejo",
    status: 0,
    question:
      "Pájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido.",
  },
  {
    letter: "w",
    answer: "whisky",
    status: 0,
    question:
      "Licor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales.",
  },
  {
    letter: "x",
    answer: "xilografia",
    status: 0,
    question:
      "Manera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo.",
  },
  {
    letter: "y",
    answer: "yak",
    status: 0,
    question:
      "Mamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío.",
  },
  {
    letter: "z",
    answer: "zocalo",
    status: 0,
    question:
      "Banda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación.",
  },
];

const questions2 = [
  {
    letter: "a",
    answer: "ascua",
    status: 0,
    question: "Trozo de cualquier material ardiendo pero sin llama.",
  },
  {
    letter: "b",
    answer: "bilis",
    status: 0,
    question:
      "Líquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos.",
  },
  {
    letter: "c",
    answer: "cubismo",
    status: 0,
    question:
      "Estilo de pintura que comenzó a principios del siglo XX y que se caracteriza por representar figuras y objetos mediante formas geométricas.",
  },
  {
    letter: "d",
    answer: "dieresis",
    status: 0,
    question:
      "Signo ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse.",
  },
  {
    letter: "e",
    answer: "estria",
    status: 0,
    question:
      "Línea que se forma en la piel cuando ésta se ha estirado excesivamente.",
  },
  {
    letter: "f",
    answer: "fonema",
    status: 0,
    question: "Sonido de una letra.",
  },
  {
    letter: "g",
    answer: "gaucho",
    status: 0,
    question:
      "Se dice de las personas que viven en las grandes llanuras de Argentina y Uruguay y llevan el ganado de un lado a otro.",
  },
  {
    letter: "h",
    answer: "himno",
    status: 0,
    question:
      "Poesía o composición musical en alabanza de alguien o algo, como la que se dedica a un país.",
  },
  {
    letter: "i",
    answer: "iman",
    status: 0,
    question: "Mineral capaz de atraer el hierro u otros metales.",
  },
  { letter: "j", answer: "jabato", status: 0, question: "Cría del jabalí." },
  {
    letter: "k",
    answer: "karate",
    status: 0,
    question: "Sistema de combate sin armas de origen japonés",
  },
  {
    letter: "l",
    answer: "lombriz",
    status: 0,
    question:
      "Gusano muy largo de color rojizo que se alimenta de sustancias que hay en la tierra.",
  },
  {
    letter: "m",
    answer: "mudejar",
    status: 0,
    question:
      "Nombre que se daba a los musulmanes que vivían en los reinos cristianos de la península ibérica.",
  },
  {
    letter: "n",
    answer: "nogal",
    status: 0,
    question:
      "Árbol grande con la corteza lisa y de color gris cuyo fruto es la nuez.",
  },
  {
    letter: "o",
    answer: "ocre",
    status: 0,
    question: "Se dice del color que es una mezcla de amarillo y marrón.",
  },
  {
    letter: "p",
    answer: "protocolo",
    status: 0,
    question:
      "Conjunto de reglas o ceremonias que hay que cumplir en los actos oficiales o solemnes.",
  },
  {
    letter: "q",
    answer: "quechua",
    status: 0,
    question:
      "Pueblo indio que habita en Perú y que vivía allí antes del descubrimiento de América.",
  },
  {
    letter: "r",
    answer: "repisa",
    status: 0,
    question:
      "Tabla o elemento similar que se coloca contra la pared para poner en ella objetos.",
  },
  {
    letter: "s",
    answer: "solsticio",
    status: 0,
    question:
      "Nombre de dos momentos del año que marcan el inicio del verano y el comienzo del invierno.",
  },
  {
    letter: "t",
    answer: "troposfera",
    status: 0,
    question:
      "Capa de la atmósfera más cercana a la superficie de la Tierra, en la que tienen lugar los fenómenos del tiempo meteorológico.",
  },
  {
    letter: "u",
    answer: "utopia",
    status: 0,
    question:
      "Algo que es bueno y que deseamos pero que es imposible o muy difícil de realizar.",
  },
  {
    letter: "v",
    answer: "visera",
    status: 0,
    question:
      "Parte hacia afuera que tienen las gorras por delante y que sirve para que el sol no nos haga daño en los ojos.",
  },
  {
    letter: "w",
    answer: "western",
    status: 0,
    question: "Película del oeste americano.",
  },
  {
    letter: "x",
    answer: "xenofobia",
    status: 0,
    question: "Odio o antipatía hacia los extranjeros.",
  },
  {
    letter: "y",
    answer: "yodo",
    status: 0,
    question:
      "Elemento químico de color oscuro que se encuentra en el suelo en forma de sales, así como en las algas y otros animales marinos.",
  },
  {
    letter: "z",
    answer: "zarzal",
    status: 0,
    question: "Lugar donde hay muchas zarzas.",
  },
];

const questions3 = [
  {
    letter: "a",
    answer: "agenda",
    status: 0,
    question:
      "Libro o cuaderno en el que se apunta para no olvidar aquello que se ha de hacer.",
  },
  { letter: "b", answer: "bonanza", status: 0, question: "Prosperidad." },
  {
    letter: "c",
    answer: "caracol",
    status: 0,
    question:
      "Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse.",
  },
  {
    letter: "d",
    answer: "dormir",
    status: 0,
    question:
      "Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios.",
  },
  {
    letter: "e",
    answer: "entrecot",
    status: 0,
    question: "Trozo de carne sacado de entre costilla y costilla de la res.",
  },
  {
    letter: "f",
    answer: "farhadi",
    status: 0,
    question:
      "Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017.",
  },
  {
    letter: "g",
    answer: "gorgorito",
    status: 0,
    question:
      "Coloquialmente quiebro que se hace con la voz con la garganta al cantar.",
  },
  {
    letter: "h",
    answer: "hidroavion",
    status: 0,
    question:
      "Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua.",
  },
  {
    letter: "i",
    answer: "inapetencia",
    status: 0,
    question: "Falta de gana de comer.",
  },
  {
    letter: "j",
    answer: "jardineria",
    status: 0,
    question: "Arte y oficio del jardinero.",
  },
  {
    letter: "k",
    answer: "kilogramo",
    status: 0,
    question: "Unidad de masa del Sistema Internacional.",
  },
  { letter: "l", answer: "lobera", status: 0, question: "Guarida de lobos." },
  {
    letter: "m",
    answer: "mentira",
    status: 0,
    question:
      "Artimaña que se utiliza por el camino que no es verdad con la intención de que sea creída.",
  },
  {
    letter: "n",
    answer: "nativo",
    status: 0,
    question: "Se aplica al que ha nacido en el lugar de que se trata.",
  },
  {
    letter: "o",
    answer: "organo",
    status: 0,
    question:
      "Cada una de las partes de un animal o vegetal que ejerce una función.",
  },
  {
    letter: "p",
    answer: "plotino",
    status: 0,
    question:
      "Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría.",
  },
  {
    letter: "q",
    answer: "queja",
    status: 0,
    question:
      "Resentimiento o disgusto que se tiene por la actuación o el comportamiento de alguien.",
  },
  {
    letter: "r",
    answer: "rafaga",
    status: 0,
    question: "Viento fuerte, resentido y de corta duración.",
  },
  {
    letter: "s",
    answer: "simple",
    status: 0,
    question: "Se aplica a lo que no tiene complicación.",
  },
  {
    letter: "t",
    answer: "trece",
    status: 0,
    question: "Número cardinal equivalente a 10 + 3.",
  },
  {
    letter: "u",
    answer: "uderzo",
    status: 0,
    question:
      "Apellido del dibujante y guionista francés autor de la serie Asterix.",
  },
  {
    letter: "v",
    answer: "verde",
    status: 0,
    question:
      "Se aplica el color perfectamente al de la hierba fresca o la esmeralda.",
  },
  {
    letter: "w",
    answer: "waterpolo",
    status: 0,
    question: "Deporte parecido al balonmano, practicado en una piscina.",
  },
  {
    letter: "x",
    answer: "xilofono",
    status: 0,
    question:
      "Instrumento musical de percusión formado por diversas láminas específicamente afinadas.",
  },
  {
    letter: "y",
    answer: "yunque",
    status: 0,
    question:
      "Bloque de hierro sobre el que se trabajan los metales al rojo vivo golpeándolos con un martillo.",
  },
  {
    letter: "z",
    answer: "zoodiacal",
    status: 0,
    question: "Perteneciente o relativo al zoodíaco.",
  },
];

// Enlaces a elementos HTML

// Pantalla título
const titleScreen = document.getElementById("title-screen");
const start = document.getElementById("start");

// Menu principal
const bgMusic = document.getElementById("menu-music");
const menuTitle = document.getElementById("menu-screen");
const mainMenu = document.getElementById("main-menu");
const newGame = document.getElementById("new-game");
const tutorial = document.getElementById("tutorial");
const scoreboard = document.getElementById("scoreboard");
const options = document.getElementById("options");
const quitGame = document.getElementById("quit");

// Menu New Game
const difficultyMenu = document.getElementById("difficulty-menu");
const young = document.getElementById("young");
const rough = document.getElementById("rough");
const hurt = document.getElementById("hurt");
const violence = document.getElementById("violence");
const nightmare = document.getElementById("nightmare");
const diffBack = document.getElementById("diff-back");

// Tutorial
const slideshowContainer = document.getElementById("slideshow-container");
const tutoBack = document.getElementById("tuto-back");

// Scoreboard
const scoreboardSection = document.getElementById("scoreboard-section");
const scoreTableContent = document.getElementById("score-table-content");
const scoreBack = document.getElementById("score-back");

// Menu opciones
const optionsMenu = document.getElementById("options-menu");
const musicToggle = document.getElementById("music-toggle");
const optBack = document.getElementById("opt-back");
const fxToggle = document.getElementById("fx-toggle");

// Menu quit
const quitPopup = document.getElementById("quit-popup");
const quitYes = document.getElementById("quit-yes");
const quitNo = document.getElementById("quit-no");

// Black overlay
const overlay = document.getElementById("black-overlay");

// Pantalla de juego
const gameMusic = document.getElementById("game-music");
const loadShotgun = document.getElementById("load-shotgun");
const welcome = document.getElementById("welcome");
const nameInput = document.getElementById("name-input");
const welcomeNext = document.getElementById("welcome-next");
const greeting = document.getElementById("greeting");
const greetingText = document.getElementById("greeting-text");
const yeah = document.getElementById("yeah");

const roscoArea = document.getElementById("rosco-area");
const answerArea = document.getElementById("answer-area");
const currentLetter = document.getElementById("current-letter");
const question = document.getElementById("question");
const answerInput = document.getElementById("user-answer");
const answerAccept = document.getElementById("answer-accept");
const answerPasa = document.getElementById("answer-pasa");
const answerQuit = document.getElementById("answer-quit");

const answerQuitPopup = document.getElementById("answer-quit-popup");
const quitNext = document.getElementById("quit-next");

const deadPopup = document.getElementById("dead-popup");
const deadNext = document.getElementById("dead-next");

const winPopup = document.getElementById("win-popup");
const winNext = document.getElementById("win-next");

const monsterArea = document.getElementById("monster-area");
const monsterBG = document.getElementById("right-area");
const monster = document.getElementById("monster1");
const monsterHP = document.getElementById("monster-hpbar");
const shotgunSound = document.getElementById("shot");
const hurtSound = document.getElementById("player-hurt");
const healSound = document.getElementById("heal");
const pistolSound = document.getElementById("menu-click");
const death = document.getElementById("death");

const deathSound1 = document.getElementById("death-sound-1");
const deathSound2 = document.getElementById("death-sound-2");
const deathSound3 = document.getElementById("death-sound-3");
const deathSound4 = document.getElementById("death-sound-4");
const deathSound5 = document.getElementById("death-sound-5");

const statsArea = document.getElementById("stats-area");
const uiSeconds = document.getElementById("seconds");
const uiPlayerHP = document.getElementById("player-hp");
const uiMedikit = document.getElementById("medikit");
const uiDoomGuy = document.getElementById("doomguy");
const uiCorrect = document.getElementById("correct");
const uiWrong = document.getElementById("wrong");

// Post-game
const timeUp = document.getElementById("time-up");
const timeUpNext = document.getElementById("time-up-next");
const explosion = document.getElementById("explosion");
const intermission = document.getElementById("intermission");
const resultsScreen = document.getElementById("results-screen");
const resultsNumbers = document.getElementById("results-numbers");
const resultsCorrect = document.getElementById("results-correct");
const resultsWrong = document.getElementById("results-wrong");
const resultsKilled = document.getElementById("results-killed");
const resultsNext = document.getElementById("results-next");

// Letras del rosco
const letterA = document.getElementById("a");
const letterB = document.getElementById("b");
const letterC = document.getElementById("c");
const letterD = document.getElementById("d");
const letterE = document.getElementById("e");
const letterF = document.getElementById("f");
const letterG = document.getElementById("g");
const letterH = document.getElementById("h");
const letterI = document.getElementById("i");
const letterJ = document.getElementById("j");
const letterK = document.getElementById("k");
const letterL = document.getElementById("l");
const letterM = document.getElementById("m");
const letterN = document.getElementById("n");
const letterO = document.getElementById("o");
const letterP = document.getElementById("p");
const letterQ = document.getElementById("q");
const letterR = document.getElementById("r");
const letterS = document.getElementById("s");
const letterT = document.getElementById("t");
const letterU = document.getElementById("u");
const letterV = document.getElementById("v");
const letterW = document.getElementById("w");
const letterX = document.getElementById("x");
const letterY = document.getElementById("y");
const letterZ = document.getElementById("z");

// ----------------------------------------------------------------//

// Sound toggles
let fxGameMute = false;
let musicGameMute = false;

// Estados de inicio

const startState = () => {
  titleScreen.style.visibility = "visible";
  menuTitle.style.visibility = "hidden";
  mainMenu.style.visibility = "hidden";
  difficultyMenu.style.visibility = "hidden";
  quitPopup.style.visibility = "hidden";
  optionsMenu.style.visibility = "hidden";
  scoreboardSection.style.visibility = "hidden";
  scoreBack.style.visibility = "hidden";
  overlay.style.visibility = "hidden";
  roscoArea.style.visibility = "hidden";
  answerArea.style.visibility = "hidden";
  monsterArea.style.visibility = "hidden";
  statsArea.style.visibility = "hidden";
  welcome.style.visibility = "hidden";
  greeting.style.visibility = "hidden";
  timeUp.style.visibility = "hidden";
  resultsScreen.style.visibility = "hidden";
  resultsNext.style.visibility = "hidden";
  answerQuitPopup.style.visibility = "hidden";
  deadPopup.style.visibility = "hidden";
  winPopup.style.visibility = "hidden";
  slideshowContainer.style.visibility = "hidden";
};

startState();

// Navegación por los menús

start.onclick = function start() {
  titleScreen.style.visibility = "hidden";
  menuTitle.style.visibility = "visible";
  mainMenu.style.visibility = "visible";
  updateRanking();
  bgMusic.play();
  bgMusic.loop = true;
  bgMusic.volume = 0.4;
  console.log(ranking);
};

const playSound = (soundToPlay) => {
  if (fxToggle.textContent.includes("On")) {
    const sound = document.getElementById(soundToPlay);
    sound.play();
  }
};

const resetSound = (soundToPlay) => {
  const sound = document.getElementById(soundToPlay);
  sound.pause();
  sound.currentTime = 0;
};

newGame.onclick = function difficulty() {
  mainMenu.style.visibility = "hidden";
  difficultyMenu.style.visibility = "visible";
};

tutorial.onclick = function showTutorial() {
  mainMenu.style.visibility = "hidden";
  menuTitle.style.visibility = "hidden";
  slideshowContainer.style.visibility = "visible";
};

tutoBack.onclick = function hideTuto() {
  menuTitle.style.visibility = "visible";
  mainMenu.style.visibility = "visible";
  slideshowContainer.style.visibility = "hidden";
};

diffBack.onclick = function goBackDifficulty() {
  mainMenu.style.visibility = "visible";
  difficultyMenu.style.visibility = "hidden";
};

musicToggle.onclick = function musicMute() {
  if (musicToggle.textContent.includes("On")) {
    musicToggle.textContent = "Music: Off";
    bgMusic.pause();
    musicGameMute = true;
  } else {
    musicToggle.textContent = "Music: On";
    bgMusic.play();
    musicGameMute = false;
  }
};

fxToggle.onclick = function fxMute() {
  if (fxToggle.textContent.includes("On")) {
    fxToggle.textContent = "Sound FX: Off";
    fxGameMute = true;
  } else {
    fxToggle.textContent = "Sound FX: On";
    fxGameMute = false;
  }
};

quitGame.onclick = function quitSure() {
  mainMenu.style.visibility = "hidden";
  quitPopup.style.visibility = "visible";
};

quitNo.onclick = function dontQuit() {
  quitPopup.style.visibility = "hidden";
  mainMenu.style.visibility = "visible";
};

quitYes.onclick = function quit() {
  close();
};

options.onclick = function menuOptions() {
  mainMenu.style.visibility = "hidden";
  optionsMenu.style.visibility = "visible";
};

optBack.onclick = function goBackOptions() {
  mainMenu.style.visibility = "visible";
  optionsMenu.style.visibility = "hidden";
};

scoreboard.onclick = function scoreSection() {
  mainMenu.style.visibility = "hidden";
  scoreboardSection.style.visibility = "visible";
  scoreBack.style.visibility = "visible";
  console.log(ranking);
};

scoreBack.onclick = function goBackScore() {
  mainMenu.style.visibility = "visible";
  scoreboardSection.style.visibility = "hidden";
  scoreBack.style.visibility = "hidden";
};

// ----------------------------------------------------------------//

// Variables globales del juego

let correctGoal;
let correct = 0;
let wrong = 0;
let playerHP = 100;
let seconds = 260;
let gameQuestions = [];
let monsterNumber;
let killedEnemy = false;
let playerName;
const ranking = [
  {
    playerName: "Romero",
    correct: 20,
    wrong: 3,
  },
  {
    playerName: "Carmack",
    correct: 10,
    wrong: 5,
  },
];

// Reseteo de variables de juego

const resetUI = () => {
  seconds = 260;
  correct = 0;
  wrong = 0;
  playerHP = 100;
  doomGuy();
  gameQuestions = [];
  answerInput.value = "";
  killedEnemy = false;
  playerName = "";
  resultsCorrect.innerText = "";
  resultsWrong.innerText = "";
  resultsKilled.innerText = "";
  overlay.classList.toggle("fadeout");
  roscoLetters = [
    letterA,
    letterB,
    letterC,
    letterD,
    letterE,
    letterF,
    letterG,
    letterH,
    letterI,
    letterJ,
    letterK,
    letterL,
    letterM,
    letterN,
    letterO,
    letterP,
    letterQ,
    letterR,
    letterS,
    letterT,
    letterU,
    letterV,
    letterW,
    letterX,
    letterY,
    letterZ,
  ];
  roscoLetters.forEach((element) =>
    element.classList.remove("blink", "correct", "wrong")
  );
};

// Resetear valores de la interfaz de juego

const updateUI = () => {
  uiSeconds.textContent = seconds;
  if (playerHP > 0) {
    uiPlayerHP.textContent = playerHP + "%";
  } else {
    uiPlayerHP.textContent = 0 + "%";
  }

  uiCorrect.textContent = correct + "/" + correctGoal;
  uiWrong.textContent = wrong;
};

const monsterBackground = () => {
  const index = Math.ceil(Math.random() * 3);
  monsterBG.style.backgroundImage = "url('img/level" + index + ".webp')";
};

const switchScreen = () => {
  mainMenu.style.visibility = "hidden";
  menuTitle.style.visibility = "hidden";
  roscoArea.style.visibility = "visible";
  monsterArea.style.visibility = "visible";
  statsArea.style.visibility = "visible";
  welcome.style.visibility = "visible";
  monsterBackground();
  nameInput.focus();
};

// Imágemes de monstruos

const monsterImage = (a) => {
  monster.setAttribute("src", "img/mon" + a + ".png");
};

// Función principal para el inicio del juego

const gameStart = () => {
  overlay.style.visibility = "visible";
  switchScreen();
  updateUI();
  const fadeAudio = setInterval(() => {
    if (bgMusic.volume <= 0.02) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      clearInterval(fadeAudio);
      return;
    }

    bgMusic.volume -= 0.055;
  }, 200);
  setTimeout(() => {
    overlay.classList.toggle("fadeout");
    if (musicGameMute === false) {
      const random = Math.ceil(Math.random() * 3);
      gameMusic.setAttribute("src", "sounds/gamemusic" + random + ".mp3");
      gameMusic.play();
      gameMusic.loop = true;
    }

    uiMedikit.style.visibility = "visible";
    loadShotgun.play();
  }, 3000);
  setTimeout(() => {
    overlay.style.visibility = "hidden";
  }, 4000);
};

// Settings particulares de cada dificultad

young.onclick = function difficultySetting() {
  monsterNumber = 1;
  monsterImage(1);
  correctGoal = 14;
  gameStart();
};

rough.onclick = function fadeToBlack() {
  monsterNumber = 2;
  monsterImage(2);
  correctGoal = 17;
  gameStart();
};

hurt.onclick = function fadeToBlack() {
  monsterNumber = 3;
  monsterImage(3);
  correctGoal = 20;
  gameStart();
};

violence.onclick = function fadeToBlack() {
  correctGoal = 23;
  monsterNumber = 4;
  monsterImage(4);
  gameStart();
};

nightmare.onclick = function fadeToBlack() {
  monsterNumber = 5;
  monsterImage(5);
  correctGoal = 26;
  gameStart();
};

// ----------------------------------------------------------------//

// Bienvenida

welcomeNext.onclick = function greetingPopup() {
  playerName = nameInput.value;
  const userName = nameInput.value;
  if (userName != "" && !userName.includes(" ")) {
    nameInput.value = "";
    welcome.style.visibility = "hidden";
    greetingText.textContent = `${userName}, are you ready ?`;
    greeting.style.visibility = "visible";
  }
};

// ----------------------------------------------------------------//

// Función para popups in-game

const inGamePopup = (popup) => {
  answerArea.style.visibility = "hidden";
  popup.style.visibility = "visible";
  gameMusic.pause();
  gameMusic.currentTime = 0;
  explosion.play();
};

// Parpadeo de letra en juego

let roscoLetters = [
  letterA,
  letterB,
  letterC,
  letterD,
  letterE,
  letterF,
  letterG,
  letterH,
  letterI,
  letterJ,
  letterK,
  letterL,
  letterM,
  letterN,
  letterO,
  letterP,
  letterQ,
  letterR,
  letterS,
  letterT,
  letterU,
  letterV,
  letterW,
  letterX,
  letterY,
  letterZ,
];
const blinkingLetter = () => {
  roscoLetters[0].classList.toggle("blink");
};

// Cuenta atrás y popups de Tiempo y Quit

const timer = () => {
  const time = setInterval(() => {
    seconds -= 1;
    uiSeconds.textContent = seconds;
    if (
      seconds < 0 ||
      answerQuitPopup.style.visibility == "visible" ||
      playerHP <= 0
    ) {
      uiSeconds.textContent = 0;
      clearInterval(time);
      answerArea.style.visibility = "hidden";
      blinkingLetter();
      gameMusic.pause();
      gameMusic.currentTime = 0;
      explosion.play();
    }

    if (seconds < 0) {
      uiDoomGuy.setAttribute("src", "img/doomguyangry.jpg");
      timeUp.style.visibility = "visible";
    }

    if (correct == correctGoal) {
      answerArea.style.visibility = "hidden";
      uiSeconds.textContent = 0;
      clearInterval(time);
      blinkingLetter();
      gameMusic.pause();
      gameMusic.currentTime = 0;
    }
  }, 1000);
};

// Inicio de partida

yeah.onclick = function startGame() {
  greeting.style.visibility = "hidden";
  answerArea.style.visibility = "visible";
  timer();
  generateQuestions();
  showQuestion();
  answerInput.focus();
};

// Gestión de la curación

uiMedikit.onclick = function heal() {
  if (playerHP <= 75) {
    playerHP += 25;
    doomGuy();
    uiPlayerHP.textContent = playerHP + "%";
    uiMedikit.style.visibility = "hidden";
    if (fxGameMute === false) {
      healSound.play();
    }
  }
};

answerInput.addEventListener("keyup", manageHeal);

function manageHeal(evt) {
  if (evt.keyCode === 17) {
    if (playerHP <= 75) {
      playerHP += 25;
      doomGuy();
      uiPlayerHP.textContent = playerHP + "%";
      uiMedikit.style.visibility = "hidden";
      if (fxGameMute === false) {
        healSound.play();
      }
    }
  }
}

// En caso de Health a 0

const playerDeath = () => {
  if (playerHP <= 0) {
    inGamePopup(deadPopup);
    death.play();
  }
};

deadNext.onclick = function deadNextClick() {
  roscoArea.style.visibility = "hidden";
  answerArea.style.visibility = "hidden";
  monsterArea.style.visibility = "hidden";
  statsArea.style.visibility = "hidden";
  uiMedikit.style.visibility = "hidden";
  timeUp.style.visibility = "hidden";
  difficultyMenu.style.visibility = "hidden";
  uiMedikit.style.visibility = "hidden";
  mainMenu.style.visibility = "visible";
  menuTitle.style.visibility = "visible";
  deadPopup.style.visibility = "hidden";
  if (musicGameMute == false) {
    bgMusic.play();
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
  }

  resetUI();
};

// En caso de Monster HP a 0

const monsterDeathAnimation = (number) => {
  monster.setAttribute("src", "img/monster" + number + ".gif");
  switch (number) {
    case 1:
      deathSound1.play();
      break;
    case 2:
      deathSound2.play();
      break;
    case 3:
      deathSound3.play();
      break;
    case 4:
      deathSound4.play();
      break;
    case 5:
      deathSound5.play();
      break;
  }
};

const monsterKill = () => {
  if (correct == correctGoal) {
    killedEnemy = true;
    monsterDeathAnimation(monsterNumber);
    blinkingLetter();
    uiDoomGuy.setAttribute("src", "img/doomguywin.jpg");
    setTimeout(() => {
      winPopup.style.visibility = "visible";
      gameMusic.pause();
      gameMusic.currentTime = 0;
      explosion.play();
    }, 2000);
  }
};

winNext.onclick = function winViewResults() {
  winPopup.style.visibility = "hidden";
  viewResults();
};

// Generador de preguntas

const generateQuestions = () => {
  const allQuestions = [questions1, questions2, questions3];
  const randomQuestions = allQuestions[Math.floor(Math.random() * 3)];
  for (let i = 0; i < 26; i++) {
    gameQuestions.push(randomQuestions[i]);
  }
};

// Mostrar pregunta y pasar a comprobación

const showQuestion = () => {
  if (correct < correctGoal && seconds > 0 && playerHP > 0) {
    blinkingLetter();
    currentLetter.textContent = `Con la ${gameQuestions[0].letter.toLocaleUpperCase()}`;
    question.textContent = gameQuestions[0].question;
    answerInput.focus();
  }
};

// Gestión del comando 'Pasapalabra'

const pasa = () => {
  playerHP -= 5;
  uiPlayerHP.textContent = playerHP + "%";
  doomGuy();
  answerInput.value = "";
  gameQuestions.push(gameQuestions[0]);
  gameQuestions.shift();
  blinkingLetter();
  roscoLetters.push(roscoLetters[0]);
  roscoLetters.shift();
  playerDeath();
  showQuestion();
};

answerInput.addEventListener("keyup", managePasa);

function managePasa(evt) {
  if (evt.keyCode === 32) {
    pasa();
  }
}

answerPasa.onclick = function pasaClick() {
  pasa();
};

// Gestión del comando 'end'

answerQuit.onclick = function clickQuit() {
  uiDoomGuy.setAttribute("src", "img/doomguyangry.jpg");
  inGamePopup(answerQuitPopup);
};

quitNext.onclick = function clickQuitNext() {
  resetUI();
  startState();
  uiMedikit.style.visibility = "hidden";
  console.log(ranking);
};

// Cara Doomguy según Health
const doomGuy = () => {
  if (playerHP >= 80) {
    uiDoomGuy.setAttribute("src", "img/doomguy.jpg");
  } else if (playerHP < 80 && playerHP >= 60) {
    uiDoomGuy.setAttribute("src", "img/doomguy2.jpg");
  } else if (playerHP < 60 && playerHP >= 40) {
    uiDoomGuy.setAttribute("src", "img/doomguy3.jpg");
  } else if (playerHP < 40 && playerHP >= 20) {
    uiDoomGuy.setAttribute("src", "img/doomguy4.jpg");
  } else if (playerHP < 20 && playerHP > 0) {
    uiDoomGuy.setAttribute("src", "img/doomguy5.jpg");
  } else {
    uiDoomGuy.setAttribute("src", "img/doomguydead.jpg");
  }
};

// Comprobar respuesta y siguiente pregunta

const checkAnswer = () => {
  const userAnswer = answerInput.value.toLocaleLowerCase();
  if (userAnswer === gameQuestions[0].answer) {
    if (fxGameMute === false) {
      shotgunSound.play();
    }

    answerInput.value = "";
    roscoLetters[0].classList.add("correct");
    blinkingLetter();
    gameQuestions.shift();
    roscoLetters.shift();
    correct++;
    updateUI();
    monsterKill();
    showQuestion();
  } else if (userAnswer.toLocaleLowerCase() == "pasa") {
    pasa();
    doomGuy();
    playerDeath();
  } else if (userAnswer.toLocaleLowerCase() == "end") {
    uiDoomGuy.setAttribute("src", "img/doomguyangry.jpg");
    inGamePopup(answerQuitPopup);
  } else if (
    typeof userAnswer !== "string" ||
    userAnswer != gameQuestions[0].answer
  ) {
    if (fxGameMute === false) {
      hurtSound.currentTime = 0;
      hurtSound.play();
      hurtSound.volume = 0.7;
    }

    playerHP -= 10;
    uiPlayerHP.textContent = playerHP + "%";
    answerInput.value = "";
    roscoLetters[0].classList.add("wrong");
    blinkingLetter();
    gameQuestions.shift();
    roscoLetters.shift();
    wrong++;
    updateUI();
    doomGuy();
    playerDeath();
    showQuestion();
  }
};

// Aceptación de respuesta

answerAccept.onclick = function check() {
  checkAnswer();
};

answerInput.addEventListener("keyup", manageEnter);

function manageEnter(evt) {
  if (evt.keyCode === 13) {
    checkAnswer();
  }
}

// ----------------------------------------------------------------//

// Pantalla de resultados

const resultsCounter = (stat, container) => {
  for (let i = 0; i <= stat; i++) {
    task(i);
  }

  function task(i) {
    setTimeout(() => {
      pistolSound.currentTime = 0;
      container.innerText = i;
      if (i < stat) {
        pistolSound.play();
        pistolSound.volume = 0.7;
      } else {
        explosion.currentTime = 0;
        explosion.play();
        explosion.volume = 0.7;
      }
    }, 100 * i);
  }
};

const viewResults = () => {
  roscoArea.style.visibility = "hidden";
  answerArea.style.visibility = "hidden";
  monsterArea.style.visibility = "hidden";
  statsArea.style.visibility = "hidden";
  uiMedikit.style.visibility = "hidden";
  timeUp.style.visibility = "hidden";
  difficultyMenu.style.visibility = "hidden";
  resultsScreen.style.visibility = "visible";
  intermission.play();
  intermission.loop = true;
  intermission.volume = 1;
  setTimeout(() => {
    resultsCounter(correct, resultsCorrect);
  }, 2000);
  setTimeout(() => {
    resultsCounter(wrong, resultsWrong);
  }, 5000);
  setTimeout(() => {
    resultsKilled.innerText = killedEnemy ? "Yes" : "No";
    explosion.currentTime = 0;
    explosion.play();
    explosion.volume = 0.7;
    resultsNext.style.visibility = "visible";
  }, 7000);
};

// Vuelta al menú principal

resultsNext.onclick = function startAgain() {
  resultsScreen.style.visibility = "hidden";
  const mainMenuAgain = () => {
    titleScreen.style.visibility = "hidden";
    menuTitle.style.visibility = "visible";
    mainMenu.style.visibility = "visible";
    resultsNext.style.visibility = "hidden";
    if (musicGameMute == false) {
      bgMusic.play();
      bgMusic.loop = true;
      bgMusic.volume = 0.4;
    }
  };

  addScore();
  updateRanking();
  resetUI();
  mainMenuAgain();
  const fadeIntermission = setInterval(() => {
    if (intermission.volume <= 0.02) {
      intermission.pause();
      intermission.currentTime = 0;
      clearInterval(fadeIntermission);
      return;
    }

    intermission.volume -= 0.055;
  }, 200);
};

// Ranking

const addScore = () => {
  scoreTableContent.innerHTML = "";
  ranking.push({
    playerName,
    correct,
    wrong,
  });
};

const updateRanking = () => {
  ranking.sort((a, b) => (a.correct < b.correct ? 1 : -1));
  for (let i = 0; i < ranking.length; i++) {
    const tr = scoreTableContent.insertRow();
    for (let j = 0; j < 3; j++) {
      const td = tr.insertCell();
      if (j == 0) {
        td.appendChild(document.createTextNode(ranking[i].playerName));
        td.classList.add("fifty");
      } else if (j == 1) {
        td.appendChild(document.createTextNode(ranking[i].correct));
        td.classList.add("twenty-five");
      } else {
        td.appendChild(document.createTextNode(ranking[i].wrong));
        td.classList.add("twenty-five");
      }
    }
  }
};

// ----------------------------------------------------------------//

// Tutorial

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
