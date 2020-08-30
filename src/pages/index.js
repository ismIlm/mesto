import './index.css'; // добавьте импорт главного файла стилей

import { Card } from '../components/card.js';
import { cards } from '../utils/initial-cards.js';
import { 
    editFormButton,
    addFormButton,
    cardsContainer,
    profileTitle,
    profileSubtitle,
    validationParams,
} from '../utils/constants.js';

import { FormValidator } from '../components/formValidator.js';
import Section from '../components/section.js';
import PopupWithImage from '../components/popupWithImage.js';
import PopupWithForm from '../components/popupWithForm.js';
import UserInfo from '../components/userinfo.js';

const popupImgSelector = ".popup_img";
const popupBioSelector = ".popup";
const popupNewPlaceSelector = ".popup_new_place";
const nameSelector = ".profile__title";
const jobSelector = ".profile__subtitle";

const aUserInfo = new UserInfo({ nameSelector, jobSelector});

const aPopupImage = new PopupWithImage(popupImgSelector);

function bioFormSubmitHandler(evt, data) {
    evt.preventDefault();
    const name = data["name-input"];
    const job = data["job-input"];
    aUserInfo.setUserInfo({ name, job });
}

const cardClickCallback = (name, link) => aPopupImage.open(name, link);

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
    const aCard = new Card(cardData, "#card-template", cardClickCallback);
    return aCard.getHtmlNode();
}


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

const aSection = new Section({items: cards, renderer: cardRenderer}, '.card-container');
aSection.renderAll();

function newPlaceFormSubmitHandler(evt, data) {
    evt.preventDefault();
    const newCardData = {
        name: data["title-input"],
        link: data["link-input"],
    };
    const aCard = new Card(newCardData, "#card-template", cardClickCallback);
    aSection.addItem(aCard.getHtmlNode());
    //cardsContainer.prepend(aCard.getHtmlNode());
}

const aNewPlacePopup = new PopupWithForm(popupNewPlaceSelector, newPlaceFormSubmitHandler, newPlaceInitialValues);
aNewPlacePopup.setEventListeners();
addFormButton.addEventListener('click', () => aNewPlacePopup.open());

// Image popup
aPopupImage.setEventListeners();

export {
    aPopupImage,
    formValidators,
};
