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
    validationParams,
    infoInput,
    lincInputNewPlace,
    nameInput,
    nameInputNewPlace,
    popupBigImage,
    popupFigcaption,
    allPopups,
} from './constants.js';

import { FormValidator } from './formValidator.js';

const closePopupHandler = (evt, popup) => {
    if (evt.target.classList.contains('popup')) {
        togglePopup(popup);
    }
};

const popupIsOpened = (popupElement) => {
    return popupElement.classList.contains('popup_opened');
};

const closePopupOnDocEscHandler = (evt) => {
    evt.preventDefault();
    if (evt.key == "Escape") {
        const popupElement = allPopups.find(popupElement => popupIsOpened(popupElement));
        if (popupElement) {
            togglePopup(popupElement);
        }
    }
};

function addPopupEscListener() {
    document.addEventListener('keyup', closePopupOnDocEscHandler);
}

function removePopupEscListener() {
    document.removeEventListener('keyup', closePopupOnDocEscHandler);
}

function togglePopup(localPopup) {
    if (popupIsOpened(localPopup)) {
        removePopupEscListener();
    } else {
        addPopupEscListener();
    }
    localPopup.classList.toggle('popup_opened');
}

function showPopupBio(fullName, info) {
    nameInput.value = fullName;
    infoInput.value = info;
    formValidators[formElement.id].toggleButtonStateWithForm(formElement, bioPopupBtn);
    formValidators[formElement.id]._resetValidationErrors(formElement, validationParams);
    togglePopup(popup);
}


function showPopupNewPlace() {
    nameInputNewPlace.value = "";
    lincInputNewPlace.value = "";
    formValidators[formElementNewPlace.id]._resetValidationErrors(formElementNewPlace, validationParams);
    togglePopup(popupNewPlace);
}

function openImgPopup(evt) {
    popupBigImage.src = evt.target.src;
    popupBigImage.alt = evt.target.alt;
    popupFigcaption.textContent = evt.target.alt;
    togglePopup(popupImg);
}

function bioFormSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = infoInput.value;
    togglePopup(popup);
}

function newPlaceFormSubmitHandler(evt) {
    evt.preventDefault();
    const newCardData = {
        name: nameInputNewPlace.value,
        link: lincInputNewPlace.value,
    };
    togglePopup(popupNewPlace);
    const aCard = new Card(newCardData, "#card-template");
    cardsContainer.prepend(aCard.getHtmlNode());
    formElementNewPlace.reset();
}

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
    
popup.addEventListener('click', (evt) => closePopupHandler(evt, popup));
popupNewPlace.addEventListener('click', (evt) => closePopupHandler(evt, popupNewPlace));
popupImg.addEventListener('click', (evt) => closePopupHandler(evt, popupImg));
editFormButton.addEventListener('click', () => showPopupBio(profileTitle.textContent, profileSubtitle.textContent));
addFormButton.addEventListener('click', () => showPopupNewPlace());
closeBtn.addEventListener('click', () => togglePopup(popup));
closeBtnNewPlace.addEventListener('click', () => togglePopup(popupNewPlace));
closeBtnImg.addEventListener('click', () => togglePopup(popupImg));
formElement.addEventListener('submit', bioFormSubmitHandler);
formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler);
addCards(cards);

export {
    openImgPopup,
};