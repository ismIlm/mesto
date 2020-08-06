import { errorElementClassSuffix, 
    validationParams 
} from './Constants.js';

class FormValidator {
    constructor(params, formElement) {
        this._params = params;
        this._form = formElement;
    }

    _showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorTextClass) {
        const errorElement = this._form.querySelector(`#${inputElement.id}${errorElementClassSuffix}`);
        errorElement.classList.add(errorTextClass);
        errorElement.textContent = errorMessage;
        inputElement.classList.add(inputErrorClass);
    }

    _hideInputError(formElement, inputElement, inputErrorClass, errorTextClass) {
        const errorElement = this._form.querySelector(`#${inputElement.id}${errorElementClassSuffix}`);
        errorElement.classList.remove(errorTextClass);
        errorElement.textContent = '';
        inputElement.classList.remove(inputErrorClass);
    }

    _isValid(formElement, inputElement, inputErrorClass, errorTextClass) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorTextClass);
        } else {
            this._hideInputError(formElement, inputElement, inputErrorClass, errorTextClass);
        }
    }

    _hasInvalidInput (inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(inputList, buttonElement, btnInactiveClass) {

        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(btnInactiveClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(btnInactiveClass);
            buttonElement.disabled = false;
        } 
    }

    _toggleButtonStateWithForm(formElement, buttonElement) {
        const inputList = Array.from(this._form.querySelectorAll(validationParams.inputSelector));
        this._toggleButtonState(inputList, buttonElement, validationParams.inactiveButtonClass);
    }

    _setEventListeners(formElement, params) {
        const inputList = Array.from(this._form.querySelectorAll(params.inputSelector));
        const buttonElement = this._form.querySelector(params.submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement, params.inactiveButtonClass);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(formElement, inputElement, params.inputErrorClass, params.errorClass);
                this._toggleButtonState(inputList, buttonElement, params.inactiveButtonClass);
            });
        });
    }

    _resetValidationErrors(formElement, params) {
        const inputList = Array.from(this._form.querySelectorAll(params.inputSelector));
        const buttonElement = formElement.querySelector(params.submitButtonSelector);
    
        inputList.forEach((inputElement) => {
            this._hideInputError(this._form, inputElement, params.inputErrorClass, params.errorClass);
            this._toggleButtonState(inputList, buttonElement, params.inactiveButtonClass);
        });
    }
    
    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(this._form, this._params);
    }
}

export { FormValidator };