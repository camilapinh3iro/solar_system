'use strict';

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.parameter = 'Evaluated parameter';
        this.description = 'Description parameter';
        this.result = 'Parameter result.'
    }

    static get observedAttributes() {
        return ['parameter', 'description', 'result']
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

        .content-information{
            display: flex;
            justify-content: space-between;
            height: 130px;
            width: 80vw;
            border-bottom: 1px solid var(--primary-color);
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
            max-width: 700px;
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
        const contentInformation = document.createElement("div");
        contentInformation.classList.add("content-information");

        const rated = document.createElement("div");
        rated.classList.add("rated");

        const titleRated = document.createElement("span");
        titleRated.classList.add("title-rated");
        titleRated.textContent = this.parameter;

        const descriptionRated = document.createElement("span");
        descriptionRated.classList.add("description-rated");
        descriptionRated.textContent = this.description;

        const result = document.createElement("div");
        result.classList.add("result");

        const spanResult = document.createElement("span");
        spanResult.textContent = this.result;

        result.append(spanResult);
        rated.append(titleRated, descriptionRated);
        contentInformation.append(rated, result);

        return contentInformation
    }
}

customElements.define('evaluated-parameter', card);