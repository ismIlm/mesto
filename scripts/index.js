import { Card } from './card.js';
import { cards } from './initial-cards.js';
import { popup } from './constants.js';
import {
    bioFormSubmitHandler,
    newPlaceFormSubmitHandler,
} from './utils.js';

const profileInfo = document.querySelector('.profile__info');
const editFormButton = profileInfo.querySelector('.profile__edit');
//const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector('.popup__btn-close');
const formElement = popup.querySelector('.popup__container');
const bioPopupBtn = popup.querySelector('.popup__btn-save');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = popup.querySelector('.popup__text_type_name');
const infoInput = popup.querySelector('.popup__text_type_job');
const addFormButton = document.querySelector('.profile__add-button');


const popupNewPlace = document.querySelector('.popup_new_place');
const closeBtnNewPlace = popupNewPlace.querySelector('.popup__btn-close');
const formElementNewPlace = popupNewPlace.querySelector('.popup__container');
const nameInputNewPlace = popupNewPlace.querySelector('.popup__text_type_name');
const lincInputNewPlace = popupNewPlace.querySelector('.popup__text_type_job');

const popupImg = document.querySelector(".popup_img");
const closeBtnImg = popupImg.querySelector(".popup__btn-close");
const popupBigImage = document.querySelector(".popup__big-image");
const popupFigcaption = document.querySelector(".popup__figcaption");
const cardsContainer = document.querySelector('.card-container');
const cardTemplate = document.querySelector('#card-template').content;

const allPopups = Array.from(document.querySelectorAll('.popup'));

function removeCard(event) {
    const cardElement = event.target.closest(".card");
    cardElement.remove();
}

function likeCard(event) {
    event.target.classList.toggle('card__like_active');
}

// function createCard(item) {
//     const cardElement = cardTemplate.cloneNode(true);
//     cardElement.querySelector('.card__title').textContent = item.name;
//     const elementImg = cardElement.querySelector('.card__image');
//     elementImg.src = item.link;
//     elementImg.alt = item.name;
//     cardElement.querySelector('.card__remove-button').addEventListener("click", removeCard);
//     cardElement.querySelector('.card__like').addEventListener("click", likeCard);
//     elementImg.addEventListener("click", openImgPopup);
//     return cardElement;
// }

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
