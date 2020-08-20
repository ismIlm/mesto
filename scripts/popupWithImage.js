import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);


        this._popupBigImage = this._popupElement.querySelector(".popup__big-image");
        this._popupFigcaption = this._popupElement.querySelector(".popup__figcaption");
    }

    _closePopupOnDocEscHandler(evt) {
        evt.preventDefault();
        if (evt.key == "Escape") {
            //const popupElement = allPopups.find(popupElement => popupIsOpened(popupElement));
            if (this._popupIsOpened()) {
                this._togglePopup();
            }
        }
    };
    

    _popupIsOpened() {
        return this._popupElement.classList.contains('popup_opened');
    };

    _addPopupEscListener() {
        document.addEventListener('keyup', (evt) => this._closePopupOnDocEscHandler(evt));
    }
    
    _removePopupEscListener() {
        document.removeEventListener('keyup', (evt) => this._closePopupOnDocEscHandler(evt));
    }
        
    
    _togglePopup() {
        if (this._popupIsOpened()) {
            this._removePopupEscListener();
        } else {
            this._addPopupEscListener();
        }
        this._popupElement.classList.toggle('popup_opened');    
    }
    
    open(evt) {
        this._popupBigImage.src = evt.target.src;
        this._popupBigImage.alt = evt.target.alt;
        this._popupFigcaption.textContent = evt.target.alt;
        this._togglePopup();  
    }
    
    close() {
        //if (evt.target.classList.contains('popup')) {
            this._togglePopup();
        //}
    }
    
    setEventListeners() {
        
    }
    
}
