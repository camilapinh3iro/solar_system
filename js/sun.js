'use strict'

import './components/table.js'
import './components/article-card.js'

const createArticleCard = () => {
    const root = document.getElementById('content-article')

    const card = document.createElement('article-card')
    card.setAttribute('name', 'Sun')
    card.setAttribute('description', 'The Sun is a star located at the center of our solar system. Its gravity keeps it spinning in its orbit from the largest planets to tiny particles of debris. In the interior of the Sun, enormous amounts of energy are produced through fusion reactions of hydrogen into helium. This intense energy is our source of light and heat and without it there would be no life on Earth.')
    card.setAttribute('image', '../img/sun-image.png')
    card.setAttribute('alt', 'Illustration of the sun')

    root.append(card)
    return root
}

const api = async () => {
    const url = `https://api.le-systeme-solaire.net/rest/bodies/sun`;

    const response = await fetch(url);
    const data = await response.json();

    return {
        semimajorAxis: data.semimajorAxis, 
        perihelion: data.perihelion, 
        aphelion: data.aphelion, 
        eccentricity: data.eccentricity, 
        inclination: data.inclination, 
        density: data.density, 
        gravity: data.density, 
        meanRadius: data.meanRadius, 
        equaRadius: data.equaRadius, 
        polarRadius: data.polarRadius, 
        flattening: data.flattening, 
        escape: data.escape, 
        sideralOrbit: data.sideralOrbit, 
        sideralRotation: data.sideralRotation, 
        avgTemp: data.avgTemp, 
        axialTilt: data.axialTilt
    }
}

const table = async () => {
    const data = await api ()

    const root = document.getElementById('content-table')

    const table = document.createElement('table-infos')
    table.setAttribute('semimajorAxis', data.semimajorAxis)
    table.setAttribute('perihelion', data.perihelion)
    table.setAttribute('aphelion', data.aphelion)
    table.setAttribute('eccentricity', data.eccentricity)
    table.setAttribute('inclination', data.inclination)
    table.setAttribute('density', data.density)
    table.setAttribute('gravity', data.gravity)
    table.setAttribute('meanRadius', data.meanRadius)
    table.setAttribute('equaRadius', data.equaRadius)
    table.setAttribute('polarRadius', data.polarRadius)
    table.setAttribute('flattening', data.flattening)
    table.setAttribute('escape', data.escape)
    table.setAttribute('sideralOrbit', data.sideralOrbit)
    table.setAttribute('sideralOrbit', data.sideralOrbit)
    table.setAttribute('sideralOrbit', data.sideralOrbit)
    table.setAttribute('sideralRotation', data.sideralRotation)
    table.setAttribute('avgTemp', data.avgTemp)
    table.setAttribute('axialTilt', data.axialTilt)

    root.append(table)
    return root
}

export const loadSun = async () => {
    table()
    createArticleCard()
}