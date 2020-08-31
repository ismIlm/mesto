import Popup from './popup.js';
import { formValidators } from '../pages/index.js';
import { validationParams } from '../utils/constants.js';

const fieldOneSelector = ".popup__text_type_name";
const fieldTwoSelector = ".popup__text_type_job";
const formSelector = ".popup__container";
const formSubmitButtonSelector = ".popup__btn-save";
const formInputSelector = ".popup__text";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formCallback, initialValuesCallback) {
        super(popupSelector);
        this._formCallback = formCallback;
        this._initialValuesCallback = initialValuesCallback;

        this.formElement = this._popupElement.querySelector(formSelector);
        this.formButton = this._popupElement.querySelector(formSubmitButtonSelector);
        this._fieldOneElement = this._popupElement.querySelector(fieldOneSelector);
        this._fieldTwoElement = this._popupElement.querySelector(fieldTwoSelector);
    }

    open() {
        this._initialValuesCallback();
        super.open();
    }

    _getInputValues() {
        this._inputList = Array.from(this._popupElement.querySelectorAll(formInputSelector));
        this._formValue = {};
        this._inputList.forEach(item => {
            this._formValue[item.id] = item.value;
        });
        return this._formValue
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const data = this._getInputValues();
            console.log(data);
            this._formCallback(data);
            this.close(evt);
        });
    }

    close(evt) {
        super.close(evt);
        this.formElement.reset();
    }
}