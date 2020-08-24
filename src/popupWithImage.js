import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._popupBigImage = this._popupElement.querySelector(".popup__big-image");
        this._popupFigcaption = this._popupElement.querySelector(".popup__figcaption");
    }
    
    open(evt) {
        this._popupBigImage.src = evt.target.src;
        this._popupBigImage.alt = evt.target.alt;
        this._popupFigcaption.textContent = evt.target.alt;
        super.open();
    }
}
