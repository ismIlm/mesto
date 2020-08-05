import { Card } from './card.js';
import {
    bioPopupBtn,
    editFormButton,
    formElement,
    formElementNewPlace,
    infoInput,
    lincInputNewPlace,
    nameInput,
    nameInputNewPlace,
    popup,
    popupBigImage,
    popupFigcaption,
    popupImg,
    popupNewPlace,
    profileSubtitle,
    profileTitle,
    validationParams,
    allPopups,
    cardsContainer,
} from './constants.js';

import {
    formValidators,
} from './validate.js';

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
        };
    };
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

    //toggleButtonStateWithForm(formElement, bioPopupBtn);
    formValidators[formElement.id]._toggleButtonStateWithForm(formElement, bioPopupBtn);

    formValidators[formElement.id]._resetValidationErrors(formElement, validationParams);

    togglePopup(popup);
}

function showPopupNewPlace() {
    nameInputNewPlace.value = "";
    lincInputNewPlace.value = "";

    formValidators[formElement.id]._resetValidationErrors(formElementNewPlace, validationParams);

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

popup.addEventListener('click', (evt) => closePopupHandler(evt, popup));
popupNewPlace.addEventListener('click', (evt) => closePopupHandler(evt, popupNewPlace));
popupImg.addEventListener('click', (evt) => closePopupHandler(evt, popupImg));

export {
    bioFormSubmitHandler,
    newPlaceFormSubmitHandler,
    openImgPopup,
    showPopupBio,
    showPopupNewPlace,
    togglePopup,
};

