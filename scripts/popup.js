export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`${popupSelector}`);
        this._popupCloseButton = this._popupElement.querySelector('.popup__btn-close'); 
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

    open() {
/*         this._togglePopup();
        this._popupElement.addEventListener('keyup', this._handleEscClose);
        this._popupEscButton.addEventListener('click', this.close); */
    }

    close(evt) {
        console.log('evt.target=', evt.target);
        //if (evt.target.classList.contains('popup')) {
            this._togglePopup();
        //}

        /* this._togglePopup();
        this._popupElement.removeEventListener('keyup', this._handleEscClose);
        this._popupEscButton.removeEventListener('click', this.close); */
    }

    _handleEscClose(evt) {
        /* 
        evt.preventDefault();
        if (evt.key === 'Escape') {
            this.close();
        }  */
    }

    /* _handleOverlayClose(evt) {
        if (evt.target !== this._popupElement) {return}
        this.close();
    } */

    setEventListeners() {
       this._popupCloseButton.addEventListener('click', (evt) => this.close(evt));
    } 
}