const prInfo = document.querySelector('.profile__info'); //профиль
const prTitle = document.querySelector('.profile__title'); // имя профиля
const prSubtitle = document.querySelector('.profile__subtitle'); // род занятий
const addButton = document.querySelector('.profile__add-button'); // кнопка профиля - добавить
const editBtn = prInfo.querySelector('.profile__edit'); // открыть редактирование профиля
const popup = document.querySelector('.popup'); //попап редактирования профиля
const closeBtn = popup.querySelector('.popup__btn-close'); // закрыть редактирование профиля
const saveBtn = popup.querySelector('.popup__btn-save'); // сохранить редактирование профиля
const formElement = popup.querySelector('.popup__container'); //контейнер попапа для редактирования профиля
const nameInput = popup.querySelector('.popup__text_type_name'); //попап редактирование профиля - новое имя
const jobInput = popup.querySelector('.popup__text_type_job'); // попап редактирование профиля - новый род занятий

const elements = document.querySelector('.elements'); //карточки
const popupNewPlace = document.querySelector('.popup_new-place'); // попап "новое место"
const formElementNewPlace = document.querySelector('.popup__edit-form_new-place'); //форма попапа "новое место"
const closeButtonNewPlace = document.querySelector('.popup__btn-close_new-place'); // закрыть попап "Новое место"
const placeInput = document.querySelector('.popup__text_type_new-place_name'); //название новой карточки
const linkInput = document.querySelector('.popup__input_new-place_link'); // ссылка новой карточки
const addButtonNewPlace = prInfo.querySelector('.profile__add-button'); //кнопка добавления карточек
/*const saveBtnNewPlace = popup.querySelector('.popup__btn-save????'); // сохранить добавление карточек */


// попап Изменение данных профиля

function showPopup() { //1.сделать попап видимым

    popup.classList.toggle('popup_opened');// добавляем попапу класс "открыть попап"
    
    nameInput.value = prTitle.textContent; // получить данные из поля ввода - имя профиля

    jobInput.value = prSubtitle.textContent; // полцчить данные из поля ввода - род занятий
}

function closePopup() { // 2.закрыть попап
    popup.classList.remove('popup_opened'); // удаляем класс "попап открыть" 
}

function formSubmitHandler(evt) { // 3. инициируем отправку формы
    evt.preventDefault(); // отменяем переход по ссылке ???
 
    prTitle.textContent = nameInput.value; //вывести текстовое содержимое из поля ввода  - Имя профиля

    prSubtitle.textContent = jobInput.value; //вывести текстовое содержимое из поля ввода  - род занятий профиля
   
    closePopup(); // закрыть попап
}
formElement.addEventListener('submit', formSubmitHandler); //зачем?

editBtn.addEventListener('click', showPopup); //зачем?

closeBtn.addEventListener('click', closePopup); //зачем?


//попап Добавление карточек

function showPopupNewPlace() { //1.сделать попап видимым

    popupNewPlace.classList.toggle('popupNewPlace_opened');// добавляем попапу класс "открыть попап"
    
    placeInput.value = prTitle.textContent; // можно менять так?

    linkInput.value = prSubtitle.textContent; // можно менять так?

    function formSubmitHandler(evt) { // 3. инициируем отправку формы
        evt.preventDefault(); // отменяем переход по ссылке ???
     
        prTitle.textContent = placeInput.value; //вывести текстовое содержимое из поля ввода 
    
        prSubtitle.textContent = linkInput.value; //вывести текстовое содержимое из поля ввода 
       
        closePopupNewPlace(); // закрыть попап
    }
    formElementNewPlace.addEventListener('submit', formSubmitHandler); 
    
    addButtonNewPlace.addEventListener('click', showPopupNewPlace); 
    
    closeBtn.addEventListener('click', closePopupNewPlace);
}

const initialCards = [ // где это вставить? и что дальше?
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


/*const popupZoom = document.querySelector('.popup_zoom');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const closeButtonZoom = document.querySelector('.popup__close-button_zoom');*/