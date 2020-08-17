export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`${popupSelector}`);
        //this._popupEscButton = this._popupElement.querySelector('.popup__btn-close');
    }

    /* _togglePopup() {
        this._popupElement.classList.toggle('popup_opened');
    } */

    open() {
/*         this._togglePopup();
        this._popupElement.addEventListener('keyup', this._handleEscClose);
        this._popupEscButton.addEventListener('click', this.close); */
    }

    close() {
        /* this._togglePopup();
        this._popupElement.removeEventListener('keyup', this._handleEscClose);
        this._popupEscButton.removeEventListener('click', this.close); */
    }

    /* _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.key === 'Escape') {
            this.close();
        } 
    } */

    /* _handleOverlayClose(evt) {
        if (evt.target !== this._popupElement) {return}
        this.close();
    } */

    /* setEventListeners() {
        this._popupElement.addEventListener('click', this._handleOverlayClose);
    } */
}