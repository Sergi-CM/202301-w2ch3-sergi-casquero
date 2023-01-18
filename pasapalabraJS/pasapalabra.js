const questions1 = [
    { letter: "a", answer: "arteria", status: 0, question: "Con la A.\nConducto por donde va la sangre desde el corazón a las demás partes del cuerpo."},
    { letter: "b", answer: "bitacora", status: 0, question: "Con la B.\nEn los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula."},
    { letter: "c", answer: "cicerone", status: 0, question: "Con la C.\nPersona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes."},
    { letter: "d", answer: "diplomacia", status: 0, question: "Con la D.\nActividad que realiza un país para mantener buenas relaciones con el resto de países."},
    { letter: "e", answer: "equinoccio", status: 0, question: "Con la E.\nCada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra."},
    { letter: "f", answer: "fisiologia", status: 0, question: "Con la F.\nCiencia que estudia las funciones de los órganos de los seres vivos."},
    { letter: "g", answer: "glaciacion", status: 0, question: "Con la G.\nCada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo."},
    { letter: "h", answer: "hinojo", status: 0, question: "Con la H.\nPlanta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina porque ayuda a hacer la digestión."},
    { letter: "i", answer: "ingenio", status: 0, question: "Con la I.\nCapacidad para inventar cosas o para pensar y hablar con gracia."},
    { letter: "j", answer: "jade", status: 0, question: "Con la J.\nMineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno."},
    { letter: "k", answer: "kamikaze", status: 0, question: "Con la K.\nPiloto japonés que se lanzaba en su avión contra un barco u otro objetivo enemigo para destruirlo, aunque muriera al hacerlo."},
    { letter: "l", answer: "lema", status: 0, question: "Con la L.\nFrase que expresa la forma en que debe actuar una persona."},
    { letter: "m", answer: "miriñaque", status: 0, question: "Con la M.\nPrenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo."},
    { letter: "n", answer: "ninfa", status: 0, question: "Con la N.\nEn las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos."},
    { letter: "o", answer: "onomatopeya", status: 0, question: "Con la O.\nPalabra que imita el sonido que hace un animal o una cosa."},
    { letter: "p", answer: "pabellon", status: 0, question: "Con la P.\nEdificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él."},
    { letter: "q", answer: "quimera", status: 0, question: "Con la Q.\nCosa que, sin ser real, alguien la imagina como posible o verdadera."},
    { letter: "r", answer: "remora", status: 0, question: "Con la R.\nPez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes."},
    { letter: "s", answer: "sotana", status: 0, question: "Con la S.\nTraje negro y largo parecido a una túnica que llevan algunos curas y religiosos"},
    { letter: "t", answer: "testamento", status: 0, question: "Con la T.\nEscrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias."},
    { letter: "u", answer: "urbanizacion", status: 0, question: "Con la U.\nConjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven."},
    { letter: "v", answer: "vencejo", status: 0, question: "Con la V.\nPájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido."},
    { letter: "w", answer: "whisky", status: 0, question: "Con la W.\nLicor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales."},
    { letter: "x", answer: "xilografia", status: 0, question: "Con la X.\nManera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo."},
    { letter: "y", answer: "yak", status: 0, question: "Con la Y.\nMamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío."},
    { letter: "z", answer: "zocalo", status: 0, question: "Con la Z.\nBanda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación."},
]

