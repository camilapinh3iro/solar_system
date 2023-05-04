'use strict'

import './router.js'

const createCard = (planet, indice) => {
    const li = document.createElement('li')

    const card = document.createElement('planet-card')
    card.setAttribute('image', `../img/${planet.englishName}-image.png`)
    card.setAttribute('name', planet.englishName)

    card.onclick = () => {
        localStorage.setItem("name", planet.englishName);
        localStorage.setItem("indice", indice);
        localStorage.setItem("id", planet.id)
    };

    li.append(card)
    return li
}

const sun = async function() {
    const url = `https://api.le-systeme-solaire.net/rest/bodies/`;

    const response = await fetch(url);
    const data = await response.json();

    let planets = data.bodies;

    return planets
}

// console.log('sun: ' + await sun());

const loadCards = async () => {
    const data = await sun();

    let filteredPlanets = data.filter(planet => {
        return planet.isPlanet;
    });

    console.log(filteredPlanets);

    const container = document.getElementById("content-card-planets");

    const teste = filteredPlanets.map(element => {
        // console.log(element.semimajorAxis);
        return element
    });

    let cards = teste.map(createCard);

    container.replaceChildren(...cards);
    // console.log(cards.name);
};

loadCards();

