'use strict'

import { teste } from './sun.js'
import { loadAll } from './planets.js'
import { loadAllPlanet } from './selected-planet.js'
import { createPersonalInformation } from './personal-information.js'

const routes = {
    "/": "/index.html",
    '/sun': '/pages/sun.html',
    '/planets': '/pages/planets.html',
    '/selected-planet': '/pages/selected-planet.js'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
    console.log(window.location.pathname);

    const path = window.location.pathname
    console.log(path);
    const route = routes[path]

    const response = await fetch(route)
    const html = await response.text()

    console.log(route);

    document.getElementById('root').innerHTML = html

    console.log(html);
    createPersonalInformation()

    if (path == '/sun') {
        teste()
    } else if (path == '/planets'){
        loadAll()
    } else if (path == '/selected-planets'){
        loadAllPlanet()
    }

}

window.route = route;