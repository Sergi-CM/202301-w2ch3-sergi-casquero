const numero1 = prompt("Escriba primer número");
const numero2 = prompt("Escriba segundo número");

const resultados = [];

const suma = (numero1, numero2) => {
  const sumRes = Number(numero1) + Number(numero2);
  if (Number.isInteger(sumRes)) {
    return `Resultado de la suma: ${sumRes}`;
  }

  return `Resultado de la suma: ${sumRes.toFixed(3)}`;
};

const resta = (numero1, numero2) => {
  const resRes = Number(numero1) - Number(numero2);
  if (Number.isInteger(resRes)) {
    return `Resultado de la resta: ${resRes}`;
  }

  return `Resultado de la resta: ${resRes.toFixed(3)}`;
};

const mult = (numero1, numero2) => {
  const multRes = Number(numero1) * Number(numero2);
  if (Number.isInteger(multRes)) {
    return `Resultado de la multiplicación: ${multRes}`;
  }

  return `Resultado de la multiplicación: ${multRes.toFixed(3)}`;
};

const div = (numero1, numero2) => {
  const divRes = Number(numero1) / Number(numero2);
  if (Number.isInteger(divRes)) {
    return `Resultado de la división: ${divRes}`;
  }

  return `Resultado de la división: ${divRes.toFixed(3)}`;
};

const raiz = (numero1) => {
  const raizRes = Math.sqrt(numero1);
  return `Resultado de la raíz cuadrada: ${raizRes.toFixed(3)}`;
};

if (typeof numero1 === "object" || typeof numero2 === "object") {
  console.log("Ha habido un problema con alguno de los operandos");
} else if (numero1.length === 0 && numero2.length === 0) {
  console.log("Debes escribir almenos un número");
} else if (isNaN(numero1) == true || isNaN(numero2) == true) {
  console.log("Uno de los valores no es un número");
} else if (numero2.length === 0) {
  console.log(raiz(numero1));
} else {
  resultados.push(suma(numero1, numero2));
  resultados.push(resta(numero1, numero2));
  resultados.push(mult(numero1, numero2));
  resultados.push(div(numero1, numero2));
}

for (i = 0; i < resultados.length; i++) {
  console.log(resultados[i]);
}
