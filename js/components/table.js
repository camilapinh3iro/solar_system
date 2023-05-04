'use strict';

import { characteristics } from '../description-characteristics.js'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.semimajorAxis = 'semimajorAxis';
        this.perihelion = 'perihelion';
        this.aphelion = 'aphelion';
        this.eccentricity = 'eccentricity';
        this.inclination = 'inclination';
        this.density = 'density';
        this.gravity = 'gravity';
        this.meanRadius = 'meanRadius';
        this.equaRadius = 'equaRadius';
        this.polarRadius = 'polarRadius';
        this.flattening = 'flattening';
        this.escape = 'escape';
        this.sideralOrbit = 'sideralOrbit';
        this.sideralRotation = 'sideralRotation';
        this.avgTemp = 'avgTemp';
        this.axialTilt = 'axialTilt';
    }

    static get observedAttributes() {
        return [
            'semimajoraxis',
            'perihelion',
            'aphelion',
            'eccentricity',
            'inclination',
            'density',
            'gravity',
            'meanradius',
            'equaradius',
            'polarradius',
            'flattening',
            'escape',
            'sideralorbit',
            'sideralrotation',
            'avgtemp',
            'axialtilt',
        ]
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue

    }

    connectedCallback() {
        this.shadow.appendChild(this.component());
        this.shadow.appendChild(this.styles());
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        a{
            text-decoration: none;
            color: inherit;
        }

        .content-planet-information {
            // heigth: 3000px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 85px 100px;
            color: var(--primary-color);
        }
        
        .content-information{
            display: flex;
            justify-content: space-between;
            height: 130px;
            width: 80vw;
            border-bottom: 1px solid var(--primary-color);
        }
        
        .content-title-information {
            height: 70px;
            width: 80vw;
            border-bottom: 2px solid var(--primary-color);
            display: flex;
            justify-content: space-between;
        }
        
        .title-information {
            font-family: 'Anton', sans-serif;
            font-size: 1.6rem;
            text-transform: uppercase;
            padding-right: 90px;
        }
        
        .rated{
            padding-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }
        
        .title-rated{
            font-family: 'Anton', sans-serif;
            font-size: 1.25rem;
        }
        
        .description-rated{
            color: var(--card-color);
            font-size: 1rem;
            width: 50vw;
            max-width: 750px;
        }
        
        .result{
            font-weight: bold;
            display: grid;
            place-content: center;
            padding-right: 60px;
        }
        `

        return css
    }

    component() {
        const contentAll = document.createElement('div')
        contentAll.classList.add('content-planet-information')

        const contentTitle = document.createElement('div')
        contentTitle.classList.add('content-title-information')

        const titleInformation = document.createElement('span')
        titleInformation.classList.add('title-information')
        titleInformation.textContent = 'Characteristics'

        const titleInformation2 = document.createElement('span')
        titleInformation2.classList.add('title-information')
        titleInformation2.textContent = 'Result'

        contentTitle.append(titleInformation, titleInformation2)
        contentAll.append(contentTitle)

        for (let index = 0; index < characteristics.length; index++) {
            console.log('oi');
            const contentInformation = document.createElement('div')
            contentInformation.classList.add('content-information')

            const rated = document.createElement('div')
            rated.classList.add('rated')

            const titleRated = document.createElement('span')
            titleRated.classList.add('title-rated')
            titleRated.textContent = characteristics[index].name

            const descriptionRated = document.createElement('span')
            descriptionRated.classList.add('decription-rated')
            descriptionRated.textContent = characteristics[index].description

            const result = document.createElement('div')
            result.classList.add('result')

            const spanResult = document.createElement('span')
            spanResult.textContent = this.equaradius

            result.append(spanResult)
            rated.append(titleRated, descriptionRated)
            contentInformation.append(rated, result)

            contentAll.append(contentInformation)
        }

        return contentAll
    }
}

customElements.define('table-infos', card);

