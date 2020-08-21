import { Card } from './card.js';
import { cards } from './initial-cards.js';
import { 
    popupEditProfile,
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
    allPopups,
    popupImgSelector,
} from './constants.js';

import { FormValidator } from './formValidator.js';
import Section from './section.js';
import PopupWithImage from './popupWithImage.js';

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
    formValidators[formElement.id].resetValidationErrors(formElement, validationParams);
    togglePopup(popupEditProfile);
}

function showPopupNewPlace() {
    nameInputNewPlace.value = "";
    lincInputNewPlace.value = "";
    formValidators[formElementNewPlace.id].resetValidationErrors(formElementNewPlace, validationParams);
    togglePopup(popupNewPlace);
}

/* function openImgPopup(evt) {
    popupBigImage.src = evt.target.src;
    popupBigImage.alt = evt.target.alt;
    popupFigcaption.textContent = evt.target.alt;
    togglePopup(popupImg);
} */

function bioFormSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = infoInput.value;
    togglePopup(popupEditProfile);
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

let formValidators = {};

const enableValidation = (params) => {
    const formList = Array.from(document.querySelectorAll(params.formSelector));

    formList.forEach((formElement) => {
        const formValidator = new FormValidator(params, formElement);
        formValidator.enableValidation();
        formValidators[formElement.id] = formValidator;
    });
};

function cardRenderer(cardData, cardSelector) {
    const aCard = new Card(cardData, "#card-template");
    return aCard.getHtmlNode();
};


enableValidation(validationParams);

// Edit bio popup
editFormButton.addEventListener('click', () => showPopupBio(profileTitle.textContent, profileSubtitle.textContent));
popupEditProfile.addEventListener('click', (evt) => closePopupHandler(evt, popupEditProfile));
closeBtn.addEventListener('click', () => togglePopup(popupEditProfile));
formElement.addEventListener('submit', bioFormSubmitHandler);

// Add new place popup
addFormButton.addEventListener('click', () => showPopupNewPlace());
popupNewPlace.addEventListener('click', (evt) => closePopupHandler(evt, popupNewPlace));
closeBtnNewPlace.addEventListener('click', () => togglePopup(popupNewPlace));
formElementNewPlace.addEventListener('submit', newPlaceFormSubmitHandler);

// Image popup
const aPopupImage = new PopupWithImage(popupImgSelector);
/* popupImg.addEventListener('click', () => aPopupImage.close());
closeBtnImg.addEventListener('click', () => aPopupImage.close()); */
aPopupImage.setEventListeners();

const aSection = new Section({items: cards, renderer: cardRenderer}, '.card-container');
aSection.renderAll();


export {
    aPopupImage,
};
