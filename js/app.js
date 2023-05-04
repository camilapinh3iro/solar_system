'use strict'

import './router.js'

const createCard = (planet) => {
    const li = document.createElement('li')

    const card = document.createElement('planet-card')
    card.setAttribute('image', `../img/earth-image.jpg`)
    // card.setAttribute('name', planet.name)

    li.append(card)
    return li
}

const loadCards = async () => {
    const url = `https://api.le-systeme-solaire.net/rest/bodies/`;

    const response = await fetch(url);
    const data = await response.json();

    let planets = data.bodies;
    let planetsJson = {};
    let planetsArray = [];

    const container = document.getElementById("content-card-planets");

    planets.forEach(planet => {
        if (planet.isPlanet) {
            planetsArray.push(planet)
        }

        planetsJson.planets = planetsArray
    });
    console.log(planetsArray);
    console.log(planetsJson);
    // const cards = createCard(planetsJson)

    // console.log(cards);

    container.replaceChildren(...cards);
};

loadCards();