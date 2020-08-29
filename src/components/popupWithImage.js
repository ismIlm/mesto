import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._popupBigImage = this._popupElement.querySelector(".popup__big-image");
        this._popupFigcaption = this._popupElement.querySelector(".popup__figcaption");
    }
    
    open(cardName, cardLink) {
        this._popupBigImage.src = cardLink;
        this._popupBigImage.alt = cardName;
        this._popupFigcaption.textContent = cardName;
        super.open();
    }
}
