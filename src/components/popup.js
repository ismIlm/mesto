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
        if (evt.key === "Escape") {
            //const popupElement = allPopups.find(popupElement => popupIsOpened(popupElement));
            if (this._popupIsOpened()) {
                this._togglePopupClass();
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
        this._removeOnOpenListeners();
        this._togglePopupClass();
    }

    _addOverlayListener() {
        this._popupElement.addEventListener('click', evt => this._handleOverlayClose(evt));
    }

    _removeOverlayListener() {
        this._popupElement.removeEventListener('click', evt => this._handleOverlayClose(evt));
    }

    _addOnOpenListeners() {
        this._addPopupEscListener();
        this._addOverlayListener();
    }

    _removeOnOpenListeners() {
        this._removePopupEscListener();
        this._removeOverlayListener();
    }

    _togglePopupClass() {
        /* if (this._popupIsOpened()) {
            this._removePopupEscListener();
            this._removeOverlayListener();
        } else {
            this._addPopupEscListener();
            this._addOverlayListener();
        } */
        this._popupElement.classList.toggle('popup_opened');
    }

    open() {
        this._addOnOpenListeners();
        this._togglePopupClass();
    }

    close(evt) {
        console.log('evt.target=', evt.target);

        this._removeOnOpenListeners();
        this._togglePopupClass();
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', (evt) => this.close(evt));
    }
}