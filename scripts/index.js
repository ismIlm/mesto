import { Card } from './card.js';
import { cards } from './initial-cards.js';
import { 
    popup, 
    popupNewPlace, 
    popupImg, 
    editFormButton, 
    addFormButton, 
    closeBtn, 
    closeBtnNewPlace,
    closeBtnImg, 
    formElement, 
    formElementNewPlace, 
    cardsContainer, 
    profileTitle, 
    profileSubtitle, 
    bioPopupBtn,
    profileInfo 
} from './constants.js';

import {
    bioFormSubmitHandler,
    newPlaceFormSubmitHandler,
    showPopupBio,
    showPopupNewPlace,
    togglePopup,
} from './utils.js';

const allPopups = Array.from(document.querySelectorAll('.popup'));

function removeCard(event) {
    const cardElement = event.target.closest(".card");
    cardElement.remove();
}

function likeCard(event) {
    event.target.classList.toggle('card__like_active');
}

function addCards(cards) {
    cards.forEach(card => {
        const aCard = new Card(card, "#card-template");
        cardsContainer.prepend(aCard.getHtmlNode());
    }); 
}

editFormButton.addEventListener('click', () => showPopupBio(profileTitle.textContent, profileSubtitle.textContent));
addFormButton.addEventListener('click', () => showPopupNewPlace());
closeBtn.addEventListener('click', () => togglePopup(popup));
closeBtnNewPlace.addEventListener('click', () => togglePopup(popupNewPlace));
closeBtnImg.addEventListener('click', () => togglePopup(popupImg));
formElement.addEventListener('submit', bioFormSubmitHandler);
formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler);
addCards(cards);
