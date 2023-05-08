'use strict'

import './components/personal-information-card.js'

export const createPersonalInformation = () => {

    const root = document.getElementById('root')

    const card = document.createElement('personal-information-card')
    card.setAttribute('linkedin', 'https://www.linkedin.com/in/camila-pinheiro-4a4676255/')
    card.setAttribute('twitter', 'https://twitter.com/camilapinh3iro')
    card.setAttribute('instagram', 'https://www.instagram.com/camilapinh3iro/')
    card.setAttribute('github', 'https://github.com/camilapinh3iro')
    card.setAttribute('email', 'pinheirocamila49800@gmail.com')
    card.setAttribute('phone', '(11) 4774-4700')
    card.setAttribute('location', 'Itapevi - SP')

    root.append(card)
    return root
}

