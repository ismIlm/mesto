import Popup from './popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector, {submitForm}) {
      super(popupSelector);
      this._submitForm = submitForm;
    }
}
