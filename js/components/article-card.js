'use strict';

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.name = 'Name';
        this.description = 'Page subject description';
        this.image = null;
        this.alt = 'Image alt text'
    }

    static get observedAttributes() {
        return ['name', 'description', 'image', 'alt']
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

        .content-subject{
            width: 100%;
            height: 600px;
            background-color: var(--primary-color);
            display: flex;
            justify-content: space-between;
            padding: 0 100px;
        }
        
        .image-subject{
            height: 600px;
            width: 720px;
        }
        
        .description{
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-top: 85px;
        }
        
        .title-astro{
            font-size: 6rem;
            letter-spacing: 2px;
            font-family: 'Anton', sans-serif;
            text-transform: uppercase;
        }
        
        .content-p{
            width: 500px;
            font-size: 1.25rem;
        }

        @media (max-width: 1450px){
            .content-subject{
                padding: 0 60px;
                al
            }

            .image-subject {
                height: 550px;
                width: 650px;
                align-self: center;
            }
        }

        @media (max-width: 1270px){
            .content-subject{
                height: auto;
            }

            .image-subject {
                height: 500px;
                width: 580px;
            }

            .content-p{
                width: 30vw;
            }

            .description{
                padding-bottom: 60px;
            }

            .content-subject {
                padding: 0 20px 0 60px;
            }

            .title-astro{
                font-size: 5rem;
            }
        }

        @media (max-width: 995px){
            .image-subject {
                height: 400px;
                width: 480px;
            }
        }

        @media (max-width: 850px){
            .content-subject {
                flex-direction: column;
                padding: 0 60px;
            }
            .content-p{
                width: 100%;
            }
        }

        @media (max-width: 560px){
            .image-subject {
                height: 30%;
                width: 80%;
            }

            .title-astro {
                font-size: 3rem;
            } 

            .content-subject{
                padding: 0px;
            }

            .description{
                padding: 60px 40px;
            }
        }
        `

        return css
    }

    component() {
        const card = document.createElement('article')
        card.classList.add('content-subject')

        const contentSubjectDescription = document.createElement('div')
        contentSubjectDescription.classList.add('description')

        const title = document.createElement('h1')
        title.classList.add('title-astro')
        title.textContent = this.name
        
        const contentP = document.createElement('div')
        contentP.classList.add('content-p')

        const paragraph = document.createElement('p')
        paragraph.textContent = this.description

        const image = document.createElement('img')
        image.classList.add('image-subject')
        image.src = this.image
        image.alt = this.alt
        
        contentSubjectDescription.append(title, contentP)
        contentP.append(paragraph)
        card.append(contentSubjectDescription, image)

        return card
    }
}

customElements.define('article-card', card);