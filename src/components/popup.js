export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`${popupSelector}`);
        this._popupCloseButton = this._popupElement.querySelector('.popup__btn-close');
    }

    _popupIsOpened() {
        return this._popupElement.classList.contains('popup_opened');
    }

    _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.key == "Escape") {
            //const popupElement = allPopups.find(popupElement => popupIsOpened(popupElement));
            if (this._popupIsOpened()) {
                this._togglePopup();
            }
        }
    }

    _addPopupEscListener() {
        document.addEventListener('keyup', (evt) => this._handleEscClose(evt));
    }

    _removePopupEscListener() {
        document.removeEventListener('keyup', (evt) => this._handleEscClose(evt));
    }

    _handleOverlayClose(evt) {
        console.log("_handleOverlayClose", evt, this._popupElement);
        if (evt.target !== this._popupElement) { return }
        this._togglePopup();
    }

    _addOverlayListener() {
        this._popupElement.addEventListener('click', evt => this._handleOverlayClose(evt));
    }

    _removeOverlayListener() {
        this._popupElement.removeEventListener('click', evt => this._handleOverlayClose(evt));
    }

    _togglePopup() {
        if (this._popupIsOpened()) {
            this._removePopupEscListener();
            this._removeOverlayListener();
        } else {
            this._addPopupEscListener();
            this._addOverlayListener();
        }
        this._popupElement.classList.toggle('popup_opened');
    }

    open() {
        this._togglePopup();

        /* this._togglePopup();
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

    /* _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.key === 'Escape') {
            this.close();
        }
    } */

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', (evt) => this.close(evt));
    }
}