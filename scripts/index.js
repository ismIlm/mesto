import { Card } from './card.js';
import { cards } from './initial-cards.js';
import { 
    popupEditProfile,
    popupNewPlace,
    editFormButton,
    addFormButton,
    closeBtn,
    closeBtnNewPlace,
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
} from './constants.js';

import { FormValidator } from './formValidator.js';
import Section from './section.js';
import PopupWithImage from './popupWithImage.js';
import PopupWithForm from './popupWithForm.js';

const popupImgSelector = ".popup_img";
const popupBioSelector = ".popup";
const popupNewPlaceSelector = ".popup_new_place";

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


function bioFormSubmitHandler(evt, data) {
    evt.preventDefault();
    profileTitle.textContent = data["name-input"];
    profileSubtitle.textContent = data["job-input"];
}

function newPlaceFormSubmitHandler(evt, data) {
    evt.preventDefault();
    const newCardData = {
        name: data["title-input"],
        link: data["link-input"],
    };
    const aCard = new Card(newCardData, "#card-template");
    cardsContainer.prepend(aCard.getHtmlNode());
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
const bioInitialValues = () => {
    return {
        fieldOne: profileTitle.textContent,
        fieldTwo: profileSubtitle.textContent,
    }
};
const aBioPopup = new PopupWithForm(popupBioSelector, bioFormSubmitHandler, bioInitialValues);
aBioPopup.setEventListeners();
editFormButton.addEventListener('click', () => aBioPopup.open());

// Add new place popup
const newPlaceInitialValues = () => {
    return {
        fieldOne: "",
        fieldTwo: "",
    }
};
const aNewPlacePopup = new PopupWithForm(popupNewPlaceSelector, newPlaceFormSubmitHandler, newPlaceInitialValues);
aNewPlacePopup.setEventListeners();
addFormButton.addEventListener('click', () => aNewPlacePopup.open());



// Image popup
const aPopupImage = new PopupWithImage(popupImgSelector);
aPopupImage.setEventListeners();

const aSection = new Section({items: cards, renderer: cardRenderer}, '.card-container');
aSection.renderAll();


export {
    aPopupImage,
    formValidators,
};
