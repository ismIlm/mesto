const showInputError = (formElement, inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add('popup__text_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__text-error_active');
};

const hideInputError = (formElement, inputElement) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove('popup__text_type_error');
    errorElement.classList.remove('popup__text-error_active');
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        // showInputError теперь получает параметром форму, в которой
        // находится проверяемое поле, и само это поле
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        // hideInputError теперь получает параметром форму, в которой
        // находится проверяемое поле, и само это поле
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
        // Если поле не валидно, колбэк вернёт true
        // Обход массива прекратится и вся фунцкция
        // hasInvalidInput вернёт true

        return !inputElement.validity.valid;
    })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
        // сделай кнопку неактивной
        buttonElement.classList.add('popup__form-submit_inactive');
        buttonElement.disabled = true;
    } else {
        // иначе сделай кнопку активной
        buttonElement.classList.remove('popup__form-submit_inactive');
        buttonElement.disabled = false;
    }
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonStateWithForm = (formElement, buttonElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll('.popup__text'));

    toggleButtonState(inputList, buttonElement);
};


const setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector('button[type="submit"]');

    toggleButtonState(inputList, buttonElement);

    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
        // каждому полю добавим обработчик события input
        inputElement.addEventListener('input', () => {
            // Внутри колбэка вызовем isValid,
            // передав ей форму и проверяемый элемент
            isValid(formElement, inputElement);

            // Вызовем toggleButtonState и передадим ей массив полей и кнопку
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__container'));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement);
    });
};

enableValidation();