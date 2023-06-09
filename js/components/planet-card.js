'use strict';

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.image = null;
        this.name = 'Planet name';
        this.alt = 'Image alt text'
        this.href = 'Link'
    }

    static get observedAttributes() {
        return ['image', 'name', 'alt', 'href']
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

        .card{
            display: flex;
            padding: 35px 35px 50px 35px;
            flex-direction: column;
            background-color: var(--card-bg);
            width: 500px;
            height: 550px;
            border-radius: 30px;
            transition: all 400ms ease-in-out;
        }

        .card:hover{
            box-shadow: 4px 5px 10px #9e9d9d;
            transform: scale(1.03);
        }

        .image-planet{
            border-radius: 30px;
            height: 350px;
        }

        .infos-planet{
            padding-top: 15px;
            display: flex;
            flex-direction: column;
        }

        .name-planet{
            color: var(--primary-color);
            font-size: 2.8rem;
            font-family: 'Anton', sans-serif;
            text-transform: uppercase;
        }

        .planet-span{
            color: var(--card-color);
            text-transform: uppercase;
            font-size: 1.2rem;
        
        }

        @media (max-width: 1250px){
            .card{
                width: 380px;
                height: 430px;
            }
        }

        @media (max-width: 460px){
            .card{
                padding: 28px 28px 50px 28px;
                width: 330px;
                height: 380px;
            }

            .name-planet{
                font-size: 2.2rem;
            }

            .planet-span{
                font-size: 1.1rem;
            }
        }

        @media (max-width: 420px){
            .card{
                padding: 28px 28px 50px 28px;
                width: 310px;
                height: 360px;
            }
        }
        `

        return css
    }

    component() {
        const card = document.createElement('a')
        card.classList.add('card')
        card.ariaLabel = 'Check information about this planet'
        card.href = this.href

        const image = document.createElement('img')
        image.classList.add('image-planet')
        image.src = this.image
        image.alt = this.alt

        const planetSpan = document.createElement('span')
        planetSpan.classList.add('planet-span')
        planetSpan.textContent = 'Planet'

        const contentInfos = document.createElement('div')
        contentInfos.classList.add('infos-planet')

        const namePlanet = document.createElement('span')
        namePlanet.classList.add('name-planet')
        namePlanet.textContent = this.name

        contentInfos.append(planetSpan, namePlanet)
        card.append(image, contentInfos)

        return card
    }
}

customElements.define('planet-card', card); 