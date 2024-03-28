const listPlanets = [];
function savePlanet(name, cordenates, situation) {
    listPlanets.push({
        name,
        cordenates,
        situation,
        satellite: [],
    });
    alert(`O planeta ${name} foi registrado com sucesso.`);
}
function findPlanet(name) {
    const planet = listPlanets.find((itemPlanet) => itemPlanet.name === name);
    return planet;
}
function toUpdateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${planet.situation}`);
}
function addSatellitePlanet(name, planet) {
    planet.satellite.push(name);
    alert(`O satélite ${name} foi adicionado `);
}
function removeSatellitePlanet(name, planet) {
    planet.satellite = planet.satellite.filter((satellite) => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
}
