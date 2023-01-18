var listaNum = [];
var resultAct = [];
var resultPrev = [];


const operandos = () => {
    do {
        var numeros = Number(prompt("Escribe un operando. Déjalo vacío cuando no quieras introducir más."));
        if (isNaN(numeros)) {
            alert("Los valores deben ser números :(");
        } else {
            listaNum.push(numeros)
        }
    }
    while (numeros != 0);
   
    if (listaNum.length === 1) {
        alert("Debes escribir almenos un número.");
    } 
}

const operaciones = (listaNum) => {   
    if (listaNum.length === 2) {
        var raiz = Math.sqrt(listaNum[0]);
        var raizDecim = raiz.toFixed(3);
        resultAct.push(`Resultado de la raíz cuadrada: ${raizDecim}`)
    } else {
        const suma = () => {
            let accSuma = listaNum[0];
            for (i = 1; i < listaNum.length; i++) {
                accSuma += listaNum[i];
            }
            if (Number.isInteger(accSuma)) {
                return `Resultado de la suma: ${accSuma}`;
            } else {
                return `Resultado de la suma: ${accSuma.toFixed(3)}`;
            }
        }
        
        const resta = () => {
            let accResta = listaNum[0];
            for (i = 1; i < listaNum.length; i++) {
                accResta -= listaNum[i];
            }
            if (Number.isInteger(accResta)) {
                return `Resultado de la resta: ${accResta}`;
            } else {
                return `Resultado de la resta: ${accResta.toFixed(3)}`;
            }
        }
        
        const mult = () => {
            let accMult = listaNum[0];
            for (i = 1; i < listaNum.length - 1; i++) {
                accMult *= listaNum[i];
            }
            if (Number.isInteger(accMult)) {
                return `Resultado de la multiplicación: ${accMult}`;
            } else {
                return `Resultado de la multiplicación: ${accMult.toFixed(3)}`;
            }
        }
        
        const div = () => {
            let accDiv = listaNum[0];
            for (i = 1; i < listaNum.length - 1; i++) {
                accDiv /= listaNum[i];
            }
            if (Number.isInteger(accDiv)) {
                return `Resultado de la división: ${accDiv}`;
            } else {
                return `Resultado de la división: ${accDiv.toFixed(3)}`;
            }
        }

    resultAct.push(suma(), resta(), mult(), div())
    }
 }


const resultados = (resultAct, resultPrev) => {
    if (resultPrev.length != 0) {
        console.log("-> Resultados actuales:")
        for (i = 0; i < resultAct.length; i++) {
            console.log(resultAct[i]);
        }
        console.log("-> Resultados previos:")
        for (j = 0; j < resultPrev.length; j++) {
            console.log(resultPrev[j]);
        }
    } else {
        console.log("-> Resultados:")
        for (k = 0; k < resultAct.length; k++) {
            console.log(resultAct[k]);
        }
    }
    console.log("\n\n");
}


const nuevaOperacion = () => {
    var respuesta = prompt("¿Quieres hacer otra operación? s/n");
    switch(respuesta) {
    case "s":
        resultPrev = [...resultAct];
        resultAct.splice(0, resultAct.length);
        listaNum.splice(0, listaNum.length);
        calculadoraPro();
    break;
    case "n":
        alert(`¡Bye bye, hasta otro ratito!`);
    break;
    default:
        alert("Disculpa, debes indicar 's' o 'n'.");
        nuevaOperacion();
    }
}

const calculadoraPro = () => {
    operandos();
    operaciones(listaNum);
    resultados(resultAct, resultPrev);
    nuevaOperacion();
}


calculadoraPro();