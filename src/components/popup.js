export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(`${popupSelector}`);
        this._popupCloseButton = this._popupElement.querySelector('.popup__btn-close');

        this._overlayListener = this._handleOverlayClose.bind(this);
        this._escListener = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.key === "Escape") {
            this.close();
        }
    }

    _addPopupEscListener() {
        document.addEventListener('keyup', this._escListener);
    }

    _removePopupEscListener() {
        document.removeEventListener('keyup', this._escListener);
    }

    _handleOverlayClose(evt) {
        console.log("_handleOverlayClose", evt, this._popupElement, `isequal=${evt.target == this._popupElement}`);
        if (evt.target == this._popupElement) {
            this.close();
        }
    }

    _addOverlayListener() {
        this._popupElement.addEventListener('click', this._overlayListener);
    }

    _removeOverlayListener() {
        this._popupElement.removeEventListener('click', this._overlayListener);
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
        this._popupElement.classList.toggle('popup_opened');
    }

    open() {
        this._addOnOpenListeners();
        this._togglePopupClass();
    }

    close() {
        this._removeOnOpenListeners();
        this._togglePopupClass();
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', (evt) => this.close(evt));
    }
}