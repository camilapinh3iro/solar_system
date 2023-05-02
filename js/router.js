'use strict'

const routes = {
    "/": "/pages/index.html",
    '/planets': '/pages/planets.html',
    '/sun': '/pages/sun.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
    console.log(window.location.pathname);

    const path = window.location.pathname
    const route = routes[path]

    const response = await fetch(route)
    const html = await response.text()

    console.log(path);

    document.getElementById('root').innerHTML = html

    console.log(html);
}

window.route = route;