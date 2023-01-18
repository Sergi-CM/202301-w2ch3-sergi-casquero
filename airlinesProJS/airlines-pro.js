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
};

interfaz();

let id = 10;

const perfil = () => {
  const user = prompt(`¿Me podrías indicar si eres 'admin' o 'user'?`);

  if (typeof user != "string") {
    perfil();
  }

  switch (user) {
    case "admin":
      const anadirVuelo = () => {
        let pregunta = prompt("¿Quieres añadir un vuelo? s/n");
        switch (pregunta) {
          case "s":
            console.log("\n Vuelos añadidos:");
            const nuevos = () => {
              let nuevoVuelo = {
                id,
                to: prompt("Escribe el DESTINO del vuelo"),
                from: prompt("Escribe el ORIGEN del vuelo"),
                cost: Number(prompt("Escribe el PRECIO del vuelo")),
                scale: prompt(
                  "Escribe si el vuelo hace escala (TRUE) o no (FALSE)"
                ),
              };
              flights.push(nuevoVuelo);
              console.log(nuevoVuelo);

              const otroVuelo = () => {
                let otro = prompt("¿Quieres añadir otro vuelo? s/n");
                switch (otro) {
                  case "s":
                    id++;
                    if (flights.length <= 15) {
                      nuevos();
                    } else {
                      alert("Lo sentimos, no puedes añadir más vuelos.");
                    }
                    break;
                  case "n":
                    break;
                  default:
                    alert("Por favor, responde 's' o 'n'.");
                    otroVuelo();
                }
              };
              otroVuelo();
            };
            nuevos();
            break;
          case "n":
            break;
          default:
            alert("Por favor, responde 's' o 'n'.");
            anadirVuelo();
        }
      };
      anadirVuelo();

      let pregunta2 = prompt("¿Quieres eliminar algún vuelo? s/n");
      switch (pregunta2) {
        case "s":
          const eliminar = () => {
            let vueloElim = Number(
              prompt("Escribe el ID del vuelo que quieras eliminar.")
            );
            for (i = 0; i < flights.length; i++) {
              if (flights[i].id === vueloElim) {
                console.log(`Vuelo con ID: ${vueloElim} eliminado.`);
                flights.splice([i], 1);
              }
            }
            console.log("La lista de vuelos queda así:");
            for (j = 0; j < flights.length; j++) {
              console.log(flights[j]);
            }
          };

          eliminar();

          const otro2 = () => {
            let borrar = prompt("¿Quieres borrar otro vuelo? s/n");
            switch (borrar) {
              case "s":
                if (flights.length != 0) {
                  eliminar();
                  otro2();
                } else {
                  alert("No hay más vuelos por borrar.");
                }
                break;
              case "n":
                break;
            }
          };
          otro2();
          alert("¡Gracias por usar los servicios de ISDI Airlines!");
          break;
        case "n":
          alert("¡Gracias por usar los servicios de ISDI Airlines!");
          break;
      }
      break;
    case "user":
      const buscaPrecio = () => {
        let b = 0;
        const buscar = prompt(`Introduce el precio máximo de los vuelos:`);
        console.log(`\nResultados de vuelos por ${buscar}€ o menos:`);
        for (let p in flights) {
          if (flights[b].cost <= buscar) {
            console.log(flights[b]);
          }
          b++;
        }
        let otro3 = prompt("¿Quieres hacer otra búsqueda? s/n");
        switch (otro3) {
          case "s":
            buscaPrecio();
            break;
          case "n":
            alert("¡Gracias por usar los servicios de ISDI Airlines!");
            break;
        }
      };
      buscaPrecio();
      break;
    default:
      alert("Por favor, responde 'admin' o 'user'.");
      perfil();
  }
};

perfil();
