//import * as all from './data.js';
import {cardElement, cardTemplate} from './constants.js';

class Card {
    constructor (data, template) {
        this.name = name;
        this.link = link;
        this.template = template;
    }

    createCard(item) {
        const cardElement = cardTemplate.cloneNode(true);
        cardElement.querySelector('.card__title').textContent = item.name;
        const elementImg = cardElement.querySelector('.card__image');
        elementImg.src = item.link;
        elementImg.alt = item.name;
        cardElement.querySelector('.card__remove-button').addEventListener("click", removeCard);
        cardElement.querySelector('.card__like').addEventListener("click", likeCard);
        elementImg.addEventListener("click", openImgPopup);
        return cardElement;
    }

    cards.forEach(card => cardsContainer.prepend(createCard(card)));
    
    likeCard(event) {
        event.target.classList.toggle('card__like_active');
    }

    
}

//editFormButton.addEventListener('click', () => showPopupBio(profileTitle.textContent, profileSubtitle.textContent));
