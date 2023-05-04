'use strict'

// import './app.js'
import { planets } from "./description-planets.js"

const createArticle = () => {

    let name = localStorage.getItem('name')
    let image = localStorage.getItem('image')
    let indice = localStorage.getItem('indice')

    const root = document.getElementById('content-article')

    const card = document.createElement('article-card')
    card.setAttribute('image', image)
    card.setAttribute('name', name)
    card.setAttribute('description', planets[indice].description)

    console.log(card);

    root.append(card)
    return root
}

createArticle()

const makeTable = () => {
    
}