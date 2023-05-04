'use strict'

import './router.js'

const createCard = (planet) => {
    const li = document.createElement('li')

    const card = document.createElement('planet-card')
    card.setAttribute('image', `../img/earth-image.jpg`)
    card.setAttribute('name', planet.name)

    li.append(card)
    return li
}

const loadCards = async () => {
    const url = `https://api.le-systeme-solaire.net/rest/bodies/`;

    const response = await fetch(url);
    const data = await response.json();

    let planets = data.bodies;

    let filteredPlanets = planets.filter(planet => {
        return planet.isPlanet;
    });

    console.log(filteredPlanets);

    const container = document.getElementById("content-card-planets");

    // const cards = createCard(filteredPlanets)

    // console.log(cards);

    // container.replaceChildren(...cards);
};

loadCards();