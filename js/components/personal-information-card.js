'use strict';

import { getFontAwesomeStyle } from "./get-font-awesome-style.js";

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.linkedin = 'Linkedin link';
        this.twitter = 'Twitter link';
        this.instagram = 'Twitter link';
        this.github = 'Github link';
        this.email = 'Email address';
        this.phone = 'Phone number';
        this.location = 'Location'
    }

    static get observedAttributes() {
        return [
            'linkedin',
            'twitter',
            'instagram',
            'github',
            'email',
            'phone',
            'location',
        ]
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(getFontAwesomeStyle());
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

        .personal-information {
            height: 210px;
            background-color: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 60px;
        }
        
        .content-span-icons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        
        .follow {
            font-size: 1.25rem;
            font-weight: 300;
        }
        
        .social-container {
            font-size: 1.9rem;
            display: flex;
            gap: 20px;
        }
        
        .social {
            height: 50px;
            width: 50px;
            border: 2px solid var(--secondary-color);
            color: var(--secondary-color);
            border-radius: 10px;
            display: grid;
            place-items: center;
            transition: all 400ms ease-in-out;
            cursor: pointer ;
        }
        
        .contact-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .contact-item {
            display: flex;
            gap: 15px;
            align-items: center;
            cursor: default;
            transition: all 400ms ease-in-out;
        }
        
        .contact-container i {
            font-size: 1.5rem;
            width: 25px;
        }
        
        .contact-item-text {
            font-size: 1.07rem;
            font-weight: 300;
        }
        
        .social:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
            transform: scale(1.2);
        }
        
        .contact-item:hover{
            transform: scale(1.1);
        }
        `

        return css
    }

    component() {
        const contentAll = document.createElement('div')
        contentAll.classList.add('personal-information')

        const contentSocial = document.createElement('div')
        contentSocial.classList.add('content-span-icons')

        const spanFollow = document.createElement('span')
        spanFollow.classList.add('follow')
        spanFollow.textContent = 'Follow'

        const socialContainer = document.createElement('ul')
        socialContainer.classList.add('social-container')

        const socialLinkedin = document.createElement('li')
        socialLinkedin.classList.add('social')

        const aLinkedin = document.createElement('a')
        aLinkedin.href = this.linkedin
        aLinkedin.target = '_blank'
        aLinkedin.ariaLabel = 'Check out my Linkedin account'
        const iconLinkedin = document.createElement('i')
        iconLinkedin.classList.add('fa-brands')
        iconLinkedin.classList.add('fa-linkedin')
        aLinkedin.append(iconLinkedin)

        socialLinkedin.append(aLinkedin)

        const socialTwitter = document.createElement('li')
        socialTwitter.classList.add('social')

        const aTwitter = document.createElement('a')
        aTwitter.href = this.twitter
        aTwitter.target = '_black'
        aTwitter.ariaLabel = 'Check out my Twitter account'
        const iconTwitter = document.createElement('i')
        iconTwitter.classList.add('fa-brands')
        iconTwitter.classList.add('fa-twitter')
        aTwitter.append(iconTwitter)

        socialTwitter.append(aTwitter)

        const socialInstagram = document.createElement('li')
        socialInstagram.classList.add('social')

        const aInstagram = document.createElement('a')
        aInstagram.href = this.instagram
        aInstagram.target = '_black'
        aInstagram.ariaLabel = 'Check out my Instagram account'
        const iconInstagram = document.createElement('i')
        iconInstagram.classList.add('fa-brands')
        iconInstagram.classList.add('fa-instagram')
        aInstagram.append(iconInstagram)

        socialInstagram.append(aInstagram)

        const socialGithub = document.createElement('li')
        socialGithub.classList.add('social')

        const aGithub = document.createElement('a')
        aGithub.href = this.github
        aGithub.target = '_black'
        aGithub.ariaLabel = 'Check out my Github account'
        const iconGithub = document.createElement('i')
        iconGithub.classList.add('fa-brands')
        iconGithub.classList.add('fa-github')
        aGithub.append(iconGithub)

        socialGithub.append(aGithub)

        socialContainer.append(socialLinkedin, socialTwitter, socialInstagram, socialGithub)
        contentSocial.append(spanFollow, socialContainer)

        const contentContact = document.createElement('ul')
        contentContact.classList.add('contact-container')

        const contactEmail = document.createElement('li')
        contactEmail.classList.add('contact-item')

        const iconEmail = document.createElement('i')
        iconEmail.classList.add('fa-solid')
        iconEmail.classList.add('fa-envelope')

        const spanEmail = document.createElement('span')
        spanEmail.classList.add('contact-item-text')
        spanEmail.textContent = this.email

        contactEmail.append(iconEmail, spanEmail)

        const contactPhone = document.createElement('li')
        contactPhone.classList.add('contact-item')

        const iconPhone = document.createElement('i')
        iconPhone.classList.add('fa-solid')
        iconPhone.classList.add('fa-phone')

        const spanPhone = document.createElement('span')
        spanPhone.classList.add('contact-item-text')
        spanPhone.textContent = this.phone

        contactPhone.append(iconPhone, spanPhone)

        const contactLocation = document.createElement('li')
        contactLocation.classList.add('contact-item')

        const iconLocation = document.createElement('i')
        iconLocation.classList.add('fa-solid')
        iconLocation.classList.add('fa-location-dot')

        const spanLocation = document.createElement('span')
        spanLocation.classList.add('contact-item-text')
        spanLocation.textContent = this.location

        contactLocation.append(iconLocation, spanLocation)

        contentContact.append(contactEmail, contactPhone, contactLocation)
      
        contentAll.append(contentSocial, contentContact)

        return contentAll
    }
}

customElements.define('personal-information-card', card);