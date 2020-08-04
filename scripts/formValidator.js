class FormValidator {
    constructor(config, formElement) {
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._inputErrorSelector = config.inputErrorSelector;
        //this._errorClass = config.errorClass;
        //this._formSelector = config.formSelector;
        this._form = formElement;
    }

}

/*
// const errorElementClassSuffix = '-error';

// Добавляем класс ошибки элементу input
_showInputError() {
  const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorTextClass);
}
 
// Удаляем класс ошибки элементу input
_hideInputError() {
  const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorTextClass);
  errorElement.textContent = '';
}
 
// Удаляем ошибки input при повторном открытии
// hideInputErrors() {
//   const allErroredInputs = this._form.querySelectorAll(
//     this._inputErrorSelector
//   );
 
//   allErroredInputs.forEach((item) =>
//     this._hideInputError(this._form, item, this._сonfig)
//   );
// }
 
// Проверка ввода на валидность
_isValidit() {
  if (!inputElement.validity.valid) {
    this._showInputError(
      this._form,
      inputElement,
      inputElement.validationMessage,
      this._config
    );
  } else {
    this._hideInputError(this._form, inputElement, this._сonfig);
  }
}
 
_hasInvalidInput() {
  return inputList.some((inputElement) => {
    // Если поле не валидно, вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  });
}
 
//  Изменение состояниея кнопки в зависимости от валидности
_toggleButtonState() {
  if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.disabled = false;
  }
}
 
// setButtonInactive() {
//   buttonElement.classList.add(this._inactiveButtonClass);
//   buttonElement.disabled = true;
// }
 
// Слушатели для формы
_setEventListeners() {
  const inputList = Array.from(
    this._form.querySelectorAll(this._inputSelector)
  );
  const buttonElement = this._form.querySelector(this._submitButtonSelector);
 
  // проверка состояния кнопки в самом начале
  this._toggleButtonState(inputList, buttonElement, this._сonfig);
 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(this._form, inputElement, this._сonfig);
      this._toggleButtonState(this._inputList, buttonElement, this._сonfig);
    });
  });
 
*/
export { FormValidator };