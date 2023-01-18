const greeting = () => {
    let name = prompt("¡Hola! ¿Cómo te llamas?");
    name1 = name;
    console.log(`Bienvenid@, ${name} :)\n `);
    alert("Empiezas la partida con 1.000 puntos. En cada turno perderás 10, así que cuantos menos turnos necesites para completar el cartón, más puntos ganarás. ¡Suerte!")
}

let name1;
const bingoCard = [];

const cardNumbers = () => {
        while (bingoCard.length < 15) {
            let a = Math.floor(Math.random()*98 +1);
            if (!bingoCard.includes(a)) {
                bingoCard.push(a);
            }
        }
        bingoCard.sort((a,b) => a-b);
}

let score = 1000;

const showCard = () => {
    let firstRow = [];
    let secondRow = [];
    let thirdRow = [];
    for(j = 0; j < bingoCard.length; j++) {
        if(j < 5) {
            firstRow.push(bingoCard[j]);
        } else if (j < 10) {
            secondRow.push(bingoCard[j]);
        } else {
            thirdRow.push(bingoCard[j]);
        }
    }
    console.log(firstRow);
    console.log(secondRow);
    console.log(thirdRow);
    if (score < 1000) {
        console.log("Te quedan " + score +  " puntos...")
    }
}


const confirmCard = () => {
    let confirm = prompt('¿Quieres cambiar los números del cartón? s/n');
    switch (confirm) {
        case "s":
            console.log("Nuevo cartón:");
            bingoCard.splice(0,15);
            cardNumbers();
            showCard();
            confirmCard();
        break;
        case "n":
        break;
    }
}

let number1;
let numbersArray2 = [];

const randNumberArray = () => {
    for(n = 1; n < 100; n++) {
        numbersArray2.push(n)
    };
}

const mainNumber = () => {
    let number2 = numbersArray2[Math.floor(Math.random()*99)];
    if (isNaN(number2)) {
        mainNumber();
    } else {
        console.log("¡Ha salido el " + number2 + "!");
        numbersArray2[number2 -1] = "X";
        number1 = number2;
        score -= 10;
    }
}

const checkNumber = () => {
    for(k = 0; k < 15; k++) {
        if (bingoCard[k] === number1) {
            bingoCard[k] = "X";
            console.log(`¡Se ha encontrado el ${number1} en tu cartón!`)
        }
    }
}

let linea = 0;

const checkLinea = () => {
    if (linea === 0) {
        if (bingoCard[0] === "X" && bingoCard[1] === "X" && bingoCard[2] === "X" && bingoCard[3] === "X" && bingoCard[4] === "X") {
            console.log("¡¡LÍNEA!!");
            alert("¡¡LÍNEA!!");
            linea++;
        } else if (bingoCard[5] === "X" && bingoCard[6] === "X" && bingoCard[7] === "X" && bingoCard[8] === "X" && bingoCard[9] === "X") {
            console.log("¡¡LÍNEA!!");
            alert("¡¡LÍNEA!!");
            linea++;
        } else if (bingoCard[10] === "X" && bingoCard[11] === "X" && bingoCard[12] === "X" && bingoCard[13] === "X" && bingoCard[14] === "X") {
            console.log("¡¡LÍNEA!!");
            alert("¡¡LÍNEA!!");
            linea++;
        }
    } 
}

let turnos = 0;
let ranking2 = [
    {
        nombre: "Aitor Menta",
        puntos: 70,
    },
    {
        nombre: "Alex Cremento",
        puntos: 10,
    },
    {
        nombre: "Elba Surero",
        puntos: 50,
    }

];

const ranking = () => {
    ranking2.push({
        nombre: name1,
        puntos: score,
    });
    ranking2.sort((a,b) => (a.puntos < b.puntos) ? 1 : -1)
    for (i = 0; i < ranking2.length; i++) {
        console.log(ranking2[i]);
    }
}

const newGame = () => {
    let newG = prompt("¿Quieres volver a jugar? s/n");
    switch(newG) {
        case "s":
            numbersArray2.splice(0,numbersArray2.length);
            bingoCard.splice(0,bingoCard.length);
            randNumberArray();
            linea = 0;
            score = 1000;
            bingo();
        break;
        case "n":
            alert("Gracias por jugar con ISDI Bingo :)");
        break;
        default:
            alert("Sólo di 's' o 'n'. Encontrarás estas letras por el teclado, seguro ;)");
            newGame();
    }
}

const checkBingo = () => {
    let bingo = 0;
    for (z = 0; z < bingoCard.length; z++) {
        if (bingoCard[z] === "X") {
            bingo++
        }
    }
    if (bingo === 15) {
        console.log("¡BINGO!")
        alert("¡BINGO!");
        console.log("Has hecho bingo en " + turnos + " turnos.")
        console.log("Tu puntuación es de " + score + " puntos.")
        console.log("Ránking de jugadores:");
        ranking();
        newGame();
    } else {
        nextTurn();
    }
}

const nextTurn = () => {
    let next = confirm('¿Quieres sacar un número?')
    if (next != true) {
        alert("¿Ya te vas? Bueno, ¡Pues hasta la próxima!")
        return
    } else {
        turnos++;
        mainNumber();
        checkNumber();
        showCard();
        checkLinea();
        checkBingo();
    }

}

const bingo = () => {
    greeting();
    cardNumbers();
    showCard();
    confirmCard();
    randNumberArray();
    nextTurn();
}

bingo();