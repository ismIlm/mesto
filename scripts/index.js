import { Card } from './card.js';
import { cards } from './initial-cards.js';
import { 
    editFormButton,
    addFormButton,
    cardsContainer,
    profileTitle,
    profileSubtitle,
    validationParams,
} from './constants.js';

import { FormValidator } from './formValidator.js';
import Section from './section.js';
import PopupWithImage from './popupWithImage.js';
import PopupWithForm from './popupWithForm.js';
import UserInfo from './userinfo.js';

const popupImgSelector = ".popup_img";
const popupBioSelector = ".popup";
const popupNewPlaceSelector = ".popup_new_place";
const nameSelector = ".profile__title";
const jobSelector = ".profile__subtitle";

const aUserInfo = new UserInfo({ nameSelector, jobSelector});

function bioFormSubmitHandler(evt, data) {
    evt.preventDefault();
    const name = data["name-input"];
    const job = data["job-input"];
    aUserInfo.setUserInfo({ name, job });
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
    const { name, job } = aUserInfo.getUserInfo();
    return {
        fieldOne: name,
        fieldTwo: job,
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