const questions2 = [
    { letter: "a", answer: "ascua", status: 0, question: "Con la A.\nTrozo de cualquier material ardiendo pero sin llama."},
    { letter: "b", answer: "bilis", status: 0, question: "Con la B.\nLíquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos."},
    { letter: "c", answer: "cubismo", status: 0, question: "Con la C.\nEstilo de pintura que comenzó en Francia a principios deL siglo XX y que se caracteriza por representar figuras y objetos mediante formas geométricas."},
    { letter: "d", answer: "dieresis", status: 0, question: "Con la D.\nSigno ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse."},
    { letter: "e", answer: "estria", status: 0, question: "Con la E.\nLínea que se forma en la piel cuando ésta se ha estirado excesivamente."},
    { letter: "f", answer: "fonema", status: 0, question: "Con la F.\nSonido de una letra."},
    { letter: "g", answer: "gaucho", status: 0, question: "Con la G.\nSe dice de las personas que viven en las grandes llanuras de Argentina y Uruguay y llevan el ganado de un lado a otro."},
    { letter: "h", answer: "himno", status: 0, question: "Con la H.\nPoesía o composición musical en alabanza de alguien o algo, como la que se dedica a un país."},
    { letter: "i", answer: "iman", status: 0, question: "Con la I.\nMineral capaz de atraer el hierro u otros metales."},
    { letter: "j", answer: "jabato", status: 0, question: "Con la J.\nCría del jabalí."},
    { letter: "k", answer: "karate", status: 0, question: "Con la K.\nSistema de combate sin armas de origen japonés"},
    { letter: "l", answer: "lombriz", status: 0, question: "Con la L.\nGusano muy largo de color rojizo que se alimenta de sustancias que hay en la tierra."},
    { letter: "m", answer: "mudejar", status: 0, question: "Con la M.\nNombre que se daba a los musulmanes que vivían en los reinos cristianos de la península ibérica."},
    { letter: "n", answer: "nogal", status: 0, question: "Con la N.\nÁrbol grande con la corteza lisa y de color gris cuyo fruto es la nuez."},
    { letter: "o", answer: "ocre", status: 0, question: "Con la O.\nSe dice del color que es una mezcla de amarillo y marrón."},
    { letter: "p", answer: "protocolo", status: 0, question: "Con la P.\nConjunto de reglas o ceremonias que hay que cumplir en los actos oficiales o solemnes."},
    { letter: "q", answer: "quechua", status: 0, question: "Con la Q.\nPueblo indio que habita en Perú y que vivía allí antes del descubrimiento de América."},
    { letter: "r", answer: "repisa", status: 0, question: "Con la R.\nTabla o elemento similar que se coloca contra la pared para poner en ella objetos."},
    { letter: "s", answer: "solsticio", status: 0, question: "Con la S.\nNombre de dos momentos del año que marcan el inicio del verano y el comienzo del invierno."},
    { letter: "t", answer: "troposfera", status: 0, question: "Con la T.\nCapa de la atmósfera más cercana a la superficie de la Tierra, en la que tienen lugar los fenómenos del tiempo meteorológico."},
    { letter: "u", answer: "utopia", status: 0, question: "Con la U.\nAlgo que es bueno y que deseamos pero que es imposible o muy difícil de realizar."},
    { letter: "v", answer: "visera", status: 0, question: "Con la V.\nParte hacia afuera que tienen las gorras por delante y que sirve para que el sol no nos haga daño en los ojos."},
    { letter: "w", answer: "western", status: 0, question: "Con la W.\nPelícula del oeste americano."},
    { letter: "x", answer: "xenofobia", status: 0, question: "Con la X.\nOdio o antipatía hacia los extranjeros."},
    { letter: "y", answer: "yodo", status: 0, question: "Con la Y.\nElemento químico de color oscuro que se encuentra en el suelo en forma de sales, así como en las algas y otros animales marinos."},
    { letter: "z", answer: "zarzal", status: 0, question: "Con la Z.\nLugar donde hay muchas zarzas."},
]

