//variables globales
let n1;
let n2;
let op;
let mostrandoResultado;


//variables locales

const resultado = document.getElementById("resultado");
const operacion = document.getElementById("operacion");
const reset = document.getElementById("c");
const raiz = document.getElementById("sqrt");
const multiplicacion = document.getElementById("mult");
const division = document.getElementById("div");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const igual = document.getElementById("igual");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const cero = document.getElementById("cero");

resultado.textContent = "";


const anadirNumero = (numero) => {
debugger
    if (mostrandoResultado) {
        clearAll();
        mostrandoResultado = false;
    }

    resultado.textContent = resultado.textContent + numero;
}
    
document.addEventListener('keyup', (event) => {
    event.preventDefault();

    switch (event.key) {
        case 49:
        case 97:
            anadirNumero('1');
    }
})

uno.addEventListener('click', () => anadirNumero('1'));
dos.addEventListener('click', () => anadirNumero('2'));
tres.addEventListener('click', () => anadirNumero('3'));
cuatro.addEventListener('click', () => anadirNumero('4'));
cinco.addEventListener('click', () => anadirNumero('5'));
seis.addEventListener('click', () => anadirNumero('6'));
siete.addEventListener('click', () => anadirNumero('7'));
ocho.addEventListener('click', () => anadirNumero('8'));
nueve.addEventListener('click', () => anadirNumero('9'));

cero.addEventListener('click', () => {
    if (resultado.textContent == "" || resultado.textContent != 0 || resultado.textContent.includes(".")) {
        anadirNumero('0')
    } 
})

coma.addEventListener('click', () => {
    if (!resultado.textContent.includes(".")) {
        anadirNumero('.')
    }
})

reset.onclick = function() {
    clearAll(); 
}


const operaciones = (operacionEnCurso) => {

    if (!resultado.textContent) return
    
    if(!n1) {
        n1 = resultado.textContent;
        op = operacionEnCurso;
        operacion.textContent = n1 + op;
        
    } else {
        
        n2 = resultado.textContent;

        switch(op) {
            case '+':
                n1 = parseFloat(n1) + parseFloat(n2);
                op = operacionEnCurso;
                break
            case '-':
                n1 = parseFloat(n1) - parseFloat(n2);
                op = operacionEnCurso;
                break
            case '*':
                n1 = parseFloat(n1) * parseFloat(n2);
                op = operacionEnCurso;
                break
            case '/':
                n1 = parseFloat(n1) / parseFloat(n2);
                op = operacionEnCurso;
                break
        }
        operacion.textContent = n1 + op
    }
    
    empty();
    mostrandoResultado = false;

}


suma.addEventListener('click', () => operaciones('+'));
resta.addEventListener('click', () => operaciones('-'));
multiplicacion.addEventListener('click', () => operaciones('*'));
division.addEventListener('click', () => operaciones('/'));

raiz.addEventListener('click', () => {
    n1 = resultado.textContent;
    op = "√";
    solveSqrt();
})

igual.addEventListener('click', () => {
    n2 = resultado.textContent;
    solve();
})



//Funciones especiales

const empty = () => {
    resultado.textContent = "";
}

const clearAll = () => {
    resultado.textContent = "";
    operacion.textContent = "";
    n1 = 0;
    n2 = 0;
    op = "";
}

const clear = () => {
    resultado.textContent = "";
    n1 = 0;
    n2 = 0;
    op = "";
}

const solveSqrt = () => {
    resultado.textContent = Math.sqrt(n1).toFixed(3)
    operacion.textContent = op + n1;
    mostrandoResultado = true;
}

const solve = () => {
    
    if (mostrandoResultado) return
    
    let lastResult;
    
    switch(op) {
        case "+":
            operacion.textContent = n1 + "+" + n2;
            lastResult = parseFloat(n1) + parseFloat(n2);
            break;

        case "-":
            operacion.textContent = n1 + "-" + n2;
            lastResult = parseFloat(n1) - parseFloat(n2);
            break;
        
        case "*":
            operacion.textContent = n1 + "×" + n2;
            lastResult = parseFloat(n1) * parseFloat(n2);
            break;
        case "/":
            operacion.textContent = n1 + "÷" + n2;
            lastResult = parseFloat(n1) / parseFloat(n2);
            break;
    }

    n1 = '';
    clear();
    mostrandoResultado = true;
    resultado.textContent = lastResult;

}