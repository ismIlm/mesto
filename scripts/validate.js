import { FormValidator } from './formValidator.js';
import { validationParams } from './constants.js';

let formValidators = {};

const enableValidation = (params) => {
    const formList = Array.from(document.querySelectorAll(params.formSelector));

    formList.forEach((formElement) => {
        const formValidator = new FormValidator(params, formElement);
        formValidator.enableValidation();
        formValidators[formElement.id] = formValidator;
    });
};


enableValidation(validationParams);
    
export {
    formValidators,
};