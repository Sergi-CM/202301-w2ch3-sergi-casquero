const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const interfaz = () => {
  const nombre = prompt("¡Bienvenid@ a ISDI Airlines! ¿Cómo te llamas?");

  if (typeof nombre != "string" || parseInt(nombre) % 1 === 0) {
    alert("Va, no seas tímid@, sólo el nombre :)");
    return interfaz();
  } else {
    console.log(
      `¡Encantado de conocerte, ${nombre}! \n\nEstos son los vuelos del día: \n `
    );
  }

  for (x = 0; x < flights.length; x++) {
    if (flights[x].scale) {
      console.log(
        `El vuelo con origen ${flights[x].from} y destino ${flights[x].to}, tiene un coste de ${flights[x].cost}€ y SÍ realiza escala`
      );
    } else {
      console.log(
        `El vuelo con origen ${flights[x].from} y destino ${flights[x].to}, tiene un coste de ${flights[x].cost}€ y NO realiza ninguna escala`
      );
    }
  }

  const media = () => {
    let accMedia = 0;
    for (y = 0; y < flights.length; y++) {
      accMedia += flights[y].cost;
    }
    mediaPrecios = accMedia / flights.length;
    return mediaPrecios.toFixed(2);
  };

  console.log(`\nEl precio medio de los vuelos del día es de ${media()}€`);

  var vuelosConEscala = 0;

  for (y = 0; y < flights.length; y++) {
    if (flights[y].scale === true) {
      vuelosConEscala++;
    }
  }

  console.log(
    `\nDel total de ${flights.length} vuelos de hoy, ${vuelosConEscala} hacen escala.`
  );

  const ultimos = () => {
    console.log(
      `\nLos últimos 5 vuelos del día tienen los siguientes destinos:`
    );
    for (z = flights.length - 5; z < flights.length; z++) {
      console.log(flights[z].to);
    }
  };

  ultimos();

  console.log(`\nEsperamos verte pronto en la terminal. ¡Saludos!`);
};

interfaz();
