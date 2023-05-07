'use strict'

import './components/planet-card.js'
import './components/article-card.js'

const createArticleCard = () => {
    
    const root = document.getElementById('content-article')

    const card = document.createElement('article-card')
    card.setAttribute('name', 'Planets')
    card.setAttribute('description', 'The Solar System is a set of celestial bodies that gravitate in the orbit of a sun (a star). It consists of eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune. Learn a little more about them by clicking on the image.')
    card.setAttribute('image', '../img/take-off-image.jpg')
    card.setAttribute('alt', 'Takeoff of a rocket')

    root.append(card)
    return root
}

createArticleCard()

const createCard = (planet, indice) => {
    const li = document.createElement('li')

    const card = document.createElement('planet-card')
    card.setAttribute('image', `../img/${planet.englishName}-image.png`)
    card.setAttribute('name', planet.englishName)
    card.setAttribute('alt', `Illustration of the planet ${planet.englishName}`)

    card.onclick = () => {
        localStorage.setItem("name", planet.englishName);
        localStorage.setItem("indice", indice);
        localStorage.setItem("id", planet.id)
    };

    li.append(card)
    return li
}

const api = async function () {
    const url = `https://api.le-systeme-solaire.net/rest/bodies/`;

    const response = await fetch(url);
    const data = await response.json();

    let planets = data.bodies;

    return planets
}

const loadCards = async () => {
    const data = await api();

    let filteredPlanets = data.filter(planet => {
        return planet.isPlanet;
    });

    const container = document.getElementById("content-card-planets");

    let cards = filteredPlanets.map(createCard);

    container.replaceChildren(...cards);
};

loadCards();