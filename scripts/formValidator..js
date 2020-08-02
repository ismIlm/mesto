class FormValidator {
    constructor(config, form) {
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._inputErrorSelector = config.inputErrorSelector;
      this._errorClass = config.errorClass;
      this._formSelector = config.formSelector;
      this._form = form;
    }
  
    // Добавляем класс ошибки элементу input
    _showInputError() {
      const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }
  
    // Удаляем класс ошибки элементу input
    _hideInputError() {
      const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = null;
    }
  
    // Удаляем ошибки input при повторном открытии
    hideInputErrors() {
      const allErroredInputs = this._form.querySelectorAll(
        this._inputErrorSelector
      );
  
      allErroredInputs.forEach((item) =>
        this._hideInputError(this._form, item, this._сonfig)
      );
    }
  
    // Проверка ввода на валидность
    _checkInputValidity() {
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
  
    setButtonInactive() {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    }
  
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
   


      

      export {FormValidator}

class FormValidator {
  constructor (validationObject, form) {
    this._inputSelector = validationObject.inputSelector
    this._inactiveButtonClass = validationObject.inactiveButtonClass
    this._submitButtonSelector = validationObject.submitButtonSelector
    this.inputErrorClass = validationObject.inputErrorClass
    this._errorClass = validationObject.errorClass
    this._form = form
  }

//метод добавляет класс ошибки в поле
_showError (input, errorMessage) {
  const errorElement = this._form.querySelector(`#${input.id}-error`)
  input.classList.add(this._inputErrorClass)
  errorElement.classList.add(this._errorClass)
  errorElement.textContent = errorMessage
}

//метод убирает класс ошибки из поля
_hideError (input){
  const errorElement = this._form.querySelector(`#${input.id}-error`)
  input.classList.remove(this._inputErrorClass)
  errorElement.classList.remove (this._errorClass)
  errorElement.textContent = '';
 }

 //метод меняет цвет и активность кнопки в зависимости от валидности полей
_toggleButtonState () {
  const submitButtonActive = this._form.querySelector(this._submitButtonSelector)
  if (_hasInvalidInput(this._inputList)) {
    submitButtonActive.classList.add(this._inactiveButtonClass)
    submitButtonActive.disabled = true
  } else {
    submitButtonActive.classList.remove(this._inactiveButtonClass)
    submitButtonActive.disabled = false
  }
}

//метод проверяет есть ли хотя бы одно невалидное поле
_hasInvalidInput () {
  return this._inputList.some((input) => {
  return !input.validity.valid;
  })
}

//метод проверяет поля на валидность
_checkInputValidity (input) {
  const inputIsValid = input.validity.valid
 if (inputIsValid) {
   this._hideError(input)
 } else {
   const errorMessage = input.validationMessage
   this._showError(input, errorMessage)
 }
}

//метод наложения обработчиков на поля форм
_setEventListeners () {
  this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
  this._toggleButtonState()
  this._inputList.forEach(input => {
    input.addEventListener('input', function () {
      this._checkInputValidity(input)
      this._toggleButtonState()
    })
  })
}

//метод запукает процесс валидации
enableValidation () {
    this._form.addEventListener('submit', function (evt){
      evt.preventDefault()
    this._setEventListeners()
  })
}

}
