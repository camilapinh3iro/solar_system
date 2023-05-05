'use strict'

import './components/article-card.js'
import './components/table.js'

import { planets } from "./description-planets.js"

const createArticleCard = () => {
    let name = localStorage.getItem('name')
    let indice = localStorage.getItem('indice')

    const container = document.getElementById('content-article')

    const card = document.createElement('article-card')
    card.setAttribute('image', `../img/${name}-image.png`)
    card.setAttribute('name', name)
    card.setAttribute('description', planets[indice].description)

    container.append(card)
    return container
}

createArticleCard()

const api = async () => {
    let id = localStorage.getItem('id')
    const url = `https://api.le-systeme-solaire.net/rest/bodies/${id}`;

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

const api2 = async () => {
    let id = localStorage.getItem("id");
      const url = `https://api.le-systeme-solaire.net/rest/bodies/${id}`;
    
      const response = await fetch(url);
      const data = await response.json();
    
      let object = {
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
        axialTilt: data.axialTilt,
      };
    
      console.log(object);
    
      const values = Object.entries(object);
      console.log(values); // ["Matheus", 30]
    
      return values
    //   values.forEach((item, index) => {
    //       console.log(item);
    //       console.log(index);
    //   })
    };
    

const table = async () => {
    const data = await api2()

    const root = document.getElementById('contentTable')

    const table = document.createElement('table-infos')
    // table.setAttribute('semimajorAxis', data[0])
    // table.setAttribute('perihelion', data[1])
    // table.setAttribute('aphelion', data[2])
    // table.setAttribute('eccentricity', data[3])
    // table.setAttribute('inclination', data.inclination)
    // table.setAttribute('density', data.density)
    // table.setAttribute('gravity', data.gravity)
    // table.setAttribute('meanRadius', data.meanRadius)
    // table.setAttribute('equaRadius', data.equaRadius)
    // table.setAttribute('polarRadius', data.polarRadius)
    // table.setAttribute('flattening', data.flattening)
    // table.setAttribute('escape', data.escape)
    // table.setAttribute('sideralOrbit', data.sideralOrbit)
    // table.setAttribute('sideralOrbit', data.sideralOrbit)
    // table.setAttribute('sideralOrbit', data.sideralOrbit)
    // table.setAttribute('sideralRotation', data.sideralRotation)
    // table.setAttribute('avgTemp', data.avgTemp)
    // table.setAttribute('axialTilt', data.axialTilt)

    data.forEach((item,index) => {
        table.setAttribute(item[0], item[1])
        console.log(table);
        
    })
    

    root.append(table)

    // console.log(table);
    return root
}

table()



