const validationParams = {
    formSelector: '.popup__container',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__form-submit_inactive',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__text-error_active'
};

const errorElementClassSuffix = '-error';

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorTextClass) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`#${inputElement.id}${errorElementClassSuffix}`);
    // Остальной код такой же
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorTextClass);
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorTextClass) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`#${inputElement.id}${errorElementClassSuffix}`);
    // Остальной код такой же
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorTextClass);
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement, inputErrorClass, errorTextClass) => {
    if (!inputElement.validity.valid) {
        // showInputError теперь получает параметром форму, в которой
        // находится проверяемое поле, и само это поле
        showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorTextClass);
    } else {
        // hideInputError теперь получает параметром форму, в которой
        // находится проверяемое поле, и само это поле
        hideInputError(formElement, inputElement, inputErrorClass, errorTextClass);
    }
};

const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
        // Если поле не валидно, колбэк вернёт true
        // Обход массива прекратится и вся фунцкция
        // hasInvalidInput вернёт true

        return !inputElement.validity.valid;
    });
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement, btnInactiveClass) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
        // сделай кнопку неактивной
        buttonElement.classList.add(btnInactiveClass);
        buttonElement.disabled = true;
    } else {
        // иначе сделай кнопку активной
        buttonElement.classList.remove(btnInactiveClass);
        buttonElement.disabled = false;
    }
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonStateWithForm = (formElement, buttonElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(validationParams.inputSelector));

    toggleButtonState(inputList, buttonElement, validationParams.inactiveButtonClass);
};


const setEventListeners = (formElement, params) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector(params.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, params.inactiveButtonClass);

    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
        // каждому полю добавим обработчик события input
        inputElement.addEventListener('input', () => {
            // Внутри колбэка вызовем isValid,
            // передав ей форму и проверяемый элемент
            isValid(formElement, inputElement, params.inputErrorClass, params.errorClass);

            // Вызовем toggleButtonState и передадим ей массив полей и кнопку
            toggleButtonState(inputList, buttonElement, params.inactiveButtonClass);
        });
    });
};

const enableValidation = (params) => {
    const formList = Array.from(document.querySelectorAll(params.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement, params);
    });
};

const resetValidationErrors = (formElement, params) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const buttonElement = formElement.querySelector(params.submitButtonSelector);

    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement, params.inputErrorClass, params.errorClass);
        toggleButtonState(inputList, buttonElement, params.inactiveButtonClass);
    });
};

enableValidation(validationParams);
    
    
export { resetValidationErrors, validationParams, toggleButtonStateWithForm, };