type planetSituations = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado";

type planetCordenates = [number, number, number, number];

type planet = {
  name: string;
  cordenates: planetCordenates;
  situation: planetSituations;
  satellite: string[];
};

const listPlanets: planet[] = [];

function savePlanet(
  name: string,
  cordenates: planetCordenates,
  situation: planetSituations
) {
  listPlanets.push({
    name,
    cordenates,
    situation,
    satellite: [],
  });

  alert(`O planeta ${name} foi registrado com sucesso.`);
}

function findPlanet(name: string) {
  const planet = listPlanets.find((itemPlanet) => itemPlanet.name === name);

  return planet;
}

function toUpdateSituation(situation: planetSituations, planet: planet) {
  planet.situation = situation;

  alert(
    `A situação do planeta ${planet.name} foi atualizada para ${planet.situation}`
  );
}

function addSatellitePlanet(name: string, planet: planet) {
  planet.satellite.push(name);

  alert(`O satélite ${name} foi adicionado `);
}

function removeSatellitePlanet(name: string, planet: planet) {
  planet.satellite = planet.satellite.filter((satellite) => satellite !== name);

  alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
}

function promptValidSituation() {
  let situation: planetSituations;
  let validSituation = false;

  if (!validSituation) {
    const situationInput = prompt(`Informe a situação do planeta:\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado`)

    switch (situationInput) {
      case "1":
        situation = "Habitado"
        validSituation = true
        break;
      case "2":
        situation = "Habitável"
        validSituation = true
        break
      case "3":
        situation = "Inabitável"
        validSituation = true
        break
      case "4":
        situation = "Inexplorado"
        validSituation = true
        break
    
      default:
        alert("Opção inválida!")
        break;
    }
  }
  return situation
}

function promptValidPlanet(callbackfn: (planet: planet) => void) {
  const planetName = prompt(`Infomr o nome do planeta ?`)
  const planet = findPlanet(planetName)

  if (planet) {
    callbackfn(planet)
  } else {
    alert("planeta não encontrado! Retornando ao menu ....")
  }
}

function firstMenuOption() {
  const name = prompt("Informe o nome do planeta:")
  const coordinateA = Number(prompt('Informe a primeira coordenada:'))
  const coordinateB = Number(prompt('Informe a segunda coordenada:'))
  const coordinateC = Number(prompt('Informe a terceira coordenada:'))
  const coordinateD = Number(prompt('Informe a quarta coordenada:'))

  const situation = promptValidSituation()

  const confirmation = confirm(`Confirme o registro do planeta ${name}?
  Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
  Situação: ${situation}`)

  if (confirmation) {
    savePlanet(name,[coordinateA, coordinateB, coordinateC, coordinateD], situation)
  }
}

function secondMenuOption() {
  promptValidPlanet(planet => {
    const situation = promptValidSituation()
    toUpdateSituation(situation, planet)
  })
}

function thirdMenuOption() {
  promptValidPlanet(planet => {
    const satellite = prompt('Informe o nome do satelite a ser adicionado:')
    addSatellitePlanet(satellite, planet)
  })
}

function fourMenuOption() {
  promptValidPlanet(planet => {
    const sattelite = prompt('Informe o satelite a ser removido:')
    removeSatellitePlanet(sattelite, planet)
  })
}

function fifthMenuOption() {
  let list = 'Planetas\n'

  listPlanets.forEach(planet => {
    const [a , b , c , d] = planet.cordenates

    list +=`
      Nome: ${planet.name}
      Coordenadas: ${a}, ${b}, ${c}, ${d}
      Situação: ${planet.situation}
      Satélites: ${planet.satellite}
    `
  })
}