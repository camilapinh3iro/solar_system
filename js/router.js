'use strict'

import { loadSun } from './sun.js'
import { loadAllPlanets } from './planets.js'
import { loadPlanet } from './selected-planet.js'
import { createPersonalInformation } from './personal-information.js'

const routes = {
    "/": "/index.html",
    '/sun': '/pages/sun.html',
    '/planets': '/pages/planets.html',
    '/selected-planet': '/pages/selected-planet.html'
}

export const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
    // console.log(window.location.pathname);

    const path = window.location.pathname
    // console.log(path);
    const route = routes[path]

    const response = await fetch(route)
    const html = await response.text()

    // console.log(route);

    document.getElementById('root').innerHTML = html

    createPersonalInformation()
    if (path == '/sun') {
        loadSun()
    } else if (path == '/planets') {
        loadAllPlanets()
    } else if (path == '/selected-planet') {
        loadPlanet()
    }
}

window.route = route;