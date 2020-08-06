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
    profileInfo, 
    validationParams,
} from './Constants.js';

import {
    bioFormSubmitHandler,
    newPlaceFormSubmitHandler,
    showPopupBio,
    showPopupNewPlace,
    togglePopup,
} from './utils.js';

import { FormValidator } from './FormValidator.js';


const allPopups = Array.from(document.querySelectorAll('.popup'));

function addCards(cards) {
    cards.forEach(card => {
        const aCard = new Card(card, "#card-template");
        cardsContainer.prepend(aCard.getHtmlNode());
    }); 
}


let formValidators = {};

const enableValidation = (params) => {
    const formList = Array.from(document.querySelectorAll(params.formSelector));

    formList.forEach((formElement) => {
        const formValidator = new FormValidator(params, formElement);
        formValidator.enableValidation();
        formValidators[formElement.id] = formValidator;
    });
};


enableValidation(validationParams);
    
export {
    formValidators,
};

editFormButton.addEventListener('click', () => showPopupBio(profileTitle.textContent, profileSubtitle.textContent));
addFormButton.addEventListener('click', () => showPopupNewPlace());
closeBtn.addEventListener('click', () => togglePopup(popup));
closeBtnNewPlace.addEventListener('click', () => togglePopup(popupNewPlace));
closeBtnImg.addEventListener('click', () => togglePopup(popupImg));
formElement.addEventListener('submit', bioFormSubmitHandler);
formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler);
addCards(cards);
