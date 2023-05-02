'use strict';

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.title = 'Title';
        this.description = 'Page subject description.';
        this.image = null;
    }

    static get observedAttributes() {
        return ['title', 'description', 'image']
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
            width: 600px;
        }
        
        .description{
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-top: 85px;
        }
        
        .title{
            font-size: 6rem;
            letter-spacing: 2px;
            font-family: 'Anton', sans-serif;
            text-transform: uppercase;
        }
        
        .content-p{
            width: 500px;
            font-size: 1.25rem;
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
        title.classList.add('title')
        title.textContent = this.title

        const contentP = document.createElement('div')
        contentP.classList.add('content-p')

        const paragraph = document.createElement('p')
        paragraph.textContent = this.description

        const image = document.createElement('img')
        image.classList.add('image-subject')
        image.src = this.image
        // image.alt = ''
        
        contentSubjectDescription.append(title, contentP)
        contentP.append(paragraph)
        card.append(contentSubjectDescription, image)

        return card
    }
}

customElements.define('article-card', card);