const questions3 = [
    { letter: "a", answer: "agenda", status: 0, question: "Con la A.\nLibro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer."},
    { letter: "b", answer: "bonanza", status: 0, question: "Con la B.\nProsperidad."},
    { letter: "c", answer: "caracol", status: 0, question: "Con la C.\nNombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse."},
    { letter: "d", answer: "dormir", status: 0, question: "Con la D.\nEstar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios."},
    { letter: "e", answer: "entrecot", status: 0, question: "Con la E.\nTrozo de carne sacado de entre costilla y costilla de la res."},
    { letter: "f", answer: "farhadi", status: 0, question: "Con la F.\nApellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017."},
    { letter: "g", answer: "gorgorito", status: 0, question: "Con la G.\nColoquialmente quiebro que se hace con la voz con la garganta al cantar."},
    { letter: "h", answer: "hidroavion", status: 0, question: "Con la H.\nAvión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua."},
    { letter: "i", answer: "inapetencia", status: 0, question: "Con la I.\nFalta de gana de comer."},
    { letter: "j", answer: "jardineria", status: 0, question: "Con la J.\nArte y oficio del jardinero."},
    { letter: "k", answer: "kilogramo", status: 0, question: "Con la K.\nUnidad de masa del Sistema Internacional."},
    { letter: "l", answer: "lobera", status: 0, question: "Con la L.\nGuarida de lobos."},
    { letter: "m", answer: "mentira", status: 0, question: "Con la M.\nCosa que se utiliza por el camino que no es verdad con la intención de que sea creída."},
    { letter: "n", answer: "nativo", status: 0, question: "Con la N.\nSe aplica al que ha nacido en el lugar de que se trata."},
    { letter: "o", answer: "organo", status: 0, question: "Con la O.\nDe las partes del pulpo, animal o vegetal que ejercen una función."},
    { letter: "p", answer: "plotino", status: 0, question: "Con la P.\nFilósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría."},
    { letter: "q", answer: "queja", status: 0, question: "Con la Q.\nResentimiento o disgusto que se tiene por la actuación o el comportamiento de alguien."},
    { letter: "r", answer: "rafaga", status: 0, question: "Con la R.\nViento fuerte, resentido y de corta duración."},
    { letter: "s", answer: "simple", status: 0, question: "Con la S.\nSe aplica a lo que no tiene complicación."},
    { letter: "t", answer: "trece", status: 0, question: "Con la T.\nNúmero cardinal equivalente a 10 + 3."},
    { letter: "u", answer: "uderzo", status: 0, question: "Con la U.\nApellido del dibujante y guionista francés autor de la serie Asterix."},
    { letter: "v", answer: "verde", status: 0, question: "Con la V.\nSe aplica el color perfectamente al de la hierba fresca o la esmeralda."},
    { letter: "w", answer: "waterpolo", status: 0, question: "Con la W.\nDeporte parecido al futbol, practicado en una piscina."},
    { letter: "x", answer: "xilofono", status: 0, question: "Con la X.\nInstrumento musical de percusión formado por diversas láminas específicamente afinadas."},
    { letter: "y", answer: "yunque", status: 0, question: "Con la Y.\nBloque de hierro sobre el que se trabajan los metales al rojo vivo golpeándolos con un martillo."},
    { letter: "z", answer: "zoodiacal", status: 0, question: "Con la Z.\nPerteneciente o relativo al zoodíaco."},
]

//Variables globales
let correct = 0;
let wrong = 0;
let gameQuestions = [];
let ranking = new Array;
let timeOut = false;
let seconds = 130;

//Generador de preguntas
function generateQuestions() {
    let allQuestions = [questions1, questions2, questions3];
    let randomQuestions = allQuestions[Math.floor(Math.random() * 3)];
    for(let i = 0; i < 26; i++) {
        gameQuestions.push(randomQuestions[i]);
    }
}

//Nombre de usuario y saludo
function greeting() {
    userName = prompt("¡Hola! ¿Cómo te llamas?");
        if (userName) {
            alert(`Bienvenid@ a Pasapalabra, ${userName} :)`);
        } else { 
            alert("Queremos saber cómo te llamas :(")
            greeting();
        }
}

