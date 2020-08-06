import { openImgPopup } from "./index.js";

export class Card {
    
    constructor (rawCardData, templateSelector) {
        this._name = rawCardData.name;
        this._link = rawCardData.link;
        this._cardTemplate = document.querySelector(templateSelector).content;

        this._createCard();
    }

    _createCard() {
        this._cardElement = this._cardTemplate.cloneNode(true);
        this._cardElement.querySelector('.card__title').textContent = this._name;
        const elementImg = this._cardElement.querySelector('.card__image');
        elementImg.src = this._link;
        elementImg.alt = this._name;

        this._cardElement.querySelector('.card__remove-button').addEventListener("click", this._removeCard);
        this._cardElement.querySelector('.card__like').addEventListener("click", this._likeCard);
        elementImg.addEventListener("click", openImgPopup);
    }


    getHtmlNode() {
        return this._cardElement;
    }

    
    _removeCard(event) {
        const cardElement = event.target.closest(".card");
        cardElement.remove();
    }
    
    _likeCard(event) {
        event.target.classList.toggle('card__like_active');
    }
}