//Instrucciones
function instructions() {
    alert(`Esta es la mecánica del juego:\n\nSe te hará una pregunta por cada letra del alfabeto, y la respuesta siempre empezará por la letra en juego.\n\
Tienes 150 segundos para responder todas las preguntas. Cuando las hayas respondido TODAS o se te acabe el tiempo, el juego acabará.`);
    alert(`Comandos especiales:\n\nEscribe "pasa" para dejar esta pregunta para la siguiente ronda.\nEscribe "end" para terminar el juego en cualquier momento.`);
    alert(`Cuando quieras, empezamos...`);
    //timer();
    showQuestion();
}

/*function timer() {
    var callbackFunction = function () {
      timeoutId = setTimeout(callbackFunction, 1000);
      seconds -= 1;
      console.log(seconds)
      if(seconds <= 0 || gameQuestions.length === 0) {
        clearTimeout(timeoutId);
        endGame();
        userRanking();
        showRanking();
        newGame();
      }
    }
    var timeoutId = setTimeout(callbackFunction);
  }

Timer
function timer() {
    setTimeout (function() {
        timeOut = true;
        alert("¡TIEMPO!");
    }, 130000)
};*/


//Mostrar pregunta y pasar a comprobación
function showQuestion() {
    if (gameQuestions.length > 0 && timeOut === false) {
        console.log(gameQuestions[0].question);
        checkAnswer();
    } else {
        endGame();
        userRanking();
        showRanking();
        newGame();
    }
}

//Comprobar respuesta y siguiente pregunta
function checkAnswer() {
    let userAnswer = prompt().toLocaleLowerCase();
    if (userAnswer === gameQuestions[0].answer) {
        console.log("-> " + userAnswer);
        console.log("¡CORRECTO!");
        gameQuestions.shift();
        correct++;
        showQuestion()
    } else if (userAnswer.toLocaleLowerCase() == "pasa") {
        gameQuestions.push(gameQuestions[0]);
        gameQuestions.shift();
        showQuestion()
    } else if (userAnswer.toLocaleLowerCase() == "end") {
        endKeyword();
    } else if (typeof(userAnswer) != "string" || userAnswer != gameQuestions[0].answer) {
        console.log("-> " + userAnswer);
        console.log("¡NO!");
        gameQuestions.shift();
        wrong++;
        showQuestion()
    }
}

//En caso de pasar el comando 'end'
function endKeyword() {
    let byeOptions = ["Si todo lo dejas a medias no estarán muy contentos en casa...", "No me digas eso de 'voy a por tabaco y vuelvo'.", "¿Tan malo es el juego? :'(", "Da igual, vete, no me importa.\n\n\n\nYa te echo de menos..."];
    let index = Math.floor(Math.random() * 4);
    alert(byeOptions[index]);
    console.log(`Te has retirado con ${correct} aciertos y ${wrong} errores.`)
    endGame();
    newGame();
}

//Finalización del juego
function endGame() {
    if(gameQuestions.length === 0) {
        console.log(`¡Bien hecho!\nHas acabado con ${correct} aciertos y ${wrong} errores.`);
    }
}

//Generador de ranking
function userRanking() {
    if(gameQuestions.length === 0) {
        ranking.push({
            nombre: userName,
            aciertos: correct,
        });
    }
}

//Mostrar ranking y nuevo juego
function showRanking() {
    if(gameQuestions.length === 0) {
        console.log("El ránking de jugadores queda así:")
        ranking.sort((a,b) => (a.correct < b.correct) ? 1 : -1)
        for (i = 0; i < ranking.length; i++) {
            console.log(ranking[i]);
        }
    }
}

//Resetear variables globales
function reset() {
    correct = 0;
    wrong = 0;
    gameQuestions = [];
}

//Volver a jugar
function newGame() {
    let new2 = prompt('¿Quieres volver a jugar? s/n');
    switch (new2) {
        case "s":
            reset();
            startGame();
        break;
        case "n":
            alert("¡Hasta la próxima!");
        break;
        default:
            alert("Debes indicar 's' o 'n'.")
            newGame();
    }
}

//Iniciar juego
function startGame() {
    generateQuestions();
    greeting();
    instructions();
}

startGame();
